const fs = require("fs");

const pdf = require("pdf-parse");

const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});


// =====================================
// AI RESUME ANALYZER
// =====================================

const analyzeResume = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({
                message: "No file uploaded"
            });

        }

        const filePath = req.file.path;

        const dataBuffer = fs.readFileSync(filePath);

        const pdfData = await pdf(dataBuffer);

        const resumeText = pdfData.text;

        if (!resumeText || resumeText.trim() === "") {

            return res.status(400).json({
                message: "Could not extract text from PDF"
            });

        }

        const completion =
            await groq.chat.completions.create({

                messages: [

                    {

                        role: "user",

                        content: `

Analyze this resume professionally.

Give:

1. ATS Score out of 100
2. Technical Skills
3. Missing Skills
4. Resume Improvements

Resume:

${resumeText}

`

                    }

                ],

                model: "llama-3.1-8b-instant"

            });

        res.status(200).json({

            analysis:
                completion.choices[0].message.content

        });

    } catch (error) {

        console.log("AI ANALYSIS ERROR:");

        console.log(error);

        res.status(500).json({

            message: "AI Resume Analysis Failed"

        });

    }

};


// =====================================
// AI CHAT ASSISTANT
// =====================================

const chatWithAI = async (req, res) => {

    try {

        const question = req.body.question;

        if (!question) {

            return res.status(400).json({

                message: "Question is required"

            });

        }

        const completion =
            await groq.chat.completions.create({

                messages: [

                    {

                        role: "user",

                        content: question

                    }

                ],

                model: "llama-3.1-8b-instant"

            });

        res.status(200).json({

            reply:
                completion.choices[0].message.content

        });

    } catch (error) {

        console.log("AI CHAT ERROR:");

        console.log(error);

        res.status(500).json({

            message: "AI Chat Failed"

        });

    }

};


// =====================================
// NOTES SUMMARIZER
// =====================================

const summarizeNotes = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                message: "No file uploaded"

            });

        }

        const filePath = req.file.path;

        const dataBuffer = fs.readFileSync(filePath);

        const pdfData = await pdf(dataBuffer);

        const notesText = pdfData.text;

        if (!notesText || notesText.trim() === "") {

            return res.status(400).json({

                message: "Could not extract notes"

            });

        }

        const completion =
            await groq.chat.completions.create({

                messages: [

                    {

                        role: "user",

                        content: `

Summarize these study notes professionally.

Give:
1. Short Summary
2. Important Concepts
3. Key Points
4. Exam Important Topics

Notes:

${notesText}

`

                    }

                ],

                model: "llama-3.1-8b-instant"

            });

        res.status(200).json({

            summary:
                completion.choices[0].message.content

        });

    } catch (error) {

        console.log("NOTES SUMMARY ERROR:");

        console.log(error);

        res.status(500).json({

            message: "Notes summarization failed"

        });

    }

};


// =====================================
// QUIZ GENERATOR
// =====================================

const generateQuiz = async (req, res) => {

    try {

        const { topic } = req.body;

        let contentText = topic;

        if (req.file) {

            const filePath = req.file.path;

            const dataBuffer = fs.readFileSync(filePath);

            const pdfData = await pdf(dataBuffer);

            contentText = pdfData.text;

        }

        if (!contentText || contentText.trim() === "") {

            return res.status(400).json({

                message: "No content provided"

            });

        }

        const completion =
            await groq.chat.completions.create({

                messages: [

                    {

                        role: "user",

                        content: `

Generate ONLY valid JSON.

Create exactly 5 MCQ questions.

Format:

[
  {
    "question": "",
    "options": [
      "",
      "",
      "",
      ""
    ],
    "answer": ""
  }
]

Rules:
1. No markdown
2. No explanation
3. Return ONLY JSON

Content:

${contentText}

`

                    }

                ],

                model: "llama-3.1-8b-instant"

            });

        const rawText =
            completion.choices[0].message.content;

        const quiz =
            JSON.parse(rawText);

        res.status(200).json({

            quiz

        });

    } catch (error) {

        console.log("QUIZ ERROR:");

        console.log(error);

        res.status(500).json({

            message: "Quiz generation failed"

        });

    }

};


// =====================================
// STUDY PLANNER
// =====================================

const generateStudyPlan = async (req, res) => {

    try {

        const { subjects } = req.body;

        if (!subjects || subjects.length === 0) {

            return res.status(400).json({

                message: "No subjects provided"

            });

        }

        const today = new Date();

        const todayFormatted =
            today.toISOString().split("T")[0];

        const updatedSubjects = subjects.map((item) => {

            const exam = new Date(item.examDate);

            const diffTime =
                exam - today;

            const daysLeft =
                Math.ceil(
                    diffTime / (1000 * 60 * 60 * 24)
                );

            return {

                ...item,

                daysLeft

            };

        });

        updatedSubjects.sort(

            (a, b) => a.daysLeft - b.daysLeft

        );

        const completion =
            await groq.chat.completions.create({

                messages: [

                    {

                        role: "user",

                        content: `

Today's date:
${todayFormatted}

Subjects:
${JSON.stringify(updatedSubjects)}

Create ONLY practical study schedules until exam dates.

`

                    }

                ],

                model: "llama-3.1-8b-instant"

            });

        res.status(200).json({

            plan:
                completion.choices[0].message.content

        });

    } catch (error) {

        console.log("STUDY PLAN ERROR:");

        console.log(error);

        res.status(500).json({

            message: "Study plan generation failed"

        });

    }

};


// =====================================
// START MOCK INTERVIEW
// =====================================

const startInterview = async (req, res) => {

    try {

        const { type } = req.body;

        const completion =
            await groq.chat.completions.create({

                messages: [

                    {

                        role: "user",

                        content: `

Generate ONE professional interview question.

Interview Type:
${type}

Rules:
1. Ask only ONE question
2. No numbering
3. Professional style

`

                    }

                ],

                model: "llama-3.1-8b-instant"

            });

        res.status(200).json({

            question:
                completion.choices[0].message.content

        });

    } catch (error) {

        console.log("INTERVIEW ERROR:");

        console.log(error);

        res.status(500).json({

            message: "Interview failed"

        });

    }

};


// =====================================
// EVALUATE ANSWER
// =====================================

const evaluateAnswer = async (req, res) => {

    try {

        const {

            question,

            answer

        } = req.body;

        const completion =
            await groq.chat.completions.create({

                messages: [

                    {

                        role: "user",

                        content: `

Evaluate this interview answer.

Question:
${question}

Answer:
${answer}

Give:
1. Score out of 10
2. Strengths
3. Weaknesses
4. Better Answer Suggestion

`

                    }

                ],

                model: "llama-3.1-8b-instant"

            });

        res.status(200).json({

            feedback:
                completion.choices[0].message.content

        });

    } catch (error) {

        console.log("EVALUATION ERROR:");

        console.log(error);

        res.status(500).json({

            message: "Evaluation failed"

        });

    }

};


// =====================================
// EXPORTS
// =====================================
const generateCareerRoadmap = async (req, res) => {

    try {

        const { career } = req.body;

        if (!career) {

            return res.status(400).json({

                message: "Career role required"

            });

        }

        const completion =
            await groq.chat.completions.create({

                messages: [

                    {

                        role: "user",

                        content: `

Create a complete career roadmap.

Career Goal:
${career}

Give:

1. Required Skills
2. Learning Timeline
3. Technologies To Learn
4. Best Projects To Build
5. Interview Preparation Strategy
6. Placement Preparation Tips
7. Recommended Resources

Make it beginner-friendly and practical.

`

                    }

                ],

                model: "llama-3.1-8b-instant"

            });

        res.status(200).json({

            roadmap:
                completion.choices[0].message.content

        });

    } catch (error) {

        console.log("ROADMAP ERROR:");

        console.log(error);

        res.status(500).json({

            message: "Roadmap generation failed"

        });

    }

};
const optimizeProfile = async (req, res) => {

    try {

        const { profileText } = req.body;

        if (!profileText) {

            return res.status(400).json({

                message: "Profile text required"

            });

        }

        const completion =
            await groq.chat.completions.create({

                messages: [

                    {

                        role: "user",

                        content: `

Optimize this LinkedIn or portfolio profile professionally.

Profile:

${profileText}

Give:

1. Professional Headline
2. Optimized Summary
3. Important Skills To Add
4. Recruiter Improvement Tips
5. ATS Keywords

Make it highly professional and placement-focused.

`

                    }

                ],

                model: "llama-3.1-8b-instant"

            });

        res.status(200).json({

            optimized:
                completion.choices[0].message.content

        });

    } catch (error) {

        console.log("PROFILE OPTIMIZER ERROR:");

        console.log(error);

        res.status(500).json({

            message: "Profile optimization failed"

        });

    }

};

module.exports = {

    analyzeResume,

    chatWithAI,

    summarizeNotes,

    generateQuiz,

    generateStudyPlan,

    startInterview,

    evaluateAnswer,

    generateCareerRoadmap,

    optimizeProfile

};