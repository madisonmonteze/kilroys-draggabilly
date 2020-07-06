// using jQuery to make the t-shirt images draggable
let $draggable = $('.draggable').draggabilly();

// create marquee effect for byline
function makeMarquee() {
    const title = 'Made by Madison Hardt'
    const marqueeText = new Array(500).fill(title).join(' &mdash; ')
    const marquee = document.querySelector('.marquee span')
    marquee.innerHTML = marqueeText
}
  
// run marquee function
makeMarquee()

// modal popup
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".desc");
var closeButton = document.querySelector(".close");

function toggleModal() {
    modal.classList.toggle("show-modal");
    trigger.classList.toggle("clicked");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
