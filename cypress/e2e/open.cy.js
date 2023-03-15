describe('template spec', () => {
  it('passes', () => {
    cy.visit('/').then(el => {
      expect(true).to.be.true
    })
  })
})