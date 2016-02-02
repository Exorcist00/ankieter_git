var fileWriter;
function writeFile(){
	window.requestFileSystem(LocalFileSystem.PERSISTENT,0,onWComplete,null);
}

function onWComplete(fileSystem){
	fileSystem.root.getFile("ankiety/rozw/"+fileName2.pop()+".json",{create:true},onFileWriteOpen,null);
}

function onFileWriteOpen(file) {
	file.createWriter(onWriter,null);
}

function onWriter(fWriter){
	fileWriter = fWriter;
	writeToFile();
}

function writeToFile(){
	if(fileWriter!=null){
		fileWriter.write(text.pop());
	}
	fileWriter=null;
}