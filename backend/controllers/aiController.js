const fs = require("fs");

const pdf = require("pdf-parse");

const Groq = require("groq-sdk");

const groq = new Groq({

    apiKey: process.env.GROQ_API_KEY

});


const analyzeResume = async (req, res) => {

    try {

        // Check file uploaded
        if (!req.file) {

            return res.status(400).json({

                message: "No file uploaded"

            });

        }

        // Get uploaded file path
        const filePath = req.file.path;

        // Read PDF file
        const dataBuffer = fs.readFileSync(filePath);

        // Extract text from PDF
        const pdfData = await pdf(dataBuffer);

        // Resume text
        const resumeText = pdfData.text;

        // Check text extracted
        if (!resumeText || resumeText.trim() === "") {

            return res.status(400).json({

                message: "Could not extract text from PDF"

            });

        }

        // Send to Groq AI
        const completion = await groq.chat.completions.create({

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

        // Send AI response
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


module.exports = {

    analyzeResume

};