import exp from "constants";

const { expect } = require("@playwright/test");

export class AddHotelDashboard {
  constructor(page) {
    this.page = page;
  }

  async addHotelBtn() {
    await this.page.getByRole("button", { name: "Add Hotel" }).click();
  }

  async addHotelForm(hotelName, city, address, description) {
    const addHotelForm = this.page.getByRole("heading", {
      name: "Add New Hotel",
    });
    const ConfirmHotelCreation = this.page
      .locator("form")
      .getByRole("button", { name: "Add Hotel" });
    expect(ConfirmHotelCreation).toBeVisible();
    await expect(addHotelForm).toBeVisible();
    await this.page.getByLabel("Hotel Name").fill(hotelName);
    await this.page.getByLabel("City").fill(city);
    await this.page.locator("#stars").selectOption({ index: 5 });
    await this.page.getByLabel("Address").fill(address);
    await this.page.getByLabel("Description").fill(description);
    await ConfirmHotelCreation.click();
  }

  async validateHotelName() {
    const hotelNameElement = await this.page.getByRole('heading', { name: 'Playwright Hotel Test' });
    await expect(hotelNameElement).toBeVisible();
    const hotelName = await hotelNameElement.textContent();
    if (hotelName !== "Playwright Hotel Test") {
      throw new Error(`The hotel name is not valid. Expected 'Playwright Hotel Test', but found '${hotelName}'.`);
    }
  }

  async editHotel() {
    await this.page.waitForLoadState("networkidle");
    const hotelEditedTestData = this.page.locator('xpath=/html/body/div/div[1]/div/div[2]/div/h2');
    const viewDetailsButton = this.page.locator('div.border:nth-child(2) > div:nth-child(2) > div:nth-child(4) > a:nth-child(1) > button:nth-child(1)');
    await expect(hotelEditedTestData).toBeVisible();
    await expect(viewDetailsButton).toBeVisible();
    await viewDetailsButton.click();
    await this.page.getByRole('button', { name: 'Edit Hotel' }).click();
  }

  async editHotelForm(hotelName, city, address, description) {
    await this.page.waitForLoadState("networkidle");
    const updateHotelFormConfirmation = this.page.locator('button.bg-blue-500:nth-child(6)');
    await expect(updateHotelFormConfirmation).toBeVisible();
    await this.page.getByText('Name', { exact: true }).fill(hotelName);
    await this.page.getByText('City', { exact: true }).fill(city);
    await this.page.locator('#stars').selectOption({ index: 5 });
    await this.page.getByText('Address', { exact: true }).fill(address);
    await this.page.getByText('Description', { exact: true }).fill(description);
    await updateHotelFormConfirmation.click();
  }

  async deleteHotel() {
    const deleteHotelButton = this.page.locator('div:nth-child(4) > .p-4 > div > .bg-red-500')
    await expect(deleteHotelButton).toBeVisible();
    await deleteHotelButton.click();
}
}