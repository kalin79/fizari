function carruselSliderBanners(){
     $('.owl-carruselBanners').owlCarousel({
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
}
function carruselSliderFlota(){
     $('.owl-carruselFlota').owlCarousel({
          loop: false,
          margin: 0,
          dots: true,
          nav: true,
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
}
window.addEventListener('load', function(){
     carruselSliderBanners()
     carruselSliderFlota()
});