# Frontend Mentor - Bookmark landing page

This is a solution to the [Officelite website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview
I enjoyed this challenge, there were certainly some challenging aspects to the layout, particulary with the 'downloads' section transitioning from mobile to desktop with CSS grids.

### The challenge
Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the newsletter form is submitted if:
- The input field is empty
- The email address is not formatted correctly

### Screenshot

![Site](screenshot.PNG)

### Links

- [Live site](https://bookmark-landing-page77.netlify.app/)

### Built with

- Semantic HTML5 markup
- SCSS/CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- Vite


### What I learned
During testing I noticed that not all of my svg files in my images folder were being deployed
to my dist folder in the build process. Some of the SVG file paths were only referenced in the JavaScript files. These images would only become visible once a user switches tabs in the features section. 
Vite doesnt process assets that are dynamically referenced in JavaScript.

So my files had to be explcitly imported into the JavaScript files so Vite would include them in the build.

```js
import tab1 from '../images/illustration-features-tab-1.svg';
import tab2 from '../images/illustration-features-tab-2.svg';
import tab3 from '../images/illustration-features-tab-3.svg';
```

### Accessibility 

While trying to make my site more accessible to people with screen readers I discovered that
using the tab key does not focus on some of the social icons in the navigation and footer. Additionally, when the mobile navigation menu is open, users can tab out of it and access other elements on the site. While researching this I came across something called 'Focus trapping'.Focus trapping is a technique used to keep the focus within a specific area, such as a modal or overlay. 

I have labeled my buttons and other interactive elements of my websites but I have found that the topic of accessibility to be quite deep and I will look into it more in my next challenge. For now I have just added the basic accessibility and tested it with a screen reader.
