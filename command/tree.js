const fs = require('fs')

const path = require('path')


function treeFn(dirPath)
{
  if (dirPath == undefined)
   {
    console.log("Please enter a valid Directory Path");
    return;
   } // check whether directory path is passed or not and if not simply return
  else
  {
    let doesExist = fs.existsSync(dirPath);

  // this doesExist will tell the Target Folder exists or not
     if(doesExist == true)
     {
           treeHelper(dirPath,' ')
      }
  }


}


 function treeHelper(targetPath, indent)
{
    let isFile = fs.lstatSync(targetPath).isFile();

    if(isFile == true)
    {
      let fileName = path.basename(targetPath);
      console.log(indent + "├──" + fileName);
      // this will display the files  ├── == include (linux tree symbols)
    }
    else
    {
      let dirName  = path.basename(targetPath);
      console.log(indent + "└──" + dirName);

      let children = fs.readdirSync(targetPath);
      // console.log(children);

      //console.log(children)
         // here we took out all the children of test folder
     
         for (let i = 0; i < children.length; i++) 
         {
          let childPath = path.join(targetPath, children[i]);
    
          //console.log(childPath)
          treeHelper(childPath, indent + "\t");
          // using Recursion to repeat the process for all files and Folders
         }


    }


}

module.exports=
{
    treeFnKey : treeFn
}