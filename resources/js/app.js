// gsap.registerPlugin(ScrollTrigger)
function initMap() {
     // The location of Uluru
     const uluru = { lat: -11.943081656247514, lng: -77.04747146119634 };
     // The map, centered at Uluru
     const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 18,
          center: uluru,
     });
     // The marker, positioned at Uluru
     const marker = new google.maps.Marker({
          position: uluru,
          map: map,
     });
}
function init(){

     var $menu = '.headerMain'

     const parallaxTl = gsap.timeline({
          ease: 'none',
          scrollTrigger: {
               trigger: '.pingMenu',
               start: 'top center',
               end: 'top center',
               scrub: true, // permite que la animacion se vuelva a reproduccion 
               markers: false,
          }
     })
  


     parallaxTl
          .set($menu,{y:'0%',position:"absolute"})
          .fromTo($menu, {y:'0%'}, {y:'0%', position:"fixed", backgroundColor: '#454545'}, 0.4)
}
window.addEventListener('load', function(){
     initMap()
     init()

});