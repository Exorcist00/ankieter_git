

function init(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
    document.getElementById("question").innerHTML = question.properties.question;
    document.getElementById("hint").innerHTML = question.properties.hint;
    
    if(question.properties.obligatory==true){
    	//document.getElementById("obl").disabled = true;
    }

    var ans = question.properties.answers;
    var table = document.getElementById("answers");
    for(var i=0;i<ans.length;i++){
    	var tr = document.createElement("tr");
    	var td1 = document.createElement("td");
    		var inp = document.createElement("input");
    		inp.type = "checkbox";
    		inp.name = "radio";
    		inp.value = ans.length-i-1;
    	td1.appendChild(inp);
    	var td2 = document.createElement("td");
    		td2.innerHTML = ""+ans[i];
    	tr.appendChild(td1);
    	tr.appendChild(td2);
    	
    	table.appendChild(tr);
    }
}


function answer(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
	
	question.properties.userAnswers=[];
	var list = document.getElementsByName("radio");
	for(var i=0;i<list.length;i++){
		if(list[i].checked){
			question.properties.userAnswers.push(list[i].value);
		}
	}
	if(question.properties.obligatory==true){
		if(question.properties.userAnswers!=[])
			answerQuestion(index,question);
	}else answerQuestion(index,question);
}