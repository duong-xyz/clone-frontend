import React, { useState } from 'react';

// Dữ liệu Mock Data danh sách bình luận tĩnh hiển thị bên dưới khi chưa đăng nhập
const mockGuestFeed = [
  {
    id: "1938672",
    uniqueId: "0_0",
    levelClass: "wpd_comment_level-1",
    wrapClass: "wpd-blog-user wpd-blog-van_dinh_so",
    author: {
      name: "Ngọc Nguyễn4",
      avatar: "https://hoathinh3d.st",
      rankTitle: "Vấn Đỉnh《Sơ Kỳ》"
    },
    meta: { timeText: "4 giờ trước", timestamp: "14/07/2026 13:09" },
    content: "Hay quá 🥰🥰",
    votes: 0
  },
  {
    id: "1938649",
    uniqueId: "1938649_0",
    levelClass: "wpd_comment_level-1",
    wrapClass: "wpd-blog-user wpd-blog-subscriber",
    author: {
      name: "Hà Đặng1",
      avatar: "https://hoathinh3d.st",
      rankTitle: "Phàm Nhân"
    },
    meta: { timeText: "5 giờ trước", timestamp: "14/07/2026 11:41" },
    content: "phim này hay ko các đạo hữu",
    votes: 0
  }
];

export default function UnauthCommentsSystem() {
  const [comments, setComments] = useState(mockGuestFeed);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [currentSort, setCurrentSort] = useState('newest');

  const defaultAvatar = "https://hoathinh3d.st";

  const handleSortChange = (sortType) => {
    setCurrentSort(sortType);
    setSortDropdownOpen(false);
    // Thực hiện sắp xếp lại mảng client-side tùy thuộc sortType nếu cần
  };

  const handleUnauthAction = (e) => {
    e.preventDefault();
    alert("Vui lòng đăng nhập để thực hiện chức năng này!");
  };

  return (
    <div className="info-v2-comments ah-frame-bg" id="info-v2-comments">
      <div className="wpdiscuz_top_clearing" />
      <div className="comments-area" id="comments">
        <div
          id="respond"
          style={{
            clear: "both",
            height: "0",
            margin: "0",
            padding: "0",
            width: "0",
          }}
        />

        {/* LƯU Ý: Khối wpd-unauth được kích hoạt thay vì wpd-auth */}
        <div className="wpdiscuz_unauth wpd-dark wpd-layout-1 wpd-comments-open" id="wpdcom">
          <div className="wc_social_plugin_wrapper" />

          {/* KHỐI LOGIN FORM CỦA TÀI KHOẢN KHÁCH */}
          <div className="wpd-form-wrap">
            <div className="wpd-form-head">
              <div className="wpd-auth">
                <div className="wpd-login">
                  {" "}
                  <a
                    href="https://hoathinh3d.st/wp-login.php?redirect_to=https%3A%2F%2Fhoathinh3d.st%2Ftien-nghich"
                    rel="nofollow"
                  >
                    <i className="fas fa-sign-in-alt" /> Đăng nhập để bình luận
                  </a>
                </div>
              </div>
            </div>

            <div className="wpd-form wpd-form-wrapper wpd-main-form-wrapper" id="wpd-main-form-wrapper-0_0" />

            <div id="wpdiscuz_hidden_secondary_form" style={{ display: "none" }}>
              <div
                className="wpd-form wpd-form-wrapper wpd-secondary-form-wrapper"
                id="wpd-secondary-form-wrapper-wpdiscuzuniqueid"
                style={{ display: "none" }}
              >
                <div className="wpd-secondary-forms-social-content" />
                <div className="clearfix" />
              </div>
            </div>

            <div className="wpd-login-to-comment">
              Đăng nhập để bình luận
            </div>
          </div>

          {/* THANH THÔNG TIN VÀ LỌC BÌNH LUẬN (TOOLBAR HEAD) */}
          <div className="wpd-thread-wrapper" id="wpd-threads">
            <div className="wpd-thread-head">
              <div className="wpd-thread-info " data-comments-count="104323">
                {" "}
                <span className="wpdtc" title="104323">
                  104.3K
                </span>{" "}
                Bình loạn
              </div>
              <div className="wpd-space" />
              <div className="wpd-thread-filter">
                <div className="wpd-filter wpdf-reacted wpd_not_clicked " wpd-tooltip="Quan tâm nhiều nhất">
                  {" "}
                  <i className="fas fa-bolt" />
                </div>

                <div className="wpd-filter wpdf-sorting ">
                  {" "}
                  <span
                    className="wpdiscuz-sort-button wpdiscuz-sort-button-active"
                    data-sorting={currentSort}
                    onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                  >
                    {currentSort === 'newest' ? 'Mới nhất' : currentSort === 'oldest' ? 'Cũ nhất' : 'Được bỏ phiếu nhiều nhất'}
                  </span>{" "}
                  <i className="fas fa-sort-down" onClick={() => setSortDropdownOpen(!sortDropdownOpen)} />

                  <div className="wpdiscuz-sort-buttons" style={{ display: sortDropdownOpen ? 'block' : 'none' }}>
                    {" "}
                    <span className="wpdiscuz-sort-button" data-sorting="oldest" onClick={() => handleSortChange('oldest')}>
                      Cũ nhất
                    </span>{" "}
                    <span className="wpdiscuz-sort-button" data-sorting="by_vote" onClick={() => handleSortChange('by_vote')}>
                      Được bỏ phiếu nhiều nhất
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="wpd-comment-info-bar">
              <div className="wpd-current-view">
                <i className="fas fa-quote-left" /> Phản hồi nội tuyến
              </div>
              <div className="wpd-filter-view-all">
                Xem tất cả bình luận
              </div>
            </div>

            {/* FEED & INTERACTION AREA FOR ANONYMOUS USERS */}
            <div className="wpd-thread-list">
              <div className="wpd-load-more-submit-wrap">
                {" "}
                <button
                  aria-label="Xem Bình Luận"
                  className="wpd-load-comments wpd-prim-button"
                  name="submit"
                  onClick={() => alert("Đang tải dữ liệu bình luận công khai...")}
                >
                  {" "}
                  Xem Bình Luận{" "}
                </button>
              </div>

              {/* PAGINATION WRAPPER (HIDDEN UNTIL LOAD COMES ACTIVE) */}
              <div
                className="wpdiscuz-comment-pagination"
                style={{
                  display: "none",
                }}
              >
                <div className="wpd-load-more-submit-wrap">
                  {" "}
                  <button
                    className="wpd-load-more-submit wpd-loaded wpd-prim-button"
                    data-lastparentid="0"
                    name="submit"
                  >
                    {" "}
                    Tải thêm bình luận{" "}
                  </button>
                </div>{" "}
                <span
                  data-is_show_load_more="0"
                  id="wpdiscuzHasMoreComments"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ASYNC NOTIFICATION AND LOADING CHANNELS */}
      <div
        className="wpdiscuz-loading-bar-unauth"
        id="wpdiscuz-loading-bar"
      />
      <div
        className="wpdiscuz-comment-message-unauth"
        id="wpdiscuz-comment-message"
      />

    </div>
  );
}
