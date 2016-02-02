

function Survey(questions, deviceId, idOfSurveys, title, description, summary, numberOfSurvey){
	this.questions = questions;
	this.deviceId = window.localStorage.getItem("deviceId");
	this.idOfSurveys = idOfSurveys;
	this.title = title;
	this.description = description;
	this.summary = summary;
	this.numberOfSurvey = numberOfSurvey;
	this.startTime = null;
	this.finishTime = null;
}

Survey.fromJson = function(json) {
	var data = JSON.parse(json);
	return new Survey(data.questions, data.deviceId, data.idOfSurveys, data.title, data.description, data.summary, data.numberOfSurvey);
};

//Survey.prototype.toJson = function(){
//	return JSON.stringify
//}

function getSurveyList(){
	var list = window.localStorage.getItem("surveyList");
	var list2=[];
	if(!list){
		window.localStorage.setItem("surveyList",JSON.stringify([]));
	}else{
		list2=JSON.parse(list);
	}

	return list2;
}

function addSurveyToList(survey){
	var list = window.localStorage.getItem("surveyList");
	if(!list){
		list=JSON.stringify([]);
	}
	var list2=JSON.parse(list);
	if(list2.indexOf(survey)==-1){
		list2.push(survey);
		window.localStorage.setItem("surveyList",JSON.stringify(list2));
	}
}

function clearSurveyList(){
	var list = window.localStorage.getItem("surveyList");
	if(list){
		window.localStorage.removeItem("surveyList");
	}
}



