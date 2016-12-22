var state = 0; 
var correct = 0; 
var questions = ["From what country did the fork originate?", "Which of the following best describes a trencher?", "The book \"The Silent Spring\" was written by____?"];
var answers = [ ["  England", "  Italy", "  France"], ["  A meat soup","  A spice holder","  A plate made of bread"], ["  Marion Nestle", "  Amelia Simmons", "  Rachel Carson"]];
var solutions = [2, 3, 3] // solutions based on index

/* The function called when the "next" button is pressed. */
function buttonAction() {
    var cont = document.getElementById("contents");
    var quest = document.getElementById("questions"); 
    
  
	
	if (state < 3) {
		  clearChildren(cont); 
    clearChildren(quest);  
    	var newText = document.createTextNode("  " + questions[state]); 
  	  quest.appendChild(newText); 
  	  /* fill in new elements of the DOM.  All are children of the 
       "contents" div. */
   	 	for ( var i = 0; i < 3; i++)
		{
			if (state < 3)
			{	
          		addRadio(cont,"decision", answers[state][i]);
           		addBreak(cont);
			}
		}
    	showChildren(cont);
  		state++; 
	}
	else if (cont) {
		clearChildren(quest);  
		var newText = document.createTextNode("You got " + correct + " of 3 questions correct."); 
  	  	quest.appendChild(newText); 
		var body = document.getElementById("body");
		body.removeChild(cont); 
	}
}

function clearChildren(el)
{
	if (state < 4)
		while (el.childNodes[0])
			el.removeChild(el.childNodes[0]); 
}

/* makes an HTML break <br> element and adds it to the DOM */
function addBreak(el) {
    var brNode = document.createElement("br");
    el.appendChild(brNode);
}

/* makes an HTML radio button, and adds it, with text, to the DOM */
function addRadio(el,group,text) {
    var radioBut = makeRadioButton(group,text);
    el.appendChild(radioBut);
    var newText = document.createTextNode(text);
    el.appendChild(newText);
}


/* Makes a radio button object.  Takes the group name (a string)
   as input. All buttons in a group should have the same group name. */
function makeRadioButton(group,text) {
	    var radio = document.createElement("input");
	    radio.name = group;
	    radio.type = "radio";
	    radio.onclick = function() {
		radioButtonAction(text, radio);  
	    }
	    return(radio);
}

/* the function called when a radio button is selected. */
function radioButtonAction(text, el) {
   var cont = document.getElementById("contents");
	disableButtons(cont); 
   var heyText; 
   if ((state == 1 && text == "  Italy") || (state == 2 && text == "  A plate made of bread") || (state == 3 && text == "  Rachel Carson"))
    {
	heyText = document.createTextNode(" Correct!! ");
		correct++; 
	}
   else 
	heyText = document.createTextNode(" Incorrect "); 
  
	cont.appendChild(heyText);
}

function disableButtons(el) {
	for (var i = 0; i < 7; i++)
		if (el.childNodes[i].type == "radio")
			el.childNodes[i].disabled = true; 
}

/* function to see the children of a node in the DOM */
function showChildren(el) {
    var children = el.childNodes;
    for (var i=0; i<children.length; i++) {
	console.log(String(i)+String(children[i])+"\n");
    }
}

buttonAction(); 
