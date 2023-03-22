class mainPage {

    elements = {
        countrySelector: () => cy.get('#country'),
        citySelector: () => cy.get('#city'),
        carModel: () => cy.get('#model'),
        pickUpDateSelector: () => cy.get('#pickup'),
        dropOffDateSelector: () => cy.get('#dropoff')
    }

    navigate(path) {
        cy.visit(path)
    }

    selectCountry(country) {
        this.elements.countrySelector.select(country)
    }

    selectCity(city) {
        this.elements.citySelector.select(city)
    }

}

export default mainPage;