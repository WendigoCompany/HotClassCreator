
const { isDir, readFile, toJson, writeFile } = require("../../forldermanager");
const { path_front, path_finder } = require("../utils/path_find");


const profiles_GET = async (req, res) => {

    res.sendFile(path_front("/pages/profiles.html"))
}


const profiles_GETDATA = async (req, res) => {

    try {
        const proyect = toJson(await readFile(path_finder({ path_f: "/vitals.json" })));
        let jsonen = proyect.proyect + "/src/DB" + "/manifiest.en.json";
        jsonen = toJson(await readFile(jsonen));
        res.status(200).json({ data: jsonen })
    } catch (error) {
        res.status(500).json({ msj: error })
    }
}

const profile_GET = async (req, res) => {

    res.sendFile(path_front("/pages/profile.id.html"))
}


const profile_GETDATA = async (req, res) => {
    try {
        const proyect = toJson(await readFile(path_finder({ path_f: "/vitals.json" })));
        const id = req.params.id;
        let jsonen = proyect.proyect + "/src/DB" + "/manifiest.en.json";
        let jsones = proyect.proyect + "/src/DB" + "/manifiest.es.json";

        jsonen = toJson(await readFile(jsonen));
        jsones = toJson(await readFile(jsones));

        jsonen = jsonen.filter(j => j.id == id)[0];
        jsones = jsones.filter(j => j.id == id)[0];

        res.status(200).json({ msj: [jsonen, jsones] })
    } catch (error) {
        res.status(500).json({ msj: error })
    }
}
module.exports = { profiles_GET, profiles_GETDATA, profile_GET, profile_GETDATA };