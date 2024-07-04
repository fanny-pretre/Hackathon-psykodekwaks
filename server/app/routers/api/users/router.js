const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const {
  browse,
  read,
  edit,
  add,
  deleteUser,
} = require("../../../controllers/userActions");

const validateUser = require("../../../services/Validation/userValidation");
const hashPassword = require("../../../services/hashPassword");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/:id", read);

router.put("/:id", edit);

// Route to add a new item
router.post("/", validateUser, hashPassword, add);

router.delete("/:id", deleteUser);

/* ************************************************************************* */

module.exports = router;
