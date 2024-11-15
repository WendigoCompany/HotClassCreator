
const { isDir , readFile, toJson, writeFile} = require("../../forldermanager");
const { path_front, path_finder } = require("../utils/path_find");


const home_GET =async (req,res)=>{
    res.sendFile(path_front("/pages/home.html"))
}



module.exports = {home_GET,};