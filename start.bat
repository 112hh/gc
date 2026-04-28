@echo off
setlocal
cd /d "%~dp0"
title Engineering Cell Static Frontend
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found in PATH.
  echo Install Node.js or add it to PATH, then try again.
  pause
  exit /b 1
)

for /f "delims=" %%i in ('where node') do (
  set "NODE_PATH=%%i"
  goto run_server
)

:run_server
echo Starting static frontend on http://127.0.0.1:3001
echo Keep this window open while using the site.
echo.
"%NODE_PATH%" server.js
echo.
echo The static frontend server has stopped.
pause
