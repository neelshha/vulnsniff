export async function explainIssueWithGroq(issue) {
  const groqKey = "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"; // ⚠️ Keep private

  const prompt = `
You are a cybersecurity assistant. For the given web vulnerability, return the response in exactly **three lines**, each starting with the labels below. Do not combine lines. Use this exact format:

Severity: [Low / Medium / High]  
Description: [A simple, non-technical explanation in plain English]  
Fix: [A practical and clear fix developers can apply]

Each line must start on a new line. Do not return it all in one paragraph. No extra text before or after.

Issue: ${issue.issue}  
Details: ${issue.detail}
`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${groqKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [
          { role: "system", content: "You are a helpful cybersecurity assistant." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 512
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("Groq API error:", response.status, error);
      return `❌ Groq error: ${response.status} – ${error?.error?.message || "Bad Request"}`;
    }

    const json = await response.json();
    return json.choices?.[0]?.message?.content || "Explanation unavailable.";
  } catch (err) {
    console.error("❌ Groq fetch failed:", err);
    return "❌ AI explanation failed.";
  }
}