var count = 30;
var correctAnswers = 0;
var incorrect = 5 - correctAnswers;
var answers = ["a", "c", "d", "b", "d"];
var startTimer;

//When start button clicked, show questions, start and display timer
$('#start').click(function() {
	$('#quiz').toggle('slow', function() {});
	$('#start').hide();

	// before starting the timer, set counter with initial count
	$('#timer').html(count);

	//Start and display timer of 30 seconds
	//Runs timer function every second
  	startTimer = setInterval(timer, 1000);

  	// decrement count by 1 and update timer element
  	// once count reaches 0, stop interval
  	function timer() {
		count = --count;
		$('#timer').html(count);

		if (count <= 0) {
		    clearInterval(startTimer);
		    $('#submit').trigger('click');
		    return;
		}
	}

});
	

function getCheckedValue() {
	// get all checked radio buttons
	var radios = $('input[type="radio"]:checked');

	// loop through each radio element (should be 5)
	// check if first radio value is equal to first element in answers array - if equal, increment correctAnswers by one.
	for(var y=0; y<radios.length; y++){
		if( $(radios[y]).val() === answers[y] ){
			correctAnswers++;
		}
	}

	// after correctAnswers is calculated, set incorrect value by subtracting num of questions by correctAnswers
	incorrect = 5 - correctAnswers;
}	

//Display results when clicked
$('#submit').click(function() {
	$('#quiz').hide();
	$('#results').toggle('slow', function() {
	    // Animation complete.

	    clearInterval(startTimer); // stops the set interval
	    getCheckedValue(); // calculates correct/incorrect answers

	    console.log(correctAnswers);
	    console.log(incorrect);

	    // update view
	    $('#correct').append(correctAnswers);
	    $('#incorrect').append(incorrect);

	    // if all questions are correct, show message
	    if (correctAnswers === 5)
	    	$('#message').append("AMAZING! You're an Arsenal Legend!")

	})
})


