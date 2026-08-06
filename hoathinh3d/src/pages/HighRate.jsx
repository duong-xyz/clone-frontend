import React, { useState, useEffect, useRef } from 'react';
import styles from '../../public/css/highrate.css?raw'

/**
 * phiên bản đã được bổ sung cơ chế Infinite Scroll (Cuộn tới đâu tải tới đó) chuẩn React dùng API native IntersectionObserver.
 * Component sẽ hiển thị trước 10 phim (hoặc tùy chỉnh), khi bạn cuộn xuống cuối trang thì Observer sẽ kích hoạt trạng thái "Đang tải...",
 * chờ khoảng 0.5 giây (giả lập tải dữ liệu/API) rồi nạp tiếp các phim tiếp theo cho đến khi hết danh sách.
 */

// Dữ liệu toàn bộ 35 bộ phim
const ALL_MOVIES = [
  { rank: 1, title: 'Tiên Nghịch', slug: 'https://hoathinh3d.st/tien-nghich', score: '4.6', votes: '51.4K', poster: '/stickers/pham-nhan-tu-tien-phan-3-thumb-300x450.jpg' },
  { rank: 2, title: 'Thôn Phệ Tinh Không', slug: 'https://hoathinh3d.st/thon-phe-tinh-khong', score: '4.7', votes: '42.8K', poster: '/stickers/pham-nhan-tu-tien-phan-3-thumb-300x450.jpg' },
  { rank: 3, title: 'Thế Giới Hoàn Mỹ', slug: 'https://hoathinh3d.st/the-gioi-hoan-my', score: '4.5', votes: '39.1K', poster: '/stickers/pham-nhan-tu-tien-phan-3-thumb-300x450.jpg' },
  { rank: 4, title: 'Đấu La Đại Lục 2: Tuyệt Thế Đường Môn', slug: 'https://hoathinh3d.st/dau-la-dai-luc-2-tuyet-the-duong-mon', score: '4.4', votes: '35.6K', poster: '/stickers/pham-nhan-tu-tien-phan-3-thumb-300x450.jpg' },
  { rank: 5, title: 'Đấu Phá Thương Khung', slug: 'https://hoathinh3d.st/dau-pha-thuong-khung', score: '4.3', votes: '31.2K', poster: 'https://hoathinh3d.st/wp-content/uploads/2022/07/dau-pha-thuong-khung-phan-5-300x450.jpg' },
  { rank: 6, title: 'Phàm Nhân Tu Tiên', slug: 'https://hoathinh3d.st/pham-nhan-tu-tien', score: '4.8', votes: '28.9K', poster: 'https://hoathinh3d.st/wp-content/uploads/2021/11/pham-nhan-tu-tien-300x450.jpg' },
  { rank: 7, title: 'Già Thiên', slug: 'https://hoathinh3d.st/gia-thien', score: '4.2', votes: '24.5K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/05/gia-thien-300x450.jpg' },
  { rank: 8, title: 'Tuyết Ưng Lĩnh Chủ', slug: 'https://hoathinh3d.st/tuyet-ung-linh-chu', score: '4.1', votes: '21.3K', poster: 'https://hoathinh3d.st/wp-content/uploads/2021/12/tuyet-ung-linh-chu-phan-3.jpg' },
  { rank: 9, title: 'Nhất Niệm Vĩnh Hằng', slug: 'https://hoathinh3d.st/nhat-niem-vinh-hang', score: '4.7', votes: '19.8K', poster: 'https://hoathinh3d.st/wp-content/uploads/2022/07/nhat-niem-vinh-hang-phan-2-300x450.jpg' },
  { rank: 10, title: 'Trảm Thần', slug: 'https://hoathinh3d.st/tram-than', score: '4.9', votes: '18.4K', poster: 'https://hoathinh3d.st/wp-content/uploads/2024/07/tram-than-300x450.jpg' },
  { rank: 11, title: 'Vũ Động Càn Khôn', slug: 'https://hoathinh3d.st/vu-dong-can-khon', score: '4.3', votes: '17.2K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/09/vu-dong-can-khon-phan-4-300x450.jpg' },
  { rank: 12, title: 'Thần Ấn Vương Tọa', slug: 'https://hoathinh3d.st/than-an-vuong-toa', score: '4.2', votes: '16.5K', poster: 'https://hoathinh3d.st/wp-content/uploads/2022/04/than-an-vuong-toa-300x450.jpg' },
  { rank: 13, title: 'Thương Lan Quyết', slug: 'https://hoathinh3d.st/thuong-lan-quyet', score: '4.5', votes: '15.1K', poster: 'https://hoathinh3d.st/wp-content/uploads/2022/07/thuong-lan-quyet-300x450.jpg' },
  { rank: 14, title: 'Đấu La Đại Lục 1', slug: 'https://hoathinh3d.st/dau-la-dai-luc', score: '4.6', votes: '14.8K', poster: 'https://hoathinh3d.st/wp-content/uploads/2021/12/dau-la-dai-luc-300x450.jpg' },
  { rank: 15, title: 'Đại Chủ Tể', slug: 'https://hoathinh3d.st/dai-chu-te', score: '4.4', votes: '13.9K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/06/dai-chu-te-300x450.jpg' },
  { rank: 16, title: 'Thần Mộ', slug: 'https://hoathinh3d.st/than-mo', score: '4.1', votes: '12.4K', poster: 'https://hoathinh3d.st/wp-content/uploads/2022/08/than-mo-300x450.jpg' },
  { rank: 17, title: 'Họa Giang Hồ Chi Bất Lương Nhân', slug: 'https://hoathinh3d.st/hoa-giang-ho-chi-bat-luong-nhan', score: '4.9', votes: '11.8K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/03/hoa-giang-ho-chi-bat-luong-nhan-phan-6-300x450.jpg' },
  { rank: 18, title: 'Thương Nguyên Đồ', slug: 'https://hoathinh3d.st/thuong-nguyen-do', score: '4.7', votes: '11.2K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/06/thuong-nguyen-do-300x450.jpg' },
  { rank: 19, title: 'Tây Hành Kỷ', slug: 'https://hoathinh3d.st/tay-hanh-ky', score: '4.3', votes: '10.5K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/05/tay-hanh-ky-phan-5-300x450.jpg' },
  { rank: 20, title: 'Vạn Giới Tiên Tông', slug: 'https://hoathinh3d.st/van-gioi-tien-tong', score: '4.0', votes: '9.9K', poster: 'https://hoathinh3d.st/wp-content/uploads/2021/12/van-gioi-tien-tong-300x450.jpg' },
  { rank: 21, title: 'Yêu Thần Ký', slug: 'https://hoathinh3d.st/yeu-than-ky', score: '4.1', votes: '9.4K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/01/yeu-than-ky-phan-7-300x450.jpg' },
  { rank: 22, title: 'Vạn Giới Pháp Thần', slug: 'https://hoathinh3d.st/van-gioi-phap-than', score: '3.9', votes: '8.8K', poster: 'https://hoathinh3d.st/wp-content/uploads/2020/12/van-gioi-phap-than-300x450.jpg' },
  { rank: 23, title: 'Võ Thần Chúa Tể', slug: 'https://hoathinh3d.st/vo-than-chua-te', score: '4.0', votes: '8.3K', poster: 'https://hoathinh3d.st/wp-content/uploads/2020/03/vo-than-chua-te.jpg' },
  { rank: 24, title: 'Lăng Đế', slug: 'https://hoathinh3d.st/lang-de', score: '4.2', votes: '7.9K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/11/lang-de-300x450.jpg' },
  { rank: 25, title: 'Luyện Khí Mười Vạn Năm', slug: 'https://hoathinh3d.st/luyen-khi-muoi-van-nam', score: '4.1', votes: '7.5K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/02/luyen-khi-10-van-nam-300x450.jpg' },
  { rank: 26, title: 'Bách Luyện Thành Thần', slug: 'https://hoathinh3d.st/bach-luyen-thanh-than', score: '4.3', votes: '7.1K', poster: 'https://hoathinh3d.st/wp-content/uploads/2022/11/bach-luyen-thanh-than-300x450.jpg' },
  { rank: 27, title: 'Nghịch Thiên Chí Tôn', slug: 'https://hoathinh3d.st/nghich-thien-chi-ton', score: '4.0', votes: '6.8K', poster: 'https://hoathinh3d.st/wp-content/uploads/2021/07/nghich-thien-chi-ton.jpg' },
  { rank: 28, title: 'Độc Bộ Tiêu Dao', slug: 'https://hoathinh3d.st/doc-bo-tieu-dao', score: '3.9', votes: '6.4K', poster: 'https://hoathinh3d.st/wp-content/uploads/2020/06/doc-bo-tieu-dao.jpg' },
  { rank: 29, title: 'Vô Thượng Thần Đế', slug: 'https://hoathinh3d.st/vo-thuong-than-de', score: '3.8', votes: '6.1K', poster: 'https://hoathinh3d.st/wp-content/uploads/2020/05/vo-thuong-than-de.jpg' },
  { rank: 30, title: 'Chân Dũng Khí', slug: 'https://hoathinh3d.st/chan-dung-khi', score: '4.4', votes: '5.8K', poster: 'https://hoathinh3d.st/wp-content/uploads/2024/01/chan-dung-khi-300x450.jpg' },
  { rank: 31, title: 'Ngoại Đạo Tu Tiên', slug: 'https://hoathinh3d.st/ngoai-dao-tu-tien', score: '4.3', votes: '5.4K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/12/ngoai-dao-tu-tien-300x450.jpg' },
  { rank: 32, title: 'Đại Vương Tẩy Não', slug: 'https://hoathinh3d.st/dai-vuong-tay-nao', score: '4.2', votes: '5.1K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/08/dai-vuong-tay-nao-300x450.jpg' },
  { rank: 33, title: 'Thương Thiên Sát', slug: 'https://hoathinh3d.st/thuong-thien-sat', score: '4.1', votes: '4.8K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/10/thuong-thien-sat-300x450.jpg' },
  { rank: 34, title: 'Ngã Là Tà Đế', slug: 'https://hoathinh3d.st/nga-la-ta-de', score: '4.5', votes: '4.5K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/09/nga-la-ta-de-300x450.jpg' },
  { rank: 35, title: 'Trùng Sinh Đô Thị Vinh Quang', slug: 'https://hoathinh3d.st/trung-sinh-do-thi-vinh-quang', score: '4.0', votes: '4.2K', poster: 'https://hoathinh3d.st/wp-content/uploads/2023/07/trung-sinh-do-thi-vinh-quang-300x450.jpg' }
];

const PAGE_SIZE = 10; // Số lượng phim mỗi lần tải thêm

const HighRate = () => {
  const [displayedMovies, setDisplayedMovies] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const sentinelRef = useRef(null);

  // Tải trang đầu tiên (10 phim đầu)
  useEffect(() => {
    setDisplayedMovies(ALL_MOVIES.slice(0, PAGE_SIZE));
    if (ALL_MOVIES.length <= PAGE_SIZE) {
      setHasMore(false);
    }
  }, []);

  // Lắng nghe sự kiện cuộn màn hình bằng IntersectionObserver
  useEffect(() => {
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
  }, [displayedMovies, hasMore, loading]);

  // Hàm giả lập nạp thêm dữ liệu
  const loadMoreMovies = () => {
    setLoading(true);

    setTimeout(() => {
      const currentLength = displayedMovies.length;
      const nextBatch = ALL_MOVIES.slice(currentLength, currentLength + PAGE_SIZE);

      if (nextBatch.length > 0) {
        setDisplayedMovies((prev) => [...prev, ...nextBatch]);
      }

      if (currentLength + nextBatch.length >= ALL_MOVIES.length) {
        setHasMore(false);
      }

      setLoading(false);
    }, 2000); // Tạo độ trễ 500ms để hiển thị hiệu ứng Loading mượt mà
  };

  const getRankClass = (rank) => {
    let classes = `tr-rank tr-rank--${rank}`;
    const rankStr = rank.toString();
    if (rankStr.length >= 2) classes += ` tr-rank--len${rankStr.length}`;
    return classes;
  };

  return (
    <>
        <style>{styles}</style>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root{--tr-gold:#e8b84a;--tr-gold-deep:#c9922a;--tr-amber:#ff9f43;--tr-sky:#6ec4e8;--tr-silver:#d4d4dc;--tr-bronze:#c9956a;--tr-ink:#0e0e12;--tr-panel:#14141c;--tr-border:rgba(232,184,74,.14);--tr-text:#f5f5f7;--tr-muted:rgba(245,245,247,.58);--tr-tr:.22s ease}
            @keyframes tr-fade-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
            @keyframes tr-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
            @keyframes tr-spin{to{transform:rotate(360deg)}}
            @keyframes tr-rank-metallic{0%,78%,100%{background-position:0 50%}40%{background-position:100% 50%}}
            @media (prefers-reduced-motion:reduce){.tr-card{animation:none !important}.tr-card:hover .tr-poster-wrap img{transform:none}.tr-skeleton-poster,.tr-skeleton-line{animation:none}.tr-loader-ring{animation:none}.tr-rank--1 .tr-rank-num,.tr-rank--2 .tr-rank-num,.tr-rank--3 .tr-rank-num{animation:none !important}}
            .tr-page{margin:0 0 40px;padding:14px 12px 22px;font-family:'Be Vietnam Pro',sans-serif;color:var(--tr-text);background:radial-gradient(ellipse 90% 60% at 100% 0%,rgba(232,184,74,.07) 0%,transparent 55%),radial-gradient(ellipse 70% 50% at 0% 100%,rgba(110,196,232,.05) 0%,transparent 50%),linear-gradient(168deg,#181820 0%,#12121a 55%,#0f0f14 100%);border:1px solid var(--tr-border);box-shadow:0 12px 40px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.04)}
            .tr-hero{position:relative;margin-bottom:18px;padding:20px 18px 18px;overflow:hidden;background:radial-gradient(ellipse 80% 120% at 100% 0%,rgba(232,184,74,.16) 0%,transparent 52%),radial-gradient(ellipse 55% 70% at 0% 100%,rgba(255,159,67,.08) 0%,transparent 48%),linear-gradient(145deg,#1e1e28 0%,#16161e 50%,#111118 100%);border:1px solid rgba(232,184,74,.2)}
            .tr-hero:before{content:'';position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e8b84a' fill-opacity='0.03'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E");pointer-events:none}
            .tr-hero-inner{position:relative;z-index:1}
            .tr-title{margin:0 0 8px;font-size:clamp(1.4rem,3.5vw,1.85rem);font-weight:800;line-height:1.15;letter-spacing:-.025em;background:linear-gradient(120deg,#fff 0%,#fff 45%,var(--tr-gold) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
            .tr-subtitle{margin:0;max-width:56ch;font-size:13px;line-height:1.55;color:var(--tr-muted)}
            .tr-hero-accent{display:block;width:48px;height:3px;margin-top:14px;background:linear-gradient(90deg,var(--tr-gold),var(--tr-amber),transparent)}
            .tr-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px 10px}
            @media (min-width:576px){.tr-grid{grid-template-columns:repeat(3,1fr);gap:22px 10px}}
            @media (min-width:992px){.tr-grid{grid-template-columns:repeat(4,1fr);gap:24px 12px}}
            @media (min-width:1200px){.tr-grid{grid-template-columns:repeat(5,1fr);gap:24px 12px}}
            .tr-card{display:flex;flex-direction:column;gap:12px;text-decoration:none !important;color:inherit !important;animation:tr-fade-up .35s ease both}
            .tr-card:hover .tr-movie-title{color:var(--tr-gold)}
            .tr-card:hover .tr-body{border-left-color:var(--tr-gold)}
            .tr-card:hover .tr-poster-wrap img{transform:scale(1.03)}
            .tr-poster-wrap{position:relative;aspect-ratio:2/3;overflow:hidden;background:#18181e;container-type:inline-size}
            .tr-poster-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}
            .tr-poster-wrap:before{content:'';position:absolute;top:0;left:0;z-index:1;width:62%;height:42%;background:radial-gradient(ellipse 115% 95% at 0% 0%,rgba(0,0,0,.5) 0%,transparent 72%);pointer-events:none}
            .tr-poster-wrap:after{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(0,0,0,.08) 0%,transparent 26%,transparent 55%,rgba(0,0,0,.72) 100%);pointer-events:none}
            .tr-rank{position:absolute;top:clamp(2px,4cqw,8px);left:clamp(2px,5cqw,10px);z-index:3;pointer-events:none;user-select:none;line-height:1}
            .tr-rank-num{display:block;font-family:'Libre Bodoni',Georgia,'Times New Roman',serif;font-weight:700;font-style:normal;font-variant-numeric:lining-nums;line-height:.9;letter-spacing:-.03em;color:rgba(248,248,250,.9);filter:drop-shadow(0 2px 8px rgba(0,0,0,.72))}
            .tr-rank-num{font-size:clamp(1.4rem,30cqw,3.75rem)}
            .tr-rank--1 .tr-rank-num{font-size:clamp(2rem,44cqw,5.5rem);letter-spacing:-.04em;color:transparent;background:linear-gradient(160deg,#fff9e6 0%,#ffd95a 28%,#d4a82a 55%,#fff0b3 78%,#c9922a 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 3px 10px rgba(0,0,0,.8)) drop-shadow(0 0 18px rgba(255,217,90,.22));animation:tr-rank-metallic 10s ease-in-out infinite}
            .tr-rank--2 .tr-rank-num{font-size:clamp(1.75rem,38cqw,4.75rem);color:transparent;background:linear-gradient(160deg,#f4f6fa 0%,#c8d0dc 35%,#9aa8bc 60%,#e8ecf2 82%,#a8b4c4 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 3px 10px rgba(0,0,0,.8)) drop-shadow(0 0 14px rgba(200,208,220,.18));animation:tr-rank-metallic 10s ease-in-out infinite;animation-delay:-3.3s}
            .tr-rank--3 .tr-rank-num{font-size:clamp(1.55rem,34cqw,4.25rem);color:transparent;background:linear-gradient(160deg,#f5e0c8 0%,#d4a574 30%,#a66b3a 58%,#e8c49a 80%,#b8844a 100%);background-size:220% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;filter:drop-shadow(0 3px 10px rgba(0,0,0,.8)) drop-shadow(0 0 14px rgba(212,165,116,.2));animation:tr-rank-metallic 10s ease-in-out infinite;animation-delay:-6.6s}
            .tr-rank--len2 .tr-rank-num{font-size:clamp(1.2rem,26cqw,3.2rem);letter-spacing:-.045em}
            .tr-rank--len2.tr-rank--1 .tr-rank-num{font-size:clamp(1.55rem,34cqw,4.25rem)}
            .tr-rank--len2.tr-rank--2 .tr-rank-num{font-size:clamp(1.4rem,30cqw,3.85rem)}
            .tr-rank--len2.tr-rank--3 .tr-rank-num{font-size:clamp(1.3rem,28cqw,3.55rem)}
            .tr-rank--len3 .tr-rank-num{font-size:clamp(.95rem,19cqw,2.5rem);letter-spacing:-.05em}
            .tr-rank--len4 .tr-rank-num{font-size:clamp(.8rem,15cqw,2rem);letter-spacing:-.055em}
            .tr-score{position:absolute;top:6px;right:6px;z-index:2;display:inline-flex;align-items:center;gap:3px;padding:4px 8px;font-size:13px;font-weight:700;font-variant-numeric:tabular-nums;color:#1a1208;background:linear-gradient(135deg,#f0c85a 0%,var(--tr-gold-deep) 100%);box-shadow:0 2px 10px rgba(0,0,0,.45)}
            .tr-score--high{color:#fff;background:linear-gradient(135deg,#6dd86d 0%,#3a9e3a 100%)}
            .tr-score-star{font-size:11px;line-height:1;opacity:.85}
            .tr-poster-foot{position:absolute;left:0;right:0;bottom:0;z-index:2;display:flex;align-items:center;justify-content:flex-end;padding:8px 8px 7px;background:linear-gradient(0deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.35) 55%,transparent 100%)}
            .tr-votes{display:inline-flex;align-items:center;gap:5px;font-size:11px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--tr-sky);text-shadow:0 1px 4px rgba(0,0,0,.8)}
            .tr-votes i{font-size:10px;color:var(--tr-sky);opacity:.9}
            .tr-body{padding:0 4px 0 8px;border-left:2px solid rgba(255,255,255,.08);transition:border-color var(--tr-tr)}
            .tr-movie-title{margin:0;font-size:13px;font-weight:600;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#fafafa;transition:color var(--tr-tr)}
            .tr-sentinel{height:1px}
            .tr-loader{display:none;flex-direction:column;align-items:center;gap:10px;padding:20px 0 8px;color:var(--tr-muted);font-size:12px}
            .tr-loader.active{display:flex}
            .tr-loader-ring{width:28px;height:28px;border:2px solid rgba(232,184,74,.15);border-top-color:var(--tr-gold);border-radius:50%;animation:tr-spin .75s linear infinite}
            .tr-end{display:none;text-align:center;padding:18px 0 4px;font-size:12px;color:var(--tr-muted)}
            .tr-end.active{display:block}
          `
        }}
      />

      <main id="main-contents" className="col-xs-12 col-sm-12 col-md-8">
        <div className="tr-page" id="trPage">
          <header className="tr-hero">
            <div className="tr-hero-inner">
              <h1 className="tr-title">Phim Đánh Giá Cao</h1>
              <p className="tr-subtitle">
                Những bộ phim hoạt hình trung quốc đang được đánh giá tốt tại HoatHinh3D.
              </p>
              <span className="tr-hero-accent" aria-hidden="true" />
            </div>
          </header>

          <div className="tr-grid" id="trGrid" aria-live="polite" aria-busy={loading}>
            {displayedMovies.map((movie, index) => (
              <a
                key={movie.rank}
                href={movie.slug}
                className={`tr-card tr-card--top${movie.rank}`}
                style={{ animationDelay: `${(index % PAGE_SIZE) * 40}ms` }}
                title={movie.title}
              >
                <div className="tr-poster-wrap">
                  <span className={getRankClass(movie.rank)} aria-hidden="true">
                    <span className="tr-rank-num">{movie.rank}</span>
                  </span>

                  <span className="tr-score tr-score--high">
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

                  <div className="tr-poster-foot">
                    <span className="tr-votes">
                      <i className="fas fa-users" aria-hidden="true" />
                      {movie.votes} lượt
                    </span>
                  </div>
                </div>

                <div className="tr-body">
                  <h2 className="tr-movie-title">{movie.title}</h2>
                </div>
              </a>
            ))}
          </div>

          {/* Điểm canh chừng cuộn trang (Sentinel) */}
          <div className="tr-sentinel" ref={sentinelRef} id="trSentinel" aria-hidden="true" />

          {/* Spinner Vòng xoay Loading */}
          <div className={`tr-loader ${loading ? 'active' : ''}`} id="trLoader" role="status">
            <div className="tr-loader-ring" />
            <span>Đang tải thêm phim…</span>
          </div>

          {/* Dòng chữ thông báo đã tải hết */}
          <p className={`tr-end ${!hasMore ? 'active' : ''}`} id="trEnd">
            Bạn đã xem hết danh sách.
          </p>
        </div>
      </main>
    </>
  );
};

export default HighRate;