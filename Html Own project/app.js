
const menu = document.querySelector('#mobile-menu') /*target natin dito yung bar icon*/
const menuLinks = document.querySelector('.navbar__menu') /*Target natin dito yung entire ul or yung links natin*/
// add functions
const navLogo = document.querySelector('#navbar__logo')
//Gagawa tayo ng functions
// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//Show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const experienceMenu = document.querySelector('#experience-page')
    //scroll position
    let scrollPos = window.scrollY
    console.log(scrollPos)
    
    //create a logic
    //adds 'highlights' class to my menu items
    //this highlights is for windows only not for mobile
    if(window.innerWidth > 960 && scrollPos < 600) {
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }   else if (window.innerWidth > 960 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        experienceMenu.classList.remove('highlight')
        return
    }   else if (window.innerWidth > 960 && scrollPos < 2345) {
        experienceMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }    

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }

}
// triggered this function
window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile menu when i click it
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};
// to triggered this function

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);

// typing text animation
const text = doucument.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelance";
    }, 0);
    setTimeout(() => {
        text.textContent = "Blogger";
    }, 4000);
    setTimeout(() => {
        text.textContent = "YouTuber";
    }, 8000);
}

textLoad();
setInterval()
