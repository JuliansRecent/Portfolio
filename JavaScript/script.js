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
// Const

// Event Listeners
navButton.addEventListener('click', navPageAppear);
homeButton.addEventListener('click', homePageAppear);
aboutMeButton.addEventListener('click', aboutMePageAppear);

// Functions
function navPageAppear() {
    navPage.classList.remove('hidden');
    mainPage.classList.add('hidden');
    aboutMePage.classList.add('hidden');
};

function homePageAppear() {
    mainPage.classList.remove('hidden');
    navPage.classList.add('hidden');
}

function aboutMePageAppear() {
	aboutMePage.classList.remove('hidden');
	navPage.classList.add('hidden');
}
