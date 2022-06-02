/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
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

