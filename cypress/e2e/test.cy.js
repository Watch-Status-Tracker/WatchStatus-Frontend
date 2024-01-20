describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('[data-test="login_input"').type('kira');
    cy.get('[data-test="login_password"').type('kira');
    cy.get('[data-test="login_submit"').click();
  });
});
