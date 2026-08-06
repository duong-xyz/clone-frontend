import { useEffect, useState } from "react";
import homepageCss from '../assets/homepage.css?inline'
import SearchFullscreenOverlay from "../components/SearchFullscreenOverlay";
import NavbarCollapse from "../components/NavbarCollapse";
import CustomLoginModal from "../components/CustomLoginModal";
import ScheduleTabs from "../components/ScheduleTabs";
import logofooter from '../assets/logofooter.webp'
import HH3DRefreshButton from '../components/HH3DRefreshButton'
import HH3DLatestBox from '../components/HH3DLatestBox'
import HH3DTrendingTrack from '../components/HH3DTrendingTrack'
import HH3DWidgetPreview from '../components/HH3DWidgetPreview'
import Header from "../components/Header";
import NotiTick from '../components/NotiTick'
// import styles from '../assets/homepage.css?raw'

function Home() {
  const cssModules = import.meta.glob('/src/assets/homepage.css', {
    query: '?raw',
    import: 'default',
    eager: true
  });

  // Lấy nội dung chuỗi CSS
  const styles = cssModules['/src/assets/homepage.css'];
  // 1. Tạo State quản lý trạng thái đóng/mở của màn hình tìm kiếm (Mặc định là đóng)
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // 1. Khởi tạo State quản lý trạng thái Đóng/Mở Modal (Mặc định ban đầu là false tức là đóng)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. Quản lý trạng thái đóng/mở của thanh Menu dọc (Drawer)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 2. Quản lý trạng thái đóng/mở của riêng mục con "Thể Loại"
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  const [noti, setNoti] = useState(false);

  // Hàm hỗ trợ đóng menu nhanh
  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div id="scoped-home-wrapper">
      <style>{homepageCss}</style>
      <div
        id="hh3d-root-wrapper"
        className={`home blog wp-embed-responsive wp-theme-halimmovies wp-child-theme-halimmovies-child halimmovie-version- bm-messages-dark halimthemes halimmovies ${isMenuOpen ? "hh3d-drawer-open" : ""
          }`} // Tự động thêm class .hh3d-drawer-open khi bấm nút Ba Gạch
      >
        <>
          <Header
            setIsMenuOpen={setIsMenuOpen}
            setIsSearchOpen={setIsSearchOpen}
            setIsModalOpen={setIsModalOpen}
            isGenreOpen={isGenreOpen}
            setIsGenreOpen={setIsGenreOpen}
            setNoti={setNoti}
          />
          <div className="container">
            <div className="row fullwith-slider" />
          </div>
          <div className="container-fluid halim-full-player hidden halim-centered">
            <div
              id="halim-full-player"
              className="container col-md-offset-2s col-md-8"
            />
          </div>
          <div className="container">
            <div className="row container" id="wrapper">
              <div className="halim-panel-filter">
                <div className="row" />
                <div
                  id="ajax-filter"
                  className="panel-collapse collapse"
                  aria-expanded="true"
                  role="menu"
                >
                  <div className="ajax" />
                </div>
              </div>
              <NotiTick />
              <SearchFullscreenOverlay isOpen={isSearchOpen} onClose={handleCloseSearch} />
              <CustomLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              <div className="col-xs-12 carausel-sliderWidget" />
              <main id="main-contents" className="col-xs-12 col-sm-12 col-md-8">
                <div className="halim-trending-slider">
                  <div className="section-bar clearfix">
                    <h3 className="section-title">

                      <span>
                        <i className="fas fa-fire-alt halim-trending-icon" /> Đang thịnh
                        hành
                      </span>
                    </h3>
                  </div>
                  <div className="halim-trending-container">

                    <button
                      className="halim-trending-nav-button halim-trending-prev-button"
                      aria-label="Previous"
                    >

                      <i className="fas fa-chevron-left" />
                    </button>

                    <HH3DTrendingTrack />
                    <button
                      className="halim-trending-nav-button halim-trending-next-button"
                      aria-label="Next"
                    >

                      <i className="fas fa-chevron-right" />
                    </button>
                  </div>
                </div>
                <section>
                  <ScheduleTabs />
                  <HH3DLatestBox />
                </section>
                <HH3DWidgetPreview />
              </main>
            </div>
          </div>
          <div className="clearfix" />
          <footer id="footer" className="clearfix">
            <div className="container footer-columns">
              <div className="row container">
                <div className="widget about col-xs-12 col-sm-4 col-md-4">
                  <div className="footer-logo">

                    <noscript>
                      &lt;img class="img-responsive"
                      src="./logofooter.webp"
                      alt="Hoạt Hình Trung Quốc - Xem Hoạt Hình 3D Hay | HH3D"/&gt;
                    </noscript>
                    <img
                      src={logofooter}
                      className="lazyload img-responsive"
                      data-src={logofooter}
                      alt="Hoạt Hình Trung Quốc - Xem Hoạt Hình 3D Hay | HH3D"
                    />
                    <span className="social"> </span>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          <div className="footer-credit">
            <div className="container credit">
              <div className="row container">
                <div className="col-xs-12 col-sm-4 col-md-6">

                  ©
                  <a
                    id="halimthemes"
                    href="https://hoathinh3d.st/"
                    title="Copyright ® 2025 HOATHINH3D."
                  >
                    Copyright ® 2025 HOATHINH3D.
                  </a>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-6 text-right pull-right">
                  <p className="blog-info">

                    <a
                      href="https://hoathinh3d.st/sitemap_index.xml"
                      target="_blank"
                      rel="noopener"
                    >
                      Sitemap
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="um_upload_single" style={{ display: "none" }} />
          <div id="um_view_photo" style={{ display: "none" }}>

            <a
              href="javascript:void(0);"
              data-action="um_remove_modal"
              className="um-modal-close"
              aria-label="Close view photo modal"
            >

              <i className="um-faicon-times" />
            </a>
            <div className="um-modal-body photo">
              <div className="um-modal-photo" />
            </div>
          </div>
          <noscript>
            &lt;style&gt;.lazyload{"{"}display:none{"}"}&lt;/style&gt;
          </noscript>
          <NavbarCollapse
            isMenuOpen={isMenuOpen}          /* <--- BẮT BUỘC BỔ SUNG BIẾN NÀY */
            setIsMenuOpen={setIsMenuOpen}
            isGenreOpen={isGenreOpen}
            setIsGenreOpen={setIsGenreOpen}
          />
          <div id="noti-backdrop" aria-hidden="true" className={noti ? "is-visible" : ""} style={{ display: noti ? 'block' : 'none' }} />
          <div
            id="dropdown-noti"
            className={`noti-drawer dropdown-menu-fb noti-dropdown bg-dark ${noti && "show"}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="noti-drawer-title"
            aria-hidden={noti ? "false" : "true"}
          >
            <div className="notification-header">
              <div className="notification-header__title">
                {" "}
                <span className="notification-header__icon" aria-hidden="true">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22a1.75 1.75 0 0 0 1.73-1.5h-3.46A1.75 1.75 0 0 0 12 22Zm7-4.5v-4.86c0-3.14-2.11-5.78-5-6.64V5.5a1.5 1.5 0 1 0-3 0v.5C8.11 6.86 6 9.5 6 12.64V17.5L4 19.5v.5h16v-.5l-1-2Z"
                      fill="currentColor"
                    />
                  </svg>{" "}
                </span>{" "}
                <span className="notification-title" id="noti-drawer-title">
                  Thông báo
                </span>
              </div>
              <div className="notification-header__actions">
                <a href="/thong-bao" className="notification-view-all">
                  Xem tất cả
                </a>
                <button
                  type="button"
                  className="noti-drawer-close"
                  id="noti-drawer-close"
                  aria-label="Đóng thông báo"
                  onClick={() => setNoti(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    {" "}
                    <path
                      d="M6.4 6.4a1 1 0 0 1 1.4 0L12 10.6l4.2-4.2a1 1 0 1 1 1.4 1.4L13.4 12l4.2 4.2a1 1 0 1 1-1.4 1.4L12 13.4l-4.2 4.2a1 1 0 1 1-1.4-1.4L10.6 12 6.4 7.8a1 1 0 0 1 0-1.4Z"
                      fill="currentColor"
                    />{" "}
                  </svg>{" "}
                </button>
              </div>
            </div>
            <div
              className="noti-drawer__scroll"
              id="noti-drawer-scroll"
              aria-busy="false"
              style={{ overflowY: "auto" }}
            >
              <div id="list-item-notification" className="notification-list">
                <div className="notification-section-title-notify">Trước đó</div>
                <div className="notification-item-notify notification-unread-notify">
                  <a
                    href="/xem-phim-tien-nghich/tap-152-sv1.html"
                    className="notification-link-notify"
                  >
                    <div className="notification-avatar-notify">
                      <img src="/wp-content/uploads/2023/09/tien-nghich-6.jpg" alt="" />
                      <div className="notification-icon-notify icon-movie-notify">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width={10}
                          height={10}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="notification-content-notify">
                      <div className="notification-text-notify">
                        <span className="fb-noti-name-notify">Tiên Nghịch</span>
                        <span>đã phát sóng Tập 152</span>
                      </div>
                      <div className="notification-time-notify">2 ngày trước</div>
                    </div>
                  </a>
                  <div className="notification-delete-notify" data-id={38889436}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1={10} y1={11} x2={10} y2={17} />
                      <line x1={14} y1={11} x2={14} y2={17} />
                    </svg>
                  </div>
                  <div className="delete-confirm-notify">
                    <div className="delete-confirm-overlay-notify" />
                    <div className="delete-confirm-content-notify">
                      <button className="delete-confirm-cancel-notify">Hủy</button>
                      <button className="delete-confirm-ok-notify">Xóa</button>
                    </div>
                  </div>

                </div>
                <div className="notification-item-notify notification-unread-notify">
                  <a
                    href="/xem-phim-pham-nhan-tu-tien-phan-3/tap-185-sv1.html"
                    className="notification-link-notify"
                  >
                    <div className="notification-avatar-notify">
                      <img
                        src="/wp-content/uploads/2026/06/pham-nhan-tu-tien-phan-3-thumb.jpg"
                        alt=""
                      />
                      <div className="notification-icon-notify icon-movie-notify">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          width={10}
                          height={10}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="notification-content-notify">
                      <div className="notification-text-notify">
                        <span className="fb-noti-name-notify">
                          Phàm Nhân Tu Tiên Phần 3
                        </span>
                        <span>đã phát sóng Tập 185</span>
                      </div>
                      <div className="notification-time-notify">3 ngày trước</div>
                    </div>
                  </a>
                  <div className="notification-delete-notify" data-id={38784769}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3 6 5 6 21 6" />
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1={10} y1={11} x2={10} y2={17} />
                      <line x1={14} y1={11} x2={14} y2={17} />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </>

      </div>
    </div>
  );
}

export default Home;
