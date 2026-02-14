// Automatically update footer year and set its text to the current year
document.getElementById("year").textContent = new Date().getFullYear();


// Get menu button and navigation links container
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// When the menu button is clicked,
// toggle the "open" class to show/hide the menu
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


// Close the menu when a link is clicked
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") navLinks.classList.remove("open");
});


// Get theme toggle button
const themeBtn = document.getElementById("themeBtn");

// Check if user previously selected dark mode
const savedTheme = localStorage.getItem("theme");


// If saved theme is dark, apply it on page load
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "☀️";
}

// When user clicks theme button
themeBtn.addEventListener("click", () => {
  // Toggle dark class on body
  document.body.classList.toggle("dark");
  //Check if dark mode is currently active
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  //Change button icon
  themeBtn.textContent = isDark ? "☀️" : "🌙";
});


// Get form and message element
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

//When form is submitted
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Display confirmation message
  formMsg.textContent = "Thanks! Your message has been recorded.";
  // Clear form fields
  contactForm.reset();
});
