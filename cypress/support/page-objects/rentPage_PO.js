/// <reference types="cypress" />

class rentPage_PO {

    elements = {
        firstName: () => cy.get('#name'),
        lastName: () => cy.get('#last_name'),
        cardNumber: () => cy.get('#card_number'),
        emailAddress: () => cy.get('#email'),
        rentButton: () => cy.get('button.btn-primary'),
        alert: () => cy.get('.alert')
    }

    checkIfRentPageIsPresented() {
        this.elements.firstName().should('be.visible')
        this.elements.lastName().should('be.visible')
        this.elements.cardNumber().should('be.visible')
        this.elements.emailAddress().should('be.visible')
        this.elements.rentButton().should('be.visible')
    }

    fillTheInputData(name, lastName, cardNumber, email) {
        this.elements.firstName().type(name, { force: true })
        this.elements.lastName().type(lastName, { force: true })
        this.elements.cardNumber().type(cardNumber, { force: true })
        this.elements.emailAddress().type(email, { force: true })
    }

    checkIfSuccessfulMessageIsPresented() {
        this.elements.alert().should('be.visible').and('contain.text', 'Success')
    }

    checkIfAppropriateMessageIsDisplayed(message) {
        this.elements.alert().should('be.visible').and('contain.text', message)
    }
}

export default rentPage_PO;