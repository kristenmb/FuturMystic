describe('FuturMystic - Landing Page', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy.visit(baseUrl)
  })

  it ('Should display the landing page, with greeting, picture, and two buttons', () => {
    cy.get('.landing-page-section').should('be.visible')
    cy.get('.landing-page-section').find('h1').should('contain', 'Welcome to FuturMystic')
    cy.get('.landing-page-section').find('.welcome-img').should('have.attr', 'src', '/static/media/hand.6e5b66c7.png')
    cy.get('.landing-page-section').find('.info-btn').should('contain', 'Where Do I Start')
    cy.get('.landing-page-section').find('.begin-btn').should('contain', 'Begin a Reading')
   
    cy.url().should('contain', baseUrl)
  })

  it ('Should be able to click the \'Where do I Start\' button and be taken to the info page', () => {
    cy.get('.landing-page-section').find('.info-btn').click()
    cy.get('.info-section').should('be.visible')
    cy.url().should('contain', `${baseUrl}/info`)
    cy.get('footer .footer-icon').eq(0).click()
  })

  it ('Should be able to click the \'Begin Reading\' button and be taken to the intentions page', () => {
    cy.get('.landing-page-section').find('.begin-btn').click()
    cy.get('.intention-section').should('be.visible')
    cy.url().should('contain', `${baseUrl}/intention`)
  })
})

describe('FuturMystic - Info Page', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy.visit(baseUrl)
    cy.get('.landing-page-section').find('.info-btn').click()
  })

  it ('Should display the info page, with text areas, button, and footer', () => {
    cy.get('.info-section').get('.what-article').find('h1').should('contain', 'What is tarot?')
    cy.get('.info-section').get('.what-article').find('.about-tarot').eq(0).should('contain', 'The tarot deck')
    cy.get('.info-section').get('.what-article').find('.about-tarot').eq(1).should('contain', 'Wands represent inspiration')

    cy.get('.info-section').get('.how-article').find('h1').should('contain', 'How do I read the cards?')
    cy.get('.info-section').get('.how-article').find('.about-tarot').eq(0).should('contain', 'Before you begin')
    cy.get('.info-section').get('.how-article').find('.about-tarot').eq(1).should('contain', 'important to remember ')

    cy.get('.info-section').get('.begin-btn').should('contain', 'Begin Reading')
    
    cy.get('footer').should('be.visible')
    cy.url().should('contain', '/info')
  })

  it ('Should be able to click the \'Begin Reading\' button and be taken to the intentions page', () => {
    cy.get('.info-section').get('.begin-btn').click()
    cy.get('.intention-section').should('be.visible')
    cy.get('footer .footer-icon').eq(0).click()
    cy.get('.landing-page-section').find('.info-btn').click()
  })

   it ('Should be able to use the footer buttons to navigate through the site', () => {
    cy.get('footer').find('.footer-icon').should('have.length', 3)
    cy.get('footer .footer-icon').eq(0).click()
    cy.get('.landing-page-section').find('.info-btn').click()

    cy.get('footer .footer-icon').eq(1).click()
    cy.get('.intention-section').should('be.visible')

    cy.get('footer .footer-icon').eq(2).click()
    cy.get('.saved-section').should('be.visible')
  })
})

describe.skip('FuturMystic - Intentions Page', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy.fixture('mockReadingData.json')
      .then((reading) => {
        cy.intercept('GET', 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3', {
        statusCode: 200,
        body: reading
      })
    })

    cy.visit(baseUrl)
  })

  it ('Should display the intentions page, with message, image, footer, and \'Begin\' button', () => {
    //
    //url
  })

  it ('Should be able to click the \'Begin\' button and be taken to the reading page', () => {
    
  })
})

describe('FuturMystic - Reading Page', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy.fixture('mockReadingData.json')
      .then((reading) => {
        cy.intercept('GET', 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3', {
        statusCode: 200,
        body: reading
      })
    })

    cy.visit(baseUrl)
      .get('.begin-btn').click()
      .get('.reading-btn').click()
  })

  it ('Should display the reading page, with cards, info about reading, footer, and save button', () => {
    cy.get('.reading-section')
    .get('.card-container').find('.reading-card').should('have.length', 3)
    cy.url(`${baseUrl}/reading`)
  })

  it ('Should be able to click each card to view details', () => {
    
  })

  it ('Should be able to save the reading using the bookmark button - button image should change', () => {
    
  })

  it ('Should be able to navigate to see the saved reading using the footer', () => {
    
  })
})
    
describe('FuturMystic - Card Details Page', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy.fixture('mockReadingData.json')
      .then((reading) => {
        cy.intercept('GET', 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3', {
        statusCode: 200,
        body: reading
      })
    })

    cy.visit(baseUrl)
      .get('.begin-btn').click()
      .get('.reading-btn').click()
  })

  it ('Should display the details for the clicked card - image and text', () => {
   
  })

  it ('Should be able to click back button and see full reading again', () => {
    
  })
})

describe('FuturMystic - Saved Readings Page', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy.fixture('mockReadingData.json')
      .then((reading) => {
        cy.intercept('GET', 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3', {
        statusCode: 200,
        body: reading
      })
    })

    cy.visit(baseUrl)
      .get('.begin-btn').click()
      .get('.reading-btn').click()
      .get('.bookmark').click()
  })

  it ('Should display the saved readings page', () => {
   
  })

  it ('Should be able to leave a comment on the saved reading', () => {
    
  })
})

describe('FuturMystic - Saved Readings Page', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy.intercept('GET', 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3', {
    statusCode: 404
    })

    cy.visit(baseUrl)
      .get('.begin-btn').click()
      .get('.reading-btn').click()
  })

  it ('Should display the error page', () => {
    cy.get('.error-message-section').find('.error').should('contain', 'The stars are not aligned')
  })

  it ('Should be able to click the home button and be take back to the landing page.', () => {
    
  })
})