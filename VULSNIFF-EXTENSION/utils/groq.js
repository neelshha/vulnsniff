export async function explainIssueWithGroq(issue) {
  try {
    const response = await fetch("http://localhost:3001/api/explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        issue: issue.issue,
        detail: issue.detail
      })
    });

    const data = await response.json();
    return data.explanation || "Explanation unavailable.";
  } catch (err) {
    console.error("❌ Proxy fetch failed:", err);
    return "❌ AI explanation failed.";
  }
}