// Get the button element
var btn = document.querySelector('#filter-even-numbers');

// Add an event listener when the button is clicked
// Use a debugger if needed to get the variables
btn.addEventListener('click', function(e) {
    // Prevent default behaviour of button
    e.preventDefault();

    // Get the numbers element
    var numbers = document.querySelector('#raw-numbers');

    // Get the content of the HTML element and trim it
    var numberString = numbers.innerHTML.trim();

    // We need to convert to an array before we can filter
    var numbersArray = numberString.split(',');

    // We filter out the odd numbers and keep the even numbers
    var evenNumbers = numbersArray.filter(number => number % 2 === 0);

    // We change the content of the HTML with the new even numbers
    numbers.innerHTML = evenNumbers.join(',')
});

