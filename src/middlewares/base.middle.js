
const { isDir , readFile, toJson, writeFile} = require("../../forldermanager");
const { path_front, path_finder } = require("../utils/path_find");


const base_GET =async (req,res)=>{
    const json = toJson(await readFile(path_finder({path_f: "/vitals.json"})));
    res.cookie( "proyect",json["proyect"],{ httpOnly: false })
    res.sendFile(path_front("/index.html"))
}
const base_POST =async (req,res)=>{    
    try {
        const isdir = await isDir(req.body.val)
        if(isdir){
            try {
                const json = toJson(await readFile(path_finder({path_f: "/vitals.json"})));
                json["proyect"] = req.body.val;
                await writeFile(path_finder({path_f: "/vitals.json"}), JSON.stringify(json))
                res.status(200).json({msj: "Saved!"})
            } catch (error) {
                res.status(500).json({msj: error})
            }
        }else{
            res.status(404).json({msj: "The dir is not a folder"})
        }
     
    } catch (error) {
        res.status(400).json({msj: error})
        
    }

}




module.exports = {base_GET,base_POST,};