console.log(`--------- path-module.js ----------`);

const { log } = require('console');
const path = require('path');
// console.log(`path basename: ${path.basename(__filename)}`); //gets file name
// console.log(`path dirname: ${path.dirname(__filename)}`); //gets directory name

const pathFile = path.join(__dirname, 'dir1', 'dir2','test.txt'); //joins path
console.log(`path join: ${pathFile}`); //gets joined path

const file = "resume.pdf";
const ext = path.extname(file); //gets file extension
console.log(`File extension name: ${ext}`); //gets file extension

const filePath = "/E:/Codemind/Repo/node-app/dir1/dir2/test.txt";
console.log(`Base name: ${path.basename(filePath)}`); //gets base name
console.log(`Directory name: ${path.dirname(filePath)}`); //gets directory name
console.log(`Extension name: ${path.extname(filePath)}`); //gets extension name
console.log(`Path name: ${path.parse(filePath)}`); //gets path name
console.log(`Normalize path: ${path.normalize(filePath)}`); //gets normalize path

