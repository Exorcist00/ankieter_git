


function createFillButton(context, val){
	var button = document.createElement("button");
	var li =  document.createElement("li");
	button.innerHTML=""+val.title;
	button.onclick = function(){
		activateSurvey(val);
		setStartTime();
		nextQuestion();
	};
	li.appendChild(button);
	context.appendChild(li);
}