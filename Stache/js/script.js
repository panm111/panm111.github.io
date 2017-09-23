$(document).ready(function(){
	// console.log("ready");

	var mobileMediaQuery = window.matchMedia("(max-width: 1023px)");
	var desktopMediaQuery = window.matchMedia("(min-width: 1024px)");

	function mobileSetup(){
		$("#mapIcon").hide();
		$("#filterIcon").show();
		$("#logo").show();
		$("#listIcon").show();
		$('.listView').hide();
		$(".filterHeader").hide();
		$(".filterView").hide();
		$(".notification").hide();
	}

	function desktopSetup(){
		$('.mapView').show();
		$('.listView').show();
		$(".filterHeader").hide();
		$(".filterView").hide();
		$('.blurBackground').hide();
		$("#mapIcon").hide();
		$("#listIcon").hide();
		$("#filterIcon").hide();
		$(".notification").hide();
	}

	function mobile(){
			mobileSetup();
			console.log("mobile");
	}

	function desktop(){
			desktopSetup();
			console.log("desktop");
	}

	function mobileDetection(){
		if(mobileMediaQuery.matches){
			mobile();
		}else if(desktopMediaQuery.matches){
			desktop();
		}
	}

	function chooseOption(){
		var tiny = $('#optionText1').text();
		// var tiny = "Tiny";
		var small = $('#optionText2').text();
		// var small = "Small"
		var medium = $('#optionText3').text();
		// var medium = "Medium";
		var large = $('#optionText4').text();
		// var large = "Large";

		$('#option1').click(function(){
			$('#selectedOption').text(tiny);
			$('.selectedSizeIcon').attr('src', '../../assets/mobileTIcon.png');
			$('.options').removeClass('activeOption', 'activeOption p');			$(this).addClass('activeOption', 'activeOption p');
			$('.dropdownOptions').hide();
		});

		$('#option2').click(function(){
			$('#selectedOption').text(small);
			$('.selectedSizeIcon').attr('src', '../../assets/mobileSIcon.png');
			$('.options').removeClass('activeOption', 'activeOption p');
			$(this).addClass('activeOption', 'activeOption p');
			$('.dropdownOptions').hide();
		});

		$('#option3').click(function(){
			$('#selectedOption').text(medium);
			$('.selectedSizeIcon').attr('src', '../../assets/mobileMIcon.png');
			$('.options').removeClass('activeOption', 'activeOption p');
			$(this).addClass('activeOption', 'activeOption p');
			$('.dropdownOptions').hide();
		});

		$('#option4').click(function(){
			$('#selectedOption').text(large);
			$('.selectedSizeIcon').attr('src', '../../assets/mobileLIcon.png');
			$('.options').removeClass('activeOption', 'activeOption p');
			$(this).addClass('activeOption', 'activeOption p');
			$('.dropdownOptions').hide();
		});
	}

	function successNotification(){
		new Noty({
		    type: 'success',
		    layout:'topCenter',
		    text: 'Success! Your filters have been applied!',
		    animation: {
		        open: 'animated fadeInDown', // Animate.css class names
		        close: 'animated fadeOutUp' // Animate.css class names
		    },
		    timeout: 1000,
		    progressBar: false,
		}).show();
	}

	function errorNotification(){
		new Noty({
		    type: 'error',
		    layout: 'topCenter',
		    text: 'Oops! Your filters were not applied! Please try again.',
		    animation: {
		        open: 'animated fadeInDown', // Animate.css class names
		        close: 'animated fadeOutUp' // Animate.css class names
		    },
		    timeout: 1000,
		    progressBar: false,
		}).show();
	}

	mobileDetection();
	mobileMediaQuery.addListener(mobileDetection);
	// desktopMediaQuery.addListener(mobileDetection);

	$("#listIcon").click(function(){
		$("#mapIcon").show();
		$(".mapView").hide();
		$("#listIcon").hide();
		$(".listView").show();
	});

	$("#mapIcon").click(function(){
		$("#listIcon").show();
		$(".listView").hide();
		$("#mapIcon").hide();
		$(".mapView").show();
	});

	$("#filterIcon").click(function(){
		$(".filterHeader").show();
		$(".filterView").show();
		$(window).scrollTop(0);

		$('.listView').hide();
		$('.mapView').hide();
	});

	$('.desktopFilter').click(function(){
		$(".filterView").show();
		$('.blurBackground').show();
		$('.desktopFilter').addClass('desktopFilterActive');
		$('.filterArrow').addClass('filterActive');
		$('.filterArrow img').attr('src', '../../assets/forwardIconWhite.png');
		$('.filterView').scrollTop(0);
	});

	$('.filterArrow').click(function(){
		$(".filterView").show();
		$('.blurBackground').show();
		$('.desktopFilter').addClass('desktopFilterActive');
		$('.filterArrow').addClass('filterActive');
		$('.filterArrow img').attr('src', '../../assets/forwardIconWhite.png');
		$('.filterView').scrollTop(0);
	});

	$("#backIcon").click(function(){
		$(".filterHeader").hide();
		$(".filterView").hide();

		var mapIconShow = $('#mapIcon').is(':visible');
		var mapIconHide = $('#mapIcon').is(':hidden');
		var listIconShow = $('#listIcon').is(':visible');
		var listIconHide = $('#listIcon').is(':hidden');

		if(mapIconShow && listIconHide){
			$('.listView').show();
			$('#listIcon').hide();
			// console.log('showing list')
		} 

		if(listIconShow && mapIconHide){
			$('.mapView').show();
			$('#mapIcon').hide();
			$('.listView').hide();
			// console.log('showing map');
		}

		// alert("error!");
		console.log("error");
		errorNotification();

	});

	$('.blurBackground').click(function(){
		$(".filterView").hide();
		$('.blurBackground').hide();
		$('.desktopFilter').removeClass('desktopFilterActive');
		$('.filterArrow').removeClass('filterActive');
		$('.filterArrow img').attr('src', '../../assets/forwardIcon.png');

		// alert("error!");
		console.log("error");
		errorNotification();
	});

	$(".mobileApply").click(function(){
			$(".filterHeader").hide();
			$(".filterView").hide();

			var mapIconShow = $('#mapIcon').is(':visible');
			var mapIconHide = $('#mapIcon').is(':hidden');
			var listIconShow = $('#listIcon').is(':visible');
			var listIconHide = $('#listIcon').is(':hidden');

			if(mapIconShow && listIconHide){
				$('.listView').show();
				$('#listIcon').hide();
				// console.log('showing list')
			} 

			if(listIconShow && mapIconHide){
				$('.mapView').show();
				$('#mapIcon').hide();
				$('.listView').hide();
				// console.log('showing map');
			}

			// alert("success!");
			successNotification();
			console.log("success");
		});

	$('.desktopApply').click(function(){
			$(".filterView").hide();
			$('.blurBackground').hide();
			$('.desktopFilter').removeClass('desktopFilterActive');
			$('.filterArrow').removeClass('filterActive');
			$('.filterArrow img').attr('src', '../../assets/forwardIcon.png');

			console.log("success");
			// alert("success!");
			successNotification();
		});

	$('.dropdownOptions').hide();

	$('#spaceSize').click(function(){
		$('.dropdownOptions').toggle();
		chooseOption();
	});


});

function initMap() {
        var sf = {lat: 37.774, lng: -122.419};
        var location1 = {lat: 37.800180, lng: -122.398633};
        var location3 = {lat: 37.793140, lng: -122.389412};
        var location2 = {lat: 37.795133, lng: -122.392411};

        var iconImage = "../../assets/mobileMarker.png";
        
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: sf,
          disableDefaultUI: true
        });
        
        var marker3 = new google.maps.Marker({
          position: location3,
          map: map,
          icon: iconImage
        });

        var marker2 = new google.maps.Marker({
          position: location2,
          map: map,
          icon: iconImage,
          zIndex: google.maps.Marker.MAX_ZINDEX + 1
        });

        var marker = new google.maps.Marker({
          position: location1,
          map: map,
          icon: iconImage,
        });
        
      }
