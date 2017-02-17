//When start button clicked, show questions, start and display timer
$('#start').click(function() {
	$('#quiz').toggle('slow', function() {
    	// Animation complete.
	});

  //Start and display timer of 30 seconds
  
  window.onload = function () {
  	var display = document.querySelector('#time'),
  	timer = new CountDownTimer(30),
  	timeObj = CountDownTimer.parse(30);

  	format(timeObj.minutes, timeObj.seconds);

  	timer.onTick(format);

  	document.querySelector('start').addEventListener('click', function () {
  		timer.start();
  	});

  	function format(minutes, seconds) {
  		minutes = minutes < 10 ? "0" + minutes : minutes;
  		seconds = seconds < 10 ? "0" + seconds : seconds;
  		display.textContent = minutes + ':' + seconds;
  	}
  };
  
});
	
  var correctAnswers = 0;
  var incorrect = 5 - correctAnswers;
  var answers = ["a", "c", "d", "b", "a"]
  	total = answers.length;
  var ans1 = "a";
  var ans2 = "c";
  var ans3 = "d";
  var ans4 = "b";
  var ans5 = "a";

  	function getCheckedValue(radioName){
	    var radios = document.getElementsByName(radioName); // Get radio group by-name
	    for(var y=0; y<radios.length; y++)
	      if(radios[y].checked) return radios[y].value; // return the checked value
		}

	function getScore(){
		  for (var i=0; i<total; i++)
		    if(getCheckedValue("q"+i)===answers[i]) correctAnswers += 1; // increment only
		  return correctAnswers;
		}
  /*
  var cat1 = ($("input[@name=q1]:checked").val() != "a");
  var cat2 = ($("input[@name=q2]:checked").val() != "c");
  var cat3 = ($("input[@name=q3]:checked").val() != "d");
  var cat4 = ($("input[@name=q4]:checked").val() != "b");
  var cat5 = ($("input[@name=q5]:checked").val() != "d");

  if (cat1 === true)
  	correctAnswers++;

  else incorrect++;

  if (cat2 === true)
  	correctAnswers++;

  else incorrect++;

  if (cat3 === true)
  	correctAnswers++;

  else incorrect++;

  if (cat4 === true)
  	correctAnswers++;

  else incorrect++;

  if (cat5 === true)
  	correctAnswers++;

  else incorrect++; */

//Display results when clicked
$('#submit').click(function() {
	$('#quiz').hide();
	$('#results').toggle('slow', function() {
	    // Animation complete.

	    console.log(correctAnswers);
	    console.log(incorrect);

	    $('#correct').append(correctAnswers);
	    $('#incorrect').append(incorrect);

	    if (correctAnswers === 5)
	    	$('#message').append("AMAZING! You're an Arsenal Legend!")

	})
})