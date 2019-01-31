const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie");

router.get("/index", movieController.index);
router.get("/addmovie", movieController.addMovie);

router.post("/", movieController.create);
// router.post("/", movieController.requireAuth, movieController.create);
// router.get("/new", movieController.requireAuth, movieController.new);
// router.get("/:id", movieController.show);
// router.put("/:id", movieController.requireAuth, movieController.update);
// router.get("/:id/delete", movieController.delete);

module.exports = router;
