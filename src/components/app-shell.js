import { LitElement, html, css } from "lit";

class AppShell extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`Oy, I'm the app shell!`;
  }
}

if (!window.customElements.get("app-shell")) {
  window.customElements.define("app-shell", AppShell);
}
