// @ts-check
const { test, expect } = require("@playwright/test");

test('Authentication with valid access', async ({ request }) => {
        
        const loginResponse = await request.post('https://recruitment-api.littleemperors.com/api/login', {
            data: {
                email: 'victorfonsecasp@gmail.com',
                password: 'victorEmperors2024', 
                token: 'Bearer 35|vYQMXUynfGmBSy7uhiBsLKHQRbmV0HSTp8IeOYHY1ab6b20d'
            }
        });
        expect(loginResponse.status()).toBe(200);

      
});


test('Authentication with invalid access', async ({ request }) => {
        
    const loginResponse = await request.post('https://recruitment-api.littleemperors.com/api/login', {
        data: {
            email: 'victorfonsecasp.gmail.com',
            password: 'victorEmperors2023', 
            token: 'Bearer 34|vYQMXUynfGmBSy7uhiBsLKHQRbmV0HSTp8IeOYHY1ab6b20d'
        }
    });
    expect(loginResponse.status()).toBe(401);

  
});
