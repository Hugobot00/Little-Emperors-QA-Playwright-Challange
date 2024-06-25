const { expect } = require("@playwright/test");
export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto("https://recruitment-web.littleemperors.com/login");
    await expect(this.page).toHaveURL(/.*login.*/);
    await this.page.waitForLoadState("networkidle");
    const loginForm = this.page.getByRole("heading", { name: "Login" });
    await expect(loginForm).toBeVisible();
  }

  async submitCredentials(email, password) {
    await this.page.goto("https://recruitment-web.littleemperors.com/login");
    await expect(this.page).toHaveURL(/.*login.*/);
    await this.page.waitForLoadState("networkidle");
    await this.page.getByLabel("Email").fill(email);
    await this.page.getByLabel("Password").fill(password);
    const loginForm = this.page.getByRole("heading", { name: "Login" });
    await expect(loginForm).toBeVisible();
    await this.page.dispatchEvent('button:has-text("Login")', 'click');
    const hotelsList = this.page.getByRole("heading", { name: "Hotels List" });
    await expect(hotelsList).toBeVisible();
  }

  async submitInvalidCredentials(email, password) {
    await this.page.goto("https://recruitment-web.littleemperors.com/login");
    await expect(this.page).toHaveURL(/.*login.*/);
    await this.page.waitForLoadState("networkidle");
    await this.page.getByLabel("Email").fill(email);
    await this.page.getByLabel("Password").fill(password);
    const loginForm = this.page.getByRole("heading", { name: "Login" });
    await expect(loginForm).toBeVisible();
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
