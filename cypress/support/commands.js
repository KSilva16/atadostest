Cypress.Commands.add('loginWithEmail', (email, password) => {
    cy.get('#toolbar-auth-button').click()
    cy.get('.auth-email').click()
    cy.get('.mb-6 > .input').type(email).should('have.value', email)
    cy.get('.max-w-sm > :nth-child(3) > .input').type(password).should('have.value', password)
    cy.get('.max-w-sm > .text-white').click()
  })

