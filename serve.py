#!/usr/bin/env python3
"""
Simple HTTP server to view the survey report
Run this script and open http://localhost:8000 in your browser
"""
import http.server
import socketserver
import webbrowser
import os

PORT = 8000

# Change to the output directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"✓ Server started at http://localhost:{PORT}")
    print(f"✓ Open http://localhost:{PORT} in your browser to view the report")
    print(f"✓ The charts will load automatically from the CSV data")
    print(f"✓ Press Ctrl+C to stop the server")
    print()
    
    # Try to open browser automatically
    try:
        webbrowser.open(f'http://localhost:{PORT}')
        print("✓ Opening browser...")
    except:
        pass
    
    httpd.serve_forever()
