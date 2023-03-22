/// <reference types="cypress" />

class mainPage_PO {

    elements = {
        countrySelector: () => cy.get('#country'),
        citySelector: () => cy.get('#city'),
        carModel: () => cy.get('#model'),
        pickUpDateSelector: () => cy.get('#pickup'),
        dropOffDateSelector: () => cy.get('#dropoff'),
        submitButton: () => cy.get('.btn')
    }

    navigate(path) {
        cy.visit(path)
    }

    selectCountry(country) {
        this.elements.countrySelector().select(country)
    }

    selectCity(city) {
        this.elements.citySelector().select(city)
    }

    typeCarName(carName) {
        this.elements.carModel().type(carName)
    }

    selectPickUpDate(pickUpDate) {
        if(pickUpDate == 'nothing') {
            cy.log('I recived nothing')
        }
        else {
            this.elements.pickUpDateSelector().type(pickUpDate)
        }
    }

    selectDropOffDate(dropOffDate) {
        if(dropOffDate == 'nothing') {
            cy.log('I recived nothing')
        }
        else {
            this.elements.dropOffDateSelector().type(dropOffDate)
        }
    }

    clickOnSubmitButton() {
        this.elements.submitButton().click()
    }

    checkIfResultContainsText(selector, outcome) {
        cy.contains(selector, outcome).should('be.visible')
    }

}

export default mainPage_PO;