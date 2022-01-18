const desktopNavbar = document.querySelector('.desktop-navbar');
const mobileNavbar = document.querySelector('.mobile-navbar');
const mobileNavSpacer = document.querySelector('.nav-spacer');
const footerIcons = document.querySelector('.footer-second');
const footerContactList = document.querySelector('.footer-contact-list');
const listTitle = document.querySelector('.list-title');

const elementsForDesktop = [
	desktopNavbar,
	footerIcons,
	footerContactList,
	listTitle,
];

const elementsForMobile = [mobileNavbar, mobileNavSpacer];

function setVisibilityBasedOnWindowSize() {
	const browserSize = this.innerWidth;
	if (browserSize > 850) {
		elementsForDesktop.forEach((element) => element.classList.remove('hidden'));

		elementsForMobile.forEach((element) => element.classList.add('hidden'));
	} else {
		elementsForDesktop.forEach((element) => element.classList.add('hidden'));

		elementsForMobile.forEach((element) => element.classList.remove('hidden'));
	}
}

window.addEventListener('resize', setVisibilityBasedOnWindowSize);
window.addEventListener('load', setVisibilityBasedOnWindowSize);
