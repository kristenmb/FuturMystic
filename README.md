# FuturMystic

A tarot card reading app for beginners.

The goal of this project was to create an app for a niche audience within a week. 

## Usage
A User lands on the main page of the app and can either learn more about Tarot, or begin a reading. Once a user clicks ‘Where Do I Start’, they are taken to an info page with tips on how to get started with Tarot readings. From here users can return to home, view the full gallery of cards, start a reading, or view their saved readings. 

![gif of site](https://media.giphy.com/media/plFwmDRhUtC06EnGya/giphy.gif)

When a user is ready to begin a reading they will be taken to the Intentions page. Here they can begin their reading when they are ready. After clicking ‘Begin’ the user will be shown a three card reading with a bit of further information on how to interpret the cards. Should a use want to learn more about a card they can click on it to see the meaning behind it. 

![gif of site](https://media.giphy.com/media/cFK9C0mOVQxuuq5uvb/giphy.gif)

If a user wants to save their reading for continued reflection, they can click the bookmark button in the top right hand corner of the reading page. Then they can view their saved readings by navigating through the starred bookmark icon in the footer. While on the saved readings page, the user can leave comments on their previous readings, or update a comment. 

![gif of site](https://media.giphy.com/media/jNq0qXQsYNcXWvcCIk/giphy.gif)

Should the user like to browse through the tarot deck in full, they can use the gallery icon in the footer to view the whole deck and click specific cards they would like to know more about. 

[](https://media.giphy.com/media/Ne01iaD8CEcZRSNqq6/giphy.gif)


*Images of the cards were taken of The Wild Unknown Deck by [Kim Krans](https://www.thewildunknown.com/collections/shop-the-magic)

## How to Install
1. `fork` this repository
2. `git clone` it down to your command line
3. Navigate into the repository on your machine
4. Run `npm i`
5. Run `npm start`

To run tests: `npm run cypress`

OR

Visit the deployed site [here](http://futur-mystic.herokuapp.com/)

**Please note: Both Heroku and the site this api are hosted on can take time to ‘wake up’ when they haven’t been accessed recently. Please be patient with the initial load.

## Planning
I utilized GitHub Projects for project management, that board can be found [here](https://github.com/kristenmb/FuturMystic/projects/1) <br/>
The detailed spec for this project can be found [here](https://frontend.turing.io/projects/module-3/niche-audience.html) <br/>
My wireframing can be found [here](https://miro.com/app/board/o9J_lRHqcFQ=/)

## Challenges & Wins
> This project presented a few logic challenges that I wasn’t expecting. Firstly, to be able to add a comment to the saved readings, which were stored as objects, I had to find a way to adapt only the value of the ‘comment’ key in the object for that specific reading. I ended up finding the answer in Object.assign which was new to me. Secondly, because the api I chose to use did not include images, I had to find a way to render the correct image with the appropriate cards when they were returned from the api. For this I created an object with keys named after one of properties returned from the api, and each key held an object with the file path to the image and alt text. I was then able to use bracket notation to bring in the correct image for whatever card was rendered.

> I used Router in a much more detailed way than I had in past projects, so initially this presented some challenges, but I am happy with the routes I created, and even implemented a wild card route for any errors and potential url mis-types.

## Technologies Used
1. React
2. React Router
3. Cypress
4. CSS
5. RESTful api - documentation found [here](https://app.swaggerhub.com/apis/ekswagger/rws-tarot_card_api/1.0.0#/Get%20cards/get_cards_random)

## Future Iterations
- I would like to create my own tarot API using express to customize the information for the cards as well as add images. I would also consider adding endpoints that would provide the information about how to read the cards as well. This would clean up the app so much and allow for much more dynamic uses of the information. 
- I would also like to implement Local Storage to persist user data across sessions so they can keep their readings and comments on hand. 
- I am interested in converting this project to use React Hooks and the Context API - another way to clean up a lot of the data.
- I want to add logic to display the cards randomly upright or reversed as they would occur in a real tarot card reading. 

## Project Members
This project was designed and implemented by [Kristen Bair](https://github.com/kristenmb)



