const fs = require('fs')

const path = require('path')



let types = {
    media:  ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex",],
    app: ["exe", "dmg", "pkg", "deb"],
  };



function organizeFn(dirPath) {
    let destPath;
    if (dirPath == undefined) {
      console.log("Please enter a valid Directory Path");
      return;
    } // check whether directory path is passed or not and if not simply return
  
    let doesExist = fs.existsSync(dirPath);
  
    // this doesExist will tell the Target Folder exists or not
  
    if (doesExist == true) {
      destPath = path.join(dirPath, "organized_Files");
  
      // we created a path for organized_Files Folder
  
      // check whether in the given destPath does a folder exist with same name and if does not make a folder
      if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath);
      } else {
        console.log("Folder Already Exists");
      }
    } else {
      console.log("Please Enter A valid Path");
      return;
    }
  
     organizerHelper(dirPath , destPath)
  }
  
  
  
  
  
  function organizerHelper(src , dest)
  {
    let childNames = fs.readdirSync(src);
    
    for(let i = 0; i<childNames.length; i++)
    {
      let childAddress = path.join(src, childNames[i])
  
      
       isFile = fs.lstatSync(childAddress).isFile()
  
       if(isFile == true)
       {
         let fileCategory = getCategory(childNames[i]); // for Extensions 
  
         //console.log(childNames[i] + ' belongs to '+fileCategory);   // can comment 
  
         sendFiles(childAddress, dest, fileCategory);
         
        
       }
  
  
    }
  }
  
  
  
  function getCategory(FileName)
  {
    let ext = path.extname(FileName).slice(1); // for extensions 
    // I have extraxcted extension of target files
  
    for(let key in types) // loop on oject
    {
      let cTypesArr = types[key];
      // console.log(cTypesArr);
  
  
      for(let i = 0 ; i<cTypesArr.length;i++)
      {
        if(ext == cTypesArr[i])
        {
          return key;
        }
      }
    
    }
    return 'others';
  }
  
    function sendFiles(srcFilePath, dest, fileCategory) {
      // we will create path for each category type encountered to create folders of their names
      let catPath = path.join(dest, fileCategory);
    
      //D:\FJP4\test folder\organized_files\media
      //D:\FJP4 \test folder\organized_files\documents
    
      if (fs.existsSync(catPath) == false) {
        fs.mkdirSync(catPath);
      }
    
      let fileName = path.basename(srcFilePath);
    
      // we took out the basename of all the files
    
      let destFilePath = path.join(catPath, fileName);
    
      fs.copyFileSync(srcFilePath, destFilePath);
    
      fs.unlinkSync(srcFilePath);
    
      console.log("Files Organized");
  
    
  
  
    //D:\FJP4\test folder\organized_files\media
    //D:\FJP4 \test folder\organized_files\documents
  
  
  }



  module.exports =
  {
    organizeFnKey: organizeFn
  }