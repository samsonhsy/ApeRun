@echo off
echo 启动 源人步走 App...
echo Starting Source People Walking App...
echo.

echo 检查 Python 安装...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python 未安装或未添加到 PATH
    echo Python not installed or not in PATH
    echo 请安装 Python 或使用其他方法启动 HTTP 服务器
    echo Please install Python or use another method to start HTTP server
    pause
    exit /b 1
)

echo Python 已找到，启动本地服务器...
echo Python found, starting local server...
echo.

echo 服务器将在 http://localhost:8000 启动
echo Server will start at http://localhost:8000
echo.

echo 按 Ctrl+C 停止服务器
echo Press Ctrl+C to stop the server
echo.

start http://localhost:8000
python -m http.server 8000 