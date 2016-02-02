




function FilledSurvey(questions, deviceId, idOfSurveys, title, description, summary, numberOfSurvey, startTime, finishTime){
	this.questions = questions;
	this.deviceId = window.localStorage.getItem("deviceId");
	this.idOfSurveys = idOfSurveys;
	this.title = title;
	this.description = description;
	this.summary = summary;
	this.numberOfSurvey = numberOfSurvey;
	this.startTime = startTime;
	this.finishTime = finishTime;
}

FilledSurvey.fromJson = function(json) {
	var data = JSON.parse(json);
	return new FilledSurvey(data.questions, data.deviceId, data.idOfSurveys, data.title, data.description, data.summary, data.numberOfSurvey,data.startTime,data.finishTime);
};

//Survey.prototype.toJson = function(){
//	return JSON.stringify
//}

function getFilledSurveyList(){
	var list = window.localStorage.getItem("filledSurveyList");
	var list2=[];
	if(!list){
		window.localStorage.setItem("filledSurveyList",JSON.stringify([]));
	}else{
		list2=JSON.parse(list);
	}

	return list2;
}

function addFilledSurveyToList(filledSurvey){
	var list = window.localStorage.getItem("filledSurveyList");
	if(!list){
		list=JSON.stringify([]);
	}
	var list2=JSON.parse(list);
	
	list2.push(filledSurvey);
	window.localStorage.setItem("filledSurveyList",JSON.stringify(list2));
	
}

function removeFilledSurvey(filledSurvey){
	var index = getFilledSurveyList().indexOf(filledSurvey);
	if(index!=-1){
		var list = getFilledSurveyList().splice(index,1);
		window.localStorage.setItem("filledSurveyList",JSON.stringify(list));
	}
	//document.getElementById("test").innerHTML=index;
}
function clearFilledSurveyList(){
	var list = window.localStorage.getItem("filledSurveyList");
	if(list){
		window.localStorage.removeItem("filledSurveyList");
	}
}

