const NAV_ITEMS = [
  { key: "services", href: "services.html", label: "Services" },
  { key: "projects", href: "projects.html", label: "Projects" },
  { key: "about", href: "about-us.html", label: "About Us" },
  { key: "contact", href: "contact.html", label: "Contact" }
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
          <img src="assets/media/logo-text.png" alt="LED Plant and Civil">
        </a>
        <nav class="site-nav" id="primary-nav" aria-label="Primary">${navMarkup}</nav>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav">
          <span class="sr-only">Toggle navigation</span>
          Menu
        </button>
        <a class="button button--primary header-cta" href="contact.html">Contact Us</a>
      </div>
    </header>
  `;

  const toggle = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".site-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
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
              <img src="assets/media/logo-text.png" alt="LED Plant and Civil">
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

document.addEventListener("DOMContentLoaded", () => {
  const activePage = document.body.dataset.page || "";
  renderHeader(activePage);
  renderFooter();
  wireMailtoForm();
});
