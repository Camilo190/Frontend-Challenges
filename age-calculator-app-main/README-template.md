# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![imagen](./img.jpg)


### Links

- Solution URL: [Add solution URL here](https://github.com/Camilo190/camilo190.github.io)
- Live Site URL: [Add live site URL here](https://camilo190.github.io/age-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript vanilla

### What I learned

I learned how to calculate diff between dates.

I specially like how the form part was built. I thought it was impossible to me to recreate the view from html and css vanilla, but I almost got it :)

```html
<div class="input">
  <div>
    <p class="label-d">Day</p>
    <input type="text" placeholder="DD" id="day">
    <span class="error day-error"></span>
  </div>
  <div>
    <p class="label-m">Month</p>
    <input type="text" placeholder="MM" id="month">
    <span class="error month-error"></span>
  </div>
  <div>
    <p class="label-y">Year</p>
    <input type="text" placeholder="YYYY" id="year">
    <span class="error year-error"></span>
  </div>
</div>
```
```css
.input{
    display: flex;
}
.input div {
    width: 9rem;
}
.input p {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: x-small;
    margin-bottom: 2px;
    font-family: poppins-bold;
}
.input input {
    font-size: x-large;
    width: 85%;
    border-radius: 0.3rem;
    padding-left: 0.8rem;
    height: 3.5rem;
    border: 1px solid var(--light-grey);
    font-family: poppins-bold;
    font-weight: 700;
}
input:focus {
    border: 1px solid var(--purple);
}
input::placeholder{
    font-size: 1.5rem;
    font-weight: 100;
}
```
## Author

- Frontend Mentor - [Camilo190](https://www.frontendmentor.io/profile/camilo190)

