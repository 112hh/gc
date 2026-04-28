# Engineering Cell Admin Template - Static Frontend

This project is a frontend-only version of the original engineering cell admin system.

## What Changed

- Kept the original UI, layout, copy, and interactions
- Removed the Node.js backend dependency for normal usage
- Replaced backend APIs with browser-side `localStorage`
- Kept service import available in the browser via local `xlsx` vendor script

## Run

Recommended startup:

```powershell
cd frontend-static-project
npm start
```

One-click startup on Windows:

```text
Double-click start.bat
```

Important:

```text
Keep the command window open after startup.
Closing that window will stop the local server.
```

One-click stop on Windows:

```text
Double-click stop-3001.bat
```

Default URL:

```text
http://127.0.0.1:3001
```

Health check:

```text
http://127.0.0.1:3001/health
```

You can still open `index.html` directly, but using the included static server is more stable.

## Data Storage

All interactive data is stored in the browser:

- gene projects
- analysis items
- sensor records
- sensor threshold config

The storage key is managed automatically by the page. Clearing browser storage will reset the app back to its built-in default data.
