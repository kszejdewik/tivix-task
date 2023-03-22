/// <reference types="cypress" />

class detailsPage_PO {

    elements = {
        cardHeader: () => cy.get('div.card-header'),
        cardBody: () => cy.get('div.card-body'),
        cardTitle: () => cy.get('h5.card-title'),
        price: () => cy.contains('p', 'Price'),
        location: () => cy.contains('p', 'Location'),
        licensePlate: () => cy.contains('p', 'License'),
        pickUpDate: () => cy.contains('h6', 'Pickup'),
        dropOffDate: () => cy.contains('h6', 'Dropoff')
    }

    checkIfDetailsPageIsPresented() {
        this.elements.cardHeader().should('be.visible')
        this.elements.cardBody().should('be.visible')
    }
}

export default detailsPage_PO;