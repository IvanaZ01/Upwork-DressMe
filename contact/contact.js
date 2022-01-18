const newsletter = document.querySelector('.newsletter');

function removeNewsletter() {
	const browserSize = this.innerWidth;
	if (browserSize > 850) {
		newsletter.classList.add('hidden')
	} else {
		newsletter.classList.remove('hidden')
	}
}

window.addEventListener('resize', removeNewsletter);
window.addEventListener('load', removeNewsletter);
