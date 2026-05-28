const express = require("express");

const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {

    analyzeResume,

    chatWithAI,

    summarizeNotes,

    generateQuiz,

    generateStudyPlan,

    startInterview,

    evaluateAnswer,

    generateCareerRoadmap,

    optimizeProfile

} = require("../controllers/aiController");


// =====================================
// RESUME ANALYZER
// =====================================

router.post(
    "/resume-analysis",
    upload.single("resume"),
    analyzeResume
);


// =====================================
// AI CHAT
// =====================================

router.post(
    "/chat",
    chatWithAI
);


// =====================================
// NOTES SUMMARIZER
// =====================================

router.post(
    "/summarize-notes",
    upload.single("notes"),
    summarizeNotes
);


// =====================================
// QUIZ GENERATOR
// =====================================

router.post(
    "/generate-quiz",
    upload.single("notes"),
    generateQuiz
);


// =====================================
// STUDY PLANNER
// =====================================

router.post(
    "/study-plan",
    generateStudyPlan
);


// =====================================
// MOCK INTERVIEW
// =====================================

router.post(
    "/start-interview",
    startInterview
);

router.post(
    "/evaluate-answer",
    evaluateAnswer
);


// =====================================
// CAREER ROADMAP
// =====================================

router.post(
    "/career-roadmap",
    generateCareerRoadmap
);


// =====================================
// LINKEDIN OPTIMIZER
// =====================================

router.post(
    "/optimize-profile",
    optimizeProfile
);


module.exports = router;