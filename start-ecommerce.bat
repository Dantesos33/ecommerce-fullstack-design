@echo off
title Launching E-commerce Development Environment...

:: 1. Start XAMPP Control Panel minimized
echo Starting XAMPP (Apache and MySQL)...
start "" "D:\Xamp\xampp-control.exe"
:: Wait 5 seconds 
echo Waiting for servers to initialize...
timeout /t 5 /nobreak > log

:: 2. Navigate to your project root folder and start the dev servers
echo Navigating to project and starting Node/PHP servers...
cd /d "D:\Next JS\ecommerce-fullstack-design"
start "" cmd /k "npm run dev"

:: 3. Wait 10 seconds to let the servers boot up fully before opening browser
echo Waiting for servers to initialize...
timeout /t 10 /nobreak > log

:: 4. Open the frontend and backend in your default browser
echo Opening local URLs...
start http://localhost:3000
start http://localhost:8000

echo Done! You can close this window.
exit
