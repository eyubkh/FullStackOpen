
describe('Login', () => {
  beforeEach('', function () {
    cy.request('GET', 'http://localhost:3001/api/reset/')
    const user = {
      username: 'ayub',
      name: 'Ayub Hadi',
      password: '1234'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')
    cy.get('input[placeholder="User"]').type('ayub')
    cy.get('input[placeholder="Password"]').type('1234')
  })

  it('showing', function () {
    cy.contains('SignIn')
  })

  it('error with wrong password', () => {
    cy.get('input[placeholder="Password"]')
      .clear()
      .type('error')
    cy.get('button').click()
    cy.get('Create Blog').should('not.exist')
  })

  it('success', function () {
    cy.get('button').click()
    cy.contains('Log out')
  })
})
