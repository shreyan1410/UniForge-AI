const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {
    protect
} = require("../middleware/authMiddleware");

const {
    analyzeResume
} = require("../controllers/aiController");

router.post(
    "/analyze-resume",
    protect,
    upload.single("resume"),
    analyzeResume
);

module.exports = router;