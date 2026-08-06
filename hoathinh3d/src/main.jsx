import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// 🛠️ GIẢI PHÁP: Chuyển import tĩnh thành nhập động (Dynamic Import)
// Khởi chạy render App trước, sau đó nạp file CSS song song một cách độc lập
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Tải file CSS bất đồng bộ dưới nền, ngăn Vite tự động chèn cứng style vào <head> lúc khởi động
// import('./index.css');
