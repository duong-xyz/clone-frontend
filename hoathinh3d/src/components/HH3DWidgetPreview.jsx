import React, { useState, useEffect } from 'react';
import { initialTrendingMovies, extendedTrendingMovies, initialComments, extendedComments } from '../mocks/mockData';
import TrendingCard from './TrendingCard';
import CommentCard from './CommentCard';

export default function HH3DWidgetPreview() {
  // Trạng thái Loading của 2 khối độc lập
  const [isTrendingLoading, setIsTrendingLoading] = useState(true);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);

  // Trạng thái Mở rộng (Toggle) của 2 khối độc lập
  const [isTrendingExpanded, setIsTrendingExpanded] = useState(false);
  const [isCommentsExpanded, setIsCommentsExpanded] = useState(false);

  // Giả lập Fetch API dữ liệu lần đầu tiên chạy trong 1.5 giây
  useEffect(() => {
    const timer1 = setTimeout(() => setIsTrendingLoading(false), 1500);
    const timer2 = setTimeout(() => setIsCommentsLoading(false), 1800);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, []);

  // Hàm Click Làm mới khối Trending
  const handleRefreshTrending = () => {
    if (isTrendingLoading) return;
    setIsTrendingLoading(true);
    setTimeout(() => {
      setIsTrendingLoading(false);
    }, 1200);
  };

  return (
    <div className="hh3d-widget-preview" id="hh3d-widget-preview">

      {/* ========================================================
          BLOCK 1: ĐANG SÔI NỔI (TRENDING BLOCK)
          ======================================================== */}
      <section className="hh3d-preview-section hh3d-preview-trending-block" aria-label="Đang sôi nổi">
        <header className="hh3d-preview-section-header hh3d-preview-section-header--compact">
          <h3 className="hh3d-preview-section-title">
            <i className="fas fa-fire" aria-hidden="true" />
            <span className="hh3d-preview-section-title-text">Đang sôi nổi</span>
          </h3>
          <button
            type="button"
            className="hh3d-preview-refresh-btn hh3d-preview-refresh-btn--sm"
            id="hh3d-preview-refresh-trending"
            aria-label="Làm mới danh sách phim hot"
            onClick={handleRefreshTrending}
          >
            <i className={`fas fa-sync-alt ${isTrendingLoading ? 'animate-spin' : ''}`} aria-hidden="true" />
          </button>
        </header>

        <div className="hh3d-preview-trending-carousel-wrap">
          <div
            className="hh3d-preview-trending-carousel"
            id="hh3d-preview-trending-container"
            aria-busy={isTrendingLoading ? "true" : "false"}
          >
            {isTrendingLoading ? (
              /* GIỮ NGUYÊN HTML SKELETON GỐC KHI LOADING */
              <div className="hh3d-preview-skeleton hh3d-preview-skeleton-trending" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <div className="hh3d-preview-skeleton-card" key={i}>
                    <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-poster is-cinematic" />
                    <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title" />
                    <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title-2" />
                  </div>
                ))}
              </div>
            ) : (
              /* ĐỔ DATA THẬT VÀO SAU KHI LOAD XONG */
              initialTrendingMovies.map((movie, index) => (
                <TrendingCard key={movie.id} movie={movie} rank={index + 1} />
              ))
            )}
          </div>
        </div>

        {/* Cấu trúc phần mở rộng lưới Trending */}
        <div
          className="hh3d-preview-trending-extended"
          id="hh3d-preview-trending-extended"
          hidden={!isTrendingExpanded} // Hiện / Ẩn theo state React thay vì thuộc tính tĩnh
        >
          <div
            className="hh3d-preview-trending-extended-grid"
            id="hh3d-preview-trending-extended-container"
            aria-hidden={!isTrendingExpanded ? "true" : "false"}
          >
            {isTrendingExpanded && extendedTrendingMovies.map((movie, index) => (
              <TrendingCard key={movie.id} movie={movie} rank={index + 6} isCompact={true} />
            ))}
          </div>
        </div>

        {/* Nút bấm xem đầy đủ của khối Trending */}
        {!isTrendingLoading && (
          <div className="hh3d-preview-trending-footer" id="hh3d-preview-trending-footer">
            <button
              type="button"
              className={`hh3d-preview-rank-toggle ${isTrendingExpanded ? 'is-expanded' : ''}`}
              id="hh3d-preview-rank-toggle"
              aria-expanded={isTrendingExpanded ? "true" : "false"}
              onClick={() => setIsTrendingExpanded(!isTrendingExpanded)}
            >
              <span className="hh3d-preview-rank-toggle-label">
                {isTrendingExpanded ? 'Thu gọn' : 'Xem đầy đủ'}
              </span>
              <i className="fas fa-chevron-down hh3d-preview-rank-toggle-icon" aria-hidden="true" />
            </button>
          </div>
        )}
      </section>

      {/* ========================================================
          BLOCK 2: LUẬN ĐẠO GẦN ĐÂY (COMMENTS BLOCK)
          ======================================================== */}
      <section className="hh3d-preview-section hh3d-preview-comments-block" aria-label="Luận đạo gần đây">
        <header className="hh3d-preview-section-header hh3d-preview-section-header--comments">
          <div className="hh3d-preview-section-leading">
            <h3 className="hh3d-preview-section-title">
              <i className="fas fa-comments" aria-hidden="true" />
              <span className="hh3d-preview-section-title-text">Luận đạo gần đây</span>
            </h3>
            <p className="hh3d-preview-subtitle" id="hh3d-preview-comments-subtitle">
              Bình luận mới từ cộng đồng
            </p>
          </div>
          <div className="hh3d-preview-section-actions">
            <div
              className="hh3d-preview-comment-filter"
              role="group"
              aria-label="Lọc bình luận"
            >
              <button
                type="button"
                className="hh3d-preview-comment-filter-btn is-active"
                data-sort="recent"
                aria-pressed="true"
              >
                <span className="hh3d-preview-filter-label hh3d-preview-filter-label--desktop">
                  Chỉ phim
                </span>
                <span
                  className="hh3d-preview-filter-label hh3d-preview-filter-label--mobile"
                  aria-hidden="true"
                >
                  Phim
                </span>
              </button>
              <button
                type="button"
                className="hh3d-preview-comment-filter-btn"
                data-sort="all"
                aria-pressed="false"
              >
                <span className="hh3d-preview-filter-label hh3d-preview-filter-label--desktop">
                  Hoạt động
                </span>
                <span
                  className="hh3d-preview-filter-label hh3d-preview-filter-label--mobile"
                  aria-hidden="true"
                >
                  HĐ
                </span>
              </button>
            </div>
            <button
              type="button"
              className="hh3d-preview-refresh-btn hh3d-preview-refresh-btn--sm"
              id="hh3d-preview-refresh-comments"
              aria-label="Làm mới bình luận"
              onClick={() => {setIsCommentsLoading(true); setTimeout(()=>{setIsCommentsLoading(false)},1000)}}
            >
              <i className="fas fa-sync-alt" aria-hidden="true" />
            </button>
          </div>
        </header>

        <div
          className="hh3d-preview-comments-list"
          id="hh3d-preview-comments-container"
          aria-busy={isCommentsLoading ? "true" : "false"}
        >
          {isCommentsLoading ? (
            /* GIỮ NGUYÊN ĐÚNG 6 THẺ SKELETON GỐC NHƯ BẠN YÊU CẦU */
            <div className="hh3d-preview-skeleton hh3d-preview-skeleton-comments" aria-hidden="true">
              {[...Array(6)].map((_, i) => (
                <div className="hh3d-preview-skeleton-comment" key={i}>
                  <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-poster is-small" />
                  <div className="hh3d-preview-skeleton-comment-main">
                    <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-avatar is-round" />
                    <div className="hh3d-preview-skeleton-comment-body">
                      <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-author" />
                      <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line" />
                      <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-short" />
                      <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-movie" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* DATA BÌNH LUẬN THỰC TẾ */
            initialComments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))
          )}
        </div>

        {/* Khung mở rộng danh sách bình luận */}
        <div
          className="hh3d-preview-comments-extended"
          id="hh3d-preview-comments-extended"
          hidden={!isCommentsExpanded}
        >
          <div
            className="hh3d-preview-comments-list hh3d-preview-comments-extended-list"
            id="hh3d-preview-comments-extended-container"
            aria-hidden={!isCommentsExpanded ? "true" : "false"}
          >
            {isCommentsExpanded && extendedComments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </div>
        </div>

        {/* Nút bấm Xem đầy đủ của khối Bình luận */}
        {!isCommentsLoading && (
          <div className="hh3d-preview-comments-footer" id="hh3d-preview-comments-footer">
            <button
              type="button"
              className={`hh3d-preview-rank-toggle ${isCommentsExpanded ? 'is-expanded' : ''}`}
              id="hh3d-preview-comments-toggle"
              aria-expanded={isCommentsExpanded ? "true" : "false"}
              onClick={() => setIsCommentsExpanded(!isCommentsExpanded)}
            >
              <span className="hh3d-preview-rank-toggle-label">
                {isCommentsExpanded ? 'Thu gọn' : 'Xem đầy đủ'}
              </span>
              <i className="fas fa-chevron-down hh3d-preview-rank-toggle-icon" aria-hidden="true" />
            </button>
          </div>
        )}
      </section>

    </div>
  );
}
