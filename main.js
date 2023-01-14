/* PASAR CUTIE */

/* gallery */
var video = document.querySelectorAll('video')
video.forEach(play => play.addEventListener('click', () => {
  play.classList.toggle('active');

  if(play.paused){
      play.play();
  }
  else{
    play.pause();
    play.currentTime = 0;
  }
} 
));




/* CONTACT */
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

  /* carousel */
  $('.owl-carousel').owlCarousel({
    items:1,
    merge:true,
    loop:true,
    margin:10,
    video:true,
    lazyLoad:true,
    center:true,
    responsive:{
        480:{
            items:2
        },
        600:{
            items:4
        }
    }
})
  


  /* footer */
  
footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

