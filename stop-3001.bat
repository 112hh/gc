@echo off
setlocal
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3001" ^| findstr "LISTENING"') do (
  echo Stopping PID %%a on port 3001
  taskkill /PID %%a /F
)
echo Done.
