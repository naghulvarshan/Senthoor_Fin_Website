
const { fetchalldetails } = require("../controllers/fetchall");

const { register } = require("../controllers/Adddata");
const { UpdateStudent } = require("../controllers/update");





const router = require("express").Router();



router.post("/fetch",fetchalldetails);
router.post("/update",UpdateStudent);

router.post("/add",register);


module.exports = router;
