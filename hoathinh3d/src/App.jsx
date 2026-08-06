import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';

// 🛠️ SỬA LỖI CHÍNH TẢ: Đổi 'inport' thành 'import' để tránh crash dự án
const Detail = React.lazy(() => import('./pages/Detail'));
//const Home = React.lazy(() => import('./pages/Home'));
import Home from './pages/Home'
import Follow from './pages/Follow';
import MainLayout from './layouts/MainLayout';
import HistoryPage from './pages/HistoryPage';
import TopTen from './pages/TopTen';
import HighRate from './pages/HighRate';
import PhimLe from './pages/PhimLe';
import DangChieu from './pages/DangChieu';
import HoanThanh from './pages/HoanThanh';
import TheLoai from './pages/TheLoai';
import AccountSetting from './pages/AccountSetting';
const Schedule = React.lazy(() => import('./pages/Schedule'));
const Watch = React.lazy(() => import('./pages/Watch'));

// Giữ nguyên import động cô lập cho Player
const Player = React.lazy(() =>
  import('./players/Player').then(module => ({ default: module.Player }))
);

function App() {
  return (
    <BrowserRouter>
      {/*  SỬA CẤU TRÚC BẮT BUỘC: Bọc toàn bộ Routes trong Suspense 
          để hiển thị giao diện tạm thời (fallback) trong lúc các trang đang được tải độc lập */}
      <Suspense fallback={
        <div
          id="lc-sched-loading"
          role="status"
          aria-live="polite"
          aria-busy="true"
          className="active"
        >
          <div className="lc-loader-ring">
            <div className="lc-loader-dot">HH3D</div>
          </div>
          <div className="lc-loader-text">
            Đang tải<span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>

      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/watch" element={<Watch />} />
          <Route path="/player" element={<Player />} />
          <Route path='/' element={<MainLayout />} >
            <Route path="follow" element={<Follow />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path='top-10' element={<TopTen />} />
            <Route path='highlyrated' element={<HighRate />} />
            <Route path='phimle' element={<PhimLe />} />
            <Route path='dangchieu' element={<DangChieu />} />
            <Route path='dangchieu' element={<DangChieu />} />
            <Route path='hoanthanh' element={<HoanThanh />} />
            <Route path='theloai' element={<TheLoai />} />
            <Route path='account-setting' element={<AccountSetting />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
