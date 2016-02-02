

function init(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
    document.getElementById("question").innerHTML = question.properties.question;
    document.getElementById("hint").innerHTML = question.properties.hint;
    
    if(question.properties.obligatory==true){
    	//document.getElementById("obl").disabled = true;
    }

    var col = question.properties.columnLabels;
    var row = question.properties.rowLabels;
    var table = document.getElementById("answers");
    for(var i=-1;i<row.length;i++){
    	var tr = document.createElement("tr");
    	for(var j=-1;j<col.length;j++){
    		if(i==-1 && j==-1){
    			var td2 = document.createElement("td");
	    		td2.innerHTML = "";
		    	tr.appendChild(td2);
    		}else if(i==-1 && j!=-1){
    			var td2 = document.createElement("td");
	    		td2.innerHTML = ""+col[j];
		    	tr.appendChild(td2);
    		}else if(i!=-1 && j==-1){
    			var td2 = document.createElement("td");
	    		td2.innerHTML = ""+row[i];
		    	tr.appendChild(td2);
    		}else{
    			
    			var td1 = document.createElement("td");
		    		var inp = document.createElement("input");
		    		inp.type = "checkbox";
		    		inp.name = "radio";
		    		inp.value = ""+i+" "+j;
	    		td1.appendChild(inp);

		    	tr.appendChild(td1);
    		}
    		
	    	
	    	
    	}
    	table.appendChild(tr);
    }
}

function noAnswer(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
	question.properties.userAnswers=[];
	answerQuestion(index,question);
}

function answer(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
	
	question.properties.userAnswers=[];
	var list = document.getElementsByName("radio");
	for(var i=0;i<list.length;i++){
		if(list[i].checked){
			var an=list[i].value.split(" ");
			question.properties.userAnswers.push({first: an[0], second: an[1]});
		}
	}
	if(question.properties.obligatory==true){
		if(question.properties.userAnswers!=[])
			answerQuestion(index,question);
	}else answerQuestion(index,question);
}