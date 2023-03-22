/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import detailsPage_PO from "../page-objects/detailsPage_PO";
import mainPage_PO from "../page-objects/mainPage_PO";
import rentPage_PO from "../page-objects/rentPage_PO";

const mainPage = new mainPage_PO;
const detailsPage = new detailsPage_PO;
const rentPage = new rentPage_PO;

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

Then("The result table is presented", () => {
    mainPage.checkIfResultTableExists()
})

When("I click on the Rent button", () => {
    mainPage.clickOnRentButton()
})

Then("The details page is presented", () => {
    detailsPage.checkIfDetailsPageIsPresented()
})

Then("The rent page is presented", () => {
    rentPage.checkIfRentPageIsPresented()
})

When("I fill the input with the data: {string}, {string}, {string}, {string}", (name, lastName, cardNumber, email) => {
    rentPage.fillTheInputData(name, lastName, cardNumber, email)
})

Then("The Successfull message is presented", () => {
    rentPage.checkIfSuccessfulMessageIsPresented()
})

Then("The {string} is presented", (message) => {
    rentPage.checkIfAppropriateMessageIsDisplayed(message)
})