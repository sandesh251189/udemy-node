console.log("Starting app.ja")

const fs = require("fs");
const os= require("os");
const _= require("lodash")
const yargs=require("yargs");



const argv=yargs.argv;
const notes=require('./notes')

var commend=process.argv[2];
console.log("Commend:" , commend);
console.log(process.argv);
console.log("yargs" , argv);




if(commend=="add"){
  console.log("Adding new note")
}else if(commend=="list"){
  console.log("Listing All notes")
}else if(commend=="read"){
  console.log("Reading note")
}else if(commend=="remove"){
  console.log("Removeing note")
}else{
  console.log("Commend is not recognized")
}
