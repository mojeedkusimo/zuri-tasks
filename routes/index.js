const router = require("express").Router();
const {createData, readData, updateData, deleteData} = require("../controllers");

router.post("/data", createData)
      .get("/data", readData)
      .patch("/data/:id", updateData)
      .delete("/data/:id", deleteData);

module.exports = router;