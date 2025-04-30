import { explainIssueWithGroq } from "./utils/groq.js";

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["scanResults", "headerFindings"], async (data) => {
    const results = [...(data.scanResults || []), ...(data.headerFindings || [])];
    const container = document.getElementById("results");
    container.innerHTML = "";

    if (results.length === 0) {
      container.innerHTML = "<p>No major issues found.</p>";
      return;
    }

    for (const item of results) {
      const el = document.createElement("div");
      el.className = "issue";
      el.innerHTML = `<strong>${item.issue}</strong><br><small>${item.detail}</small>`;

      try {
        const explanation = await explainIssueWithGroq(item);

        const explanationEl = document.createElement("div");
        explanationEl.className = "explanation";

        // Split explanation into lines (e.g., "Severity: ...", "Description: ...", "Fix: ...")
        explanation.split('\n').forEach(line => {
          const p = document.createElement("p");
          p.textContent = line.trim();
          explanationEl.appendChild(p);
        });

        el.appendChild(document.createElement("br"));
        el.appendChild(explanationEl);
      } catch (err) {
        console.error("❌ Groq explanation error:", err);
        el.appendChild(document.createElement("br"));
        el.appendChild(document.createTextNode("⚠️ AI explanation unavailable."));
      }

      container.appendChild(el);
    }
  });
});