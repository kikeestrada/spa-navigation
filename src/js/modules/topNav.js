const topNav = () => {
	const 
		d = document,
		headerBtn = d.querySelector('.hamburger'),
		menu = d.querySelector('.top-nav__menu');
		headerBtn.addEventListener('click', e => {
			e.preventDefault();
			headerBtn.classList.toggle('is-active'),
			menu.classList.toggle('is-active');
		}); 

		d.addEventListener('click', e =>{
			if (e.target.matches('.top-nav__anchor')){
				headerBtn.classList.remove('is-active'),
				menu.classList.remove('is-active');
			}
		})
};

export default topNav
