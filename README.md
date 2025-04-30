# VulnSniff

VulnSniff is a Chrome extension and companion proxy server that scans web pages for common vulnerabilities and provides AI-powered explanations and remediation steps using the GROQ AI API.

## Table of Contents

- [Architecture](#architecture)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Proxy Server](#running-the-proxy-server)
  - [Loading the Chrome Extension](#loading-the-chrome-extension)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Architecture

VulnSniff consists of two main components:

1. **Chrome Extension** (`VULSNIFF-EXTENSION`):
   - Injects a content script to detect basic web vulnerabilities (e.g., insecure headers, mixed content).
   - Stores findings in Chrome local storage.
   - Displays results in a popup (`popup.html`/`popup.js`) and fetches AI explanations from the proxy.

2. **Proxy Server** (`groq-proxy-server`):
   - A Node.js/Express server that forwards vulnerability data to the GROQ AI API.
   - Keeps your `GROQ_API_KEY` secure on the server side.

## Features

- Detects common web vulnerabilities like insecure headers, missing CSP, mixed content, etc.
- AI-generated explanations with:
  - **Severity** (Low/Medium/High)
  - **Description** (non-technical overview)
  - **Fix** (actionable remediation steps)
- Lightweight and easy to load as a Chrome extension.

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Google Chrome browser

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/VulnSniff.git
   cd VulnSniff
   ```

2. Install proxy server dependencies:
   ```bash
   cd groq-proxy-server
   npm install
   ```

3. Create a `.env` file in `groq-proxy-server` with your API key and (optional) port:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   PORT=3001
   ```

### Running the Proxy Server

From the `groq-proxy-server` directory:
```bash
npm start
```
The server will run on `http://localhost:3001` by default.

### Loading the Chrome Extension

1. Open Chrome and navigate to `chrome://extensions`.
2. Enable **Developer mode** (toggle in the top right).
3. Click **Load unpacked** and select the `VULSNIFF-EXTENSION` directory in this repo.
4. Pin the VulnSniff icon to your toolbar for quick access.

## Usage

1. Visit any website you want to scan.
2. Click the VulnSniff extension icon in your toolbar.
3. View a list of detected vulnerabilities and AI-generated explanations in the popup.

## Configuration

- **Proxy Server (.env)**
  - `GROQ_API_KEY`: Your GROQ AI API key for generating explanations.
  - `PORT`: (Optional) Port on which the proxy server listens (default: 3001).

## Project Structure

```
VulnSniff/
├── VULSNIFF-EXTENSION   # Chrome extension source code
│   ├── assets/          # Icons and styles
│   ├── contentScript.js # Detects vulnerabilities
│   ├── background.js    # Background service worker
│   ├── popup.html       # Extension UI
│   ├── popup.js         # UI logic and AI calls
│   ├── style.css        # Popup styling
│   └── manifest.json    # Extension metadata
└── groq-proxy-server    # Node.js proxy server
    ├── groq-proxy.js    # Express server forwarding to GROQ API
    ├── package.json     # Server dependencies & scripts
    ├── .gitignore       # Ignore node_modules and .env files
    └── .env.example     # Example environment variables (create this file)
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to enhance vulnerability detection, improve the UI, or add new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. 