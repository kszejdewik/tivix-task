Feature: Front page - choose the car

  Background: Navigate to the page
    Given I visit the car rent homepage

  Scenario Outline: Car or alert availability
    When I pick out the country: '<country>'
    And I pick out the city: '<city>'
    And I enter the name: '<car_name>'
    And I enter start date: '<start_date>'
    And I enter return date: '<return_date>'
    And I click on the Search button
    Then I can see the appropriate '<outcome>' on '<selector>'

    Examples:
      | country  | city    | car_name   | start_date | return_date | outcome                               | selector |
      | Poland   | Wroclaw | Volkswagen | 2023-03-26 | 2023-03-31  | Volkswagen Touran                     | td       |
      | Poland   | Cracow  | Suzuki     | 2023-04-26 | 2023-04-30  | Suzuki SX4                            | td       |
      | Germainy | Berlin  | Skoda      | 2023-05-26 | 2023-05-31  | Skoda Octavia                         | td       |
      | France   | Paris   | Ursus      | 2024-06-26 | 2024-06-30  | Ursus C360                            | td       |
      | France   | Paris   | empty      | 2025-03-26 | 2025-03-31  | Empty cars list                       | .alert   |
      | Poland   | Cracow  | Volkswagen | nothing    | nothing     | Please fill pickup and drop off dates | .alert   |
      | Germainy | Berlin  | Mazda      | 2023-04-01 | 2023-03-31  | Please enter a valid date             | .alert   |
      | Germainy | Paris   | Mazda      | 2023-04-01 | 2023-05-01  | Country doesn\'t match city           | h3       |
