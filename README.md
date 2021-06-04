## AJAX-API

### DESCRIPTION

We have the following endpoint: http://api.icndb.com/jokes/random

This returns a joke to us randomly every time we call to it.

The structure is like the following JSON (we are interested in the "jose" field)


{
	"type": "success",
	"value": 
	{
		"id": 19,
		"joke": "In an average living room there are 1,242 objects Chuck Norris could use to kill you, including the room itself.",
		"categories": []
	}
}


## LEVEL 1

Create a web page with a space to put the joke and a button that, using an AJAX call, shows a new joke every time we click on the button. 
Creativity will be valued. The first time to load the app will have to show the first joke directly.



## LEVEL 2

Improve the graphical interface using CSS.



## LEVEL 3

Make a request to the API using the fetch function.

https://api.jquery.com/jQuery.getJSON 


