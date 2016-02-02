

function init(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
    document.getElementById("question").innerHTML = question.properties.question;
    document.getElementById("hint").innerHTML = question.properties.hint;
    
    if(question.properties.obligatory==true){
    	document.getElementById("obl").disabled = true;
    }

   //var ans = question.properties.answers;
    var table = document.getElementById("answers");
    
    	var tr = document.createElement("tr");
    	var tdl = document.createElement("td");
			tdl.innerHTML = ""+question.properties.minLabel;
    	var td1 = document.createElement("td");
    		var inp = document.createElement("input");
    		inp.type = "range";
    		inp.name = "radio";
    		inp.min = question.properties.minValue;
    		inp.max = question.properties.maxValue;
    	var tdr = document.createElement("td");
			tdr.innerHTML = ""+question.properties.maxLabel;
    	
			td1.appendChild(inp);
    	
			tr.appendChild(tdl);
    	tr.appendChild(td1);
    	tr.appendChild(tdr);
    	
    	table.appendChild(tr);
    
}

function noAnswer(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
	question.properties.userAnswer=-2147483648;
	answerQuestion(index,question);
}

function answer(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
	
	var list = document.getElementsByName("radio");
	
		
			question.properties.userAnswer=list[0].value;
		
	
	 answerQuestion(index,question);
}