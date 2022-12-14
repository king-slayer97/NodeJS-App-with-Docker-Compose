const express = require("express");
const router = express.Router();

router.get("/getJSONData", require("../../../controllers/getiris_controller").getIris);
router.post("/addData", require("../../../controllers/createIris_controller").createIris);


module.exports = router;