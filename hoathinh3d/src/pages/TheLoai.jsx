import React, { useState, useCallback, useMemo } from 'react';
import styles from '../../public/css/theloai.css?raw';

// 1. Khai báo Mock Data đầy đủ từ HTML gốc của bạn
const MOVIES_DATA_PAGE_3 = [
    {
        id: 'post-830048',
        title: 'Tử Xuyên Phần 2',
        originalTitle: 'Zi Chuan 2',
        url: 'https://hoathinh3d.am/tu-xuyen-phan-2',
        image: 'https://hoathinh3d.am/wp-content/uploads/2026/06/tu-xuyen-phan-2-thumb-1-300x450.jpg',
        score: '4.7',
        isHighScore: true,
        status: 'HD',
        episode: 'Tập 47 ~ 52 END',
    },
    {
        id: 'post-891363',
        title: 'Toàn Chức Pháp Sư Phần 7',
        originalTitle: 'Quanzhi Fashi 7',
        url: 'https://hoathinh3d.am/toan-chuc-phap-su-phan-7',
        image: 'https://hoathinh3d.am/wp-content/uploads/2026/05/toan-chuc-phap-su-p7-300x450.jpg',
        score: '4.4',
        status: 'HD',
        episode: 'Tập 12 END',
    },
    {
        id: 'post-863775',
        title: 'Tiên Kiếm Kỳ Hiệp Truyện 3',
        originalTitle: 'Chinese Paladin 3',
        url: 'https://hoathinh3d.am/tien-kiem-ky-hiep-truyen-3',
        image: 'https://hoathinh3d.am/wp-content/uploads/2025/12/kiemtienkytientruyen3-300x450-1.webp',
        score: '4',
        status: 'HD',
        episode: 'Tập 26 END',
    },
    {
        id: 'post-871686',
        title: 'Long Phá Cửu Thiên',
        originalTitle: "Dragon's Triumph in the Celestial Realm",
        url: 'https://hoathinh3d.am/long-pha-cuu-thien',
        image: 'https://hoathinh3d.am/wp-content/uploads/2026/02/longphacuuthien-300x450-1.webp',
        score: '3',
        status: 'HD',
        episode: 'Tập 40',
    },
    {
        id: 'post-636981',
        title: 'Tuyệt Thế Chiến Hồn',
        originalTitle: 'Peerless Soul',
        url: 'https://hoathinh3d.am/tuyet-the-chien-hon',
        image: 'https://hoathinh3d.am/wp-content/uploads/2024/04/tuyet-the-chien-hon-300x450.jpg',
        score: '3.9',
        status: 'HD',
        episode: 'Tập 180 END',
    },
    {
        id: 'post-861202',
        title: 'Vĩnh Sinh Phần 5: Thái Nguyên Tiên Phủ',
        originalTitle: 'Immortality SS5',
        url: 'https://hoathinh3d.am/vinh-sinh-phan-5',
        image: 'https://hoathinh3d.am/wp-content/uploads/2025/12/vinh-sinh-300x450.webp',
        score: '4.6',
        isHighScore: true,
        status: 'HD',
        episode: 'Tập 26 END',
    },
    {
        id: 'post-1746',
        title: 'Bách Luyện Thành Thần',
        originalTitle: 'Elevation to the Status of a God',
        url: 'https://hoathinh3d.am/bach-luyen-thanh-than',
        image: 'https://hoathinh3d.am/wp-content/uploads/2022/10/bach-luyen-thanh-than-4-300x450.jpg',
        score: '4',
        status: 'HD',
        episode: 'Tập 130 END',
    },
    {
        id: 'post-888540',
        title: 'Tinh Thần Biến Phần 7',
        originalTitle: 'Stellar Transformation 7',
        url: 'https://hoathinh3d.am/tinh-than-bien-phan-7',
        image: 'https://hoathinh3d.am/wp-content/uploads/2026/05/tinh-than-bien-p7-300x450.webp',
        score: '4.4',
        status: 'HD',
        episode: 'Tập 12 END',
    },
    {
        id: 'post-6303',
        title: 'Tiên Võ Đế Tôn',
        originalTitle: 'Xian Wu Di Zun',
        url: 'https://hoathinh3d.am/tien-vo-de-ton',
        image: 'https://hoathinh3d.am/wp-content/uploads/2023/03/tien-vo-de-ton-3-300x450.jpg',
        score: '4',
        status: 'HD',
        episode: 'Tập 173 END',
    },
    {
        id: 'post-858607',
        title: 'Huyền Giới Chi Môn',
        originalTitle: 'The Gate of Mystical Realm',
        url: 'https://hoathinh3d.am/huyen-gioi-chi-mon',
        image: 'https://hoathinh3d.am/wp-content/uploads/2025/11/huyen-gioi-chi-mon-1.jpg',
        score: '3.2',
        status: 'HD',
        episode: 'Tập 26 END',
    },
    {
        id: 'post-861538',
        title: 'Kiếm Lai Phần 2',
        originalTitle: 'Jian Lai SS2',
        url: 'https://hoathinh3d.am/kiem-lai-phan-2',
        image: 'https://hoathinh3d.am/wp-content/uploads/2025/12/kiem-lai-2-300x450.webp',
        score: '4.7',
        isHighScore: true,
        status: 'HD',
        episode: 'Tập 21~27 END',
    },
    {
        id: 'post-1183',
        title: 'Thần Ấn Vương Tọa',
        originalTitle: 'Throne Of Seal',
        url: 'https://hoathinh3d.am/than-an-vuong-toa',
        image: 'https://hoathinh3d.am/wp-content/uploads/2022/04/than-an-vuong-toa-300x450.webp',
        score: '4.2',
        status: 'HD',
        episode: 'Tập 208 END',
    },
    {
        id: 'post-879749',
        title: 'Già Thiên Movie: Vác Quan Tài Chiến Vương Đằng',
        originalTitle: 'Shrouding the Heavens Movie: Battle Against Wang Teng',
        url: 'https://hoathinh3d.am/gia-thien-movie-vac-quan-tai-chien-vuong-dang',
        image: 'https://hoathinh3d.am/wp-content/uploads/2026/04/gia-thien-movie-vac-quan-tai-chien-vuong-dang-1-300x450.webp',
        score: '4.7',
        isHighScore: true,
        episode: 'HD Việt Sub',
    },
    {
        id: 'post-850997',
        title: 'Thiên Tướng',
        originalTitle: 'Heavenly Minister',
        url: 'https://hoathinh3d.am/thien-tuong',
        image: 'https://hoathinh3d.am/wp-content/uploads/2025/10/Thien-Tuong-300x450.jpg',
        score: '4.4',
        status: 'HD',
        episode: 'Tập 26 END',
    },
    {
        id: 'post-873745',
        title: 'Tu La Võ Thần Phần 2',
        originalTitle: 'Xiu Luo Wu Shen 2',
        url: 'https://hoathinh3d.am/tu-la-vo-than-phan-2',
        image: 'https://hoathinh3d.am/wp-content/uploads/2026/02/tu-la-vo-than-phan-2-300x450.jpg',
        score: '4.6',
        isHighScore: true,
        status: 'HD',
        episode: 'Tập 8 ~ 16 END',
    },
    {
        id: 'post-858109',
        title: 'Cửu Dương Võ Thần',
        originalTitle: 'Nine Yang Martial God',
        url: 'https://hoathinh3d.am/cuu-duong-vo-than',
        image: 'https://hoathinh3d.am/wp-content/uploads/2025/11/cuu-duong-vo-than.jpg',
        score: '4.2',
        status: 'HD',
        episode: 'Tập 20',
    },
    {
        id: 'post-863028',
        title: 'Mật Mã Sơn Hải Kinh',
        originalTitle: "Classic of Mountains and Sea's secret",
        url: 'https://hoathinh3d.am/mat-ma-son-hai-kinh',
        image: 'https://hoathinh3d.am/wp-content/uploads/2025/12/mat-ma-son-hai-kinh-300x450.jpg',
        score: '3.5',
        status: 'HD',
        episode: 'Tập 13 END',
    },
    {
        id: 'post-846654',
        title: 'Đại Đường Thừa Phong Lục',
        originalTitle: 'Rise In The Wind of Great Tang',
        url: 'https://hoathinh3d.am/dai-duong-thua-phong-luc',
        image: 'https://hoathinh3d.am/wp-content/uploads/2025/09/dai-duong-thua-phong-luc-300x450.jpg',
        score: '3.5',
        status: 'HD',
        episode: 'Tập 26 END',
    },
    {
        id: 'post-835451',
        title: 'Võ Toái Tinh Hà',
        originalTitle: 'Wu Sui Xinghe',
        url: 'https://hoathinh3d.am/vo-toai-tinh-ha',
        image: 'https://hoathinh3d.am/wp-content/uploads/2025/08/vo-toai-tinh-ha.webp',
        score: '3.6',
        status: 'HD',
        episode: 'Tập 60 END',
    },
    {
        id: 'post-859399',
        title: 'Ngạo Thế Đan Thần',
        originalTitle: 'Ào Shì Dān Shén',
        url: 'https://hoathinh3d.am/ngao-the-dan-than',
        image: 'https://hoathinh3d.am/wp-content/uploads/2025/12/ngao-the-dan-than-300x450.jpg',
        score: '4.2',
        status: 'HD',
        episode: 'Tập 12 END',
    },
];

const TOTAL_PAGES = 14;

// 2. Component Con được bọc React.memo chống lag khi cuộn
const MovieCard = React.memo(({ movie }) => (
    <article className={`col-md-3 col-sm-3 col-xs-6 thumb grid-item ${movie.id}`}>
        <div className="halim-item">
            <a className="halim-thumb" href={movie.url} title={movie.title}>
                <figure>
                    <img
                        className="img-responsive"
                        src={movie.image}
                        alt={movie.title}
                        title={movie.title}
                        loading="lazy"
                        width="300"
                        height="450"
                    />
                </figure>
                <span
                    className={`halim-card-score ${movie.isHighScore ? 'is-high' : ''}`}
                    aria-label={`Đánh giá ${movie.score}/5`}
                >
                    <i className="fas fa-star" aria-hidden="true" />
                    <span className="halim-card-score-num">{movie.score}</span>
                </span>
                {movie.status && <span className="status">{movie.status}</span>}
                <span className="episode">{movie.episode}</span>
                <div className="icon_overlay" />
                <div className="halim-post-title-box">
                    <div className="halim-post-title">
                        <h2 className="entry-title">{movie.title}</h2>
                        <p className="original_title">{movie.originalTitle}</p>
                    </div>
                </div>
            </a>
        </div>
    </article>
));

MovieCard.displayName = 'MovieCard';

const SKELETON_STYLES = `
  @keyframes hh3d-preview-shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .hh3d-preview-skeleton {
    --hh3d-shimmer: linear-gradient(90deg, rgba(255, 255, 255, .04) 0%, rgba(255, 255, 255, .1) 50%, rgba(255, 255, 255, .04) 100%);
  }

  .hh3d-preview-skeleton-bone {
    background: var(--hh3d-shimmer);
    background-size: 200% 100%;
    animation: hh3d-preview-shimmer 1.4s ease-in-out infinite;
  }

  .hh3d-preview-skeleton-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .hh3d-preview-skeleton-poster.is-cinematic {
    width: 100%;
    aspect-ratio: 2 / 3;
    border-radius: 5px;
    box-shadow: none;
  }

  .hh3d-preview-skeleton-line {
    height: 10px;
    border-radius: 4px;
  }

  .hh3d-preview-skeleton-card .hh3d-preview-skeleton-line.is-title {
    height: 12px;
    width: 92%;
    border-radius: 4px;
    margin-top: 2px;
  }

  .hh3d-preview-skeleton-card .hh3d-preview-skeleton-line.is-title-2 {
    height: 12px;
    width: 58%;
    border-radius: 4px;
  }

  .grid-item:nth-child(2) .hh3d-preview-skeleton-bone { animation-delay: .12s; }
  .grid-item:nth-child(3) .hh3d-preview-skeleton-bone { animation-delay: .24s; }
  .grid-item:nth-child(4) .hh3d-preview-skeleton-bone { animation-delay: .36s; }
  .grid-item:nth-child(5) .hh3d-preview-skeleton-bone { animation-delay: .48s; }
  .grid-item:nth-child(6) .hh3d-preview-skeleton-bone { animation-delay: .6s; }

  @media (prefers-reduced-motion: reduce) {
    .hh3d-preview-skeleton-bone {
      animation: none;
      background: rgba(255, 255, 255, .06);
    }
  }
`;

const MovieSkeleton = () => (
  <div className="col-md-3 col-sm-3 col-xs-6 thumb grid-item hh3d-preview-skeleton">
    <div className="hh3d-preview-skeleton-card">
      <div className="hh3d-preview-skeleton-poster is-cinematic hh3d-preview-skeleton-bone" />
      <div className="hh3d-preview-skeleton-line is-title hh3d-preview-skeleton-bone" />
      <div className="hh3d-preview-skeleton-line is-title-2 hh3d-preview-skeleton-bone" />
    </div>
  </div>
);

// 3. Component Chính
const TheLoai = () => {
    const [currentPage, setCurrentPage] = useState(3);
    const [loading, setLoading] = useState(false);

    const handlePageChange = useCallback((e, pageNumber) => {
        e.preventDefault();
        if (pageNumber === currentPage || pageNumber < 1 || pageNumber > TOTAL_PAGES) return;

        // Bật hiệu ứng loading khi bấm chuyển trang
        setLoading(true);
        setCurrentPage(pageNumber);
        window.requestAnimationFrame(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Giả lập thời gian chờ fetch API (Thực tế khi nối API chỉ cần tắt loading sau khi nhận response)
        setTimeout(() => {
            setLoading(false);
        }, 400);
    }, [currentPage, loading]);

    const movies = useMemo(() => MOVIES_DATA_PAGE_3, []);

    return (
        <>
            {/* Tải CSS tĩnh trực tiếp giúp loại bỏ hiện tượng giật màn hình */}
            <style dangerouslySetInnerHTML={{ __html: styles + SKELETON_STYLES }} />

            <main id="main-contents" className="col-xs-12 col-sm-12 col-md-8">
                <div className="section-bar is-tabs clearfix">
                    <h3 className="section-title">
                        <span>Huyền Huyễn</span>
                    </h3>
                </div>

                <div className="halim_box">
                    {loading ? Array.from({ length: 8 }).map((_, index) => <MovieSkeleton key={index} />) : movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>

                <div className="clearfix" />

                <div className="text-center">
                    <div className="text-center">
                        <ul className="page-numbers">
                            {currentPage > 1 && (
                                <li>
                                    <a
                                        className="prev page-numbers"
                                        href="#"
                                        onClick={(e) => handlePageChange(e, currentPage - 1)}
                                    >
                                        <i className="hl-down-open rotate-left" />
                                    </a>
                                </li>
                            )}

                            {[1, 2, 3, 4, 5].map((page) => (
                                <li key={page}>
                                    {page === currentPage ? (
                                        <span aria-current="page" className="page-numbers current">
                                            {page}
                                        </span>
                                    ) : (
                                        <a
                                            className="page-numbers"
                                            href="#"
                                            onClick={(e) => handlePageChange(e, page)}
                                        >
                                            {page}
                                        </a>
                                    )}
                                </li>
                            ))}

                            <li>
                                <span className="page-numbers dots">…</span>
                            </li>

                            <li>
                                <a
                                    className="page-numbers"
                                    href="#"
                                    onClick={(e) => handlePageChange(e, TOTAL_PAGES)}
                                >
                                    {TOTAL_PAGES}
                                </a>
                            </li>

                            {currentPage < TOTAL_PAGES && (
                                <li>
                                    <a
                                        className="next page-numbers"
                                        href="#"
                                        onClick={(e) => handlePageChange(e, currentPage + 1)}
                                    >
                                        <i className="hl-down-open rotate-right" />
                                    </a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
};

export default React.memo(TheLoai);