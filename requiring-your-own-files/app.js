console.log("Starting app.ja")

const fs =require("fs");
const os=require("os");
const notes=require('./notes')

var result=notes.addNote();
var adder=notes.adder(9,-7);

console.log(adder)


// var user=os.userInfo();
// fs.appendFile("greetings.txt",`Hello ${user.username} ! You are ${notes.age}`)
