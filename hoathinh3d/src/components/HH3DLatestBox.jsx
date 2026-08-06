import React, { useState } from 'react';
import HH3DRefreshButton from './HH3DRefreshButton'; // Đảm bảo đúng đường dẫn tới nút của bạn

const initialMovies = [
  { id: 20224, title: 'Tiên Nghịch', originalTitle: 'Xian Ni', url: 'https://hoathinh3d.st', thumb: '/stickers/tien-nghich-6-300x450.jpg', score: '4.6', status: 'HD', episode: 'Tập 149' },
  { id: 672761, title: 'Mục Thần Ký', originalTitle: 'Mục Thần Ký', url: 'https://hoathinh3d.st', thumb: '/stickers/tien-nghich-6-300x450.jpg', score: '4.6', status: '', episode: 'Tập 91' },
  { id: 127, title: 'Võ Thần Chúa Tể', originalTitle: 'Wu Shen Zhu Zai', url: 'https://hoathinh3d.st', thumb: '/stickers/tien-nghich-6-300x450.jpg', score: '3.9', status: 'HD', episode: 'Tập 673' },
  { id: 659164, title: 'Đô Thị Cổ Tiên Y', originalTitle: 'Gu Xian Yi', url: 'https://hoathinh3d.st', thumb: '/stickers/tien-nghich-6-300x450.jpg', score: '4.2', status: 'HD', episode: 'Tập mới' },
  { id: 224, title: 'Tiên Nghịch', originalTitle: 'Xian Ni', url: 'https://hoathinh3d.st', thumb: '/stickers/tien-nghich-6-300x450.jpg', score: '4.6', status: 'HD', episode: 'Tập 149' },
  { id: 2761, title: 'Mục Thần Ký', originalTitle: 'Mục Thần Ký', url: 'https://hoathinh3d.st', thumb: '/stickers/tien-nghich-6-300x450.jpg', score: '4.6', status: '', episode: 'Tập 91' },
  { id: 27, title: 'Võ Thần Chúa Tể', originalTitle: 'Wu Shen Zhu Zai', url: 'https://hoathinh3d.st', thumb: '/stickers/tien-nghich-6-300x450.jpg', score: '3.9', status: 'HD', episode: 'Tập 673' },
  { id: 9164, title: 'Đô Thị Cổ Tiên Y', originalTitle: 'Gu Xian Yi', url: 'https://hoathinh3d.st', thumb: '/stickers/tien-nghich-6-300x450.jpg', score: '4.2', status: 'HD', episode: 'Tập mới' }
];

export default function HH3DLatestBox() {
  const [movies, setMovies] = useState(initialMovies);
  const [isApiLoading, setIsApiLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 19;

  // Hàm chuyển trang bảo lưu cấu trúc dữ liệu
  const handlePageChange = (page, e) => {
    if (e) e.preventDefault();
    if (page < 1 || page > totalPages || page === currentPage) return;

    setCurrentPage(page);
    const shuffledMovies = [...movies].sort(() => 0.5 - Math.random());
    setMovies(shuffledMovies);
  };

  const handleRefreshMovies = () => {
    return new Promise((resolve) => {
      setIsApiLoading(true);
      setTimeout(() => {
        const shuffledMovies = [...movies].sort(() => 0.5 - Math.random());
        setMovies(shuffledMovies);
        setIsApiLoading(false);
        resolve();
      }, 1500);
    });
  };

  // Thuật toán sinh danh sách li chuẩn class CSS gốc của bạn
  const renderPaginationItems = () => {
    const items = [];

    // Trang 1
    items.push(
      <li key={1}>
        {currentPage === 1 ? (
          <span aria-current="page" className="page-numbers current">1</span>
        ) : (
          <a className="page-numbers" href="https://hoathinh3d.st" onClick={(e) => handlePageChange(1, e)} data-page={1}>1</a>
        )}
      </li>
    );

    if (currentPage > 3) {
      items.push(<li key="dots-start"><span className="page-numbers dots">…</span></li>);
    }

    // Các trang ở giữa
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      items.push(
        <li key={i}>
          {currentPage === i ? (
            <span aria-current="page" className="page-numbers current">{i}</span>
          ) : (
            <a className="page-numbers" href={`https://hoathinh3d.stpage/${i}`} onClick={(e) => handlePageChange(i, e)} data-page={i}>{i}</a>
          )}
        </li>
      );
    }

    if (currentPage < totalPages - 2) {
      items.push(<li key="dots-end"><span className="page-numbers dots">…</span></li>);
    }

    // Trang cuối cùng (19)
    if (totalPages > 1) {
      items.push(
        <li key={totalPages}>
          {currentPage === totalPages ? (
            <span aria-current="page" className="page-numbers current">{totalPages}</span>
          ) : (
            <a className="page-numbers" href={`https://hoathinh3d.stpage/${totalPages}`} onClick={(e) => handlePageChange(totalPages, e)} data-page={totalPages}>{totalPages}</a>
          )}
        </li>
      );
    }

    return items;
  };

  return (
    <div id="hh3d-latest-box" className="halim_box halim-schedule-box">
      <div className={`halim-ajax-popular-post-loading ${isApiLoading ? '' : 'hidden'}`} />
      <div className="section-bar clearfix hh3d-latest-bar">
        <h3 className="section-title">
          <span>Mới Cập Nhật</span>
        </h3>
        <HH3DRefreshButton onRefresh={handleRefreshMovies} />
      </div>
      <div
        className={`halim_box hh3d-latest-grid ${isApiLoading ? "is-loading" : ""}`}
        id="hh3d-latest-grid"
        aria-live="polite"
        aria-busy={isApiLoading ? "true" : "false"}
        data-page={currentPage} // Cập nhật page động theo State
      >
        {isApiLoading ? (
          /* ========================================================
             SỬ DỤNG ĐÚNG CẤU TRÚC SKELETON THEO CSS MỚI CỦA BẠN
             ======================================================== */
          <div className="hh3d-preview-skeleton" aria-hidden="true" style={{ display: 'contents' }}>
            {[...Array(8)].map((_, index) => (
              <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item hh3d-latest-skel" key={index}>
                <div className="halim-item">
                  <div className="hh3d-latest-skel-figure" />
                  <div className="hh3d-latest-skel-line" />
                  <div className="hh3d-latest-skel-line is-short" />
                </div>
              </article>
            ))}
          </div>
        ) : (
          movies.map((movie) => (
            <article key={movie.id} className={`col-md-3 col-sm-3 col-xs-6 thumb grid-item post-${movie.id}`}>
              <div className="halim-item">
                <a className="halim-thumb" href={movie.url} title={movie.title}>
                  <figure>
                    <noscript>
                      {`&lt;img class="img-responsive" src="${movie.thumb}" alt="${movie.title}" title="${movie.title}"&gt;`}
                    </noscript>
                    <img
                      src={movie.thumb}
                      className="lazyload img-responsive"
                      data-src={movie.thumb}
                      alt={movie.title}
                      title={movie.title}
                    />
                  </figure>{" "}
                  {movie.score && (
                    <span className={`halim-card-score ${movie.score >= 4 ? "is-high" : ""}`} aria-label={`Đánh giá ${movie.score}/5`}>
                      <i className="fas fa-star" aria-hidden="true" />
                      <span className="halim-card-score-num">{movie.score}</span>
                    </span>
                  )}
                  {movie.status && <span className="status">{movie.status}</span>}
                  {movie.episode && <span className="episode">{movie.episode}</span>}
                  <div className="icon_overlay" />
                  <div className="halim-post-title-box">
                    <div className="halim-post-title ">
                      <h2 className="entry-title">{movie.title}</h2>
                      <p className="original_title">{movie.originalTitle}</p>
                    </div>
                  </div>
                </a>
              </div>
            </article>
          ))
        )}
      </div>

      {/* GIỮ NGUYÊN HOÀN TOÀN HTML KHUNG PHÂN TRANG GỐC */}
      <div className="clearfix" />
      <div className="hh3d-latest-pagination" id="hh3d-latest-pagination">
        <ul className="page-numbers">
          {/* Nút Prev - Chỉ hiển thị nếu trang hiện tại lớn hơn 1 */}
          {currentPage > 1 && (
            <li>
              <a
                className="page-numbers prev"
                href={`https://hoathinh3d.stpage/${currentPage - 1}`}
                onClick={(e) => handlePageChange(currentPage - 1, e)}
                data-page={currentPage - 1}
              >
                {/* Giữ nguyên class icon hl-down-open nhưng đổi hướng xoay thành rotate-left */}
                <i className="hl-down-open rotate-left" />
              </a>
            </li>
          )}

          {/* Render các thẻ li số trang động nhưng giữ nguyên class của từng thẻ */}
          {renderPaginationItems()}

          {/* Nút Next - Giữ nguyên toàn bộ Class CSS và cấu trúc i hl-down-open của bạn */}
          {currentPage < totalPages && (
            <li>
              <a
                className="page-numbers next"
                href={`https://hoathinh3d.stpage/${currentPage + 1}`}
                onClick={(e) => handlePageChange(currentPage + 1, e)}
                data-page={currentPage + 1}
              >
                <i className="hl-down-open rotate-right" />
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
