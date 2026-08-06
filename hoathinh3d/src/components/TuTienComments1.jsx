// TuTienComments.jsx - PHẦN 1
import React, { useEffect, useRef, useState } from 'react';
import CommentForm from './CommentForm';
import CommentHeader from './CommentHeader';
import { initialComments1 } from '../mocks/commentsData';
import PhapTuongIcon from './PhapTuongIcon';
import RenderCommentContent from './RenderCommentContent';
import { handleAddVotes1 } from '../mocks/utils'
import { use } from 'react';
import ReplyItem from './ReplyItem';
import CommentItem from './CommentItem2';

const TuTienComments = ({ setIsOpen, setOnSelectStickerCallback, onOpenPopup, onClosePopup, onInit }) => {
  const [comments, setComments] = useState(initialComments1);
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
              {comments.map((comment) => {
                // Tự động gán Class phân cấp Cảnh giới tổng (ví dụ: wpd-blog-hoa_ma)


                return (
                  <CommentItem
                    key={comment.id}
                    // 1. Dữ liệu & State setters
                    comment={comment}
                    setComments={setComments}
                    setIsOpen={setIsOpen}
                    setOnSelectStickerCallback={setOnSelectStickerCallback}

                    // 2. Các hàm xử lý sự kiện
                    handleAddComment={handleAddComment}
                    handleToggleReply={handleToggleReply}
                    handleMouseEnter={handleMouseEnter}
                    handleMouseLeave={handleMouseLeave}
                    handleAddVotes1={handleAddVotes1}

                    // 3. Các sub-components (Component Injection)
                    RenderCommentContent={RenderCommentContent}
                    CommentForm={CommentForm}
                    ReplyItem={ReplyItem}
                  />
                );
              })}


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
      {/* hồng nhan modal */}
      <div className="hn-modal" id="hn-modal-156392" style={{ display: "none" }}>
        <div className="hnm-panel">
          <button className="hnm-close" onClick={e => { const m = e.currentTarget.closest('.hn-modal'); m && (m.style.display = 'none') }}>
            ×
          </button>
          <div className="hnm-header">
            <img
              src="/stickers/diep-linh-gioi.webp"
              alt="Hồng Nhan"
              className="hnm-ring-img"
            />
            <div className="hnm-nc hnm-nc--viewed">
              <a href="/profile/156392" target="_blank">
                <div className="avatar-frame-wrapper-couple">
                  <div className="avatar-container-couple khung_vip_2 avatar-padding">
                    <img
                      src="/stickers/avatar_1.jpeg"
                      alt=""
                      className="user-avatar-couple"
                    />
                  </div>
                </div>
              </a>
              <span className="hnm-nc-name">
                <span className="vip-username-vip-6-month">ღLong Gia Gia𓆤</span>
              </span>
            </div>
          </div>
          <div className="hnm-divider">
            <span>✦ Hồng Nhan (1) ✦</span>
          </div>
          <div className="hnm-grid">
            <div className="hnm-card">
              <span className="hnm-slot">1</span>
              <a href="/profile/150465" target="_blank">
                <div className="avatar-frame-wrapper-couple">
                  <div className="avatar-container-couple khung_vip_2 avatar-padding">
                    <img
                      src="/stickers/70781.webp"
                      alt=""
                      className="user-avatar-couple"
                    />
                  </div>
                </div>
              </a>
              <span className="hnm-card-name">
                <span className="vip-username-12-month">ᴘɴ ღ亗 ɕɦσɕσρıε</span>
                <span className="vip-icon-12-month" />
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TuTienComments;
