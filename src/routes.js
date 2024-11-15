const express = require("express");
const { base_GET, base_POST } = require("./middlewares/base.middle");
const { home_GET } = require("./middlewares/home.middle");
const { profiles_GET, profiles_GETDATA,profile_GET,profile_GETDATA } = require("./middlewares/profile.middle");




const router  = express.Router();


router.get("/",base_GET)
router.post("/",base_POST)


router.get("/home",home_GET)

router.get("/profiles",profiles_GET)

router.get("/profiles/data",profiles_GETDATA)



router.get("/profiles/:id",profile_GET)
router.get("/profiles/data/:id",profile_GETDATA)

// router.get("/profiles/data",profiles_GETDATA)
 module.exports = router;
