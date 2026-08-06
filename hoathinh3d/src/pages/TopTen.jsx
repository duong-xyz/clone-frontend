import React, { useState } from 'react';
import styles from '../../public/css/topten.css?raw'

// Dữ liệu mẫu giả lập API cho 4 tab
const MOCK_DATA = {
  day: [
    { title: "Thế Giới Hoàn Mỹ", rank: 1, score: "4.0", img: "https://hoathinh3d.st/wp-content/uploads/2026/06/the-gioi-hoan-my-thumb.jpg", url: "https://hoathinh3d.st/the-gioi-hoan-my" },
    { title: "Thương Nguyên Đồ", rank: 2, score: "4.5", isHigh: true, img: "https://hoathinh3d.st/wp-content/uploads/2026/06/thuong-nguyen-do-thumb.webp", url: "https://hoathinh3d.st/thuong-nguyen-do" },
    { title: "Tiên Nghịch", rank: 3, score: "4.6", isHigh: true, img: "https://hoathinh3d.st/wp-content/uploads/2023/09/tien-nghich-6.jpg", url: "https://hoathinh3d.st/tien-nghich" },
    { title: "Đại Chúa Tể", rank: 4, score: "4.1", img: "https://hoathinh3d.st/wp-content/uploads/2023/05/dai-chua-te-200x300.webp", url: "https://hoathinh3d.st/dai-chua-te" },
  ],
  week: [
    { title: "Mục Thần Ký", rank: 1, score: "4.6", isHigh: true, img: "https://hoathinh3d.st/wp-content/uploads/2026/07/muc-than-ky-thumb.webp", url: "https://hoathinh3d.st/muc-than-ky" },
    { title: "Đấu Phá Thương Khung P5", rank: 2, score: "3.7", img: "https://hoathinh3d.st/wp-content/uploads/2022/06/dau-pha-thuong-khung.webp", url: "https://hoathinh3d.st/dau-pha-thuong-khung-phan-5-gia-nam-hoc-vien" },
  ],
  month: [
    { title: "Trảm Thần P2", rank: 1, score: "4.4", img: "https://hoathinh3d.st/wp-content/uploads/2026/06/tram-than-pham-tran-than-vuc-phan-2-thumb.webp", url: "https://hoathinh3d.st/tram-than-pham-tran-than-vuc-phan-2" },
    { title: "Già Thiên", rank: 2, score: "4.3", img: "https://hoathinh3d.st/wp-content/uploads/2026/06/gia-thien-thumb.png", url: "https://hoathinh3d.st/gia-thien" },
  ],
  year: [
    { title: "Tương Dạ", rank: 1, score: "4.6", isHigh: true, img: "https://hoathinh3d.st/wp-content/uploads/2026/04/tuong-da-1.webp", url: "https://hoathinh3d.st/tuong-da" },
    { title: "Quang Âm Chi Ngoại", rank: 2, score: "4.7", isHigh: true, img: "https://hoathinh3d.st/wp-content/uploads/2026/06/quang-am-chi-ngoai-thumb.jpg", url: "https://hoathinh3d.st/quang-am-chi-ngoai" },
  ]
};

const TopTen = () => {
  const [activeTab, setActiveTab] = useState('day');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState(MOCK_DATA.day);

  // Cơ chế chuyển Tab & Loading giống hệt web gốc
  const handleTabChange = (type) => {
    if (type === activeTab || isLoading) return;

    setActiveTab(type);
    setIsLoading(true); // Kích hoạt trạng thái Skeleton & aria-busy="true"

    // Giả lập thời gian fetch API (ví dụ 600ms)
    setTimeout(() => {
      setMovies(MOCK_DATA[type] || []);
      setIsLoading(false); // Kết thúc loading, hiển thị phim
    }, 600);
  };

  return (
    <>
        <style>{styles}</style>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root{--t10-gold:#e8b84a;--t10-gold-deep:#c9922a;--t10-amber:#ff9f43;--t10-sky:#6ec4e8;--t10-ink:#0e0e12;--t10-border:rgba(232,184,74,.14);--t10-text:#f5f5f7;--t10-muted:rgba(245,245,247,.58);--t10-tr:.22s ease}
            @keyframes t10-fade-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
            @keyframes t10-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
            @media (prefers-reduced-motion:reduce){.t10-card{animation:none !important}.t10-card:hover .t10-poster-wrap img{transform:none}.t10-skeleton-poster,.t10-skeleton-line{animation:none}}
            .t10-page{margin:0 0 40px;padding:14px 12px 22px;font-family:'Be Vietnam Pro',sans-serif;color:var(--t10-text);background:radial-gradient(ellipse 90% 60% at 100% 0%,rgba(232,184,74,.07) 0%,transparent 55%),radial-gradient(ellipse 70% 50% at 0% 100%,rgba(110,196,232,.05) 0%,transparent 50%),linear-gradient(168deg,#181820 0%,#12121a 55%,#0f0f14 100%);border:1px solid var(--t10-border);box-shadow:0 12px 40px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.04)}
            .t10-hero{position:relative;margin-bottom:16px;padding:20px 18px 18px;overflow:hidden;background:radial-gradient(ellipse 80% 120% at 100% 0%,rgba(232,184,74,.16) 0%,transparent 52%),radial-gradient(ellipse 55% 70% at 0% 100%,rgba(255,159,67,.08) 0%,transparent 48%),linear-gradient(145deg,#1e1e28 0%,#16161e 50%,#111118 100%);border:1px solid rgba(232,184,74,.2)}
            .t10-hero:before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e8b84a' fill-opacity='0.03'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E");pointer-events:none}
            .t10-hero-inner{position:relative;z-index:1}
            .t10-title{margin:0 0 8px;font-size:clamp(1.4rem,3.5vw,1.85rem);font-weight:800;line-height:1.15;letter-spacing:-.025em;background:linear-gradient(120deg,#fff 0%,#fff 45%,var(--t10-gold) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
            .t10-subtitle{margin:0;max-width:56ch;font-size:13px;line-height:1.55;color:var(--t10-muted)}
            .t10-hero-accent{display:block;width:48px;height:3px;margin-top:14px;background:linear-gradient(90deg,var(--t10-gold),var(--t10-amber),transparent)}
            .t10-tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-bottom:14px}
            .t10-tab{padding:10px 6px;font-family:inherit;font-size:12px;font-weight:600;letter-spacing:.04em;text-align:center;color:var(--t10-muted);background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);cursor:pointer;transition:color var(--t10-tr),background var(--t10-tr),border-color var(--t10-tr)}
            .t10-tab:hover,.t10-tab:focus-visible{color:var(--t10-text);background:rgba(255,255,255,.06);outline:none}
            .t10-tab.active{color:#1a1208;background:linear-gradient(135deg,#f0c85a 0%,var(--t10-gold-deep) 100%);border-color:rgba(232,184,74,.45);box-shadow:0 2px 12px rgba(232,184,74,.2)}
            .t10-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px 10px;min-height:120px}
            @media (min-width:576px){.t10-grid{grid-template-columns:repeat(3,1fr);gap:22px 10px}}
            @media (min-width:992px){.t10-grid{grid-template-columns:repeat(4,1fr);gap:24px 12px}}
            @media (min-width:1200px){.t10-grid{grid-template-columns:repeat(5,1fr);gap:24px 12px}}
            .t10-grid[aria-busy=true]{opacity:.55;pointer-events:none}
            .t10-card{display:flex;flex-direction:column;gap:12px;text-decoration:none !important;color:inherit !important;animation:t10-fade-up .35s ease both}
            .t10-card:hover .t10-movie-title{color:var(--t10-gold)}
            .t10-card:hover .t10-body{border-left-color:var(--t10-gold)}
            .t10-card:hover .t10-poster-wrap img{transform:scale(1.03)}
            .t10-poster-wrap{position:relative;aspect-ratio:2/3;overflow:hidden;background:#18181e;container-type:inline-size}
            .t10-poster-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}
            .t10-poster-wrap:before{content:'';position:absolute;top:0;left:0;z-index:1;width:62%;height:42%;background:radial-gradient(ellipse 115% 95% at 0% 0%,rgba(0,0,0,.5) 0%,transparent 72%);pointer-events:none}
            .t10-poster-wrap:after{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(0,0,0,.08) 0%,transparent 26%,transparent 55%,rgba(0,0,0,.72) 100%);pointer-events:none}
            .t10-rank{position:absolute;top:clamp(3px,5cqw,10px);left:clamp(4px,6cqw,12px);z-index:3;pointer-events:none;user-select:none;min-width:unset;height:unset;padding:0;background:0 0;border:none;border-radius:0;box-shadow:none;line-height:1}
            .t10-rank-num{display:block;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;font-size:clamp(1.625rem,36cqw,4.75rem);font-weight:800;font-style:normal;font-variant-numeric:tabular-nums;line-height:1;letter-spacing:-.04em;color:transparent;-webkit-text-stroke-width:clamp(1px,.32cqw,2px);-webkit-text-stroke-color:rgba(255,255,255,.95);paint-order:stroke fill;text-shadow:none}
            .t10-rank--1 .t10-rank-num{font-size:clamp(2rem,44cqw,5.5rem);-webkit-text-stroke-color:#ffe566}
            .t10-rank--2 .t10-rank-num{font-size:clamp(1.75rem,38cqw,4.75rem);-webkit-text-stroke-color:#b8c8e0}
            .t10-rank--3 .t10-rank-num{font-size:clamp(1.55rem,34cqw,4.25rem);-webkit-text-stroke-color:#d4a574}
            .tr-score{position:absolute;top:6px;right:6px;z-index:2;display:inline-flex;align-items:center;gap:3px;padding:4px 8px;font-size:13px;font-weight:700;font-variant-numeric:tabular-nums;color:#1a1208;background:linear-gradient(135deg,#f0c85a 0%,var(--t10-gold-deep) 100%);box-shadow:0 2px 10px rgba(0,0,0,.45)}
            .tr-score--high{color:#fff;background:linear-gradient(135deg,#6dd86d 0%,#3a9e3a 100%)}
            .tr-score-star{font-size:11px;line-height:1;opacity:.85}
            .t10-body{padding:0 4px 0 8px;border-left:2px solid rgba(255,255,255,.08);transition:border-color var(--t10-tr)}
            .t10-movie-title{margin:0;font-size:13px;font-weight:600;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#fafafa;transition:color var(--t10-tr)}
            .t10-skeleton{display:flex;flex-direction:column;gap:12px}
            .t10-skeleton-poster{aspect-ratio:2/3;background:linear-gradient(90deg,#1c1c24 25%,#262630 50%,#1c1c24 75%);background-size:200% 100%;animation:t10-shimmer 1.4s ease infinite}
            .t10-skeleton-body{padding-top:0}
            .t10-skeleton-line{height:10px;background:linear-gradient(90deg,#1c1c24 25%,#262630 50%,#1c1c24 75%);background-size:200% 100%;animation:t10-shimmer 1.4s ease infinite}
            .t10-empty{grid-column:1/-1;text-align:center;padding:40px 16px;border:1px dashed var(--t10-border)}
            .t10-empty i{display:block;font-size:28px;margin-bottom:10px;color:var(--t10-gold);opacity:.75}
            .t10-empty p{margin:0;font-size:13px;color:var(--t10-muted)}
          `,
        }}
      />

      <main id="main-contents" className="col-xs-12 col-sm-12 col-md-8">
        <div className="t10-page" id="t10Page">
          <header className="t10-hero">
            <div className="t10-hero-inner">
              <h1 className="t10-title">Top 10 HH3D</h1>
              <p className="t10-subtitle">
                Những bộ phim hoạt hình 3D được xem nhiều nhất tại HoatHinh3D.
              </p>
              <span className="t10-hero-accent" aria-hidden="true" />
            </div>
          </header>

          {/* Nav Tab */}
          <nav className="t10-tabs" role="tablist" aria-label="Lọc theo thời gian">
            {['day', 'week', 'month', 'year'].map((type) => (
              <button
                key={type}
                type="button"
                className={`t10-tab ${activeTab === type ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === type}
                onClick={() => handleTabChange(type)}
              >
                {type === 'day' ? 'NGÀY' : type === 'week' ? 'TUẦN' : type === 'month' ? 'THÁNG' : 'NĂM'}
              </button>
            ))}
          </nav>

          {/* Grid Container */}
          <div
            className="t10-grid"
            id="t10Grid"
            role="tabpanel"
            aria-live="polite"
            aria-busy={isLoading} // Kích hoạt opacity: 0.55 từ CSS
          >
            {/* CƠ CHẾ 1: BẬT SKELETON LOADING KHI ĐANG FETCH */}
            {isLoading ? (
              Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="t10-skeleton">
                  <div className="t10-skeleton-poster" />
                  <div className="t10-skeleton-body">
                    <div className="t10-skeleton-line" />
                  </div>
                </div>
              ))
            ) : movies.length > 0 ? (
              /* HIỂN THỊ DANH SÁCH PHIM KHI TẢI XONG */
              movies.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="t10-card"
                  style={{ animationDelay: `${index * 30}ms` }}
                  title={item.title}
                >
                  <div className="t10-poster-wrap">
                    <span
                      className={`t10-rank ${
                        item.rank === 1
                          ? 't10-rank--1'
                          : item.rank === 2
                          ? 't10-rank--2'
                          : item.rank === 3
                          ? 't10-rank--3'
                          : ''
                      }`}
                      aria-hidden="true"
                    >
                      <span className="t10-rank-num">{item.rank}</span>
                    </span>
                    <span className={`tr-score ${item.isHigh ? 'tr-score--high' : ''}`}>
                      <span className="tr-score-star" aria-hidden="true">
                        ★
                      </span>
                      {item.score}
                    </span>

                    {/* CƠ CHẾ 2: LAZY LOAD ẢNH BẰNG NATIVE LOADING="LAZY" */}
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      width={200}
                      height={300}
                    />
                  </div>
                  <div className="t10-body">
                    <h2 className="t10-movie-title">{item.title}</h2>
                  </div>
                </a>
              ))
            ) : (
              /* TRẠNG THÁI RỖNG */
              <div className="t10-empty">
                <p>Không có dữ liệu</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default TopTen;