# SONER Marketing Analytics Survey Report

This directory contains the interactive HTML report with data visualizations.

## How to View the Report

The report requires a local web server to load the CSV data due to browser security restrictions.

### Method 1: Using the Python Server (Recommended)

Simply run the included server script:

```bash
python3 serve.py
```

or

```bash
./serve.py
```

This will:
- Start a local web server on http://localhost:8000
- Automatically open your browser to view the report
- Load all charts with real data from survey-results.csv

Press `Ctrl+C` to stop the server when done.

### Method 2: Using Python's Built-in HTTP Server

From this directory, run:

```bash
cd /Users/studiorns/Documents/Soner/survey_analysis/output
python3 -m http.server 8000
```

Then open http://localhost:8000 in your browser.

### Method 3: Using Node.js http-server

If you have Node.js installed:

```bash
npx http-server -p 8000
```

Then open http://localhost:8000 in your browser.

## Files Included

- `index.html` - Main report page with SONER branding
- `charts.js` - JavaScript for generating interactive visualizations
- `serve.py` - Simple Python web server for viewing the report
- `README.md` - This file

## Features

✓ SONER branded design with animated radar logo
✓ Executive Summary with key findings
✓ 12 interactive Chart.js visualizations
✓ Comprehensive analysis sections
✓ Strategic recommendations
✓ Print-friendly layout
✓ Responsive design for mobile/tablet

## Data Source

The charts load data from: `../survey-results.csv`

Make sure this file is in the parent directory (`survey_analysis/`) for the visualizations to work.

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

---

**Note:** Opening `index.html` directly in a browser (double-clicking) will NOT work due to CORS restrictions. You must use one of the web server methods above.
