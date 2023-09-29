describe('Login Tests', () => {
    before(() => {
      cy.viewport(1920, 1080);
      cy.visit("https://www.atados.com.br/")
      cy.fixture('login.json').then((loginData) => {
        const { email, password } = loginData;
        cy.loginWithEmail(email, password);
        })
    })

    it('Realizar uma busca na página utilizando a barra de buscas"', () => {
        cy.get('#search-form-input')
          .should('be.visible')
          .click()
          .type('São Paulo{enter}')
          .get(':nth-child(3) > .SearchSources__SectionTitle-sc-19lsa0o-1').should('be.visible', { timeout: 10000 })
    })
    
})