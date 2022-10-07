const { myFileWriter, myFileUpdater, myFileReader, myFileDeleter } = require('./index');

myFileWriter('test.txt', 'Dummy Text Added...!');

myFileReader('test.txt');

myFileUpdater('test.txt', 'Hello World Updated..?');

myFileDeleter('test.txt');
