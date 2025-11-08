@registration
Feature: RegisterNewUser

Scenario: Verify that all forms and fields requiredare present on the registration page
  Given I navigate to the registration page
  Then All form fields should be visible and correctly labeled

  
Scenario: Verify that existing user cannot register successfully
  Given I navigate to the registration page
  When I enter existing registration details
  And I submit the registration form
  Then I should see a successful registration message

  Scenario Outline: Register new user with valid credentials
  Given Im a new user
  When I navigate to the registration page
  And I enter valid registration details with "<firstName>", "<lastName>","<phoneNumber>","<country>", "<email>", "<password>"
  Then I click terms and conditions checkbox
  And I submit the registration form
  Then I should see a <result> registration message
    
Examples:
    | firstName | lastName | phoneNumber       | country            | email             | password            | result      |
    | TC01      | TC-01    |       1234567890  |     UnitedStates   | tc01@emai.com  | password123  |  successful|
    | TC02      | TC-02    |       987654321  |     Canada   | tc01@emai.com  |       test123  |  successful|
     | TC03      | TC-03    |       1234567890  |     Australia   | tc01@emai.com  |       test123  |  successful|





Scenario Outline: Register new user with invalid credentials
  Given Im a new user
  When I navigate to the registration page
  And I enter invalid registration details with "<firstName>", "<lastName>","<phoneNumber>","<country>", "<email>", "<password>"
  Then I click terms and conditions checkbox
  And I submit the registration form
  Then I should see a <result> registration message
Examples:
    
    | firstName | lastName | phoneNumber | country | email | password | result|
     | John      | Doe      |             |         |       |          |       |