Feature: Front page - choose the car

  Background: Navigate to the page
    Given I visit the car rent homepage

  Scenario Outline: Car availability
    When I pick out the country: <country>
    And I pick out the city: <city>
    And I enter the name: '<car_name>'
    And I enter start date: '<start_date>'
    And I enter return date: '<return_date>'
    And I click on the Search button
    Then I can see the appropriate '<outcome>'

    Examples:
      | country  | city   | car_name  | start_date | return_date | outcome |
      | Poland   | AAA    | Volskagen | 03/21/2023 | 03/31/2023  | ABC     |
      | Germainy | Berlin | Volskagen | 04/21/2023 | 04/31/2023  | ABC     |