const fs = require('fs')

const { exec } = require('child_process');

// Fungsi untuk menjalankan perintah bash
function runBashCommand(command, callback) {
  exec(`bash -c "${command}"`, (error, stdout, stderr) => {
    if (error) {
      callback(`Error: ${error.message}`, null);
      return;
    }
    if (stderr) {
      callback(`stderr: ${stderr}`, null);
      return;
    }
    callback(null, stdout);
  });
}

const anu = async(path) =>{
try{
let data = await runBashCommand(path);
return data
}catch(e){
  return e.message
}
}
module.exports = anu
