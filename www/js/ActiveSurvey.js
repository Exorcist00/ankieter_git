





function activateSurvey(val){
	window.localStorage.setItem("lastQuestionId",JSON.stringify(-1));
	var q=val.questions.length;
	window.localStorage.setItem("numberOfQuestions",JSON.stringify(q));
	window.localStorage.setItem("activeSurvey",JSON.stringify(val));

	document.getElementById("test").innerHTML="?";
}

function getActiveSurvey(){
	var surv = window.localStorage.getItem("activeSurvey");
	var survey = JSON.parse(surv);
	return survey;
}



function setStartTime(){
	var now = new Date();
	var time={
			year : now.getFullYear(),
			month : now.getMonth(),
			dayOfMonth : now.getDate(),
			hourOfDay : now.getHours(),
			minute : now.getMinutes(),
			second : now.getSeconds()
		};
	//var surv = window.localStorage.getItem("activeSurvey");
	var survey = getActiveSurvey();
	survey.startTime=time;
	window.localStorage.setItem("activeSurvey",JSON.stringify(survey));
}

function setFinishTime(){
	var now = new Date();
	var time={
			year : now.getFullYear(),
			month : now.getMonth(),
			dayOfMonth : now.getDate(),
			hourOfDay : now.getHours(),
			minute : now.getMinutes(),
			second : now.getSeconds()
		};
	//var surv = window.localStorage.getItem("activeSurvey");
	var survey = getActiveSurvey();
	survey.finishTime=time;
	window.localStorage.setItem("activeSurvey",JSON.stringify(survey));
}

function nextQuestion(){
	var last = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var num = JSON.parse(window.localStorage.getItem("numberOfQuestions"));
	if(last==-1){
		showTitle();
	}else if(last == num){
		showSummary();
	}else {
		fillAnswer(last);
	}
}

function showTitle(){
	location.href = 'title.html';
}

function showSummary(){
	location.href = 'summary.html';
}

function endActiveSurvey(){
	setFinishTime();
	addFilledSurveyToList(getActiveSurvey());
	location.href = 'index.html';
}

function getQuestion(index) {
	var surv = getActiveSurvey();
	var question = surv.questions[index];
	return question;
}


function fillAnswer(index) {
	//var last = JSON.parse(window.localStorage.getItem("lastQuestionId")) + 1;
	//window.localStorage.setItem("lastQuestionId",JSON.stringify(last));
	window.localStorage.setItem("lastQuestionId",JSON.stringify(index));
	
	var type = getQuestion(index).type;
	switch (type) {
	case "DateTimeQuestion":
		location.href = 'DateTimeQuestion.html';
		break;
	case "GridQuestion":
		location.href = 'GridQuestion.html';	
		break;
	case "MultipleChoiceQuestion":
		location.href = 'MultipleChoiceQuestion.html';
		break;
	case "OneChoiceQuestion":
		location.href = 'OneChoiceQuestion.html';
		break;
	case "ScaleQuestion":
		location.href = 'ScaleQuestion.html';
		break;
	case "TextQuestion":
		location.href = 'TextQuestion.html';
		break;
	default:
		location.href = 'index.html';
		break;
	}
}

function answerQuestion(index,question){
	var surv = getActiveSurvey();
	surv.questions.splice(index,1,question);
	window.localStorage.setItem("activeSurvey",JSON.stringify(surv));
	var last = JSON.parse(window.localStorage.getItem("lastQuestionId")) + 1;
	window.localStorage.setItem("lastQuestionId",JSON.stringify(last));
	nextQuestion();
}

