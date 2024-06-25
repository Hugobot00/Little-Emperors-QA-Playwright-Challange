// @ts-check
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../../pages/LoginPage");
const { AddHotelDashboard } = require("../../pages/HotelDashboard");

let loginPage;
let hotelDashboard;

test.beforeEach(({ page }) => {
    loginPage = new LoginPage(page);
    hotelDashboard = new AddHotelDashboard(page);
  });

  test("Hotel creation on Dashboard ", async ({ page }) => {
    await loginPage.visit();
    await loginPage.submitCredentials(
      "victorfonsecasp@gmail.com",
      "victorEmperors2024"
    );
    await hotelDashboard.addHotelBtn();
    await hotelDashboard.addHotelForm(
      "Automatically generated hotel",
      "Playwright City",
      "Playwright Land",
      "Playwright was here"
    );
  });
  
  test("Search for created Hotel", async ({ page }) => {
    await loginPage.visit();
    await loginPage.submitInvalidCredentials(
      "victorfonsecasp@gmail.com",
      "victorEmperors2024"
    );
    await hotelDashboard.validateHotelName();
  });
  
  test("Edit created hotel", async ({ page }) => {
    await loginPage.visit();
    await loginPage.submitInvalidCredentials(
      "victorfonsecasp@gmail.com",
      "victorEmperors2024"
    );
  
    await hotelDashboard.editHotel();
    await page.waitForTimeout(10000);
    await hotelDashboard.editHotelForm(
      "Edited Hotel Test",
      "Edited City Test",
      "Edited Address Test",
      "Edited Description Test"
    );
  });
  test("Delete created hotel ", async ({ page }) => {
    await loginPage.visit();
    await loginPage.submitCredentials(
      "victorfonsecasp@gmail.com",
      "victorEmperors2024"
    );
    await hotelDashboard.deleteHotel();
  });