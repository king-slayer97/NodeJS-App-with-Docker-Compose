const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("index");
});

router.use("/api/v1",require("./api/v1"));

module.exports = router;