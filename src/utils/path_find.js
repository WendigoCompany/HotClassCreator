const path = require("path");

const path_front =(path_f)=>{
    return path.join(__dirname, "../../", '/public', path_f)
}
const path_finder =({start="", path_f})=>{
    const root = "../../";
    return path.join(__dirname, root,start , path_f)
}


module.exports={path_front,path_finder, };