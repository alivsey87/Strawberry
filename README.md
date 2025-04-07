
# Frameworks & Intro to JS Project: Strawberry.com

---
---

## For this project, I decided to recreate the [apple.com](https://apple.com) website! Ths is a simplified version but I tried to keep the overall look the same and used the Strawberry as the mascot instead of an apple

---
---

## TABLE OF CONTENTS

1. [Strawberry](#1-strawberry)

2. [Navigation Bar](#2-navigation-bar)

3. [Home](#3-home)

4. [What's New](#4-whats-new)

5. [Deals](#5-deals)

6. [Prices](#6-prices)

7. [Subscribe](#7-subscribe)

8. [Footer](#8-footer)

9. [Style CHoices/Bootstrap Components](#9-style-choicesbootstrap-components)

---
---

## 1. Strawberry

In order to create something similar to apple.com, I decided to use the same concept of a bitten-into fruit to sort of parody the Apple site. I designed a quick logo of a strawberry with a bite (and used that "bitten" portion for the leaf on the top) and rotated the entire logo to the left just to not make it TOO similar. I even included a favicon styled similarly to the Apple favicon.

---
---

## 2. Navigation Bar

The apple.com navigation bar is pretty simple, however it has a very cool back-drop filter so that anything behind it blurs. I added this to my navbar as well with the following style to imitate the Apple navbar:

```css
background-color: rgba(50, 50, 50, 0.4);
backdrop-filter: blur(10px)
```

The navbar used mostly Bootstrap classes for styling. The logo itself has an ease-in-out transition on hover that mimics the Apple logo mouse hover. I added two different `<a>` elements for the logo, one for the centered items of the navbar, and one that appears at the start of the navbar when the collapsible appears on smaller screens.

---
---

## 3. Home

For the landing page/home, I used the apple.com layout and created a couple hero sections that advertise the "featured" products. I added a subtle animation to the first hero image just for a cool effect to emphasize the blue "glow" of the speaker:

```css
animation: blue-glow 4s infinite;
```

```css
@keyframes blue-glow {
    0% {
        filter:brightness(1) contrast(1) saturate(1);
    }
    50% {
        filter:brightness(1.8) contrast(1.2) saturate(1.2);
    }
    0% {
        filter:brightness(1) contrast(1) saturate(1);
    }
}
```

Again, using plenty of Bootstrap to handle the responsiveness and structure of the hero sections. I used some z-index and positioning to keep the images in the back and have the headers and buttons stack on top.

---
---

## 4. WHAT'S NEW

This section is styled after the section on apple.com with the grid-style deals and announcements. I used a good amount of CSS styling to get the pictures to align correctly, the text to appear appropriately and (along with Bootstrap) create the gaps similar to those used on the apple.com site.

---
---

## 5. DEALS

I used the carousel Bootstrap Component here to present a slideshow of "deals" offered. I had to do a lot of custom CSS styling here to not only get the pictures lined up correctly, but also keep them as responsive as I could (not totally happy with how it came out, but it does the job).

---
---

## 6. PRICES

I used a simple Bootstrap table here to include a list of products, including their description and prices.

---
---

## 7. SUBSCRIBE

I created a basic form using Bootstrap for users to subscribe to marketing emails. All that is required is a user's first name, last name and email address. Basic validation.

---
---

## 8. FOOTER

I added a basic footer with a bit of CSS styling for a box shadow and the name/copyright as a link back to the home section.

---
---

## 9. STYLE CHOICES/BOOTSTRAP COMPONENTS

The buttons on the apple.com were very easy to imitate as they look like Bootstrap buttons! For the most part, the styling of the buttons follow:

```html
<a href="#" class="btn btn-primary rounded-pill">
```

To replicate the gap/gutter styling, I set many of the sections with the `mt-3` Bootstrap class and used this for the main content gaps:

```html
<div class="row gx-1 gy-4">
  ```

I used the "Strawberry" logo next to header text to replicate the way Apple did it for a few of their items. I achieved this with mostly Bootstrap:

```html
<div class="container-fluid d-flex justify-content-center align-items-center">
        <img id="hero-two-logo" class="d-inline" src="static/s-logo-white.png" alt="hero 2 header logo">
        <h2 class="d-inline pt-1 ms-1 mb-0">TECH</h2>
</div>
```

I used the following Bootstrap Components:

- Buttons
- Carousel
- Collapse
- Navbar
- Scrollspy

All images were downloaded from [UnSplash](https://unsplash.com)!

[back to top](#frameworks--intro-to-js-project-strawberrycom)
