/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import mainPage_PO from "../page-objects/mainPage_PO";

const mainPage = new mainPage_PO;

Given("I visit the car rent homepage", () => {
    mainPage.navigate('/')
})

When("I pick out the country: {string}", (country) => {
    mainPage.selectCountry(country)
})

When("I pick out the city: {string}", (city) => {
    mainPage.selectCity(city)
})

When("I enter the name: {string}", function(carName) {
    mainPage.typeCarName(carName)
})

When("I enter start date: {string}", (pickUpDate) => {
    mainPage.selectPickUpDate(pickUpDate)
})

When("I enter return date: {string}", (dropOffDate) => {
    mainPage.selectDropOffDate(dropOffDate)
})

When("I click on the Search button", () => {
    mainPage.clickOnSubmitButton()
})

Then("I can see the appropriate {string} on {string}", (outcome, selector) => {
    mainPage.checkIfResultContainsText(selector, outcome)
})