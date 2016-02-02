

function init(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
    document.getElementById("question").innerHTML = question.properties.question;
    document.getElementById("hint").innerHTML = question.properties.hint;
    
    if(question.properties.obligatory==true){
    	document.getElementById("obl").disabled = true;
    }

    var onlyTime = question.properties.onlyTime;
    var onlyDate = question.properties.onlyDate;
    var table = document.getElementById("answers");
    
    var tr = document.createElement("tr");
    if(onlyTime){
    	var td = document.createElement("td");
    	td.innerHTML="godz,min,sek";
    	tr.appendChild(td);
    	var td1 = document.createElement("td");
    	var td2 = document.createElement("td");
    	var td3 = document.createElement("td");
    	
    /*	var inp1 = document.createElement("input");
		inp1.type = "text";
		inp1.name = "r1";
		//inp1.min=1;
		//inp1.max=24;
		
		var inp2 = document.createElement("input");
		inp2.type = "text";
		inp2.name = "r2";
		//inp2.min=0;
		//inp2.max=59;
		
		var inp3 = document.createElement("input");
		inp3.type = "text";
		inp3.name = "r3";
		//inp3.min=0;
		//inp3.max=59;
		*/
    	var inp1 = document.createElement("select");
    	inp1.name="r1";
    	for(var z=1;z<=24;z++){
    		var option = document.createElement("option");
    		option.value=z;
    		option.text=""+z;
    		inp1.appendChild(option);
    	}
    	
    	var inp2 = document.createElement("select");
    	inp2.name="r2";
    	for(var z=0;z<=59;z++){
    		var option = document.createElement("option");
    		option.value=z;
    		option.text=""+z;
    		inp2.appendChild(option);
    	}
    	
    	var inp3 = document.createElement("select");
    	inp3.name="r3";
    	for(var z=0;z<=59;z++){
    		var option = document.createElement("option");
    		option.value=z;
    		option.text=""+z;
    		inp3.appendChild(option);
    	}
    	
		td1.appendChild(inp1);
		td2.appendChild(inp2);
		td3.appendChild(inp3);    	
    	
    	tr.appendChild(td1);
    	tr.appendChild(td2);
    	tr.appendChild(td3);
    }else if(onlyDate){
    	var td = document.createElement("td");
    	td.innerHTML="rok,miesiac,dzien";
    	tr.appendChild(td);
    	var td1 = document.createElement("td");
    	var td2 = document.createElement("td");
    	var td3 = document.createElement("td");
    	/*
    	var inp1 = document.createElement("input");
		inp1.type = "text";
		inp1.name = "r1";
		//inp1.min=1970;
		//inp1.max=2200;
		
		var inp2 = document.createElement("input");
		inp2.type = "text";
		inp2.name = "r2";
		//inp2.min=1;
		//inp2.max=12;
		
		var inp3 = document.createElement("input");
		inp3.type = "text";
		inp3.name = "r3";
		//inp3.min=1;
		//inp3.max=31;
		*/
    	var inp1 = document.createElement("select");
    	inp1.name="r1";
    	for(var z=1970;z<=2016;z++){
    		var option = document.createElement("option");
    		option.value=z;
    		option.text=""+z;
    		inp1.appendChild(option);
    	}
    	
    	var inp2 = document.createElement("select");
    	inp2.name="r2";
    	for(var z=1;z<=12;z++){
    		var option = document.createElement("option");
    		option.value=z;
    		option.text=""+z;
    		inp2.appendChild(option);
    	}
    	
    	var inp3 = document.createElement("select");
    	inp3.name="r3";
    	for(var z=1;z<=31;z++){
    		var option = document.createElement("option");
    		option.value=z;
    		option.text=""+z;
    		inp3.appendChild(option);
    	}
		td1.appendChild(inp1);
		td2.appendChild(inp2);
		td3.appendChild(inp3);  

    	tr.appendChild(td1);
    	tr.appendChild(td2);
    	tr.appendChild(td3);
    }
    
    table.appendChild(tr);
    
    
    
}

function noAnswer(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
	question.properties.userAnswer={};
	answerQuestion(index,question);
}

function answer(){
	var index = JSON.parse(window.localStorage.getItem("lastQuestionId"));
	var question = getQuestion(index);
	/*
	var l1 = parseInt(document.getElementsByName("r1")[0],10);
	var l2 = parseInt(document.getElementsByName("r2")[0],10);
	var l3 = parseInt(document.getElementsByName("r3")[0],10);
	question.properties.userAnswer={"year":1970,"month":0,"dayOfMonth":1,"hourOfDay": 1,"minute": 0,"second": 0};
	if(question.properties.onlyTime){
		if(l1 && l1>=1 && l1<=24)question.properties.userAnswer.hourOfDay=l1;
		if(l2 && l2>=0 && l2<=59)question.properties.userAnswer.minute=l2;
		if(l3 && l3>=0 && l3<=59)question.properties.userAnswer.second=l3;
		//question.properties.userAnswer={"year":1970,"month":0,"dayOfMonth":1,"hourOfDay": l1[0].value,"minute": l2[0].value,"second": l3[0].value};
	}else if(question.properties.onlyDate){
		if(l1 && l1>=1970)question.properties.userAnswer.year=l1;
		if(l2 && l2>=1 && l2<=12)question.properties.userAnswer.month=l2-1;
		if(l3 && l3>=1 && l3<=31)question.properties.userAnswer.dayOfMonth=l3;
		//question.properties.userAnswer={"year": l1[0].value,"month": l2[0].value-1,"dayOfMonth": l3[0].value,"hourOfDay":1,"minute":0,"second":0};
	}
	*/
	var s1=document.getElementsByName("r1")[0];
	var l1 = s1.options[s1.selectedIndex].value;
	var s2=document.getElementsByName("r2")[0];
	var l2 = s2.options[s2.selectedIndex].value;
	var s3=document.getElementsByName("r3")[0];
	var l3 = s3.options[s3.selectedIndex].value;
	if(question.properties.onlyTime){
		question.properties.userAnswer={"year":1970,"month":0,"dayOfMonth":1,"hourOfDay": l1,"minute": l2,"second": l3};
	}else if(question.properties.onlyDate){
		question.properties.userAnswer={"year": l1,"month": l2-1,"dayOfMonth": l3,"hourOfDay":1,"minute":0,"second":0};
	}
	
		answerQuestion(index,question);
}