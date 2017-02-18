var count = 30;
var counter = setInterval(timer, 1000); //1000 will  run it every 1 second
var correctAnswers = 0;
var incorrect = 5 - correctAnswers;
var answers = ["a", "c", "d", "b", "a"]
  total = answers.length;

/*function timer() {
		count = count-1;
		if (count <= 0) {
		    clearInterval(counter);
		    return;
		}
}*/
//When start button clicked, show questions, start and display timer
$('#start').click(function() {
	$('#quiz').toggle('slow', function() {
		
    	// Animation complete.
	});
	$('#start').hide();
  //Start and display timer of 30 seconds
  	
  	function timer() {
		count = count-1;
		if (count <= 0) {
		    clearInterval(counter);
		    return;
		}
	}

});
	

  	function getCheckedValue(radioName) {
	    var radios = document.getElementsByName(radioName); // Get radio group by-name
	    for(var y=0; y<radios.length; y++)
	      if(radios[y].checked) 
	      	return radios[y].value; // return the checked value
		}

	function getScore() {
		  for (var i=0; i<total; i++)
		    if(getCheckedValue("q"+i) === answers[i]) 
		    	correctAnswers += 1; // increment only
		  	return correctAnswers;
		}


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