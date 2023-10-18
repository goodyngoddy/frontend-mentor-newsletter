// check if inpu5 is empty
// get email input
// find position @ and .com
// choose to display error or swnd to next page

let body = document.querySelector('body')
let submitBtn = document.querySelector('#submit-btn')
let dismissBtn = document.querySelector('#dismiss-btn')
let errorMessage = document.querySelector('#error-message')
let input = document.querySelector('input')
let email = document.querySelector('#email')

submitBtn.addEventListener('click', errorCheck)

function errorStyle() {
  input.style.border = '1px solid #EF0E0E'
  input.style.background = '#FDD'
}

function errorCheck(e) {
  let inputValue = input.value
  if (inputValue != '') {
    if (inputValue.includes('@') && inputValue.includes('.com')) {
      if (inputValue.indexOf('@') < inputValue.indexOf('.com')) {
        body.classList.add('clicked')
        email.textContent = inputValue
      } else {
        errorMessage.textContent = 'Valid email required'
      }
    } else {
      errorMessage.textContent = 'Valid email required'
      errorStyle()
    }
  } else {
    errorMessage.textContent = 'Please Input email'
    errorStyle()
  }
  e.preventDefault()
}

dismissBtn.addEventListener('click', () => {
  body.classList.remove('clicked')
  window.open('index.html', self)
})