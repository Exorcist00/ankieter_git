
var fileName2=[]; 
var text=[];
function createButton(context, val){
	var button = document.createElement("button");
	var li =  document.createElement("li");
	var f=val.finishTime;
	var fin=""+f.year+"-"+(f.month+1)+"-"+f.dayOfMonth+"__"+f.hourOfDay+":"+f.minute+"."+f.second;
	button.innerHTML=""+val.title+", czas zakonczenia: "+fin;//finishtime_title
	button.onclick = function(){
		fileName2.push(""+f.year+"-"+(f.month+1)+"-"+f.dayOfMonth+"__"+f.hourOfDay+"-"+f.minute+"-"+f.second+"__"+val.title);//finishtime_title
		
		var val2=[];
		val2.push(val);
		//document.getElementById("test").innerHTML=JSON.stringify(val2);
		text.push(JSON.stringify(val2));
		writeFile();
		removeFilledSurvey(val);
		//location.href = 'save.html';
	};
	li.appendChild(button);
	context.appendChild(li);
}


