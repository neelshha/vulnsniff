# VulnSniff

VulnSniff is a Chrome extension that detects basic web vulnerabilities and provides AI-powered explanations to help developers understand and fix issues.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Project Structure](#project-structure)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Basic DOM Checks**: Scans for insecure form actions, usage of `eval()`, and inline event handlers modifying `innerHTML`.
- **AI-Powered Explanations**: Uses the Groq API to generate severity, description, and fix suggestions for each issue.
- Lightweight and user-friendly: simply click the extension icon to view vulnerabilities.

## Installation
1. Clone or download this repository:
   ```bash
   git clone https://github.com/yourusername/vulnsniff.git
   cd vulnsniff
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked** and select the project directory.

## Usage
1. Visit any website you want to scan.
2. Click the **VulnSniff** icon in the toolbar.
3. View the scan results and AI explanations in the popup.

## Configuration
- The extension uses a hard-coded API key for the Groq AI service in `utils/groq.js`. Replace the `groqKey` constant with your own key if needed.

## Project Structure
```
/
├── assets/
│   └── icon.png
├── utils/
│   └── groq.js
├── background.js
├── contentScript.js
├── popup.html
├── popup.js
├── style.css
├── manifest.json
└── README.md
```

## Development
1. Make your changes in the source files.
2. Reload the extension on `chrome://extensions/`.
3. Test the updated functionality on a sample website.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
