const NAV_ITEMS = [
  { key: "services", href: "services.html", label: "Services" },
  { key: "projects", href: "projects.html", label: "Projects" },
  { key: "about", href: "about-us.html", label: "About Us" },
  { key: "careers", href: "careers.html", label: "Careers" }
];

function renderHeader(activePage) {
  const header = document.querySelector("[data-site-header]");
  if (!header) return;

  const navMarkup = NAV_ITEMS.map(
    ({ key, href, label }) =>
      `<a href="${href}" class="${activePage === key ? "is-current" : ""}">${label}</a>`
  ).join("");

  header.innerHTML = `
    <header class="site-header">
      <div class="container site-header__inner">
        <a class="brand" href="index.html" aria-label="LED Plant and Civil home">
          <img src="assets/media/led-logo-382px.webp" alt="LED Plant and Civil">
        </a>
        <div class="site-header__nav-group" data-nav-group>
          <nav class="site-nav" id="primary-nav" aria-label="Primary">${navMarkup}</nav>
          <a class="button button--primary header-cta" href="contact.html">Contact Us</a>
        </div>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav" aria-label="Toggle navigation">
          <span class="sr-only">Toggle navigation</span>
          <span class="menu-toggle__icon" aria-hidden="true">
            <span class="menu-toggle__line"></span>
            <span class="menu-toggle__line"></span>
            <span class="menu-toggle__line"></span>
          </span>
        </button>
      </div>
    </header>
  `;

  if (activePage === "home") {
    header.style.position = "absolute";
    header.style.top = "0";
    header.style.left = "0";
    header.style.right = "0";
    header.style.zIndex = "100";
  } else {
    header.style.position = "";
    header.style.top = "";
    header.style.left = "";
    header.style.right = "";
    header.style.zIndex = "";
  }

  const toggle = header.querySelector(".menu-toggle");
  const navGroup = header.querySelector("[data-nav-group]");
  const nav = header.querySelector(".site-nav");

  if (!toggle || !nav || !navGroup) return;

  const closeMenu = () => {
    navGroup.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = navGroup.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navGroup.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!navGroup.classList.contains("is-open")) return;
    if (header.contains(event.target)) return;
    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) return;

  const year = new Date().getFullYear();

  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="site-footer__panel">
          <div class="site-footer__grid">
            <div class="site-footer__brand stack-md">
              <img src="assets/media/led-logo-382px.webp" alt="LED Plant and Civil">
              <p>Dependable civil works, underground service installations and plant hire solutions across South East Queensland.</p>
            </div>
            <div>
              <h3>Contact</h3>
              <ul>
                <li><a href="mailto:david@ledplantandcivil.com">david@ledplantandcivil.com</a></li>
                <li><a href="contact.html">Contact form</a></li>
                <li><a href="assets/docs/capability-statement.pdf" download>Capability Statement</a></li>
              </ul>
            </div>
            <div>
              <h3>Service Area</h3>
              <ul>
                <li>South East QLD</li>
                <li>Coolangatta to Harvey Bay</li>
                <li>East Coast to Toowoomba</li>
              </ul>
            </div>
            <div>
              <h3>Explore</h3>
              <ul>
                <li><a href="services.html">Services</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="careers.html">Careers</a></li>
              </ul>
            </div>
          </div>
          <div class="site-footer__bottom">
            <span>&copy; <span data-current-year>${year}</span> LED Plant and Civil. All rights reserved.</span>
            <div class="utility-links">
              <a href="index.html">Home</a>
              <a href="contact.html">Contact</a>
              <a href="#top">Back to top</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function wireMailtoForm() {
  const form = document.querySelector("[data-mailto-form]");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const firstName = (data.get("first_name") || "").toString().trim();
    const lastName = (data.get("last_name") || "").toString().trim();
    const email = (data.get("email") || "").toString().trim();
    const subject = (data.get("subject") || "").toString().trim() || "Website enquiry";
    const message = (data.get("message") || "").toString().trim();

    const body = [
      `Name: ${firstName} ${lastName}`.trim(),
      `Email: ${email}`,
      "",
      message
    ].join("\n");

    window.location.href = `mailto:david@ledplantandcivil.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

function pickAdaptiveVideoTier() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    return { tier: null, autoplay: false };
  }

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const viewportWidth = Math.max(window.innerWidth || 0, document.documentElement.clientWidth || 0);
  const effectiveType = connection && typeof connection.effectiveType === "string" ? connection.effectiveType : "";

  if (connection && connection.saveData) {
    return { tier: "low", autoplay: true };
  }

  if (effectiveType === "slow-2g" || effectiveType === "2g") {
    return { tier: "low", autoplay: true };
  }

  if (viewportWidth < 480) {
    return { tier: "low", autoplay: true };
  }

  if (effectiveType === "3g" || viewportWidth < 768) {
    return { tier: "medium", autoplay: true };
  }

  if (viewportWidth >= 1900) {
    return { tier: "ultra", autoplay: true };
  }

  return { tier: "high", autoplay: true };
}

function wireAdaptiveHeroVideo() {
  const video = document.querySelector("[data-adaptive-video]");
  if (!video) return;

  const sourceMap = {
    low: { src: video.dataset.srcLow, type: video.dataset.typeLow || "" },
    medium: { src: video.dataset.srcMedium, type: video.dataset.typeMedium || "" },
    high: { src: video.dataset.srcHigh, type: video.dataset.typeHigh || "" },
    ultra: { src: video.dataset.srcUltra, type: video.dataset.typeUltra || "" }
  };

  const fallbackOrder = {
    low: ["low"],
    medium: ["medium", "low"],
    high: ["high", "medium", "low"],
    ultra: ["ultra", "high", "medium", "low"]
  };

  const selection = pickAdaptiveVideoTier();
  if (!selection.autoplay) {
    video.removeAttribute("autoplay");
    return;
  }

  const preferredTiers = fallbackOrder[selection.tier] || fallbackOrder.low;
  const chosenTier = preferredTiers.find((tier) => {
    const candidate = sourceMap[tier];
    if (!candidate || !candidate.src) return false;
    return !candidate.type || !!video.canPlayType(candidate.type);
  });
  const chosen = chosenTier ? sourceMap[chosenTier] : sourceMap.low;

  if (!chosen || !chosen.src) return;

  const existingSource = video.querySelector("source[data-adaptive-source]");
  if (existingSource && existingSource.getAttribute("src") === chosen.src) {
    return;
  }

  if (existingSource) {
    existingSource.remove();
  }

  const source = document.createElement("source");
  source.setAttribute("data-adaptive-source", "true");
  source.src = chosen.src;
  if (chosen.type) {
    source.type = chosen.type;
  }

  video.prepend(source);
  video.dataset.videoTier = chosenTier || selection.tier || "poster";
  video.load();

  const playPromise = video.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const activePage = document.body.dataset.page || "";
  renderHeader(activePage);
  renderFooter();
  wireMailtoForm();
  wireAdaptiveHeroVideo();
});
