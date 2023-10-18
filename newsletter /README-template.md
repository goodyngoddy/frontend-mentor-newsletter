# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


## My process
- The solution was using a mobile phone with the aid 0f spck editor app for android.
- I had to use an aspect ratio so as to immitate the screen size of an actual desktop before I finally decided to set the width and height of the body to 100% and left the aspect ratio to the content alone.
- 

### Built with

- Learn CSS app
- CSS custom properties
- Flexbox

### What I learned

I learnt about the use of the @font-face selector, and also how to alter the default form submit character of a form when the button is clicked.

```css
#top {
  content: url("/newsletter /assets/images/icon-list.svg");
}
```
```css
@font-face {
  font-family: Roboto-Bold;
  src: url('/newsletter /assets/fonts/Roboto-Bold.ttf');
}
```
```js
if (inputValue.indexOf('@') < inputValue.indexOf('.com')) {
  body.classList.add('clicked')  
}
```
```js
function errorCheck(e) {
  e.preventDefault()
}
```

### Continued development

Wish to improve more on my css and javascript coding capabilities.


### Useful resources

- [form submission control] (https://www.tutorialspoint.com/how-to-stop-refreshing-the-page-on-submit-in-javascript#:~:text=The%20preventDefault()%20and%20%22return,form%20submission%20without%20page%20refresh.)
  -- This helped me to fix the disappering erroe messages. I really liked this pattern and will use it going forward.

- [font addition] ('learn css' app by codelibar)  
  -- help me to know how to add font styles from files using the @font-face syntax

## Author

- Frontend Mentor - [@goodnewsngodspower](https://www.frontendmentor.io/profile/goodnewsngodspower)

## Acknowledgments

Thanks to codeliber for their 'learn css' app and also to tutorialspoint.
And thanks to frontender for this opportunity. I look forwarđ to mp5e challenges.

