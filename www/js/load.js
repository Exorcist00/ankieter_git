

function gotFS(fileSystem){
	fileSystem.root.getDirectory("ankiety/szablony",{create:false},success,null);

}

function success(entry){
	var reader = entry.createReader();
	reader.readEntries(gotList,null);
}
var fileName=[];
function gotList(entries){
	var i;
	var html="";
	for(i=0; i<entries.length;i++){
		if(entries[i].name.indexOf(".json")!=-1){
			html=html+entries[i].name + "<br/>";
			fileName.push(entries[i].name);
			readFile();
			//html=html+"????"+dataFromFile+"<br/>";
			//dataFromFile="";
		}
	}
	document.getElementById("lista").innerHTML=html;
}