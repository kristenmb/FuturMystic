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
    cy.url().should('contain', `/info`)
    cy.get('footer .footer-icon').eq(0).click()
  })

  it ('Should be able to click the \'Begin Reading\' button and be taken to the intentions page', () => {
    cy.get('.landing-page-section').find('.begin-btn').click()
    cy.get('.intention-section').should('be.visible')
    cy.url().should('contain', `/intention`)
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
    cy.get('footer').find('.footer-icon').should('have.length', 4)
    cy.get('footer .footer-icon').eq(0).click()
    cy.get('.landing-page-section').find('.info-btn').click()

    cy.get('footer .footer-icon').eq(1).click()
    cy.get('.intention-section').should('be.visible')

    cy.get('footer .footer-icon').eq(2).click()
    cy.get('.saved-section').should('be.visible')
  })
})

describe('FuturMystic - Intentions Page', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
    cy.visit(baseUrl)
    cy.get('.landing-page-section').find('.begin-btn').click()
   
  })

  it ('Should display the intentions page, with message, image, footer, and \'Begin\' button', () => {
    cy.get('.intention-section').should('be.visible')
    cy.get('.intention-section').find('h1').should('contain', 'Set your intentions')
    cy.get('.intention-section').find('.stars').should('have.attr', 'src', '/static/media/tealstars.fae99961.png')
    cy.get('.intention-section').find('p').should('contain', 'Take three deep breaths')
    cy.get('.intention-section').find('.reading-btn').should('contain', 'Begin')
   
    cy.url().should('contain', `/intention`)
  })

  it ('Should be able to click the \'Begin\' button and be taken to the reading page', () => {
    cy.fixture('mockReadingData.json')
      .then((reading) => {
        cy.intercept('GET', 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3', {
        statusCode: 200,
        body: reading
      })
    })
    
    cy.get('.intention-section').find('.reading-btn').click()
    cy.get('.reading-section').should('be.visible')    
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
      .get('.about-reading').find('.reading-type').should('contain', 'Past')
      .get('.about-reading').find('.card-how-to').should('have.length', 3)
      .get('.about-reading').find('.about-reading-type').should('have.length', 3)
      .get('.about-reading-type').eq(0).should('contain', 'Three card spreads')
      .get('.about-reading-type').eq(1).should('contain', 'Consider your initial')
      .get('.about-reading-type').eq(2).should('contain', 'If you would like')

    cy.get('footer').should('be.visible')

    cy.get('header').should('be.visible')

    cy.url(`/reading`)
  })

  it ('Should be able to click each card to view details', () => {
    cy.get('.card-container').find('.reading-card').eq(0).click()
    cy.get('.details-section').should('be.visible')
    cy.get('.back-arrow').click()

    cy.get('.card-container').find('.reading-card').eq(1).click()
    cy.get('.details-section').should('be.visible')
    cy.get('.back-arrow').click()
    
    cy.get('.card-container').find('.reading-card').eq(2).click()
    cy.get('.details-section').should('be.visible')
    cy.get('.back-arrow').click()
  })

  it ('Should be able to save the reading using the bookmark button - button image should change', () => {
    cy.get('.bookmark').should('have.attr', 'alt', 'Outline of bookmark')
    cy.get('.bookmark').click()
    cy.get('.bookmark').should('have.attr', 'alt', 'Filled bookmark')
  })

  it ('Should be able to navigate to see the saved reading using the footer', () => {
    cy.get('footer .footer-icon').eq(2).click()
    cy.get('.saved-section').should('be.visible')
    cy.get('.reading-box').should('be.visible')
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
      .get('.card-container').find('.reading-card').eq(0).click()
  })

  it ('Should display the details for the clicked card - image and text', () => {
    cy.get('.details-section').should('be.visible')
      .get('.details-img').should('have.attr', 'src', '../cards/wa09.jpg')
      .get('h1').should('contain', 'Nine of Wands')
      .get('h2').should('contain', 'Meaning')
      .get('p').should('contain', 'The card signifies')

    cy.url().should('contain', '/Nine%20of%20Wands')
  })

  it ('Should be able to click back button and see full reading again', () => {
    cy.get('.back-arrow').click()
    cy.get('.reading-section').should('be.visible')
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
      .get('footer .footer-icon').eq(2).click()
  })

  it ('Should display the saved readings page', () => {
    cy.get('.saved-section').should('be.visible')
      .get('h1').should('contain', 'My Saved Readings')
      .get('p').should('contain', 'Add notes about')
      .get('.reading-box div').get('.thumbnails').should('have.length', 3)
      .get('textarea').should('have.value', '')

    cy.url().should('contain', '/saved-readings')
  })

  it ('Should be able to leave a comment on the saved reading', () => {
    cy.get('textarea').type('This reading really spoke to me today, I will consider it moving forward')
  })

  it ('Should have comment persist if user navigates away from saved readings page', ()=> {
    cy.get('footer .footer-icon').eq(1).click()
    cy.get('.intention-section').should('be.visible')

    cy.get('footer .footer-icon').eq(2).click()
    cy.get('.saved-section').find('textarea').should('have.value', 'This reading really spoke to me today, I will consider it moving forward')
  })
})

describe('FuturMystic - Gallery View', () => {

  const baseUrl = 'http://localhost:3000'

  before(() => {
      cy.fixture('mockDeckData.json')
      .then((deck) => {
        cy.intercept('GET', 'https://rws-cards-api.herokuapp.com/api/v1/cards', {
        statusCode: 200,
        body: deck
      })
    })

    cy.visit(baseUrl)
      .get('.begin-btn').click()
      .get('footer .footer-icon').eq(3).click()
  })

  it ('Should display gallery view page with heading, directions, and cards', () => {
    cy.get('.gallery-section').should('be.visible')
      .get('.gallery-title').should('contain', 'Card Gallery')
      .get('.gallery-desc').should('contain', 'Click through the cards')
      .get('.gallery-thumbnail').should('have.length', 5)

    cy.url().should('contain', '/gallery')
  })

  it ('Should be able to click a card to view more information', () => {
    cy.get('.gallery-thumbnail').eq(1).click()
      .get('.details-section').should('be.visible')

    cy.url().should('contain', '/gallery/The%20High%20Priestess')
  })

  it ('Should be able to navigate back to the gallery view with the back button', () => {
    cy.get('.back-arrow').click()
      .get('.gallery-section').should('be.visible')
  })
})

describe('FuturMystic - Error Handling', () => {

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
    cy.get('.footer-icon').click()
      .get('.landing-page-section').should('be.visible')
  })
})