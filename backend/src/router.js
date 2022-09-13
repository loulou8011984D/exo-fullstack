const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const schoolControllers = require("./controllers/schoolControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/schools", schoolControllers.browse);
router.get("/schools/:id", schoolControllers.read);
router.put("/schools/:id", schoolControllers.edit);
router.post("/schools", schoolControllers.add);
router.delete("/schools/:id", schoolControllers.destroy);

module.exports = router;
