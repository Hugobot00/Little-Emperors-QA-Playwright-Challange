# Test Automation Project Documentation

## Overview
This test automation project is designed to validate the functionalities of both a hotel management API and a web system's login functionality. It uses the Playwright framework to simulate user interactions and verify the correctness of API operations and web login processes.

## Technologies Used
- **JavaScript**: Programming language used to write the tests.
- **Playwright**: End-to-end testing framework for Node.js, used to simulate user interactions with the web and make HTTP requests to the API.

## Project Structure
The project is organized as follows:

- **tests/**: Main directory for all test files.
  - **frontend_tests/**: Subdirectory with tests specific to the web system's login functionality.
    - **login.spec.js**: File that includes test scenarios for the login functionality.
      - The file `login.spec.js` contains three main tests:
        - Visit to the Login Page
        - Login with Correct Credentials
        - Login with Incorrect Credentials

  - **backend_tests/**: Subdirectory with tests specific to the hotel API.
    - **hotelModulation.spec.js**: File containing the CRUD (Create, Read, Update, Delete) tests for hotels.
      - The tests are contained in the file `hotelModulation.spec.js`, which includes two main scenarios:
        - Editing a Created Hotel
        - Deleting a Created Hotel

    - **auth.spec.js**: File that includes test scenarios for authentication.
      - The tests are contained in the file `auth.spec.js`, which includes two main scenarios:
        - Authentication with Valid Access
        - Authentication with Invalid Access

## Implemented Tests

Please refer to this [Documentation](https://github.com/Hugobot00/Little-Emperors-QA-Playwright-Challange/blob/main/QA%20Little%20Emperors%20-%20Test%20Cases%20165e801fc8254f7da0c905712921a120.md) to access details on the manual and automated tests conducted, as well as to review identified bugs.

----
## Installation
1. Clone the repository.
2. Navigate to the project directory and run `npm install`.
3. Make sure to install latest Playwright latest build installed in the project using `npm init playwright@latest`.]
4. After run Playwright installation command on cmd make sure to select those options:
- Select `JavaScript` as main languague
- Select `tests` for default folder
- set `False` for Github Actions
- Select `Yes` to install Playwright browsers
![Imagem do WhatsApp de 2024-06-25 à(s) 18 16 57_834ce10c](https://github.com/Hugobot00/Little-Emperors-QA-Playwright-Challange/assets/131987814/4aa3ee26-aac0-43d6-8ef3-b56710e629b1)


## Running the Tests
To execute all tests, use the command:
```bash
npx playwright test
```

To execute tests with UI, use:
```bash
npx playwright test --ui
```

![Test report](https://github.com/Hugobot00/Little-Emperors-QA-Playwright-Challange/assets/131987814/90040c16-fe38-4a1d-b50b-b2e0a3ff78c9)





## License
This project is licensed under the MIT License. See the LICENSE file for more details.

This documentation provides an overview and a quick start guide for the test automation project, aimed at both the hotel API and the web system's login functionality. It is intended for developers and testers who want to contribute or better understand how the tests are structured and how to run them.
