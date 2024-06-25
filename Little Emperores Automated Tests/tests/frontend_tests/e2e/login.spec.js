// @ts-check
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../pages/LoginPage");

let loginPage;

test.beforeEach(({ page }) => {
  loginPage = new LoginPage(page);
});

test("Visit login page", async ({ page }) => {
  await loginPage.visit();
});
test("Login with correct credentials ", async ({ page }) => {
  await loginPage.visit();
  await loginPage.submitCredentials(
    "victorfonsecasp@gmail.com",
    "victorEmperors2024"
  );
});
test("Login with invalid credentials ", async ({ page }) => {
  await loginPage.visit();
  await loginPage.submitInvalidCredentials(
    "victorfonsecasp@gmail.com",
    "victorEmperors2023"
  );
});

