chrome.webRequest.onHeadersReceived.addListener(
    (details) => {
      const headers = details.responseHeaders || [];
      const findings = [];
  
      const headerMap = {};
      headers.forEach(({ name, value }) => {
        if (name) headerMap[name.toLowerCase()] = value || "";
      });
  
      if (!headerMap["content-security-policy"]) {
        findings.push({
          issue: "Missing Content-Security-Policy",
          detail: "No CSP found. This increases XSS risk."
        });
      }
  
      if (!headerMap["x-frame-options"]) {
        findings.push({
          issue: "Missing X-Frame-Options",
          detail: "No protection against clickjacking."
        });
      }
  
      if (!headerMap["strict-transport-security"]) {
        findings.push({
          issue: "Missing HSTS",
          detail: "No HTTP Strict-Transport-Security header set."
        });
      }
  
      // Save to storage
      chrome.storage.local.set({ headerFindings: findings });
    },
    { urls: ["<all_urls>"], types: ["main_frame"] },
    ["responseHeaders"]
  );