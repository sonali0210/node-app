const fs = require('fs');
console.log('');

fs.readFile('./sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

console.log('');

const content = "In the quiet depths of the ocean, where sunlight dares not venture, secrets older than time lie waiting for those brave enough to dream.";
fs.writeFile('output.txt', content, 'utf8', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('File has been written successfully');
    console.log(content);
    
});

const filePath = './output.txt';
fs.stat(filePath, (err, stats) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stats);
    console.log('');
    console.log(`File Size: ${stats.size} bytes`);
    console.log(`Is File: ${stats.isFile()}`);
    console.log(`Is Directory: ${stats.isDirectory()}`);
    console.log(`File birthtime (creation time): ${stats.birthtime}`);
    console.log(`File modified (modification time): ${stats.mtime}`);
    console.log('');
    
});



// Append data to the file
const filePathAppend = './output.txt';
const dataToAppend = "\n The ocean is a vast, mysterious place, full of wonder and beauty.";
// Append data to the file asynchronously
fs.appendFile(filePathAppend, dataToAppend, 'utf8', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('');
    
    console.log(`Data has been appended to the file: ${dataToAppend}`);
    console.log('');
    
});
    
// Delete the file
const filePathDelete = './sample.txt';
// Delete the file asynchronously
fs.unlink(filePathDelete, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('');
    console.log('File has been deleted successfully');
    console.log('');
    
});


const directoryPath = 'new_directory';
// Create a new directory asynchronously
fs.mkdir(directoryPath, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('');
    console.log('Directory created successfully!!');
    console.log('');

});