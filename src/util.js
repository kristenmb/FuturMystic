export const fetchCards = () => {
  return fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/ranom?n=3')
    .then(response => response.json())
}

export const formatDate = (date) => {
  const reformatDate = new Date(date)
  return `${reformatDate.getMonth() + 1}/${reformatDate.getDate()}/${reformatDate.getFullYear()}`
}