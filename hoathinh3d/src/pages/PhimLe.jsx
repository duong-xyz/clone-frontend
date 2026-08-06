import React, { useState, useEffect, useRef } from 'react';
import styles from '../../public/css/phimle.css?raw';

// Dữ liệu mẫu phim lẻ / OVA
const ALL_SINGLE_MOVIES = [
  {
    id: 1,
    title: 'Luyện Khí Mười Vạn Năm OVA: Dương Cực Thiên Hạ',
    slug: 'https://hoathinh3d.st/luyen-khi-muoi-van-nam-ova-duong-cuc-thien-ha',
    score: '4.4',
    quality: 'HD Việt Sub',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2026/07/luyen-khi-muoi-van-nam-ova-duong-cuc-thien-ha-thumb-300x450.webp',
  },
  {
    id: 2,
    title: 'Thôn Phệ Tinh Không Movie: Quyết Chiến Hành Tinh Nguyên Thuỷ',
    slug: 'https://hoathinh3d.st/thon-phe-tinh-khong-movie-quyet-chien-hanh-tinh-nguyen-thuy',
    score: '4.6',
    quality: 'HD Việt Sub',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2026/05/Thon-Phe-Tinh-Khong-Movie-Quyet-Chien-Hanh-Tinh-Nguyen-Thuy-300x450-1.webp',
  },
  {
    id: 3,
    title: 'Đấu Phá Thương Khung: Gia Mã Đế Quốc OVA',
    slug: 'https://hoathinh3d.st/dau-pha-thuong-khung-ova',
    score: '4.8',
    quality: 'Full HD',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2022/07/dau-pha-thuong-khung-phan-5-300x450.jpg',
  },
  {
    id: 4,
    title: 'Thế Giới Hoàn Mỹ Movie: Tái Tạo Giới',
    slug: 'https://hoathinh3d.st/the-gioi-hoan-my-movie',
    score: '4.7',
    quality: 'HD Việt Sub',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2021/04/the-gioi-hoan-my.jpg',
  },
  {
    id: 5,
    title: 'Phàm Nhân Tu Tiên Movie: Phong Khởi Thiên Nam',
    slug: 'https://hoathinh3d.st/pham-nhan-tu-tien-movie',
    score: '4.9',
    quality: 'HD Thuyết Minh',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2021/11/pham-nhan-tu-tien-300x450.jpg',
  },
  {
    id: 11,
    title: 'Luyện Khí Mười Vạn Năm OVA: Dương Cực Thiên Hạ',
    slug: 'https://hoathinh3d.st/luyen-khi-muoi-van-nam-ova-duong-cuc-thien-ha',
    score: '4.4',
    quality: 'HD Việt Sub',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2026/07/luyen-khi-muoi-van-nam-ova-duong-cuc-thien-ha-thumb-300x450.webp',
  },
  {
    id: 12,
    title: 'Thôn Phệ Tinh Không Movie: Quyết Chiến Hành Tinh Nguyên Thuỷ',
    slug: 'https://hoathinh3d.st/thon-phe-tinh-khong-movie-quyet-chien-hanh-tinh-nguyen-thuy',
    score: '4.6',
    quality: 'HD Việt Sub',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2026/05/Thon-Phe-Tinh-Khong-Movie-Quyet-Chien-Hanh-Tinh-Nguyen-Thuy-300x450-1.webp',
  },
  {
    id: 13,
    title: 'Đấu Phá Thương Khung: Gia Mã Đế Quốc OVA',
    slug: 'https://hoathinh3d.st/dau-pha-thuong-khung-ova',
    score: '4.8',
    quality: 'Full HD',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2022/07/dau-pha-thuong-khung-phan-5-300x450.jpg',
  },
  {
    id: 14,
    title: 'Thế Giới Hoàn Mỹ Movie: Tái Tạo Giới',
    slug: 'https://hoathinh3d.st/the-gioi-hoan-my-movie',
    score: '4.7',
    quality: 'HD Việt Sub',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2021/04/the-gioi-hoan-my.jpg',
  },
  {
    id: 15,
    title: 'Phàm Nhân Tu Tiên Movie: Phong Khởi Thiên Nam',
    slug: 'https://hoathinh3d.st/pham-nhan-tu-tien-movie',
    score: '4.9',
    quality: 'HD Thuyết Minh',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2021/11/pham-nhan-tu-tien-300x450.jpg',
  },
  {
    id: 16,
    title: 'Phàm Nhân Tu Tiên Movie: Phong Khởi Thiên Nam',
    slug: 'https://hoathinh3d.st/pham-nhan-tu-tien-movie',
    score: '4.9',
    quality: 'HD Thuyết Minh',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2021/11/pham-nhan-tu-tien-300x450.jpg',
  },
  {
    id: 17,
    title: 'Phàm Nhân Tu Tiên Movie: Phong Khởi Thiên Nam',
    slug: 'https://hoathinh3d.st/pham-nhan-tu-tien-movie',
    score: '4.9',
    quality: 'HD Thuyết Minh',
    poster: 'https://hoathinh3d.st/wp-content/uploads/2021/11/pham-nhan-tu-tien-300x450.jpg',
  },
];

const PAGE_SIZE = 10;
// Số lượng skeleton hiển thị khi đang nạp thêm
const SKELETON_COUNT = 5;

// Component Skeleton cho từng thẻ phim
const MovieCardSkeleton = () => (
  <div className="mv-skeleton">
    <div className="mv-skeleton-poster" />
    <div className="mv-skeleton-body">
      <div className="mv-skeleton-line" style={{ width: '90%', marginBottom: '6px' }} />
      <div className="mv-skeleton-line" style={{ width: '60%' }} />
    </div>
  </div>
);

const PhimLe = () => {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true); // Mặc định true cho lần nạp đầu tiên
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const sentinelRef = useRef(null);

  // Khởi tạo batch dữ liệu đầu tiên
  useEffect(() => {
    const timer = setTimeout(() => {
      const initialBatch = ALL_SINGLE_MOVIES.slice(0, PAGE_SIZE);
      setDisplayedMovies(initialBatch);
      if (initialBatch.length >= ALL_SINGLE_MOVIES.length) {
        setHasMore(false);
      }
      setLoading(false);
      setIsInitialLoad(false);
    }, 800); // Giả lập độ trễ nạp dữ liệu ban đầu

    return () => clearTimeout(timer);
  }, []);

  // IntersectionObserver nạp thêm dữ liệu khi cuộn xuống
  useEffect(() => {
    if (isInitialLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore && !loading) {
          loadMoreMovies();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    const currentSentinel = sentinelRef.current;
    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    return () => {
      if (currentSentinel) observer.unobserve(currentSentinel);
    };
  }, [hasMore, loading, isInitialLoad]);

  const loadMoreMovies = () => {
    setLoading(true);

    setTimeout(() => {
      setDisplayedMovies((prevMovies) => {
        const currentLength = prevMovies.length;
        const nextBatch = ALL_SINGLE_MOVIES.slice(currentLength, currentLength + PAGE_SIZE);

        if (currentLength + nextBatch.length >= ALL_SINGLE_MOVIES.length) {
          setHasMore(false);
        }

        return [...prevMovies, ...nextBatch];
      });

      setLoading(false);
    }, 2000); // Giả lập độ trễ khi nạp thêm
  };

  return (
    <>
      <style>{styles}</style>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root{--mv-gold:#e8b84a;--mv-gold-deep:#c9922a;--mv-amber:#f0a030;--mv-ink:#0e0e12;--mv-border:rgba(240,160,48,.14);--mv-text:#f5f5f7;--mv-muted:rgba(245,245,247,.58);--mv-tr:.22s ease}
            @keyframes mv-fade-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
            @keyframes mv-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
            @keyframes mv-spin{to{transform:rotate(360deg)}}
            @media (prefers-reduced-motion:reduce){.mv-card{animation:none !important}.mv-card:hover .mv-poster-wrap img{transform:none}.mv-skeleton-poster,.mv-skeleton-line{animation:none}.mv-loader-ring{animation:none}}
            .mv-page{margin:0 0 40px;padding:14px 12px 22px;font-family:'Be Vietnam Pro',sans-serif;color:var(--mv-text);background:radial-gradient(ellipse 90% 60% at 100% 0%,rgba(240,160,48,.07) 0%,transparent 55%),radial-gradient(ellipse 70% 50% at 0% 100%,rgba(232,184,74,.05) 0%,transparent 50%),linear-gradient(168deg,#181820 0%,#12121a 55%,#0f0f14 100%);border:1px solid var(--mv-border);box-shadow:0 12px 40px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.04)}
            .mv-hero{position:relative;margin-bottom:16px;padding:20px 18px 16px;overflow:hidden;background:radial-gradient(ellipse 80% 120% at 100% 0%,rgba(240,160,48,.11) 0%,transparent 52%),radial-gradient(ellipse 55% 70% at 0% 100%,rgba(232,184,74,.07) 0%,transparent 48%),linear-gradient(145deg,#1e1e28 0%,#16161e 50%,#111118 100%);border:1px solid rgba(240,160,48,.16)}
            .mv-hero-inner{position:relative;z-index:1}
            .mv-title{margin:0 0 8px;font-size:clamp(1.4rem, 3.5vw, 1.85rem);font-weight:800;line-height:1.15;letter-spacing:-.025em;background:linear-gradient(120deg,#fff 0%,#fff 45%,var(--mv-amber) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
            .mv-subtitle{margin:0;max-width:65ch;font-size:13px;line-height:1.55;color:var(--mv-muted)}
            .mv-hero-accent{display:block;width:48px;height:3px;margin-top:14px;background:linear-gradient(90deg,var(--mv-amber),var(--mv-gold),transparent)}
            .mv-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px 10px}
            @media (min-width:576px){.mv-grid{grid-template-columns:repeat(3,1fr);gap:22px 10px}}
            @media (min-width:992px){.mv-grid{grid-template-columns:repeat(4,1fr);gap:24px 12px}}
            @media (min-width:1200px){.mv-grid{grid-template-columns:repeat(5,1fr);gap:24px 12px}}
            .mv-card{display:flex;flex-direction:column;gap:12px;text-decoration:none !important;color:inherit !important;animation:mv-fade-up .35s ease both}
            .mv-card:hover .mv-movie-title{color:var(--mv-amber)}
            .mv-card:hover .mv-body{border-left-color:var(--mv-amber)}
            .mv-card:hover .mv-poster-wrap img{transform:scale(1.03)}
            .mv-poster-wrap{position:relative;aspect-ratio:2/3;overflow:hidden;background:#18181e}
            .mv-poster-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}
            .mv-episode,.tr-score{position:absolute;top:5px;z-index:2;display:inline-flex;align-items:center;gap:4px;height:22px;padding:0 8px;box-sizing:border-box;border-radius:7px;font-size:11.5px;font-weight:700;line-height:1;letter-spacing:.2px;text-transform:none;font-variant-numeric:tabular-nums;color:#fff;background:rgba(11,16,22,.66);-webkit-backdrop-filter:blur(10px) saturate(140%);backdrop-filter:blur(10px) saturate(140%);border:1px solid rgba(255,255,255,.16);box-shadow:0 2px 10px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.14)}
            .tr-score{right:5px}
            .tr-score-star{font-size:10px;line-height:1;color:#f5c451}
            .tr-score--high .tr-score-star{color:#5fd35f}
            .mv-episode{left:5px;max-width:calc(100% - 62px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
            .mv-episode:before{content:"\\f008";font-family:"Font Awesome 6 Free";font-weight:900;font-size:9px;line-height:1;flex:0 0 auto;color:#4fc3f7}
            @media (prefers-reduced-transparency:reduce){.mv-episode,.tr-score{background:rgba(11,16,22,.94);-webkit-backdrop-filter:none;backdrop-filter:none}}
            @media (max-width:575px){.mv-episode,.tr-score{top:4px;height:20px;padding:0 6px;font-size:11px}.mv-episode{left:4px}.tr-score{right:4px}}
            .mv-body{padding:0 4px 0 8px;border-left:2px solid rgba(255,255,255,.08);transition:border-color var(--mv-tr)}
            .mv-movie-title{margin:0;font-size:13px;font-weight:600;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#fafafa;transition:color var(--mv-tr)}
            .mv-skeleton{display:flex;flex-direction:column;gap:12px}
            .mv-skeleton-poster{aspect-ratio:2/3;background:linear-gradient(90deg,#1c1c24 25%,#262630 50%,#1c1c24 75%);background-size:200% 100%;animation:mv-shimmer 1.4s ease infinite}
            .mv-skeleton-body{padding-top:0}
            .mv-skeleton-line{height:10px;background:linear-gradient(90deg,#1c1c24 25%,#262630 50%,#1c1c24 75%);background-size:200% 100%;animation:mv-shimmer 1.4s ease infinite}
            .mv-sentinel{height:1px}
            .mv-loader{display:none;flex-direction:column;align-items:center;gap:10px;padding:20px 0 8px;color:var(--mv-muted);font-size:12px}
            .mv-loader.active{display:flex}
            .mv-loader-ring{width:28px;height:28px;border:2px solid rgba(240,160,48,.15);border-top-color:var(--mv-amber);border-radius:50%;animation:mv-spin .75s linear infinite}
            .mv-end{display:none;text-align:center;padding:18px 0 4px;font-size:12px;color:var(--mv-muted)}
            .mv-end.active{display:block}
          `,
        }}
      />
      <main id="main-contents" className="col-xs-12 col-sm-12 col-md-8">
        <div className="mv-page" id="mvPage">
          <header className="mv-hero">
            <div className="mv-hero-inner">
              <h1 className="mv-title">Phim Lẻ</h1>
              <p className="mv-subtitle">
                Nơi cập nhật những bộ phim lẻ và OVA Hoạt Hình Trung Quốc mới nhất với chất lượng cao và nội dung hấp dẫn.
              </p>
              <span className="mv-hero-accent" aria-hidden="true" />
            </div>
          </header>

          <div className="mv-grid" id="mvGrid" aria-live="polite" aria-busy={loading}>
            {/* 1. Hiển thị danh sách phim đã tải */}
            {displayedMovies.map((movie, index) => (
              <a
                key={movie.id}
                href={movie.slug}
                className="mv-card"
                style={{ animationDelay: `${(index % PAGE_SIZE) * 30}ms` }}
                title={movie.title}
              >
                <div className="mv-poster-wrap">
                  <span className="mv-episode">{movie.quality}</span>
                  <span className={`tr-score ${parseFloat(movie.score) >= 4.5 ? 'tr-score--high' : ''}`}>
                    <span className="tr-score-star" aria-hidden="true">
                      ★
                    </span>
                    {movie.score}
                  </span>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    loading="lazy"
                    width={200}
                    height={300}
                  />
                </div>
                <div className="mv-body">
                  <h2 className="mv-movie-title">{movie.title}</h2>
                </div>
              </a>
            ))}

            {/* 2. Hiển thị các ô Skeleton trong lúc Loading */}
            {loading &&
              Array.from({ length: isInitialLoad ? PAGE_SIZE : SKELETON_COUNT }).map((_, idx) => (
                <MovieCardSkeleton key={`skeleton-${idx}`} />
              ))}
          </div>

          {/* Point kích hoạt cuộn trang */}
          <div className="mv-sentinel" ref={sentinelRef} id="mvSentinel" aria-hidden="true" />

          {/* Spinner phía dưới cùng */}
          <div className={`mv-loader ${loading && !isInitialLoad ? 'active' : ''}`} id="mvLoader" role="status">
            <div className="mv-loader-ring" />
            <span>Đang tải thêm phim…</span>
          </div>

          {/* Thông báo đã hết phim */}
          <p className={`mv-end ${!hasMore && !loading ? 'active' : ''}`} id="mvEnd">
            Bạn đã xem hết danh sách.
          </p>
        </div>
      </main>
    </>
  );
};

export default PhimLe;