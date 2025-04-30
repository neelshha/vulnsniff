const results = [];

// Basic DOM Checks
if (document.querySelectorAll("form[action^='http:']").length > 0) {
  results.push({
    issue: "Insecure Form Action",
    detail: "Form is submitted over HTTP instead of HTTPS"
  });
}

if ([...document.scripts].some(script => script.innerText.includes("eval("))) {
  results.push({
    issue: "Use of eval()",
    detail: "Found 'eval' usage, which is dangerous and often exploitable"
  });
}

if (document.querySelectorAll("[onclick*='innerHTML']").length > 0) {
  results.push({
    issue: "Potential DOM XSS",
    detail: "Found inline event handlers modifying innerHTML"
  });
}

// Save results for popup
chrome.storage.local.set({ scanResults: results }, () => {
  console.log("✅ VulnSniff saved scanResults:", results);
});