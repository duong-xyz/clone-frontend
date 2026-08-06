import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Dữ liệu bóc tách chuẩn từ HTML gốc, lưu ý bộ phim thứ 5 được bổ sung đầy đủ phần text bị thiếu
const trendingMovies = [
  {
    id: 1,
    title: 'Tiên Nghịch',
    originalTitle: 'Xian Ni',
    url: 'https://hoathinh3d.st',
    thumb: '/stickers/tien-nghich-6.jpg',
    score: '4.6',
    clipClass: 'halim-trending-clip-path-odd',
    loading: 'eager',
    fetchPriority: 'high',
    sizes: '(max-width: 480px) 180px, (max-width: 768px) 220px, 224px'
  },
  {
    id: 2,
    title: 'Đấu Phá Thương Khung Phần 5',
    originalTitle: 'Fights Break Sphere 5',
    url: 'https://hoathinh3d.st',
    thumb: '/stickers/dau-pha-thuong-khung.webp',
    score: '3.8',
    clipClass: 'halim-trending-clip-path-even',
    loading: 'lazy',
    fetchPriority: 'low',
    sizes: 'auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px'
  },
  {
    id: 3,
    title: 'Mục Thần Ký',
    originalTitle: 'Mu Shen Ji',
    url: 'https://hoathinh3d.st',
    thumb: '/stickers/muc-than-ky-thumb.webp',
    score: '4.6',
    clipClass: 'halim-trending-clip-path-odd',
    loading: 'lazy',
    fetchPriority: 'low',
    sizes: 'auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px'
  },
  {
    id: 4,
    title: 'Quang Âm Chi Ngoại',
    originalTitle: "Beyond Time's Gaze",
    url: 'https://hoathinh3d.st',
    thumb: '/stickers/quang-am-chi-ngoai-thumb.jpg',
    score: '4.6',
    clipClass: 'halim-trending-clip-path-even',
    loading: 'lazy',
    fetchPriority: 'low',
    sizes: 'auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px'
  },
  {
    id: 5,
    title: 'Phàm Nhân Tu Tiên Phần 3',
    originalTitle: "A Mortal's Journey to Immortality 3",
    url: 'https://hoathinh3d.st',
    thumb: '/stickers/pham-nhan-tu-tien-phan-3-thumb.jpg',
    score: '4.7',
    clipClass: 'halim-trending-clip-path-odd',
    loading: 'lazy',
    fetchPriority: 'low',
    sizes: 'auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px'
  },
  {
    id: 6,
    title: 'Thôn Phệ Tinh Không',
    originalTitle: "Swallowed Star",
    url: 'https://hoathinh3d.st',
    thumb: '/stickers/thon-phe-tinh-khong-thumb.jpg',
    score: '4.7',
    clipClass: 'halim-trending-clip-path-even',
    loading: 'lazy',
    fetchPriority: 'low',
    sizes: 'auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px'
  }
];

export default function HH3DTrendingTrack() {
  // Tạo mảng State quản lý trạng thái tải xong (Loaded) riêng biệt cho từng id ảnh phim
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (id) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };
  const navigate = useNavigate();

  return (
    <div className="halim-trending-track">
      {trendingMovies.map((movie, index) => {
        const isLoaded = loadedImages[movie.id];

        return (
          <div className="halim-trending-card" key={movie.id}>
            <span onClick={() => navigate('/detail')} className="halim-trending-link">
              
              {/* Giữ nguyên cấu trúc lồng thẻ, các class clip-path-odd/even cố định của bạn */}
              <div className={`halim-trending-poster-container ${isLoaded ? "halim-trending-poster-loaded" : ""} ${movie.clipClass}`}>
                <div className={`halim-trending-poster-mask ${movie.clipClass}`} />
                
                <img
                  width={224}
                  height={299}
                  src={movie.thumb}
                  className="halim-trending-poster-image"
                  alt={movie.title}
                  decoding="async"
                  sizes={movie.sizes}
                  loading={movie.loading}
                  fetchPriority={movie.fetchpriority}
                  // Kích hoạt state đổi class sang 'halim-trending-poster-loaded' khi ảnh tải xong
                  onLoad={() => handleImageLoad(movie.id)} 
                />
                
                <div className="halim-trending-rating">
                  <div className="halim-trending-rating-value">{movie.score}</div>
                </div>
              </div>

              <div className="halim-trending-info">
                <div className="halim-trending-number">{index + 1}</div>
                <div className="halim-trending-details">
                  <h3 className="halim-trending-title-text">{movie.title}</h3>
                  <p className="halim-trending-original-title">{movie.originalTitle}</p>
                </div>
              </div>

            </span>
          </div>
        );
      })}
    </div>
  );
}
