// navigation transition
const mob_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

mob_nav.addEventListener('click', () => toggleNavbar());

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}



// content songs playing pausing fuctionality
const mySong = document.getElementById('mySong');
const icon = document.getElementById('icon');

icon.addEventListener('click', () => {
    if (mySong.paused) {
        mySong.play();
        icon.src = "./play.png";
    } else {
        mySong.pause();
        icon.src = "./pause.png";
    }
})

