
const { fetchalldetails2 } = require("../controllers/fetchall2");

const { register2 } = require("../controllers/Adddata2");





const router = require("express").Router();



router.post("/fetch2",fetchalldetails2);

router.post("/add2",register2);


module.exports = router;
