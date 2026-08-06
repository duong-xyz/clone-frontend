import React, { useState, useEffect, useRef } from 'react';
import styles from '../../public/css/hoanthanh.css?raw';

// Dữ liệu mẫu phim hoàn thành
const ALL_COMPLETED_MOVIES = [
  {
    id: 1,
    title: 'Tiêu Nhân',
    slug: 'https://hoathinh3d.am/tieu-nhan',
    score: '3',
    updatedTime: '12 ngày trước',
    updatedIso: '2026-07-23T11:55:02+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2026/06/thu-nam-thumb-300x450.webp',
  },
  {
    id: 2,
    title: 'Thần Mộ',
    slug: 'https://hoathinh3d.am/than-mo',
    score: '4.3',
    updatedTime: '12 ngày trước',
    updatedIso: '2026-07-23T10:07:13+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2022/07/than-mo-300x450.webp',
  },
  {
    id: 3,
    title: 'Đấu La Đại Lục Phần 1',
    slug: 'https://hoathinh3d.am/dau-la-dai-luc-phan-1',
    score: '4.9',
    updatedTime: '1 tháng trước',
    updatedIso: '2026-07-01T09:00:00+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2020/05/dau-la-dai-luc-300x450.jpg',
  },
  {
    id: 4,
    title: 'Đấu Phá Thương Khung Phần 4',
    slug: 'https://hoathinh3d.am/dau-pha-thuong-khung-p4',
    score: '4.6',
    updatedTime: '2 tháng trước',
    updatedIso: '2026-06-10T14:30:00+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2021/03/dau-pha-thuong-khung-p4-300x450.jpg',
  },
  {
    id: 5,
    title: 'Tuyết Ưng Lĩnh Chủ Phần 3',
    slug: 'https://hoathinh3d.am/tuyet-ung-linh-chu-p3',
    score: '4.5',
    updatedTime: '3 tháng trước',
    updatedIso: '2026-05-15T16:20:00+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2022/01/tuyet-ung-linh-chu-p3-300x450.jpg',
  },
  {
    id: 6,
    title: 'Tuyết Ưng Lĩnh Chủ Phần 3',
    slug: 'https://hoathinh3d.am/tuyet-ung-linh-chu-p3',
    score: '4.5',
    updatedTime: '3 tháng trước',
    updatedIso: '2026-05-15T16:20:00+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2022/01/tuyet-ung-linh-chu-p3-300x450.jpg',
  },
  {
    id: 7,
    title: 'Tuyết Ưng Lĩnh Chủ Phần 3',
    slug: 'https://hoathinh3d.am/tuyet-ung-linh-chu-p3',
    score: '4.5',
    updatedTime: '3 tháng trước',
    updatedIso: '2026-05-15T16:20:00+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2022/01/tuyet-ung-linh-chu-p3-300x450.jpg',
  },
  {
    id: 8,
    title: 'Tuyết Ưng Lĩnh Chủ Phần 3',
    slug: 'https://hoathinh3d.am/tuyet-ung-linh-chu-p3',
    score: '4.5',
    updatedTime: '3 tháng trước',
    updatedIso: '2026-05-15T16:20:00+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2022/01/tuyet-ung-linh-chu-p3-300x450.jpg',
  },
  {
    id: 9,
    title: 'Tuyết Ưng Lĩnh Chủ Phần 3',
    slug: 'https://hoathinh3d.am/tuyet-ung-linh-chu-p3',
    score: '4.5',
    updatedTime: '3 tháng trước',
    updatedIso: '2026-05-15T16:20:00+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2022/01/tuyet-ung-linh-chu-p3-300x450.jpg',
  },
  {
    id: 10,
    title: 'Tuyết Ưng Lĩnh Chủ Phần 3',
    slug: 'https://hoathinh3d.am/tuyet-ung-linh-chu-p3',
    score: '4.5',
    updatedTime: '3 tháng trước',
    updatedIso: '2026-05-15T16:20:00+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2022/01/tuyet-ung-linh-chu-p3-300x450.jpg',
  },
  {
    id: 11,
    title: 'Tuyết Ưng Lĩnh Chủ Phần 3',
    slug: 'https://hoathinh3d.am/tuyet-ung-linh-chu-p3',
    score: '4.5',
    updatedTime: '3 tháng trước',
    updatedIso: '2026-05-15T16:20:00+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2022/01/tuyet-ung-linh-chu-p3-300x450.jpg',
  },
];

const PAGE_SIZE = 10;
const SKELETON_COUNT = 5;

// Skeleton UI tương thích cấu trúc CSS `.cp-skeleton`
const CompletedMovieSkeleton = () => (
  <div className="cp-skeleton">
    <div className="cp-skeleton-poster" />
    <div className="cp-skeleton-body">
      <div className="cp-skeleton-line" />
    </div>
  </div>
);

const HoanThanh = () => {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const sentinelRef = useRef(null);

  // Load batch dữ liệu đầu tiên
  useEffect(() => {
    const timer = setTimeout(() => {
      const initialBatch = ALL_COMPLETED_MOVIES.slice(0, PAGE_SIZE);
      setDisplayedMovies(initialBatch);
      if (initialBatch.length >= ALL_COMPLETED_MOVIES.length) {
        setHasMore(false);
      }
      setLoading(false);
      setIsInitialLoad(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // IntersectionObserver tự động nạp thêm khi cuộn
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
    if (currentSentinel) observer.observe(currentSentinel);

    return () => {
      if (currentSentinel) observer.unobserve(currentSentinel);
    };
  }, [hasMore, loading, isInitialLoad]);

  const loadMoreMovies = () => {
    setLoading(true);

    setTimeout(() => {
      setDisplayedMovies((prev) => {
        const currentLength = prev.length;
        const nextBatch = ALL_COMPLETED_MOVIES.slice(currentLength, currentLength + PAGE_SIZE);

        if (currentLength + nextBatch.length >= ALL_COMPLETED_MOVIES.length) {
          setHasMore(false);
        }

        return [...prev, ...nextBatch];
      });

      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <style>{styles}</style>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root{--cp-gold:#e8b84a;--cp-gold-deep:#c9922a;--cp-amber:#ff9f43;--cp-emerald:#5ecf8a;--cp-ink:#0e0e12;--cp-border:rgba(232,184,74,.14);--cp-text:#f5f5f7;--cp-muted:rgba(245,245,247,.58);--cp-tr:.22s ease}
            @keyframes cp-fade-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
            @keyframes cp-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
            @keyframes cp-spin{to{transform:rotate(360deg)}}
            @media (prefers-reduced-motion:reduce){.cp-card{animation:none !important}.cp-card:hover .cp-poster-wrap img{transform:none}.cp-skeleton-poster,.cp-skeleton-line{animation:none}.cp-loader-ring{animation:none}}
            .cp-page{margin:0 0 40px;padding:14px 12px 22px;font-family:'Be Vietnam Pro',sans-serif;color:var(--cp-text);background:radial-gradient(ellipse 90% 60% at 100% 0%,rgba(94,207,138,.06) 0%,transparent 55%),radial-gradient(ellipse 70% 50% at 0% 100%,rgba(232,184,74,.05) 0%,transparent 50%),linear-gradient(168deg,#181820 0%,#12121a 55%,#0f0f14 100%);border:1px solid var(--cp-border);box-shadow:0 12px 40px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.04)}
            .cp-hero{position:relative;margin-bottom:18px;padding:20px 18px 18px;overflow:hidden;background:radial-gradient(ellipse 80% 120% at 100% 0%,rgba(94,207,138,.12) 0%,transparent 52%),radial-gradient(ellipse 55% 70% at 0% 100%,rgba(232,184,74,.08) 0%,transparent 48%),linear-gradient(145deg,#1e1e28 0%,#16161e 50%,#111118 100%);border:1px solid rgba(94,207,138,.18)}
            .cp-hero:before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235ecf8a' fill-opacity='0.03'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E");pointer-events:none}
            .cp-hero-inner{position:relative;z-index:1}
            .cp-title{margin:0 0 8px;font-size:clamp(1.4rem,3.5vw,1.85rem);font-weight:800;line-height:1.15;letter-spacing:-.025em;background:linear-gradient(120deg,#fff 0%,#fff 45%,var(--cp-emerald) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
            .cp-subtitle{margin:0;max-width:56ch;font-size:13px;line-height:1.55;color:var(--cp-muted)}
            .cp-hero-accent{display:block;width:48px;height:3px;margin-top:14px;background:linear-gradient(90deg,var(--cp-emerald),var(--cp-gold),transparent)}
            .cp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px 10px}
            @media (min-width:576px){.cp-grid{grid-template-columns:repeat(3,1fr);gap:22px 10px}}
            @media (min-width:992px){.cp-grid{grid-template-columns:repeat(4,1fr);gap:24px 12px}}
            @media (min-width:1200px){.cp-grid{grid-template-columns:repeat(5,1fr);gap:24px 12px}}
            .cp-card{display:flex;flex-direction:column;gap:12px;text-decoration:none !important;color:inherit !important;animation:cp-fade-up .35s ease both}
            .cp-card:hover .cp-movie-title{color:var(--cp-emerald)}
            .cp-card:hover .cp-body{border-left-color:var(--cp-emerald)}
            .cp-card:hover .cp-poster-wrap img{transform:scale(1.03)}
            .cp-poster-wrap{position:relative;aspect-ratio:2/3;overflow:hidden;background:#18181e}
            .cp-poster-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}
            .tr-score{position:absolute;top:6px;right:6px;z-index:2;display:inline-flex;align-items:center;gap:3px;padding:4px 8px;font-size:13px;font-weight:700;font-variant-numeric:tabular-nums;color:#1a1208;background:linear-gradient(135deg,#f0c85a 0%,var(--cp-gold-deep) 100%);box-shadow:0 2px 10px rgba(0,0,0,.45)}
            .tr-score--high{color:#fff;background:linear-gradient(135deg,#6dd86d 0%,#3a9e3a 100%)}
            .tr-score-star{font-size:11px;line-height:1;opacity:.85}
            .cp-body{padding:0 4px 0 8px;border-left:2px solid rgba(255,255,255,.08);transition:border-color var(--cp-tr)}
            .cp-movie-title{margin:0;font-size:13px;font-weight:600;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#fafafa;transition:color var(--cp-tr)}
            .cp-updated-row{display:inline-flex;align-items:center;gap:5px;max-width:100%;margin:6px 0 0;padding:4px 8px 4px 6px;line-height:1.2;background:linear-gradient(90deg,rgba(94,207,138,.07) 0%,transparent 88%);border-left:2px solid rgba(94,207,138,.24);transition:border-color var(--cp-tr),background var(--cp-tr)}
            .cp-card:hover .cp-updated-row{border-left-color:rgba(94,207,138,.42)}
            .cp-updated-row.is-fresh{background:linear-gradient(90deg,rgba(94,207,138,.13) 0%,transparent 88%);border-left-color:rgba(94,207,138,.72)}
            .cp-updated-icon{flex-shrink:0;font-size:9px;line-height:1;color:rgba(94,207,138,.5)}
            .cp-updated-row.is-fresh .cp-updated-icon{color:var(--cp-emerald)}
            .cp-updated-time{font-size:10.5px;font-weight:500;font-style:normal;font-variant-numeric:tabular-nums;letter-spacing:.01em;color:rgba(245,245,247,.58);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
            .cp-updated-row.is-fresh .cp-updated-time{color:rgba(94,207,138,.94)}
            .cp-skeleton{display:flex;flex-direction:column;gap:12px}
            .cp-skeleton-poster{aspect-ratio:2/3;background:linear-gradient(90deg,#1c1c24 25%,#262630 50%,#1c1c24 75%);background-size:200% 100%;animation:cp-shimmer 1.4s ease infinite}
            .cp-skeleton-body{padding-top:0}
            .cp-skeleton-line{height:10px;background:linear-gradient(90deg,#1c1c24 25%,#262630 50%,#1c1c24 75%);background-size:200% 100%;animation:cp-shimmer 1.4s ease infinite}
            .cp-sentinel{height:1px}
            .cp-loader{display:none;flex-direction:column;align-items:center;gap:10px;padding:20px 0 8px;color:var(--cp-muted);font-size:12px}
            .cp-loader.active{display:flex}
            .cp-loader-ring{width:28px;height:28px;border:2px solid rgba(94,207,138,.15);border-top-color:var(--cp-emerald);border-radius:50%;animation:cp-spin .75s linear infinite}
            .cp-end{display:none;text-align:center;padding:18px 0 4px;font-size:12px;color:var(--cp-muted)}
            .cp-end.active{display:block}
          `,
        }}
      />
      <main id="main-contents" className="col-xs-12 col-sm-12 col-md-8">
        <div className="cp-page" id="cpPage">
          <header className="cp-hero">
            <div className="cp-hero-inner">
              <h1 className="cp-title">Phim Hoàn Thành</h1>
              <p className="cp-subtitle">
                Danh sách phim hoạt hình 3D đã kết thúc, hết phần. Sắp xếp theo thời gian cập nhật gần nhất.
              </p>
              <span className="cp-hero-accent" aria-hidden="true" />
            </div>
          </header>

          <div className="cp-grid" id="cpGrid" aria-live="polite" aria-busy={loading}>
            {/* Render Danh sách Phim */}
            {displayedMovies.map((movie, index) => (
              <a
                key={movie.id}
                href={movie.slug}
                className="cp-card"
                style={{ animationDelay: `${(index % PAGE_SIZE) * 30}ms` }}
                title={movie.title}
              >
                <div className="cp-poster-wrap">
                  {/* Rating Score */}
                  <span className={`tr-score ${parseFloat(movie.score) >= 4.5 ? 'tr-score--high' : ''}`}>
                    <span className="tr-score-star" aria-hidden="true">
                      ★
                    </span>
                    {movie.score}
                  </span>

                  {/* Poster Image */}
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    loading="lazy"
                    width={200}
                    height={300}
                  />
                </div>

                <div className="cp-body">
                  <h2 className="cp-movie-title">{movie.title}</h2>
                  {/* Thời gian cập nhật */}
                  <p
                    className={`cp-updated-row ${movie.isFresh ? 'is-fresh' : ''}`}
                    aria-label={`Cập nhật ${movie.updatedTime}`}
                  >
                    <i className="fas fa-clock cp-updated-icon" aria-hidden="true" />
                    <time className="cp-updated-time" dateTime={movie.updatedIso}>
                      {movie.updatedTime}
                    </time>
                  </p>
                </div>
              </a>
            ))}

            {/* Render Skeleton Loading */}
            {loading &&
              Array.from({ length: isInitialLoad ? PAGE_SIZE : SKELETON_COUNT }).map((_, idx) => (
                <CompletedMovieSkeleton key={`cp-skeleton-${idx}`} />
              ))}
          </div>

          {/* Sentinel kích hoạt cuộn trang */}
          <div className="cp-sentinel" ref={sentinelRef} id="cpSentinel" aria-hidden="true" />

          {/* Loader Spinner */}
          <div className={`cp-loader ${loading && !isInitialLoad ? 'active' : ''}`} id="cpLoader" role="status">
            <div className="cp-loader-ring" />
            <span>Đang tải thêm phim…</span>
          </div>

          {/* End of list */}
          <p className={`cp-end ${!hasMore && !loading ? 'active' : ''}`} id="cpEnd">
            Bạn đã xem hết danh sách.
          </p>
        </div>
      </main>
    </>
  );
};

export default HoanThanh;