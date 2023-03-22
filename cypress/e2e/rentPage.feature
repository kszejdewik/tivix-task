Feature: Check the Rent Page validators

  Scenario Outline: Car availability
    Given I visit the car rent homepage
    When I pick out the country: 'Germainy'
    And I pick out the city: 'Berlin'
    And I enter the name: 'Toyota RAV4'
    And I enter start date: '2023-04-23'
    And I enter return date: '2023-04-29'
    And I click on the Search button
    Then The result table is presented
    And I click on the Rent button
    Then The details page is presented
    And I click on the Rent button
    Then The rent page is presented
    And I fill the input with the data: '<name>', '<lastName>', '<card_number>', '<email>'
    And I click on the Rent button
    Then The '<message>' is presented

    Examples:
      | name                                                | lastName                                            | card_number                | email                                                | message                          |
      | {selectAll}{backspace}                              | Foobar                                              | 1234                       | john@foobar.com                                      | Name is required                 |
      | John                                                | {selectAll}{backspace}                              | 1234                       | john@foobar.com                                      | Last name is required            |
      | John                                                | Foobar                                              | {selectAll}{backspace}     | john@foobar.com                                      | Card number is required          |
      | John                                                | Foobar                                              | 1234                       | {selectAll}{backspace}                               | Email is required                |
      | abcde12345abcde12345abcde12345abcde12345abcde123451 | Foobar                                              | 1234                       | john@foobar.com                                      | Name value is too long           |
      | John                                                | abcde12345abcde12345abcde12345abcde12345abcde123451 | 1234                       | john@foobar.com                                      | Last name value is too long      |
      | John                                                | Foobar                                              | 12345123451234512345123451 | john@foobar.com                                      | Card number value is too long    |
      | John                                                | Foobar                                              | 1234                       | abcde12345abcde12345abcde12345abcde12345abcde123451@ | Email value is too long          |
      | John                                                | Foobar                                              | abcd                       | john@foobar.com                                      | Card number contains wrong chars |
      | John                                                | Foobar                                              | 1234                       | johnNoAt                                             | Please provide valid email       |