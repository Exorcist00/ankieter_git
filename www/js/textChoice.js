

function init(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
    document.getElementById("question").innerHTML = question.properties.question;
    document.getElementById("hint").innerHTML = question.properties.hint;
    
    if(question.properties.obligatory==true){
    	document.getElementById("obl").disabled = true;
    }

   //var ans = question.properties.answers;
    var prop=question.properties.constraint.properties;
    var table = document.getElementById("answers");
    
    	var tr = document.createElement("tr");
    	
    	var tdl = document.createElement("td");
    		if(prop.minLength!=undefined)	tdl.innerHTML = "min:"+prop.minLength;
    		else tdl.innerHTML = "min brak";
		var tdr = document.createElement("td");
			if(prop.maxLength!=undefined)	tdr.innerHTML = "max:"+prop.maxLength;
			else tdr.innerHTML = "max brak";
			
			tr.appendChild(tdl);
			tr.appendChild(tdr);
		table.appendChild(tr);
    	
		var tr = document.createElement("tr");
		
		var td1 = document.createElement("td");
			td1.colspan=3;
    		var inp = document.createElement("input");
    		inp.type = "text";
    		inp.name = "radio";
			td1.appendChild(inp);
    	
			
    	tr.appendChild(td1);
    	
    	
    	table.appendChild(tr);
    
}

function noAnswer(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
	question.properties.userAnswer="";
	answerQuestion(index,question);
}

function answer(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
	
	var list = document.getElementsByName("radio");
	 var prop=question.properties.constraint.properties;
		
			question.properties.userAnswer=list[0].value;
			var l=list[0].value.length;
		if(question.properties.obligatory==true){
			if(prop.minLength!=undefined && prop.maxLength!=undefined){
				if(l>prop.minLength && l<prop.maxLength)
					answerQuestion(index,question);
			}else if(prop.minLength!=undefined){
				if(l>prop.minLength)
					answerQuestion(index,question);
			}else if(prop.maxLength!=undefined){
				if(l<prop.maxLength)
					answerQuestion(index,question);
			}else answerQuestion(index,question);
		}else 	answerQuestion(index,question);
		
}