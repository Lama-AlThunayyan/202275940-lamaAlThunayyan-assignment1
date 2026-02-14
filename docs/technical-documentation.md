# Technical Documentation

## 1. Project Overview

This project is a single-page portfolio website developed using HTML, CSS, and JavaScript.  

It presents the student's information and two desktop application projects:
- Folder Visualizer
- Weekly Schedule Distance Visualizer
---

## 2. File Responsibilities

### index.html
Contains:
- Navigation bar
- About section
- Projects section
- Contact section
- Footer

---

### css/styles.css
Responsible for:
- Layout design
- Color themes
- Typography
- Card styling
- Responsive behavior
- Dark mode styling

---

### js/script.js
Implements:

1. **Theme Toggle**
   - Adds/removes `dark` class on `<body>`
   - Stores user preference using `localStorage`

2. **Mobile Menu Toggle**
   - Opens/closes navigation menu on small screens

3. **Contact Form Interaction**
   - Prevents default form submission
   - Displays confirmation message
   - Resets form fields

4. **Dynamic Footer Year**
   - Automatically updates copyright year

---

## 3. Responsive Design Strategy

- CSS Grid used for project cards layout
- Grid switches from 2 columns (desktop) to 1 column (mobile)
- Navigation converts to collapsible menu on smaller screens

---

## 4. Performance Considerations

- No external frameworks used
- Lightweight styling
- No unnecessary JavaScript libraries

---

## 5. Browser Compatibility

Tested on:
- Google Chrome
- Microsoft Edge
