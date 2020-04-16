const navSlide = () => {
	const lines = document.querySelector('.lines');
	const nav = document.querySelector('.nav-bar');
	const navBar = document.querySelectorAll('.nav-bar li');
	
		lines.addEventListener('click', () => {
			nav.classList.toggle("nav-active");

			//animate links
			navBar.forEach((link, index) => {
				if(link.style.animation) {
					link.style.animation = '';
				} else {
					link.style.animation = `navLinkFade 0.3s ease forwards ${index/7 + 1}s`;
				}
				
			});

			//lines(burger) animation
			lines.classList.toggle('toggle');

		});
		//Reference: https://www.youtube.com/watch?v=gXkqy0b4M5g
	
}
navSlide();
