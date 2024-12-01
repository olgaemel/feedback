const ratings = document.querySelectorAll('.rating')
const panel = document.querySelector('#panel')
const sendBtn = document.querySelector('.btn')
let selectedRating = 'satisfied'
const ratingsContainer = document.querySelector('.ratings-container')

// ratings.forEach((rating) =>
//   rating.addEventListener('click', () => {
//     ratings.forEach((r) => r.classList.remove('active'))
//     rating.classList.add('active')
//   })
// )

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
  }
})

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active')
    //   ratings.forEach((r) => r.classList.remove('active'))
  }
}

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
<i class='fas fa-heart'></i>
<strong>Thank you!</strong>
<br>
<strong>Feedback: ${selectedRating}</strong>
<p>We will you your feedback to improve our customer support</p>`
})

// sendBtn.addEventListener('click', (e) => {
//     panel.innerHTML = `
//         <i class="fas fa-heart"></i>
//         <strong>Thank You!</strong>
//         <br>
//         <strong>Feedback: ${selectedRating}</strong>
//         <p>We'll use your feedback to improve our customer support</p>
//     `
// })
