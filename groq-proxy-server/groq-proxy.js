const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post("/api/explain", async (req, res) => {
  const { issue, detail } = req.body;

  console.log("🔍 Incoming request:", { issue, detail });
  console.log("🔐 API key exists:", Boolean(process.env.GROQ_API_KEY));

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          { role: "system", content: "You are a helpful cybersecurity assistant." },
          {
            role: "user",
            content: `Explain the following web vulnerability in exactly 3 plain-text lines, using this format:\n\nSeverity: <Low / Medium / High>\nDescription: <simple, non-technical explanation>\nFix: <practical fix a developer can apply>\n\nReturn only the 3 lines. Do not include any intro, headings, markdown, asterisks, or bullet points.\n\nIssue: ${issue}\nDetails: ${detail}`
          }
        ],
        temperature: 0.7,
        max_tokens: 512
      })
    });

    const data = await response.json();
    console.log("🧠 Groq raw response:", JSON.stringify(data, null, 2));

    return res.json({ explanation: data.choices?.[0]?.message?.content });
  } catch (err) {
    console.error("❌ Proxy error:", err);
    return res.status(500).json({ error: "Proxy request failed." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Proxy running at http://localhost:${PORT}`);
});