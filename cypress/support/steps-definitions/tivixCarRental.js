/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the data", () => {
    cy.log("first step done")
})

When("I see on the data", () => {
    cy.log("Second step done")
})

Then("The data is presented", () => {
    expect(true).to.be.true
})