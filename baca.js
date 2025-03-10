const fs = require('fs')

const anu = async(path) =>{
try{
let data = await fs.readFileSync(path);
return data
}catch(e){
  return __dirname
}
}
module.exports = anu
