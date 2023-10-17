# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
- The solution was using a mobile phone with the aid 0f spck editor app for android.
- I had to use an aspect ratio so as to immitate the screen size of an actual desktop

### Built with

- Learn CSS app
- CSS custom properties
- Flexbox

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

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

Thanks to codeliber for their 'learn css' app and also to tutorialspoint

