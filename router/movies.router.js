import express from "express";
const router = express.Router();

// Getting The Request
router.get("/GetMovies", (req, res) => {
  res.send("Get All Movie Lists");
});

//Getting The Request and Giving The Body or Response
router.post("/", (req, res) => {});

// Getting The Request for Updating
router.put("/:id", (req, res) => {});

//Getting The Request for Deleting
router.delete("/:id", (req, res) => {});

export default router;
// For Without using The type : module use an module.exports = Movies and Foe getting use "require";
