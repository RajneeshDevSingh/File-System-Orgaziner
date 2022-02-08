// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

//js mein input Array ke from mein jaata hai and that is array is process.argv Array

const fs = require("fs");

const path = require("path");

let input = process.argv.slice(2);

let inputArr = input; // [organzie , folderpath]

let helpModule = require('../command/help'); 

let organizeModule = require('../command/organize');

let treeModule = require('../command/tree');

let command = inputArr[0];


switch (command) {
  case "tree":
    // treeFn(inputArr[1]);
    treeModule.treeFnKey(inputArr[1]);
    break;
  case "organize":
    // organizeFn(inputArr[1]);
    organizeModule.organizeFnKey(inputArr[1]);
    break
  case "help":
    // helpFn();
    helpModule.helpFnkey();
    break;
  default:
    console.log("Please enter a Valid command");
    break;
}






