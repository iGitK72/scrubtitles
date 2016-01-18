$(function() {
  //dom is ready
  $(".brandname").addClass("shakr");
  $(".wrap:focus").removeClass("hideheader");
  
  var genres = ['comedy', 'romance', 'horror'];
  var languages = ['da', 'en'];
  var currentLanguage = 0;
  var subcolors = ['green', 'pink', 'red' ];
  var currentGenre = 0;
  var iterate = 1;
  
  idleTimer = null;
  idleState = false;
  idleWait = 2000;
  
  $("video source").after('<track label="Sitcom" kind="subtitles" srclang="da" src="subtitles/' + genres[currentGenre] + "_" + languages[currentLanguage] + '.vtt" default>');
	
	function swipeFunction() {
		//Enable swiping...
		$("body").swipe( {
			//Generic swipe handler for all directions
				swipe:function(event, direction, distance, duration, fingerCount, fingerData) {					

					//get dashboard = left swipe
					if (direction == "left") {
  					$("#dashboard").removeClass("hide");
					}

					//swipe down
					if (direction == "down") {
  					if(currentGenre <= 0){
    					currentGenre = genres.length - 1;
              addSubTrack();
  					} else {
    					currentGenre--;
    					addSubTrack();
  					}
					}
					//swipe up
					if (direction == "up"){
  					
  					if(currentGenre >= genres.length - 1){	
    					//console.log(currentGenre + " should be two.");
    					currentGenre = 0;
    					//console.log(currentGenre + " should be zero.");
              addSubTrack();
  					} else {
    					currentGenre++;
    					addSubTrack();
  					}
						
					}
					
					if (direction == "right"){
						if (currentLanguage == 0) {
							currentLanguage = 1;
							addSubTrack()
						} else {
							currentLanguage = 0;
							addSubTrack()
						}
					}
				},
				//Default is 75px, set to 0 for demo so any distance triggers swipe
				threshold:0
			});
	}
	
  function addSubTrack(){
    $("video track").remove();
    $("video source").after('<track label="Sitcom" kind="subtitles" srclang="da" src="subtitles/' + genres[currentGenre] + "_" + languages[currentLanguage] + '.vtt" default>');
    //document.getElementById('genrecolor').innerHTML = '::cue { color:' + subcolors[currentGenre] + '; }';
    $("#genre").removeClass().addClass(genres[currentGenre] + " hidegenre");
       setTimeout(function() {
        $("#genre").removeClass("hidegenre");
    }, 500)
    };
    
    $('*').bind('mousemove keydown scroll', function () {
        
            clearTimeout(idleTimer);
                    
            if (idleState == true) { 
                
                // Reactivated event
                $(".wrap").removeClass("hideheader");            
            }
            
            idleState = false;
            
            idleTimer = setTimeout(function () { 
                
                // Idle Event
                $(".wrap").addClass("hideheader");
                
                idleState = true; }, idleWait);
        });
        
        $("body").trigger("mousemove");
    

	
	
	function shakeFunction() {
		var myShakeEvent = new Shake({
		    //threshold: 15, // optional shake strength threshold
		    //timeout: 1000 // optional, determines the frequency of event generation
		});
		
		$(document).on("keypress", function (e) {
			// use e.which
			if (event.keyCode >= 83) { // if a letter pressed
				shakeEventDidOccur ();
  			}
			
		});
		
		window.addEventListener('shake', shakeEventDidOccur, false);
		myShakeEvent.start();
	
		//function to call when shake occurs
		function shakeEventDidOccur () {
			
			var videos = [
			'http://stm.dam.digizuite.dk/dmm3bwsv3/372_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885493452760000',
			'http://stm.dam.digizuite.dk/dmm3bwsv3/306_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885491307190000',
			'http://stm.dam.digizuite.dk/dmm3bwsv3/355_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885492626700000',
			'http://stm.dam.digizuite.dk/dmm3bwsv3/362_10032_10001_1_2_0_a91f0be4-6ca7-45dd-97b9-873987e294ff.mp4?635885493035970000'
			];
			
			
			//var randomNumber = Math.floor(Math.random() * 3);  
			if (iterate <= videos.length -1){
		    	++iterate;
		    	console.log(iterate);
		    	document.querySelector("video").src = videos[iterate -1];
		    } else {
			    
			    iterate = 1;
			    console.log(iterate);
			    document.querySelector("video").src = videos[iterate -1];
		    }
		}
	}
	$("#closedash").click(function(){
  	$("#dashboard").addClass("hide");
	});
	
	shakeFunction();
	swipeFunction();
});