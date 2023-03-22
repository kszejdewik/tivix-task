/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import mainPage from "../page-objects/mainPage_PO";

const mainPage = new mainPage()

Given("I visit the car rent homepage", () => {
    mainPage.navigate('/')
})

When("I pick out the country: {word}", (country) => {
    mainPage.selectCountry(country)
})

When("I pick out the city: {word}", (city) => {
    mainPage.selectCity(city)
})

When("I enter the name: {string}", (carName) => {
    cy.log(carName)
})

When("I enter start date: {string}", (pickUpDate) => {
    cy.log(pickUpDate)
})

When("I enter return date: {string}", (dropOffDate) => {
    cy.log(dropOffDate)
})

When("I click on the Search button", () => {
    cy.log("Button clicked")
})

Then("I can see the appropriate {string}", (outcome) => {
    cy.log(outcome)
})