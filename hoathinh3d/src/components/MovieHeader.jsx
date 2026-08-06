import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieHeader({
  postId = 20224,
  title = "Tiên Nghịch",
  altTitle = "Xian Ni",
  thumbnail = "/stickers/tien-nghich-6.jpg",
  currentEpisode = "Tập 149",
  totalEpisodes = "180 Tập",
  releaseYear = "2023",
  releaseUrl = "/stickers/tien-nghich-6.jpg",
  ratingScore = 4.63,
  ratingVotes = 50520,
  commentsCountText = "104.3k",
  commentsTotal = "104.323 bình luận",
  watchUrl = "https://hoathinh3d.st",
  defaultUrl = "https://hoathinh3d.st",
  categories = [
    { name: "CN Animation", url: "https://hoathinh3d.st" },
    { name: "Cổ Trang", url: "https://hoathinh3d.st" },
    { name: "Huyền Huyễn", url: "https://hoathinh3d.st" },
    { name: "Tiên Hiệp", url: "https://hoathinh3d.st" }
  ],
  initialIsFollowing = false,
  onRateClick
}) {
  // 1. Logic Thay đổi trạng thái Theo dõi (Follow / Unfollow)
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  // 2. Logic Xử lý Đánh giá phim độc lập
  const [currentScore, setCurrentScore] = useState(ratingScore);
  const [totalVotes, setTotalVotes] = useState(ratingVotes);
  const [hasRated, setHasRated] = useState(false);
  const navigate = useNavigate();

  const handleFollowToggle = () => {
    setIsFollowing(prev => !prev);
  };

  const handleRateClick = () => {
    if (!hasRated) {
      // Giả lập logic cộng thêm điểm khi user click Đánh giá nhanh
      setTotalVotes(prev => prev + 1);
      setHasRated(true);
      alert(`Cảm ơn bạn đã đánh giá phim ${title}!`);
    } else {
      alert("Bạn đã đánh giá phim này rồi.");
    }
  };

  const handleScrollToBottom = (e) => {
    e.preventDefault(); // Chặn hành vi nhảy trang mặc định của thẻ <a>

    // Lệnh cuộn mượt xuống điểm thấp nhất của toàn bộ trang web
    window.scrollTo({
      top: document.body.scrollHeight - 1400, // Chiều cao tối đa của trang
      behavior: 'smooth'               // Cuộn mượt mà
    });
  };

  return (
    <header className="info-hero">
      <div className="info-v2-ambient" aria-hidden="true">

        <img
          className="info-v2-ambient__blur"
          src={thumbnail}
          alt=""
          decoding="async"
        />
        <span className="info-v2-ambient__grain" />
      </div>
      <div className="info-hero__poster">

        <a
          href={watchUrl}
          className="info-hero__poster-link info-watch-link watch-btn has-history"
          title="Xem tập mới nhất"
          aria-label="Xem tập mới nhất"
          data-post-id={postId}
          data-default-url={defaultUrl}
          data-latest-url={watchUrl}
          data-has-history="true"
        >

          <img
            className="info-v2-poster-img"
            src={thumbnail}
            alt={title}
            decoding="async"
          />
          <span className="info-hero__poster-overlay" aria-hidden="true" />
          <span className="info-hero__poster-play" aria-hidden="true">

            <i className="fa-sharp fa-regular fa-circle-play" />
          </span>
        </a>
      </div>
      <div className="info-hero__body">
        <h1 className="info-hero__title">{title}</h1>
        <p className="info-hero__alt">{altTitle}</p>
        <div className="info-hero__tags">
          <style>{ '.info-hero__tags { --info-accent-1: 0, 165, 165; }' }</style>
          {categories.map((cat, index) => (
            <React.Fragment key={index}>
              <a href={cat.url} rel="category tag">
                {cat.name}
              </a>
              {index < categories.length - 1 && " "}
            </React.Fragment>
          ))}
        </div>
        <ul className="info-hero__facts">
          <li>
            <span className="info-badge info-badge--ep">{currentEpisode}</span>
          </li>
          <li>

            <a href={releaseUrl} rel="tag">

              <i className="hl-calendar" /> {releaseYear}
            </a>
          </li>
          <li>
            <i className="hl-clock" /> {totalEpisodes}
          </li>
        </ul>
        <div className="info-hero__rating">
          <div className="halim-rating-container halim-rating-container--score-only">
            <div className="halim-star-rating">

              <i className="fas fa-star halim-star-icon" aria-hidden="true" />
              <span className="halim-rating-score">{currentScore}</span>
              <span className="halim-rating-slash">/</span>
              <span className="halim-rating-max">5</span>
              <span className="halim-rating-votes">({totalVotes} lượt)</span>
            </div>
          </div>
        </div>
        <div className="info-hero__cta">
          <div
            className="info-hero__cta-tools"
            role="toolbar"
            aria-label="Thao tác phim"
          >

            <button
              type="button"
              className="halim-rating-button info-hero__tool info-hero__tool--rate"
              data-post-id={postId}
              data-rating={currentScore}
              data-votes={totalVotes}
              data-title={title}
              onClick={onRateClick}
            >
              <i className="fas fa-star" aria-hidden="true" />
              <span>Đánh giá</span>
            </button>
            <button
              type="button"
              id="bookmark4"
              // Logic chuyển đổi data-action nguyên bản theo State
              data-action={isFollowing ? "unfollow" : "follow"}
              data-post_id={postId}
              data-thumbnail={thumbnail}
              data-href={`https://hoathinh3d.st{altTitle.toLowerCase().replace(/\s+/g, '-')}`}
              data-title={title}
              data-org-title={altTitle}
              data-latest-ep={currentEpisode}
              // Logic tự động chèn thêm class kích hoạt CSS tương ứng trạng thái
              className={`info-hero__tool info-hero__tool--follow ${isFollowing ? 'active is-following' : ''}`}
              onClick={handleFollowToggle}
            >

              {/* Icon thay đổi mượt mà dựa trên trạng thái tim rỗng / tim đặc */}
              <i className={isFollowing ? "fas fa-heart" : "far fa-heart"} aria-hidden="true" />
              <span>{isFollowing ? "Đã theo dõi" : "Theo dõi"}</span>
            </button>
            <a
              href="#info-v2-comments"
              className="info-hero__tool info-hero__tool--comment"
              title={commentsTotal}
              aria-label={`Bình luận (${commentsTotal})`}
              onClick={handleScrollToBottom}
            >

              <i className="far fa-comment" aria-hidden="true" />
              <span>Bình luận</span>
              <span
                className="info-hero__tool-badge info-hero__tool-badge--wide"
                aria-hidden="true"
              >
                {commentsCountText}
              </span>
            </a>
          </div>
          <div className="info-hero__cta-primary">

            <a
              href="#"
              className="info-btn info-btn--primary info-btn--watch watch-btn has-history"
              title="Xem tập mới nhất"
              onClick={(e) => {e.preventDefault(); navigate("/watch")}}
            >

              <i
                className="fa-sharp fa-regular fa-circle-play"
                aria-hidden="true"
              />
              <span>Xem Phim</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
