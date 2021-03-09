export const fetchCards = () => {
  return fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3')
    .then(response => {
      handleErrors(response)
      return response.json()
    })
}

export const fetchCardDeck = () => {
  return fetch('https://rws-cards-api.herokuapp.com/api/v1/cards')
    .then(response => {
      handleErrors(response)
      return response.json()
    }) 
}

const handleErrors = (res) => {
  if (!res.ok) {
    throw new Error()
  }
}

export const formatDate = (date) => {
  const reformatDate = new Date(date)
  return `${reformatDate.getMonth() + 1}/${reformatDate.getDate()}/${reformatDate.getFullYear()}`
}