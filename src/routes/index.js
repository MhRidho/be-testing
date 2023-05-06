const router = require("express").Router();

router.use("/admin/users", require("./users"));

module.exports = router;
