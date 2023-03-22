/// <reference types="cypress" />

class mainPage_PO {

    elements = {
        countrySelector: () => cy.get('#country'),
        citySelector: () => cy.get('#city'),
        carModel: () => cy.get('#model'),
        pickUpDateSelector: () => cy.get('#pickup'),
        dropOffDateSelector: () => cy.get('#dropoff'),
        submitButton: () => cy.contains('.btn', 'Search'),
        resultTable: () => cy.get('table#search-results'),
        rentButton: () => cy.contains('.btn', 'Rent')
    }

    navigate(path) {
        cy.visit(path)
    }

    selectCountry(country) {
        this.elements.countrySelector().select(country)
    }

    selectCity(city) {
        this.elements.citySelector().select(city, { force: true })
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

    checkIfResultTableExists() {
        this.elements.resultTable().should('be.visible')
    }

    clickOnRentButton() {
        this.elements.rentButton().click( { force: true })
    }
}

export default mainPage_PO;