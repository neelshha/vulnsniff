# VulnSniff 🔍

**VulnSniff** is a Chrome extension and companion Node.js proxy server that scans websites for common vulnerabilities and provides instant AI-powered explanations and remediation steps using the GROQ LLM API.

> ✅ Now fully deployed — no local backend needed. Just load the extension and go.

---

## 🌐 Live AI Proxy

> https://vulnsniff-proxy.onrender.com/api/explain

This backend securely communicates with the GROQ API to return vulnerability explanations in plain English. It keeps your API key hidden from the frontend.

---

## 📦 Project Structure

```
VulnSniff/
├── VULSNIFF-EXTENSION/      # Chrome Extension UI + logic
│   ├── utils/groq.js        # Connects to hosted API
│   ├── popup.js             # Displays results
│   ├── contentScript.js     # Finds issues
│   ├── manifest.json        # Chrome config
│   └── ...                  # HTML, CSS, assets
├── groq-proxy-server/       # Hosted proxy backend (Render)
│   ├── groq-proxy.js
│   ├── package.json
│   ├── .gitignore
│   └── .env (local only)
└── README.md
```

---

## ⚙️ How It Works

- **The extension** scans webpages for missing security headers or bad practices (e.g. CSP, X-Frame, HSTS).
- **Findings are passed** to the backend (`/api/explain`).
- **The backend** sends them to Groq’s AI model.
- **A plain-English explanation** is returned (Severity, Description, Fix).

---

## 🚀 Quick Start

### 🔧 1. Clone the repo

```bash
git clone https://github.com/neelshha/VulnSniff.git
cd VulnSniff
```

### 🔌 2. Use the Hosted Proxy (No Setup Required)

The extension is preconfigured to use the hosted endpoint:
```
https://vulnsniff-proxy.onrender.com/api/explain
```

No need to run any servers locally.

---

### 🧩 3. Load the Extension into Chrome

1. Go to `chrome://extensions`
2. Enable **Developer mode**
3. Click **Load unpacked**
4. Select the folder: `VULSNIFF-EXTENSION/`
5. Click the extension icon on any website to run a scan

---

## 🧠 Example Output

```
Severity: High
Description: The site is missing a CSP header, making it vulnerable to XSS attacks.
Fix: Add a Content-Security-Policy header to restrict allowed content sources.
```

---

## 🔐 API & Security

- The Groq API key is stored on the server only
- The frontend never sees or leaks the key
- `.env` is `.gitignored` and only used during local development

---

## 🧪 Development (Optional)

To run the proxy locally:

```bash
cd groq-proxy-server
npm install
echo "GROQ_API_KEY=your_key" > .env
node groq-proxy.js
```

Then update `groq.js` to use `http://localhost:3001/api/explain` if needed.

---

## 🤝 Contributing

Open issues or PRs to:
- Improve vulnerability detection
- Add features (e.g., export, history, badge count)
- Polish the UI or add animations

---

## 🪪 License

MIT — free for personal and commercial use.