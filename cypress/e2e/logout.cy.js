describe('Logout Tests', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://www.atados.com.br/")
    cy.fixture('login.json').then((loginData) => {
      const { email, password } = loginData;
      cy.loginWithEmail(email, password);
  })
})

  it('Realizando o Logout', () => {
    cy.get('.ToolbarUser__Avatar-sc-1w3f3wp-0 > .icon').click()
    cy.get('.Dropdown__DropdownMenu-sc-8dv8xm-0 > [href="/"]').click();
    cy.get('#toolbar-auth-button').should('be.visible')
  })
})