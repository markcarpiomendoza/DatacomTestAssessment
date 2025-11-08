@registration
Feature: New User Registration

Scenario: Verify that all forms labels and fields required are present on the registration page
  Given I navigate to the registration page
  Then All form fields should be visible and correctly labeled

  
# Scenario: Verify that existing user cannot register successfully
#   Given I navigate to the registration page
#   When I enter existing registration details
#   And I submit the registration form
#   Then Failed registration message should be visible

  Scenario Outline: Register new user with valid credentials
  Given Im a new user
  When I navigate to the registration page
  And I enter valid registration details with "<firstName>", "<lastName>","<phoneNumber>","<country>", "<email>", "<password>"
  Then I click terms and conditions checkbox
  And I submit the registration form
  Then Successful registration message should be visible
  Then Registration details are matched
    
Examples:
  | firstName | lastName | phoneNumber | country      | email         | password             |
  | TC01      | TC-01    | 1234567890  | UnitedStates | tc01@emai.com | password123          |
  # Password with 6 characters
  | TC02      | TC-02    | 987654321   | Canada       | tc01@emai.com | pwd123               |
  # Password with 20 characters
  | TC03      | TC-03    | 1234567890  | Australia    | tc01@emai.com | test1234567891234567 |


Scenario Outline: Register new user with invalid credentials
  Given Im a new user
  When I navigate to the registration page
  And I enter invalid registration details with "<firstName>", "<lastName>","<phoneNumber>","<country>", "<email>", "<password>"
  Then I click terms and conditions checkbox
  And I submit the registration form
  Then Failed registration message should be visible
  Then Registration details are matched
Examples:

    | firstName | lastName | phoneNumber    | country         | email             | password     |
    # Without first name
    | TC01      |          | 1234567890     | UnitedStates    | tc01@email.com    | password123  |
    # Without phone number
    | TC02      | TC-02    |                | Canada          | tc02@email.com    | test123      |
    # Without email
    | TC03      | TC-03    | 1234567890     | Australia       |                   | test123      |
    # Without password
    | TC04      | TC-04    | 1234567890     | Australia       | tc01@email.com    |              |
    # Invalid password (less than 6 characters)
    | TC05      | TC-05    | 1234567890     | Australia       | tc01@email.com    | test         |
    # Invalid email
    | TC06      | TC-06    | 1234567890     | Australia       | tc01@email.       | test         |
    # Invalid phone number
    | TC07      | TC-07    | 1234D6789S     | Australia       | tc01@email.com    | test         |
