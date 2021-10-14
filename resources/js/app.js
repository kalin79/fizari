// gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin)
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
function viewMenuMovil(){
     // Ahora activamos el menu del movil

     var $menuMovil = '.navMovil'
     var tlMenu = gsap.timeline()
     tlMenu
          .set($menuMovil,{x:'-100%'})
          .to($menuMovil, .5, {x: '100%'})
}
function closeMenuMovil(){
     // Ahora activamos el menu del movil

     var $menuMovil = '.navMovil'
     var tlMenu = gsap.timeline()
     tlMenu
          .to($menuMovil, .5, {x: '-100%'})
}
function _formContact(){
     $( "#formContacto" ).validate({
          rules: {
               nombres: {
                    required: true,
                    minlength: 2
               },
               apellidos: {
                    required: true,
                    minlength: 2
               },
               celular: {
                    required: true,
                    minlength: 5
               },
               email: {
                    required: true,
                    email: true
               },
               empresa: {
                    required: true,
                    minlength: 3
               },
               ruc: {
                    required: true,
                    minlength: 3
               },
               agree: "required"
          },
          messages: {
               nombres: {
                    required: "Nombre - necesario",
                    minlength: "Como mínimo 2 caracteres"
               },
               apellidos: {
                    required: "Apellidos - necesario",
                    minlength: "Como mínimo 2 caracteres"
               },
               celular: {
                    required: "Telefono - necesarios",
                    minlength: "Como mínimo 5 caracteres"
               },
               email: "Ingrese un correo Correo electronico valido",
               empresa: {
                    required: "Empresa - necesarios",
                    minlength: "Como mínimo 3 caracteres"
               },
               ruc: {
                    required: "RUC - necesarios",
                    minlength: "Como mínimo 3 caracteres"
               },
               agree: "Debe aceptar los Términos y Condiciones y las Políticas de privacidad "
          }
     })
}
$(window).resize(function(){
     if (window.matchMedia("(min-width: 992px)").matches) {
          /* La pantalla tiene al menos 992 píxeles de ancho */
          closeMenuMovil()
     }
});
window.addEventListener('load', function(){
     initMap()
     init()
     _formContact()

     $('.headerMain .boxOptionMenu button').on('click', function(){
          top.location.href = 'contacto.html'
     })

     $( "#formContacto" ).submit(function( event ) {
          event.preventDefault();
          var _flat_term = 0
          
          if ($('#termEmail').is(':checked') != true ) {
               // alert('no')
               $(".label-error").addClass('active error')
               return false
          }else{
               _flat_term = 1
               $(".label-error").removeClass('active error')
          }
          if ($("#formContacto").valid()) {
               var data = {
                    nombres: $('#nombres').val(),
                    apellidos: $('#apellidos').val(),
                    celular: $('#celular').val(),
                    email: $('#email').val(),
                    empresa: $('#empresa').val(),
                    ruc: $('#ruc').val(),
                    pageMessage: $('#pageMessage').val(),
                    _flat_term: _flat_term,
               }
               $("#formContacto .boxButtom button").css('display', 'none')
               $("#formContacto .boxButtom .boxMessageForm").css('display', 'block')
               // return false
               try {
                    $.ajax({
                         url: "email.php",
                         type:"POST",
                         data: data,
                         success:function(response){
                              console.log(response)
                              $("#formContacto")[0].reset()
                              $("#formContacto .boxButtom .boxMessageForm").css('display', 'none')
                              $("#formContacto .boxButtom button").css('display', 'block')
                             
                         },
                         error: function(xhr, status, error){
                              console.log(xhr)
                              console.log(status)
                              console.log(error)
                              $("#formContacto .boxButtom .boxMessageForm").css('display', 'none')
                              $("#formContacto .boxButtom button").css('display', 'block')
                              // alert("Error!" + xhr.status);
                         }
                    })

               } catch (error) {
                    console.log(error)
               } finally{
                    
               }
               
          }
     });


     $("#nombres, #apellidos").bind('keypress', function(event) {
          var regex = new RegExp("^[a-zA-Z ]+$");
          var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
          if (!regex.test(key)) {
               event.preventDefault();
               return false;
          }
     });

     $("#ruc").keydown(function (e) {
          // console.log(e.keyCode)
          if (($("#ruc").val().length < 12) || (e.keyCode == 8)){
               if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) {
                    return;
               }
               if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
               }
          }else{
               e.preventDefault();
          }

     });

     $("#celular").keydown(function (e) {
          // console.log(e.keyCode)
          if (($("#celular").val().length < 12) || (e.keyCode == 8)){
               if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 || (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) {
                    return;
               }
               if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                    e.preventDefault();
               }
          }else{
               e.preventDefault();
          }

     });



     $('.viewMenuMovil').on('click', function(){
          viewMenuMovil()
     })
     $('.closeMenuMovil').on('click', function(){
          closeMenuMovil()
     })

     $('.viewMap').on('click', function(){
          console.log(CSSRulePlugin)
          var sectionMapa = CSSRulePlugin.getRule(".sectionMapa:before")
          var boxButtomMap = '#boxButtomMap'
          var tl2 = gsap.timeline()
          tl2
               .to(boxButtomMap,.5,{scale: 0})
               .to(sectionMapa,.5, {left: '-100%'})
     })

});