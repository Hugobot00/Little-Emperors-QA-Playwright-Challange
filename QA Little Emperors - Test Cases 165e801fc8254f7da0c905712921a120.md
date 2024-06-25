# QA Little Emperors - Test Cases

---

# Summary of Platform Regression

The regression testing of this platform involves a thorough verification of all core functionalities after code changes to ensure no existing functionality is compromised. This includes:

- **Authentication**: Verify login and session management.
- **CRUD for Hotels**: Ensure the creation, reading, updating, and deletion of hotels work correctly via API and frontend.
- **User Interface**: Validate proper display and navigation on the dashboard.
- **Edge Cases**: Test scenarios such as handling invalid IDs and failed authentication.
- **Performance**: Confirm that the application's performance remains acceptable.

This process ensures the stability and integrity of the platform after each update.

---

### Documentation for Manual Tests - Little Emperors

Here is documentated how to manual testing on our Dashboard plataform and using Postman collection

- **Manual Frontend Tests**
    
    # Authentication
    
    ### Scenario: Successful Login
    
    **Steps:**
    
    1. Navigate to the login page.
    2. Enter the email "victorfonsecasp@gmail.com".
    3. Enter the password "victorEmperors2024".
    4. Click the login button.
    
    **Expected Result:**
    
    - The user should be redirected to the main dashboard.
    
    ### Scenario: Login Failure due to Incorrect Credentials
    
    **Steps:**
    
    1. Navigate to the login page.
    2. Enter the email "victorfonsecasp@gmail.com".
    3. Enter an incorrect password.
    4. Click the login button.
    
    **Expected Result:**
    
    - An error message "Invalid credentials" should be displayed.
    
    ## Hotel Creation
    
    ### Scenario: Create a Hotel via Dashboard
    
    **Steps:**
    
    1. Log in to the dashboard.
    2. Navigate to the hotel creation page.
    3. Enter the hotel details (name: "Hotel Test", city: "Test City").
    4. Click the create button.
    
    **Expected Result:**
    
    - The hotel "Hotel Test" should appear in the list of hotels.
    
    ## Hotel Update
    
    ### Scenario: Update a Hotel via Dashboard
    
    **Steps:**
    
    1. Log in to the dashboard.
    2. Navigate to the hotel edit page.
    3. Update the hotel details (name: "Updated Hotel Name").
    4. Click the save button.
    
    **Expected Result:**
    
    - The updated hotel name "Updated Hotel Name" should appear in the list of hotels.
    
    ## Hotel Deletion
    
    ### Scenario: Delete a Hotel via Dashboard
    
    **Steps:**
    
    1. Log in to the dashboard.
    2. Select a hotel to delete.
    3. Confirm the deletion action.
    
    **Expected Result:**
    
    - The hotel should be removed from the list.
    
- **Postman collection - How to use / Test**
    
    Please download Postman collection v2.1 json file and import to your local postman, after this should be possible to see collection created ( **if your collection was created with your request without the password token entered, it must be entered manually via Bearer token** - `35|vYQMXUynfGmBSy7uhiBsLKHQRbmV0HSTp8IeOYHY1ab6b20d`) and you should be ready to go!
    
    - All Hotel list: `GET Request` to consult all existing Hotels by list
    - Search hotel by id: `GET request` to consult an single hotel and their infos passing hotel `id`
    - Delete an hotel: `PATCH Request` to delete an existing hotel by `id`
    - Retrieve hotel by id: `GET Request` to retrieve an previous deleted hotel by `id`
    - Create new hotel: `POST Request` to create a new hotel, some parameters querys are requeried and optionals to make this request such as:
    
    ```sql
    "name - required"
    "city - required"
    "description - required"
    "address - optional"
    "stars - optional "
    ```
    
    - Update an existing hotel: `PUT Request` to update an existing hotel, its possible to update any query parameters information.

![Untitled](QA%20Little%20Emperors%20-%20Test%20Cases%20165e801fc8254f7da0c905712921a120/Untitled.png)

[Little Emperors.postman_collection.json](QA%20Little%20Emperors%20-%20Test%20Cases%20165e801fc8254f7da0c905712921a120/Little_Emperors.postman_collection.json)

---

- Knowing bugs:
    
    ### Bug Report
    
    **Summary:**
    The text is not visible because both the background and the text are white. This issue affects the modal form and the landing page with hotel lists, Chrome and Firefox are affected.
    
    **Steps to Reproduce:**
    
    1. Open the modal form or navigate to the landing page with hotel lists.
    2. Observe the text areas where both the background and text are white.
    
    **Expected Behavior:**
    The text should be visible against the background.
    
    **Actual Behavior:**
    The text is not visible because it blends with the white background.
    
    **Workaround:**
    Disabling the CSS variable `--foreground-rgb: 255, 255, 255;` in the HTML made the text visible.
    
    ![Untitled](QA%20Little%20Emperors%20-%20Test%20Cases%20165e801fc8254f7da0c905712921a120/Untitled%201.png)
    
    ![Untitled](QA%20Little%20Emperors%20-%20Test%20Cases%20165e801fc8254f7da0c905712921a120/Untitled%202.png)
    
    ![Untitled](QA%20Little%20Emperors%20-%20Test%20Cases%20165e801fc8254f7da0c905712921a120/Untitled%203.png)
    
    ![Untitled](QA%20Little%20Emperors%20-%20Test%20Cases%20165e801fc8254f7da0c905712921a120/Untitled%204.png)
    

---

# Automated Tests:

The automated tests using Playwright cover both frontend and backend functionalities:

**Frontend Tests:**

- Ensure successful login and error handling for incorrect credentials.
- Verify creation, viewing, updating, and deletion of hotels via the dashboard.

**Backend API Tests:**

- Authenticate requests and handle unauthorized access.
- Test hotel creation, retrieval by ID, updating, and deletion operations.

These tests ensure robust functionality and reliability across the application's user interface and API endpoints.

# Frontend Automated Test -  Playwright

### Autentication

```gherkin

Feature: Dashboard Login
  Scenario: Successfully logging into the dashboard
    Given I am on the login page
    When I enter the email "victorfonsecasp@gmail.com"
    And I enter the password "victorEmperors2024"
    And I click the login button
    Then I should be redirected to the dashboard

  Scenario: Failing to log in with incorrect credentials
    Given I am on the login page
    When I enter the email "user@example.com"
    And I enter an incorrect password
    And I click the login button
    Then I should see an error message "Invalid credentials"

```

### Hotel creation

```gherkin

Feature: Create a Hotel via Dashboard
  Scenario: Successfully creating a hotel
    Given I am logged into the dashboard
    And I am on the create hotel page
    When I enter the hotel name "Hotel Test" and city "Test City"
    And I click the create button
    Then the hotel "Hotel Test" should appear in the hotel list

```

### Hotel created must be visible on the dashboard

```gherkin

Feature: View Hotel Details
  Scenario: Viewing a hotel's details
    Given I am logged into the dashboard
    And a created hotel is exist
    When I navigate to the details page for hotel
	    Then I should see the details for hotel

```

### Hotel update

```gherkin

Feature: Update a Hotel via Dashboard
  Scenario: Successfully updating a hotel
    Given I am logged into the dashboard
    And a hotel with ID 1 exists
    When I navigate to the edit page for hotel ID 1
    And I update the hotel name to "Updated Hotel Name"
    And I click the save button
    Then I should see the updated hotel name "Updated Hotel Name" in the hotel list

```

### Delete a previously created hotel

```gherkin

Feature: Delete a Hotel via Dashboard
  Scenario: Successfully deleting a hotel
    Given I am logged into the dashboard
    And a hotel with ID 1 exists
    When I click the delete button for hotel ID 1
    And I confirm the deletion
    Then the hotel should no longer appear in the hotel list

```

# Backend API - Automated Test - Playwright

### Authentication

```gherkin

Feature: API Authentication
  Scenario: Accessing the API without a token
    Given I am an unauthenticated user
    When I send a GET request to "/hotels"
    Then the response status should be 401
    And the response message should indicate "Unauthorized"

```

### Hotel Creation

```gherkin

Feature: Create a Hotel
  Scenario: Successfully creating a hotel
    Given I have a valid authentication token
    And I have the hotel details with name "Hotel Test" and city "Test City"
    When I send a POST request to "/hotels" with the hotel details
    Then the response status should be 201
    And the response should contain the hotel name "Hotel Test" and city "Test City"

```

### Retrieve Hotel by ID

```gherkin

Feature: Retrieve a Hotel by ID
  Scenario: Successfully retrieving a hotel by ID
    Given I have a valid authentication token
    And a hotel with ID 1 exists
    When I send a GET request to "/hotels/1"
    Then the response status should be 200
    And the response should contain the hotel details for ID 1

  Scenario: Attempting to retrieve a non-existent hotel by ID
    Given I have a valid authentication token
    When I send a GET request to "/hotels/9999"
    Then the response status should be 404
    And the response message should indicate "Hotel not found"

```

### Hotel update infos

```gherkin

Feature: Update a Hotel
  Scenario: Successfully updating a hotel
    Given I have a valid authentication token
    And a hotel with ID 1 exists
    And I have new details with name "Updated Hotel Name"
    When I send a PUT request to "/hotels/1" with the new details
    Then the response status should be 200
    And the response should contain the updated hotel name "Updated Hotel Name"

```

### Hotel Delete

```gherkin
Feature: Delete a Hotel
  Scenario: Successfully deleting a hotel
    Given I have a valid authentication token
    And a hotel with ID 1 exists
    When I send a DELETE request to "/hotels/1"
    Then the response status should be 204

  Scenario: Attempting to delete a non-existent hotel
    Given I have a valid authentication token
    When I send a DELETE request to "/hotels/9999"
    Then the response status should be 404
    And the response message should indicate "Hotel not found"

```

---