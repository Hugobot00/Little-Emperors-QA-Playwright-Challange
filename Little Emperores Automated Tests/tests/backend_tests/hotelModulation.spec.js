import { test, expect } from "@playwright/test";
let authToken = "Bearer 35|vYQMXUynfGmBSy7uhiBsLKHQRbmV0HSTp8IeOYHY1ab6b20d";

test.describe("Authenticated API Tests", () => {
  test.beforeAll(async ({ request }) => {
    await request.post("https://recruitment-api.littleemperors.com/api/login", {
      data: {
        email: "victorfonsecasp@gmail.com",
        password: "victorEmperors2024",
      },
    });
  });
});

test("Check All Hotel list", async ({ request }) => {
  const loginResponse = await request.get(
    "https://recruitment-api.littleemperors.com/api/hotels",
    {
      headers: {
        Authorization: authToken,
      },
    }
  );
  expect(loginResponse.status()).toBe(200);

  const payload = await loginResponse.json();

  console.log(payload);
});

test("Check Hotel by ID", async ({ request }) => {
  const loginResponse = await request.get(
    "https://recruitment-api.littleemperors.com/api/hotels/455",
    {
      headers: {
        Authorization: authToken,
      },
    }
  );
  expect(loginResponse.status()).toBe(200);

  const payload = await loginResponse.json();

  console.log(payload);
});

test("Create Hotel via API", async ({ request }) => {
  const loginResponse = await request.post(
    "https://recruitment-api.littleemperors.com/api/hotels",
    {
      headers: {
        Authorization: authToken,
      },
      data: {
        name: "API - Automated Hotel",
        city: "API - Automated City",
        address: "API - Automated Address",
        stars: 5,
        description: "API - Automated Description",
      },
    }
  );
  expect(loginResponse.status()).toBe(201);

  const payload = await loginResponse.json();

  console.log(payload);
});

test("Delete Hotel by ID", async ({ request }) => {
  const hotelId = "458";
  const response = await request.patch(
    `https://recruitment-api.littleemperors.com/api/hotels/${hotelId}`,
    {
      headers: {
        Authorization: authToken,
      },
    }
  );
  expect(response.status()).toBe(200);

  console.log(`Hotel with ID ${hotelId} deleted successfully.`);
});

test("Retrieve Hotel by ID", async ({ request }) => {
  const hotelId = "458";
  const response = await request.get(
    `https://recruitment-api.littleemperors.com/api/hotels/${hotelId}`,
    {
      headers: {
        Authorization: authToken,
      },
    }
  );
  expect(response.status()).toBe(200);

  const payload = await response.json();
  console.log(payload);
});

test("Update Hotel by ID", async ({ request }) => {
  const hotelId = "521";
  const response = await request.put(
    `https://recruitment-api.littleemperors.com/api/hotels/${hotelId}`,
    {
      headers: {
        Authorization: authToken,
      },
      data: {
        name: "API - Automated Hotel - Updated",
        city: "API - Automated City - Updated",
        address: "API - Automated Address - Updated",
        stars: 5,
        description: "API - Automated Description - Updated",
      },
    }
  );
  expect(response.status()).toBe(200);

  const payload = await response.json();
  console.log(payload);
});
test.describe("Handling edge cases", () => {
  test("Check Hotel by ID - Invalid ID", async ({ request }) => {
    const loginResponse = await request.get(
      "https://recruitment-api.littleemperors.com/api/hotels/9000",
      {
        headers: {
          Authorization: authToken,
        },
      }
    );
    expect(loginResponse.status()).toBe(404);
  });
  test("Create Hotel via API - Invalid Payload", async ({ request }) => {
    const loginResponse = await request.post(
      "https://recruitment-api.littleemperors.com/api/hotels",
      {
        headers: {
          Authorization: authToken,
        },
        data: {
          name: "11 Hotel",
          city: "test city 123",
          address: "",
          stars: 55,
        },
      }
    );
    expect(loginResponse.status()).toBe(200);
  });
  test ("Delete Hotel by ID - Invalid ID", async ({ request }) => {
      const hotelId = "9000";
      const response = await request.patch(
          `https://recruitment-api.littleemperors.com/api/hotels/${hotelId}`,
          {
          headers: {
              Authorization: authToken,
          },
          }
      );
      expect(response.status()).toBe(404);
  });
  test ("Retrieve Hotel by ID - Invalid ID", async ({ request }) => {
      const hotelId = "9000";
      const response = await request.get(
          `https://recruitment-api.littleemperors.com/api/hotels/${hotelId}`,
          {
          headers: {
              Authorization: authToken,
          },
          }
      );
      expect(response.status()).toBe(404);        
  });
  test ("Update Hotel by ID - Invalid ID", async ({ request }) => {
      const hotelId = "9000";
      const response = await request.put(
          `https://recruitment-api.littleemperors.com/api/hotels/${hotelId}`,
          {
          headers: {
              Authorization: authToken,
          },
          data: {
              name: "API - Automated Hotel - Updated",
              city: "API - Automated City - Updated",
              address: "API - Automated Address - Updated",
              stars: 5,
              description: "API - Automated Description - Updated",
          },
          }
      );
      expect(response.status()).toBe(404);
  });


});
