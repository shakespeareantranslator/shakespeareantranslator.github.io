//Initialize and assign the button and headings
var btn = document.getElementById('btn');
var translation = document.getElementById('translation');


//Add an onClick listener for the button
btn.addEventListener("click", function() {

	//Take text input from the textArea
    var textAreaString = document.getElementById('myTextArea').value;

    //Build a url string request
    var urlString = 'http://api.funtranslations.com/translate/shakespeare.json?text=' + textAreaString;

    //Create a new XMLHttpRequest Object and pass the urlString
    var request = new XMLHttpRequest();
    request.open('GET', urlString);

    //When the JSON data loads
    request.onload = function() {

        //Parse the received data as JSON
        var data = JSON.parse(request.responseText);

        //Access the translated String using dot notation and display it
        translation.innerHTML = data.contents.translated;

    };

    //Send the API request
    request.send();

});