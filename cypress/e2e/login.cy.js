describe('Login Tests', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit("https://www.atados.com.br/")

  })

  it('Realizar login na página utilizando a opção de "Continuar com Email"', () => {
    cy.fixture('login.json').then((loginData) => {
      const { email, password } = loginData
      cy.loginWithEmail(email, password)
      cy.get('.ToolbarUser__Avatar-sc-1w3f3wp-0').should('be.visible', { timeout: 10000 });
    })
  })

  it('Tentativa de login com a senha errada"', () => {
  cy.fixture('login-failure.json').then((loginData) => {
    const { email, password } = loginData
    cy.loginWithEmail(email, password)
    cy.get('.bg-red-600').should('be.visible')
    })
  })
})

//