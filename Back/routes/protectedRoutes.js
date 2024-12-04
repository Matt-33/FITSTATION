const express = require("express");
const router = express.Router();
const authenticateJWT = require("../middleware/authMiddleware");

router.get("/profile", authenticateJWT, (req, res) => {
  res.json({ message: "Voici votre profil", user: req.user });
});

module.exports = router;