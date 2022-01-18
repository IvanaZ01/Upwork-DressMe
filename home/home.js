const sliderDotsCenter = document.querySelector('.slider-dots-center');
const slider = document.querySelector('.slider');

const elementsForDesktopHome = [
	slider,
];

const elementsForMobileHome = [sliderDotsCenter];

function setVisibilityBasedOnWindowSize() {
	const browserSize = this.innerWidth;
	if (browserSize > 850) {
		elementsForDesktopHome.forEach((element) => element.classList.remove('hidden'));

		elementsForMobileHome.forEach((element) => element.classList.add('hidden'));
	} else {
		elementsForDesktopHome.forEach((element) => element.classList.add('hidden'));

		elementsForMobileHome.forEach((element) => element.classList.remove('hidden'));
	}
}

window.addEventListener('resize', setVisibilityBasedOnWindowSize);
window.addEventListener('load', setVisibilityBasedOnWindowSize);
