var tl = gsap.timeline();
function animationBanner(id){
     var title = `.sectionBanner .item${id} .boxTitleBanner  h2 span`
     var desription = `.sectionBanner .item${id} .boxDescripcionBanner p`
     var buttom = `.sectionBanner .item${id} .boxButtom`
     tl
         .from(title, {duration: .5, autoAlpha: 0, y: '-30', stagger: .25, ease:Power4.easeInOut},.5)
         .from(desription, {duration: .5, autoAlpha: 0, x: '-30', ease:Power4.easeInOut})
         .from(buttom, {duration: .5, autoAlpha: 0, y: '30', ease:Power4.easeInOut})
}
function restartAnimation(){
     tl.restart()
     tl.play()
 }
function carruselSliderHome(){
     $('.owl-carruselHome').owlCarousel({
          loop: false,
          margin: 0,
          dots: true,
          responsiveClass: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsive:{
               0:{
                    items: 1,
               }
          }
     })
     $('.owl-carruselHome').on('changed.owl.carousel', function(event) {
         console.log(1)
         // tl.kill()
         restartAnimation()
     })
     // setTimeout(() => {
     //     $('.owl-carruselHome .owl-dots').addClass('container relative')
     // },100);
     for (i = 1 ; i <= 3 ; i++ ){
         animationBanner(i)
     }
     
 }
window.addEventListener('load', function(){
     carruselSliderHome()
});