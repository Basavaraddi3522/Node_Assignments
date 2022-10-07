const fs = require('fs/promises');


const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.writeFile(fileName, fileContent);
	console.log(fileName + " File is created successfully.");
}

const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	console.log(fileName + " File is Fecthed successfully.");
	var buffer = await fs.readFile(process.cwd()+'\\'+fileName);
	console.log(buffer.toString());
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	fs.appendFile(fileName, fileContent + ' ');
	console.log('Content updated...!');
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(process.cwd() + '\\' + fileName);
	console.log(fileName + ' Deleted Successfully...!');
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }