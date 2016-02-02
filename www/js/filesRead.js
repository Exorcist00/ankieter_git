
function readFile(){
	
	window.requestFileSystem(LocalFileSystem.PERSISTENT,0,onRComplete,null);
}

function onRComplete(fileSystem){
	fileSystem.root.getFile("ankiety/szablony/"+fileName.pop(),{create:false},onFileReadOpen,null);
}

function onFileReadOpen(file) {
	file.file(onRead,null);
}

function onRead(file) {
	var reader = new FileReader();
	reader.onloadend = function(e){
		var data=e.target.result;
		var surv= Survey.fromJson(data);
		addSurveyToList(surv);
		
	};
	reader.readAsText(file);
}