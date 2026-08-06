// TuTienComments.jsx - PHẦN 1
import React, { useEffect, useRef, useState } from 'react';
import CommentForm from './CommentForm';
import CommentHeader from './CommentHeader';
import { initialComments } from '../mocks/commentsData';
import PhapTuongIcon from './PhapTuongIcon';
import RenderCommentContent from './RenderCommentContent';
import { handleAddVotes1 } from '../mocks/utils'
import { use } from 'react';
import ReplyItem from './ReplyItem';
import CommentItem1 from './CommentItem1';

const TuTienComments = ({ setIsOpen, setOnSelectStickerCallback, onOpenPopup, onClosePopup, onInit }) => {
  const [comments, setComments] = useState(initialComments);
  console.log("comments:", comments);

  // Hàm thêm comment mới lên đầu danh sách
  const handleAddComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  // 2. Mở / Đóng form phản hồi chuẩn React (Không mutate state trực tiếp)
  const handleToggleReply = (commentId) => {
    setComments((prevComments) => {
      // Hàm đệ quy để duyệt qua cây comment
      const toggleRecursive = (items) => {
        // Nếu mảng null, undefined hoặc rỗng thì trả về mảng rỗng
        if (!items || items.length === 0) return [];

        return items.map((item) => {
          // 1. Nếu đúng ID cần toggle
          if (item.id === commentId) {
            return { ...item, isReply: !item.isReply };
          }

          // 2. Nếu không đúng ID, kiểm tra mảng replies con (nếu có)
          if (item.replies && item.replies.length > 0) {
            return {
              ...item,
              replies: toggleRecursive(item.replies) // Gọi đệ quy tiếp tục tìm trong replies
            };
          }

          // 3. Nếu không thuộc 2 trường hợp trên, giữ nguyên item
          return item;
        });
      };

      return toggleRecursive(prevComments);
    });
  };
  // Khi hover chuột VÀO nút
  const handleMouseEnter = (e, id) => {
    if (onOpenPopup) {
      const rect = e.currentTarget.getBoundingClientRect();
      onOpenPopup(rect, id);
    }
  };

  // Khi di chuyển chuột RA KHỎI nút
  const handleMouseLeave = () => {
    if (onClosePopup) {
      // Báo lên Cha để đóng Popup
      onClosePopup();
    }
  };
  // 1. Tạo một hàm đóng gói truyền kèm setComments
  const onVote = (selectedReaction, commentId) => {
    handleAddVotes1(selectedReaction, commentId, setComments);
  };
  // 2. Báo hàm handleAddVotes lên Cha
  useEffect(() => {
    if (onInit) onInit(onVote);
  }, [onInit]);

  return (
    <div id="info-v2-comments" className="info-v2-comments ah-frame-bg">
      <div id="comments" className="comments-area">
        <div id="wpdcom" className="wpdiscuz_auth wpd-dark wpd-layout-1 wpd-comments-open wv-reactions-on">

          {/* Form nhập bình luận chính */}
          <div className="wpd-form-wrap">
            <div className="wpd-form-head">
              <div className="wpd-auth">
                <div className="wpd-login">
                  <a
                    rel="nofollow"
                    href="#"
                  >
                    <i className="fas fa-sign-in-alt" /> Đăng nhập để bình luận
                  </a>
                </div>
              </div>
            </div>

            <CommentForm setIsOpen={setIsOpen} setOnSelectStickerCallback={setOnSelectStickerCallback} onAddComment={handleAddComment} uniqueId="0_0" isSecondary={false} />
          </div>

          <div id="wpd-threads" className="wpd-thread-wrapper">
            {/* Thanh sắp xếp / Số lượng bình luận */}
            <CommentHeader commentsCount={104339} />

            <div className="wpd-comment-info-bar">
              <div className="wpd-current-view">
                <i className="fas fa-quote-left" aria-hidden="true" /> Phản hồi nội tuyến
              </div>
              <div className="wpd-filter-view-all">Xem tất cả bình luận</div>
            </div>

            {/* Vòng lặp render danh sách bình luận tu tiên */}
            <div className="wpd-thread-list">
              {comments.map((cmt) => {
                // Tự động gán Class phân cấp Cảnh giới tổng (ví dụ: wpd-blog-hoa_ma)
                const blogStyleClass = cmt.blogStyle ? `wpd-blog-${cmt.blogStyle}` : "";

                return (
                  <div
                    key={cmt.id}
                    id={`wpd-comm-${cmt.id}_0`}
                    // even thread-even
                    className={`comment byuser  odd alt thread-odd thread-alt  depth-1 wpd-comment ${false ? "wrap-vip-12-month" : "wrap-vip-20-year"} wpd_comment_level-1 ${blogStyleClass}`}
                  >
                    <div className="wpd-comment-wrap">
                      {/* BÊN TRÁI: Avatar & Khung Hào Quang Đua Top & Cảnh Giới Tu Tiên */}
                      <div className="wpd-comment-left">
                        {/* Khung avatar bọc ngoài nhận diện hiệu ứng hào quang động qua lớp giả :after */}
                        <div className={`wpd-avatar wcai-short-info wcai-not-clicked avatar-padding ${cmt.avatarFrameClass || ""}`}>
                          <img
                            src={cmt.avatar}
                            className="gravatar avatar avatar-64 um-avatar um-avatar-uploaded"
                            alt={cmt.author}
                            width={64}
                            height={64}
                          />
                        </div>
                        {/* đạo lữ */}
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "@media (max-width: 767px) {.phap-tuong-15-cmt {margin: 0px 0px 0px 5px;transform: scale(1.2);}}@media (min-width: 768px) {.phap-tuong-15-cmt {margin: -10px 0px 0px 5px;transform: scale(1.2);}}"
                          }}
                        />
                        <span className='phap-tuong-image phap-tuong-animate phap-tuong-rank-s phap-tuong-53-cmt'
                          style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                            '--phap-tuong-img': `url(${cmt.trueLove})`
                          }}
                          data-name="Thanh Mộc Nguyên Thần"
                        >
                          <img
                            className="phap-tuong-img"
                            src={cmt.trueLove}
                            alt="Thanh Mộc Nguyên Thần"
                            style={{ width: 70 }}
                          />
                        </span>
                        {/* ĐỒNG BỘ 100% TRANG GỐC: Nhãn Cảnh giới nhận thuộc tính tooltip hiển thị nội dung động */}
                        <div
                          className="wpd-comment-label"
                          wpd-tooltip={cmt.realm}
                          wpd-tooltip-position="right"
                        >
                          <span>{cmt.realm}</span>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              "@media (max-width: 767px) {.danh-hieu-5-cmt {margin: 0 3px;transform: scale(1.6);}}@media (min-width: 768px) {.danh-hieu-5-cmt {margin: -8px 5px;transform: scale(1.6);}}"
                          }}
                        />
                        <span className='danh-hieu-image danh-hieu-animate danh-hieu-5-cmt' style={{
                          pointerEvents: "none", display: "inline-block", verticalAlign: "middle"
                        }}>
                          <img
                            className="danh-hieu-img"
                            src={cmt.appellation}
                            style={{ width: 100 }}
                          />
                        </span>
                        <div
                          className="wpd-ring-image"
                          id="ring-user-60860"
                          style={{ cursor: 'pointer', '--ring-cmt-w': '50px' }}
                          onClick={e => { const m = document.querySelector('.ring-modal'); m && (m.classList.add('active'), m.style.display = 'flex') }}
                        >
                          <img
                            src="/stickers/vinh-da-minh-chau.png"
                            alt="Vĩnh Dạ Minh Châu"
                          />
                        </div>

                      </div>
                      {/* BÊN PHẢI: Khối Tác giả và Hệ thống danh hiệu phức hợp */}
                      <div id={`comment-${cmt.id}`} className="wpd-comment-right"
                        style={{ '--vip-bg-url': 'url(/stickers/70781.webp)' }}
                      >
                        {/* <style dangerouslySetInnerHTML={{ __html: `.wpd-comment-header {position: relative !important;z-index: 2147483647 !important;}` }} /> */}

                        <div className="wpd-comment-header" style={{ zIndex: 99 }}>
                          <div className={`wpd-comment-author wcai-uname-info wcai-not-clicked ${cmt.nameColorClass || ""}`}>

                            {/* 1. Huy hiệu tộc lồng khối Tooltip phóng to 100px */}
                            <span className="custom-badge-tooltip" role="button" tabIndex={0} aria-label={cmt.clanName}>
                              <img src={cmt.clanBadge} alt="" style={{ width: '35px' }} />
                              <span className="custom-badge-tooltiptext hh3d-badge-preview">
                                <img src={cmt.clanBadge} alt="" style={{ maxWidth: "100%", width: "auto", height: "auto", maxHeight: "min(200px,42vh)" }} />
                                <span className="custom-badge-name">{cmt.clanName}</span>
                              </span>
                            </span>

                            {/* 2. TÊN NHÂN VẬT: Ăn trực tiếp class hiệu ứng tối cao (Vạn hoa, Bốc cháy, Ma trận) */}
                            <span>
                              {cmt.author}
                            </span>
                            {/* Khối style đè duy nhất cho :before */}
                            <style>{`[data-tooltip]:hover:after {display: none !important;}`}</style>
                            {/* 3. Dàn Cờ tông môn hiển thị động kế thừa bộ lọc [data-tooltip] bay mượt mà */}
                            {cmt.flags.map((flag, idx) => (
                              <span key={idx} data-tooltip={flag.name} className="group-flag" title={flag.name}>
                                <img src={flag.src} alt={flag.name} style={{ width: flag.width, height: "auto", margin: "0px 2px 5px -5px" }} />
                              </span>
                            ))}
                            {/* 4. Môn phái bang hội: Tự động ăn font UVN Hải Bà Trưng và màu dải lụa động */}
                            <span className={`bang-hoi ${cmt.sectColorClass || "bang-hoi-mau-xanh"}`} data-tooltip={cmt.sectRole}>
                              <span className="tong-link-text">{cmt.sect}</span>
                            </span>

                          </div> {/* Hết khối author */}
                          {/* 5. Hệ thống Vũ khí / Thần kiếm (Composed Badge chồng nhiều lớp ảnh lật hướng) */}
                          <div className="wpdiscuz-mycred-wrap">
                            <div className="row mycred-users-badges wpdiscuz-mycred-badges-wrap">
                              <div className="col-xs-12">
                                {cmt.swords.map((sword, idx) => (
                                  <div key={idx} className="the-badge">
                                    <div className="custom-badge-tooltip" role="button" tabIndex={0} aria-label={sword.name}>
                                      <span className="hh3d-composed-badge">
                                        <img
                                          src={sword.src}
                                          alt=""
                                          style={{ height: "26px", width: "auto", transform: sword.flip ? "scaleX(-1)" : "none" }}
                                        />
                                      </span>
                                      <span className="custom-badge-tooltiptext hh3d-badge-preview">
                                        <img src={sword.src} alt="" style={{ height: "84px", width: "auto" }} />
                                        <div className="custom-badge-name">{sword.name}</div>
                                      </span>
                                    </div>
                                  </div>
                                ))}

                              </div>
                            </div>
                          </div>
                          {/* Thời gian hiển thị dạt sang góc phải đối xứng nhờ CSS Flexbox Header */}
                          <div className="wpd-comment-date" title={cmt.fullDate}>
                            <i className="far fa-clock" aria-hidden="true" /> {cmt.date}
                          </div>
                          <div className="wpd-space" />
                          {/* Cụm công cụ phụ mặc định ẩn, tự động hiện lên khi Hover vào wpd-comment-right */}
                          <div className="wpd-comment-link wpd-hidden">
                            <span data-wpd-tooltip="Thông tin tác giả" data-wpd-tooltip-size="medium">
                              <i id={`wcai-comment_${cmt.id}`} className="fas fa-info wpf-cta wcai-info wcai-not-clicked" />
                            </span>
                            <span data-wpd-tooltip="Liên kết bình luận" data-wpd-tooltip-position="left">
                              <i className="fas fa-link" aria-hidden="true" />
                            </span>
                          </div>
                        </div>

                        {/* Nội dung text bình luận kế thừa thuộc tính chống tràn word-break */}
                        {/* <div className="wpd-comment-text">
                          <p>{cmt.text}</p>
                        </div> */}
                        <RenderCommentContent content={cmt.text} />

                        {/* Chân trang tương tác bầu chọn điểm số và Phản hồi */}
                        <div className="wpd-comment-footer">
                          <div className="wpd-vote">
                            <div className={`wpd-vote-up wpd_not_clicked ${cmt.reactionType ? "wv-has-user-reaction" : ""}`}
                              data-wv-reaction="love"
                              onMouseEnter={(e) => handleMouseEnter(e, cmt.id)} // Hover vào
                              onMouseLeave={handleMouseLeave} // Rê chuột ra
                              // onClick={() => { handleAddVotes('like', cmt.id, setComments) }}
                              onClick={(e) => handleMouseEnter(e, cmt.id)}
                            >
                              <svg viewBox="0 0 24 24" width={16} height={16}>
                                <path fill="none" d="M0 0h24v24H0V0z" />
                                <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
                              </svg>
                              {cmt.reactionType && (<img
                                className="wv-vote-up__reaction"
                                src={`/stickers/${cmt.reactionType}.svg`}
                                alt="Thích"
                                width={20}
                                height={20}
                                decoding="async"
                              />)}

                            </div>
                            {cmt.reactionType && (<span
                              className="wv-reaction-summary wv-likers-hit"
                              role="button"
                              tabIndex={0}
                              title="Xem danh sách cảm xúc"
                              aria-label="Xem 1 lượt bình chọn"
                            >
                              <span className="wv-reaction-summary__icons" aria-hidden="true">
                                <img
                                  className="wv-reaction-summary__icon"
                                  src={`/stickers/${cmt.reactionType}.svg`}
                                  alt="Thích"
                                  width={18}
                                  height={18}
                                  loading="lazy"
                                />
                              </span>
                              <span className="wv-reaction-summary__count">{cmt.votes}</span>
                            </span>)}


                            <div className="wpd-vote-result wv-like-hidden">0</div>
                            <div className="wpd-vote-down wpd_not_clicked wpd-dislike-hidden">
                              <svg viewBox="0 0 24 24" width={16} height={16}>
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" />
                              </svg>
                            </div>
                          </div>

                          {/* Nút phản hồi quay ngược 180 độ theo thiết kế CSS */}
                          <div className="wpd-reply-button" onClick={() => { handleToggleReply(cmt.id) }}>
                            <svg viewBox="0 0 24 24">
                              <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" />
                              <path d="M0 0h24v24H0z" fill="none" />
                            </svg>
                            <span>Phản hồi</span>
                          </div>
                          <div className="wpd-space" />
                          <div className="wpd-tools wpd-hidden" title="Quản lý bình luận">
                            <i className="fas fa-cog" />
                            <div className="wpd-tools-actions" style={{ display: "none" }}>
                              <span className="wpd_editable_comment wpd-cta-button">Sửa</span>
                              <span className="wpdiscuz-fem-delete-comment wpd-cta-button">Xóa bỏ</span>
                            </div>
                          </div>
                        </div>

                      </div> {/* Hết wpd-comment-right */}
                    </div>
                    {/* reply */}
                    {cmt.isReply && <CommentForm setIsOpen={setIsOpen} setOnSelectStickerCallback={setOnSelectStickerCallback} onAddComment={handleAddComment} />}

                    {cmt.replies && cmt.replies.length > 0 && (
                      <div className="wpd-reply-responses">
                        {cmt.replies.map((reply) => (
                          <ReplyItem
                            key={reply.id}
                            reply={reply}
                            parentId={cmt.id}
                            onMouseEnter={(e, id) => handleMouseEnter(e, id)}
                            onMouseLeave={handleMouseLeave}
                            onVote={(type, id) => handleAddVotes1(type, id, setComments)}
                            onToggleReply={(id) => handleToggleReply(id)}
                            nextReply={{ setIsOpen: setIsOpen, setOnSelectStickerCallback: setOnSelectStickerCallback, onAddComment: handleAddComment }}
                          />
                        ))}
                      </div>
                    )}


                    {/* tải thêm */}
                    <div className="wpdiscuz-comment-pagination" style={{}}>
                      <style dangerouslySetInnerHTML={{ __html: '.wpdiscuz-comment-pagination {color:#fff;}' }} />
                      <div className="wpd-load-more-submit-wrap">
                        <button
                          name="submit"
                          className="wpd-load-more-submit wpd-loaded wpd-prim-button"
                        >
                          Tải thêm bình luận
                        </button>
                      </div>
                      <span id="wpdiscuzHasMoreComments" data-is_show_load_more={1} />
                    </div>
                  </div>
                );
              })}

              <CommentItem1 />

            </div>
    
          </div>
        </div>
      </div>
      {/* ring modal */}
      <div
        className="ring-modal"
        id="ring-modal-60860"
        style={{ display: "none" }}
      >
        <div className="ring-modal-content">
          <span className="close-modal" onClick={e => { const m = e.currentTarget.closest('.ring-modal'); m && (m.classList.remove('active'), m.style.display = 'none') }}>
            <i className="fas fa-times" />
          </span>
          <div className="ring-image-container">
            <div className="ring-image-wrapper">
              <img
                src="/stickers/vinh-da-minh-chau.png"
                alt="Nhẫn"
                className="ring-modal-image"
              />
            </div>
            <span
              className="ring-bubble"
              id="ring-bubble-60860"
              style={{ display: "none" }}
            >
              Vĩnh Dạ Minh Châu
            </span>
          </div>
          <div className="user-info-section">
            <div className="user-avatars-couple">
              <div className="avatar-left-couple">
                <div className="avatar-frame-wrapper-couple">
                  <a href="/profile/60860" target="_blank">
                    <div className="avatar-container-couple khung_vip_2 avatar-padding">
                      <img
                        src="/stickers/avatar_1.jpeg"
                        alt="Kinosaki Mei Ი𐑼"
                        className="user-avatar-couple"
                      />
                    </div>
                  </a>
                </div>
                <p className="user-name-rings color_hu_dao">Kinosaki Mei Ი𐑼</p>
              </div>
              <div className="avatar-right-couple">
                <div className="avatar-frame-wrapper-couple">
                  <a href="/profile/181405" target="_blank">
                    <div className="avatar-container-couple top_1_dua_top_tm avatar-padding">
                      <img
                        src="/stickers/ny.jpg"
                        alt="我是 nywhs ෆ"
                        className="user-avatar-couple"
                      />
                    </div>
                  </a>
                </div>
                <p className="user-name-rings color_hoa_ma">我是 nywhs ෆ</p>
              </div>
            </div>
            <div className="couple-info-section">
              <p className="couple-name">Chày Gông ~ Vẹt Lớ ♡⁠</p>
              <p className="couple-info">Chưa có thông tin giới thiệu</p>
            </div>
            <div className="partnership-details">
              <p className="partnership-time">
                <i className="fas fa-heart" /> Đã kết đạo lữ: 65 ngày
              </p>
              <p className="partnership-order">
                <i className="fas fa-kiss-wink-heart" /> Số đăng ký Nguyệt Lão: 2186
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TuTienComments;
