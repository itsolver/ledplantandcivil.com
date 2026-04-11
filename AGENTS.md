# AGENTS.md

## agent-browser

- Before browser inspection or testing, always run:
  `agent-browser close`
- Start browser work with the local Chrome binary and testing profile:
  `agent-browser --executable-path "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --profile testing --headed open http://127.0.0.1:8000/index.html`
- Reuse that same `agent-browser` session for all subsequent commands.
- Do not start separate named sessions or rely on the bundled Chrome-for-Testing binary for this project.

## deployment

- While the project remains in preview mode, always publish site updates to Surge.
- Use the current preview domain:
  `ledplantandcivil-preview-20260410-1.surge.sh`
- Do not switch deployment instructions to the custom production domain until David at LED has approved that change.
