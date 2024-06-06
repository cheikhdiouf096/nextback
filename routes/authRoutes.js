const express = require("express");
const { registerUser, loginUser, getUserById, getUsers, deleteUser, forgotPassword, resetPassword } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.get("/", getUsers);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

deleteUser
module.exports = router;
