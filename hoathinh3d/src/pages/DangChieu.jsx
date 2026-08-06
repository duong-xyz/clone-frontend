/** component DangChieu hoàn chỉnh đã tích hợp logic Infinite Scroll (IntersectionObserver),
 Skeleton Loading và hiển thị đầy đủ thông tin đặc trưng của trang Phim Đang Chiếu 
 (Lịch chiếu T2-CN, Tập mới, Thời gian cập nhật isFresh) */
import React, { useState, useEffect, useRef } from 'react';
import styles from '../../public/css/dangchieu.css?raw';

// Dữ liệu mẫu phim đang chiếu
const ALL_ONGOING_MOVIES = [
  {
    id: 1,
    title: 'Già Thiên',
    slug: 'https://hoathinh3d.am/gia-thien',
    score: '4.3',
    currentEp: '174',
    scheduleDay: 'T4',
    scheduleTitle: 'Thứ 4',
    updatedTime: '3 giờ trước',
    updatedIso: '2026-08-04T18:55:45+07:00',
    isFresh: true,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2026/06/gia-thien-thumb-300x450.png',
  },
  {
    id: 2,
    title: 'Nhất Niệm Vĩnh Hằng Phần Cuối',
    slug: 'https://hoathinh3d.am/nhat-niem-vinh-hang-phan-cuoi',
    score: '4.8',
    currentEp: '170',
    scheduleDay: 'T4',
    scheduleTitle: 'Thứ 4',
    updatedTime: '4 giờ trước',
    updatedIso: '2026-08-04T17:44:09+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2026/07/nhat-niem-vinh-hang-phan-cuoi-thumb-300x450.webp',
  },
  {
    id: 3,
    title: 'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn',
    slug: 'https://hoathinh3d.am/dau-la-dai-luc-2',
    score: '4.7',
    currentEp: '60',
    scheduleDay: 'T7',
    scheduleTitle: 'Thứ 7',
    updatedTime: '1 ngày trước',
    updatedIso: '2026-08-03T10:00:00+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2023/06/dau-la-dai-luc-2-thumb-300x450.jpg',
  },
  {
    id: 4,
    title: 'Thế Giới Hoàn Mỹ',
    slug: 'https://hoathinh3d.am/the-gioi-hoan-my',
    score: '4.6',
    currentEp: '175',
    scheduleDay: 'T6',
    scheduleTitle: 'Thứ 6',
    updatedTime: '2 ngày trước',
    updatedIso: '2026-08-02T12:00:00+07:00',
    isFresh: false,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2021/04/the-gioi-hoan-my.jpg',
  },
  {
    id: 5,
    title: 'Thôn Phệ Tinh Không',
    slug: 'https://hoathinh3d.am/thon-phe-tinh-khong',
    score: '4.9',
    currentEp: '130',
    scheduleDay: 'CN',
    scheduleTitle: 'Chủ Nhật',
    updatedTime: '2 giờ trước',
    updatedIso: '2026-08-04T20:00:00+07:00',
    isFresh: true,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2020/11/thon-phe-tinh-khong.jpg',
  },
  {
    id: 6,
    title: 'Thôn Phệ Tinh Không',
    slug: 'https://hoathinh3d.am/thon-phe-tinh-khong',
    score: '4.9',
    currentEp: '130',
    scheduleDay: 'CN',
    scheduleTitle: 'Chủ Nhật',
    updatedTime: '2 giờ trước',
    updatedIso: '2026-08-04T20:00:00+07:00',
    isFresh: true,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2020/11/thon-phe-tinh-khong.jpg',
  },
  {
    id: 7,
    title: 'Thôn Phệ Tinh Không',
    slug: 'https://hoathinh3d.am/thon-phe-tinh-khong',
    score: '4.9',
    currentEp: '130',
    scheduleDay: 'CN',
    scheduleTitle: 'Chủ Nhật',
    updatedTime: '2 giờ trước',
    updatedIso: '2026-08-04T20:00:00+07:00',
    isFresh: true,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2020/11/thon-phe-tinh-khong.jpg',
  },
  {
    id: 8,
    title: 'Thôn Phệ Tinh Không',
    slug: 'https://hoathinh3d.am/thon-phe-tinh-khong',
    score: '4.9',
    currentEp: '130',
    scheduleDay: 'CN',
    scheduleTitle: 'Chủ Nhật',
    updatedTime: '2 giờ trước',
    updatedIso: '2026-08-04T20:00:00+07:00',
    isFresh: true,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2020/11/thon-phe-tinh-khong.jpg',
  },
  {
    id: 9,
    title: 'Thôn Phệ Tinh Không',
    slug: 'https://hoathinh3d.am/thon-phe-tinh-khong',
    score: '4.9',
    currentEp: '130',
    scheduleDay: 'CN',
    scheduleTitle: 'Chủ Nhật',
    updatedTime: '2 giờ trước',
    updatedIso: '2026-08-04T20:00:00+07:00',
    isFresh: true,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2020/11/thon-phe-tinh-khong.jpg',
  },
  {
    id: 10,
    title: 'Thôn Phệ Tinh Không',
    slug: 'https://hoathinh3d.am/thon-phe-tinh-khong',
    score: '4.9',
    currentEp: '130',
    scheduleDay: 'CN',
    scheduleTitle: 'Chủ Nhật',
    updatedTime: '2 giờ trước',
    updatedIso: '2026-08-04T20:00:00+07:00',
    isFresh: true,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2020/11/thon-phe-tinh-khong.jpg',
  },
  {
    id: 11,
    title: 'Thôn Phệ Tinh Không',
    slug: 'https://hoathinh3d.am/thon-phe-tinh-khong',
    score: '4.9',
    currentEp: '130',
    scheduleDay: 'CN',
    scheduleTitle: 'Chủ Nhật',
    updatedTime: '2 giờ trước',
    updatedIso: '2026-08-04T20:00:00+07:00',
    isFresh: true,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2020/11/thon-phe-tinh-khong.jpg',
  },
  {
    id: 12,
    title: 'Thôn Phệ Tinh Không',
    slug: 'https://hoathinh3d.am/thon-phe-tinh-khong',
    score: '4.9',
    currentEp: '130',
    scheduleDay: 'CN',
    scheduleTitle: 'Chủ Nhật',
    updatedTime: '2 giờ trước',
    updatedIso: '2026-08-04T20:00:00+07:00',
    isFresh: true,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2020/11/thon-phe-tinh-khong.jpg',
  },
  {
    id: 13,
    title: 'Thôn Phệ Tinh Không',
    slug: 'https://hoathinh3d.am/thon-phe-tinh-khong',
    score: '4.9',
    currentEp: '130',
    scheduleDay: 'CN',
    scheduleTitle: 'Chủ Nhật',
    updatedTime: '2 giờ trước',
    updatedIso: '2026-08-04T20:00:00+07:00',
    isFresh: true,
    poster: 'https://hoathinh3d.am/wp-content/uploads/2020/11/thon-phe-tinh-khong.jpg',
  },

];

const PAGE_SIZE = 10;
const SKELETON_COUNT = 5;

// Skeleton UI tương thích cấu trúc CSS `.og-skeleton`
const OngoingMovieSkeleton = () => (
  <div className="og-skeleton">
    <div className="og-skeleton-poster" />
    <div className="og-skeleton-body">
      <div className="og-skeleton-line" />
      <div className="og-skeleton-line og-skeleton-line--short" />
    </div>
  </div>
);

const DangChieu = () => {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const sentinelRef = useRef(null);

  // Nạp batch dữ liệu đầu tiên
  useEffect(() => {
    const timer = setTimeout(() => {
      const initialBatch = ALL_ONGOING_MOVIES.slice(0, PAGE_SIZE);
      setDisplayedMovies(initialBatch);
      if (initialBatch.length >= ALL_ONGOING_MOVIES.length) {
        setHasMore(false);
      }
      setLoading(false);
      setIsInitialLoad(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // IntersectionObserver nạp thêm khi cuộn trang
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
        const nextBatch = ALL_ONGOING_MOVIES.slice(currentLength, currentLength + PAGE_SIZE);

        if (currentLength + nextBatch.length >= ALL_ONGOING_MOVIES.length) {
          setHasMore(false);
        }

        return [...prev, ...nextBatch];
      });

      setLoading(false);
    }, 1400);
  };

  return (
    <>
      <style>{styles}</style>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root{--og-gold:#e8b84a;--og-gold-deep:#c9922a;--og-sky:#56c8f5;--og-sky-deep:#2a9fd4;--og-ink:#0e0e12;--og-border:rgba(86,200,245,.14);--og-text:#f5f5f7;--og-muted:rgba(245,245,247,.58);--og-tr:.22s ease}
            @keyframes og-fade-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
            @keyframes og-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
            @keyframes og-spin{to{transform:rotate(360deg)}}
            @media (prefers-reduced-motion:reduce){.og-card{animation:none !important}.og-card:hover .og-poster-wrap img{transform:none}.og-skeleton-poster,.og-skeleton-line{animation:none}.og-loader-ring{animation:none}}
            .og-page{margin:0 0 40px;padding:14px 12px 22px;font-family:'Be Vietnam Pro',sans-serif;color:var(--og-text);background:radial-gradient(ellipse 90% 60% at 100% 0%,rgba(86,200,245,.07) 0%,transparent 55%),radial-gradient(ellipse 70% 50% at 0% 100%,rgba(232,184,74,.05) 0%,transparent 50%),linear-gradient(168deg,#181820 0%,#12121a 55%,#0f0f14 100%);border:1px solid var(--og-border);box-shadow:0 12px 40px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.04)}
            .og-hero{position:relative;margin-bottom:18px;padding:20px 18px 18px;overflow:hidden;background:radial-gradient(ellipse 80% 120% at 100% 0%,rgba(86,200,245,.14) 0%,transparent 52%),radial-gradient(ellipse 55% 70% at 0% 100%,rgba(232,184,74,.08) 0%,transparent 48%),linear-gradient(145deg,#1e1e28 0%,#16161e 50%,#111118 100%);border:1px solid rgba(86,200,245,.2)}
            .og-hero:before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2356c8f5' fill-opacity='0.03'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E");pointer-events:none}
            .og-hero-inner{position:relative;z-index:1}
            .og-title{margin:0 0 8px;font-size:clamp(1.4rem, 3.5vw, 1.85rem);font-weight:800;line-height:1.15;letter-spacing:-.025em;background:linear-gradient(120deg,#fff 0%,#fff 45%,var(--og-sky) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
            .og-subtitle{margin:0;max-width:56ch;font-size:13px;line-height:1.55;color:var(--og-muted)}
            .og-hero-accent{display:block;width:48px;height:3px;margin-top:14px;background:linear-gradient(90deg,var(--og-sky),var(--og-gold),transparent)}
            .og-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px 10px}
            @media (min-width:576px){.og-grid{grid-template-columns:repeat(3,1fr);gap:22px 10px}}
            @media (min-width:992px){.og-grid{grid-template-columns:repeat(4,1fr);gap:24px 12px}}
            @media (min-width:1200px){.og-grid{grid-template-columns:repeat(5,1fr);gap:24px 12px}}
            .og-card{display:flex;flex-direction:column;gap:12px;text-decoration:none !important;color:inherit !important;animation:og-fade-up .35s ease both}
            .og-card:hover .og-movie-title{color:var(--og-sky)}
            .og-card:hover .og-body{border-left-color:var(--og-sky)}
            .og-card:hover .og-poster-wrap img{transform:scale(1.03)}
            .og-poster-wrap{position:relative;aspect-ratio:2/3;overflow:hidden;background:#18181e}
            .og-poster-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}
            .tr-score{position:absolute;top:6px;right:6px;z-index:2;display:inline-flex;align-items:center;gap:3px;padding:4px 8px;font-size:13px;font-weight:700;font-variant-numeric:tabular-nums;color:#1a1208;background:linear-gradient(135deg,#f0c85a 0%,var(--og-gold-deep) 100%);box-shadow:0 2px 10px rgba(0,0,0,.45)}
            .tr-score--high{color:#fff;background:linear-gradient(135deg,#6dd86d 0%,#3a9e3a 100%)}
            .tr-score-star{font-size:11px;line-height:1;opacity:.85}
            .og-ep-badge{position:absolute;left:6px;bottom:6px;z-index:2;max-width:calc(100% - 12px);pointer-events:none}
            .og-ep-badge-inner{display:inline-flex;align-items:stretch;overflow:hidden;border:1px solid rgba(86,200,245,.5);background:rgba(8,12,18,.94);box-shadow:0 4px 18px rgba(0,0,0,.5),inset 0 1px 0 rgba(255,255,255,.08);transition:border-color var(--og-tr),transform var(--og-tr)}
            .og-card:hover .og-ep-badge-inner{border-color:rgba(86,200,245,.72);transform:translateY(-1px)}
            .og-ep-kicker{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;padding:5px 7px;min-width:34px;font-size:8px;font-weight:700;line-height:1.1;letter-spacing:.04em;text-transform:uppercase;color:rgba(255,255,255,.82);background:linear-gradient(180deg,rgba(86,200,245,.28) 0%,rgba(86,200,245,.12) 100%);border-right:1px solid rgba(86,200,245,.32)}
            .og-ep-kicker-line{display:block}
            .og-ep-main{display:flex;flex-direction:column;justify-content:center;gap:1px;padding:5px 10px 5px 8px;min-width:38px}
            .og-ep-num{font-size:22px;font-weight:800;line-height:1;letter-spacing:-.02em;font-variant-numeric:tabular-nums;color:var(--og-sky);text-shadow:0 1px 8px rgba(86,200,245,.35)}
            @media (max-width:575px){.og-ep-num{font-size:17px}.og-ep-kicker{min-width:30px;padding:0 5px;font-size:7px}}
            .og-body{padding:0 4px 0 8px;border-left:2px solid rgba(255,255,255,.08);transition:border-color var(--og-tr)}
            .og-movie-title{margin:0;font-size:13px;font-weight:600;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#fafafa;transition:color var(--og-tr)}
            .og-schedule-row{position:absolute;top:6px;left:6px;z-index:2;display:flex;flex-wrap:wrap;gap:3px;max-width:calc(100% - 58px);margin:0;padding:4px 5px;line-height:1;background:linear-gradient(135deg,rgba(8,12,18,.88) 0%,rgba(8,12,18,.65) 100%);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);box-shadow:0 2px 10px rgba(0,0,0,.35)}
            .og-day-pill{display:inline-block;padding:2px 5px;font-size:9px;font-weight:700;letter-spacing:.03em;font-variant-numeric:tabular-nums;color:rgba(255,255,255,.94);background:rgba(86,200,245,.2);border:1px solid rgba(86,200,245,.38)}
            .og-card:hover .og-day-pill{border-color:rgba(86,200,245,.55);background:rgba(86,200,245,.28)}
            .og-updated-row{display:inline-flex;align-items:center;gap:5px;max-width:100%;margin:6px 0 0;padding:4px 8px 4px 6px;line-height:1.2;background:linear-gradient(90deg,rgba(86,200,245,.07) 0%,transparent 88%);border-left:2px solid rgba(86,200,245,.24);transition:border-color var(--og-tr),background var(--og-tr)}
            .og-card:hover .og-updated-row{border-left-color:rgba(86,200,245,.42)}
            .og-updated-row.is-fresh{background:linear-gradient(90deg,rgba(86,200,245,.13) 0%,transparent 88%);border-left-color:rgba(86,200,245,.72)}
            .og-updated-icon{flex-shrink:0;font-size:9px;line-height:1;color:rgba(86,200,245,.5)}
            .og-updated-row.is-fresh .og-updated-icon{color:var(--og-sky)}
            .og-updated-time{font-size:10.5px;font-weight:500;font-style:normal;font-variant-numeric:tabular-nums;letter-spacing:.01em;color:rgba(245,245,247,.58);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
            .og-updated-row.is-fresh .og-updated-time{color:rgba(86,200,245,.94)}
            .og-skeleton{display:flex;flex-direction:column;gap:12px}
            .og-skeleton-poster{aspect-ratio:2/3;background:linear-gradient(90deg,#1c1c24 25%,#262630 50%,#1c1c24 75%);background-size:200% 100%;animation:og-shimmer 1.4s ease infinite}
            .og-skeleton-body{padding-top:0}
            .og-skeleton-line{height:10px;margin-bottom:6px;background:linear-gradient(90deg,#1c1c24 25%,#262630 50%,#1c1c24 75%);background-size:200% 100%;animation:og-shimmer 1.4s ease infinite}
            .og-skeleton-line--short{width:55%}
            .og-sentinel{height:1px}
            .og-loader{display:none;flex-direction:column;align-items:center;gap:10px;padding:20px 0 8px;color:var(--og-muted);font-size:12px}
            .og-loader.active{display:flex}
            .og-loader-ring{width:28px;height:28px;border:2px solid rgba(86,200,245,.15);border-top-color:var(--og-sky);border-radius:50%;animation:og-spin .75s linear infinite}
            .og-end{display:none;text-align:center;padding:18px 0 4px;font-size:12px;color:var(--og-muted)}
            .og-end.active{display:block}
          `,
        }}
      />
      <main id="main-contents" className="col-xs-12 col-sm-12 col-md-8">
        <div className="og-page" id="ogPage">
          <header className="og-hero">
            <div className="og-hero-inner">
              <h1 className="og-title">Phim Đang Chiếu</h1>
              <p className="og-subtitle">
                Theo dõi phim đang phát sóng: tập mới nhất, lịch chiếu trong tuần và thời gian cập nhật gần nhất.
              </p>
              <span className="og-hero-accent" aria-hidden="true" />
            </div>
          </header>

          <div className="og-grid" id="ogGrid" aria-live="polite" aria-busy={loading}>
            {/* Render Danh sách Phim */}
            {displayedMovies.map((movie, index) => (
              <a
                key={movie.id}
                href={movie.slug}
                className="og-card"
                style={{ animationDelay: `${(index % PAGE_SIZE) * 30}ms` }}
                title={movie.title}
              >
                <div className="og-poster-wrap">
                  {/* Row hiển thị Lịch chiếu (Ví dụ T4, T7...) */}
                  <div className="og-schedule-row" aria-label="Lịch chiếu">
                    <span className="og-day-pill" title={movie.scheduleTitle}>
                      {movie.scheduleDay}
                    </span>
                  </div>

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

                  {/* Badge hiển thị số Tập mới */}
                  <div className="og-ep-badge" aria-label={`Tập mới nhất: Tập ${movie.currentEp}`}>
                    <div className="og-ep-badge-inner">
                      <span className="og-ep-kicker">
                        <span className="og-ep-kicker-line">Tập</span>
                        <span className="og-ep-kicker-line">mới</span>
                      </span>
                      <div className="og-ep-main">
                        <span className="og-ep-num">{movie.currentEp}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="og-body">
                  <h2 className="og-movie-title">{movie.title}</h2>
                  {/* Thời gian cập nhật với cờ isFresh (Đổi màu sáng hơn nếu mới ra) */}
                  <p
                    className={`og-updated-row ${movie.isFresh ? 'is-fresh' : ''}`}
                    aria-label={`Cập nhật ${movie.updatedTime}`}
                  >
                    <i className="fas fa-clock og-updated-icon" aria-hidden="true" />
                    <time className="og-updated-time" dateTime={movie.updatedIso}>
                      {movie.updatedTime}
                    </time>
                  </p>
                </div>
              </a>
            ))}

            {/* Render Skeleton Loading */}
            {loading &&
              Array.from({ length: isInitialLoad ? PAGE_SIZE : SKELETON_COUNT }).map((_, idx) => (
                <OngoingMovieSkeleton key={`og-skeleton-${idx}`} />
              ))}
          </div>

          {/* Sentinel kích hoạt cuộn trang */}
          <div className="og-sentinel" ref={sentinelRef} id="ogSentinel" aria-hidden="true" />

          {/* Loader Spinner */}
          <div className={`og-loader ${loading && !isInitialLoad ? 'active' : ''}`} id="ogLoader" role="status">
            <div className="og-loader-ring" />
            <span>Đang tải thêm phim…</span>
          </div>

          {/* End of list */}
          <p className={`og-end ${!hasMore && !loading ? 'active' : ''}`} id="ogEnd">
            Bạn đã xem hết danh sách.
          </p>
        </div>
      </main>
    </>
  );
};

export default DangChieu;