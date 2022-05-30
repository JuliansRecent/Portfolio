// Let

// Nav page and it's nav button
const navPage = document.querySelector('.nav-page');
const navButton = document.querySelector('.nav-button');

// Main  page and it's nav button
const mainPage = document.querySelector('.name-and-title-container');
const homeButton = document.querySelector('.home-link');

// About me page and it's nav button
const aboutMePage = document.querySelector('.about-me-page');
const aboutMeButton = document.querySelector('.about-me-link');

// Resume nav button
const resumeButton = document.querySelector('.resume-link');

// Projects page and it's nav button
const projectsPage = document.querySelector('.projects-page');
const projectsButton = document.querySelector('.projects-link');

// Contact page, it's nav button, send button, and form
const contactPage = document.querySelector('.contact-page');
const contactButton = document.querySelector('.contact-link');
const sendButton = document.querySelector('.send-button');
const formInputs = document.querySelectorAll('.inputs');
// Const

// Event Listeners
// NAV
navButton.addEventListener('click', navPageAppear);
// HOME
homeButton.addEventListener('click', homePageAppear);
// ABOUT ME
aboutMeButton.addEventListener('click', aboutMePageAppear);
// PROJECTS
projectsButton.addEventListener('click', projectsPageAppear);
// CONTACT
contactButton.addEventListener('click', contactPageAppear);
// SEND-BUTTON
sendButton.addEventListener('click', clearForm);
// Functions
// Brings the nav page up and makes other pages hide
function navPageAppear() {
	navPage.classList.remove('hidden');
	mainPage.classList.add('hidden');
	aboutMePage.classList.add('hidden');
	projectsPage.classList.add('hidden');
	contactPage.classList.add('hidden');
}

// Brings the home page up and makes the nav page hide
function homePageAppear() {
	mainPage.classList.remove('hidden');
	navPage.classList.add('hidden');
}

// Brings the about me page up and makes the nav page hide
function aboutMePageAppear() {
	aboutMePage.classList.remove('hidden');
	navPage.classList.add('hidden');
}

// Brings the projects page up and makes the nav page hide
function projectsPageAppear() {
	projectsPage.classList.remove('hidden');
	navPage.classList.add('hidden');
}

// Brings the contact page up and makes the nav page hide
function contactPageAppear() {
	contactPage.classList.remove('hidden');
	navPage.classList.add('hidden');
}

// Resets the form after the submit button is clicked
function clearForm() {
    formInputs.value = '';
}

