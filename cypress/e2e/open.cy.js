describe('template spec', () => {
  it('passes', () => {
    cy.visit('/').then(el => {
      expect(false).to.be.true
    })
  })
})