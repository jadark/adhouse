$(document).ready(function(){
	var slider_baseline = {
	    auto: true,
	    speed: 900,
		nextSelector: '#slider-next',
		prevSelector: '#slider-prev',
		nextText: '',
		prevText: '',
	    pager: true
	}
	var slider_home_top = $('.slider');
	slider_home_top.bxSlider(slider_baseline);
	function initMaplima() {
	  var $map = $('#google-map');
	    if (! $map.length) return;
	      var myLatlng = new google.maps.LatLng(- 12.086676, - 77.058986, 18);
	      var styles = [{
			    "featureType": "all",
			    "elementType": "labels.text.fill",
			    "stylers": [{
			        "saturation": 36
			    }, {
			        "color": "#000000"
			    }, {
			        "lightness": 40
			    }]
			}, {
			    "featureType": "all",
			    "elementType": "labels.text.stroke",
			    "stylers": [{
			        "visibility": "on"
			    }, {
			        "color": "#000000"
			    }, {
			        "lightness": 16
			    }]
			}, {
			    "featureType": "all",
			    "elementType": "labels.icon",
			    "stylers": [{
			        "visibility": "off"
			    }]
			}, {
			    "featureType": "administrative",
			    "elementType": "geometry.fill",
			    "stylers": [{
			        "color": "#000000"
			    }, {
			        "lightness": 20
			    }]
			}, {
			    "featureType": "administrative",
			    "elementType": "geometry.stroke",
			    "stylers": [{
			        "color": "#000000"
			    }, {
			        "lightness": 17
			    }, {
			        "weight": 1.2
			    }]
			}, {
			    "featureType": "landscape",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#000000"
			    }, {
			        "lightness": 20
			    }]
			}, {
			    "featureType": "poi",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#000000"
			    }, {
			        "lightness": 21
			    }]
			}, {
			    "featureType": "road.highway",
			    "elementType": "geometry.fill",
			    "stylers": [{
			        "color": "#000000"
			    }, {
			        "lightness": 17
			    }]
			}, {
			    "featureType": "road.highway",
			    "elementType": "geometry.stroke",
			    "stylers": [{
			        "color": "#000000"
			    }, {
			        "lightness": 29
			    }, {
			        "weight": 0.2
			    }]
			}, {
			    "featureType": "road.arterial",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#000000"
			    }, {
			        "lightness": 18
			    }]
			}, {
			    "featureType": "road.local",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#000000"
			    }, {
			        "lightness": 16
			    }]
			}, {
			    "featureType": "transit",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#000000"
			    }, {
			        "lightness": 19
			    }]
			}, {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [{
			        "color": "#000000"
			    }, {
			        "lightness": 17
			    }]
			}]
	        var mapOptions = {
	              zoom             : 15,
	              center           : myLatlng,
	              mapTypeControl   : true,
	              disableDefaultUI : true,
	              zoomControl      : true,
	              scrollwheel      : false,
	              styles           : styles,
	             draggable        : true
	        }
	        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
	        var marker = new google.maps.Marker({
	        position: myLatlng,map: map,
	         icon:'../images/icon-map.png'
	        });
	}
	google.maps.event.addDomListener(window, 'load', initMaplima);

	/// FIN DEL MAPA
	$('.nav-item').click(function(){
	    $("html, body").animate({ scrollTop: 0 }, 830, 'swing');
	    return false;
	});
	
	//condicional para dectectar primero el HASH y luego ejecutar la animación

	$('.nav a[href*=#]').click(function() {
		 if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		 	var hash =  this.hash;
		 	var $target = $(this.hash);
	        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	        if ($target.length) {
	        	$('.active').removeClass('active'); 
	            $(this).parent().addClass('active'); 
	            var targetOffset = $target.offset().top - 75;
	            $('html,body').animate({scrollTop: targetOffset}, 830, function(){
	            	location.hash = hash;//para obtener el hash
	            });
	            //e.preventDefault();
	            return false;
	        }
		}
	});
	var hash = window.location.hash;
	var especializacion = '#curso-especializacion';
	var cursos = '#cursos';
	var nosotros = '#nosotros';
	var formulario = '#formulario'
	if (hash == pre_inscribete ) {
		//$('.m-cursos').trigger('click');
		//$('body, html').animate({ scrollTop:"-=0"}, 830);
		console.log("activó hash especializacion");
    }else if (hash == especializacion ) {
		//$('.m-cursos-especializacion').trigger('click');
		//$('body, html').animate({ scrollTop:"-=10"}, 830);
		console.log("activó hash especializacion");
    }else if(hash == nosotros){
    	//$('.m-nosotros').trigger('click');
		//$('body, html').animate({ scrollTop:"-=15"}, 830);
		//console.log("activó hash nosotros");
    }

	
	/*$(".nav a").click(function(){
		$(this).addClass("active");
		$(this).siblings().removeClass("active");	
		var name = $(this).attr("href");
		var top = $(name).first().offset().top -60;			
		$('html, body').animate({scrollTop: targetOffset}, 830);
	});*/

	$('.nav a').click(function() {
		if ($(".m-inscribete").parent().hasClass("active")) {
		  $('.nubesLeft').addClass('nubes_animateLeft');
		  $('.nubesRight').addClass('nubes_animateRight');
		}else{
			console.log('sali de esta caja');
			$('.nubesLeft').removeClass('nubes_animateLeft');
			$('.nubesRight').removeClass('nubes_animateRight');
		}
		//$('.nubesLeft').removeClass('nubes_animateLeft');

	});


});

$(window).scroll(function(){
   var scroll = $(window).scrollTop();                
   if (scroll > 0 ) {
      $('.header').css( 'background-color', 'rgba(0,0,0,0.45)');
      $('.header .logo').addClass('activeLogo');
   }
    if (scroll <= 0 ) {
      $('.header').css( 'background-color', 'rgba(0,0,0,0.0)');
      $('.header .logo').removeClass('activeLogo');
    }
    /*
    var sectionIds = {};		
	$('.section').each(function(){	
		var $this = $(this);			
		sectionIds[$this.attr("id")] = $this.first().offset().top -120;	
	});	

    var scrolled = $(this).scrollTop();		
	//If it reaches the top of the row, add an active class to it
	$('.section').each(function(){
		var $this = $(this);
		if(scrolled >= $this.first().offset().top -120){
			$('.section').removeClass("active");
			$this.addClass("active");			
		}
	});

	for (key in sectionIds){
		var c = $("[href=#"+key+"]").parent();
		if (scrolled <= sectionIds[key]){
			c.removeClass("active");
			c.addClass("active");
			console.log(c);
		}
		else{
			c.removeClass("active");
		}
	};
	*/
	
	
});