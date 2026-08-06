import { useEffect, useState } from 'react';
import root from 'react-shadow'
import Header from '../components/Header';
import SearchFullscreenOverlay from '../components/SearchFullscreenOverlay';
import CustomLoginModal from '../components/CustomLoginModal';
import styles from '../../public/css/schedule.css?raw'

export default function Schedule() {
    // useEffect(() => {
    //     const linkElement = document.createElement('link');
    //     linkElement.rel = 'stylesheet';
    //     linkElement.href = './css/schedule.css';
    //     linkElement.id = 'hoathinh3d-comment-css';
    //     document.head.appendChild(linkElement);
    //     return () => {
    //         const dynamicLink = document.getElementById('hoathinh3d-comment-css');
    //         if (dynamicLink) {
    //             dynamicLink.remove();
    //         }
    //     };
    // }, []);
    // 1. Tạo State quản lý trạng thái đóng/mở của màn hình tìm kiếm (Mặc định là đóng)
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    // 1. Khởi tạo State quản lý trạng thái Đóng/Mở Modal (Mặc định ban đầu là false tức là đóng)
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 1. Quản lý trạng thái đóng/mở của thanh Menu dọc (Drawer)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // 2. Quản lý trạng thái đóng/mở của riêng mục con "Thể Loại"
    const [isGenreOpen, setIsGenreOpen] = useState(false);

    // Hàm hỗ trợ đóng menu nhanh
    const handleCloseSearch = () => {
        setIsSearchOpen(false);
    };
    const daysOfWeek = [
        { id: "thu-hai", label: "Thứ Hai" },
        { id: "thu-ba", label: "Thứ Ba" },
        { id: "thu-tu", label: "Thứ Tư" },
        { id: "thu-nam", label: "Thứ Năm" },
        { id: "thu-sau", label: "Thứ Sáu" },
        { id: "thu-bay", label: "Thứ Bảy" },
        { id: "chu-nhat", label: "Chủ Nhật" },
    ];
    const [todayId, setTodayId] = useState("thu-ba");
    useEffect(() => {
        const daysMap = ["chu-nhat", "thu-hai", "thu-ba", "thu-tu", "thu-nam", "thu-sau", "thu-bay"];
        const currentDayIndex = new Date().getDay();
        setTodayId(daysMap[currentDayIndex]);
    }, []);
    return (
        <>
            <style>{styles}</style>
            <div id="hh3d-root-wrapper">
                <Header
                    setIsMenuOpen={setIsMenuOpen}
                    setIsSearchOpen={setIsSearchOpen}
                    setIsModalOpen={setIsModalOpen}
                    isGenreOpen={isGenreOpen}
                    setIsGenreOpen={setIsGenreOpen}
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
                        <SearchFullscreenOverlay isOpen={isSearchOpen} onClose={handleCloseSearch} />
                        <CustomLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                        <div className="lc-schedule-page">
                            <div className="lc-bg" aria-hidden="true" />
                            <div className="lc-overlay" aria-hidden="true" />
                            <div className="lc-inner">
                                <header className="lc-title-wrap">
                                    <div className="lc-title-divider" aria-hidden="true" />
                                    <h1 className="lc-page-title">
                                        {" "}
                                        <i className="fas fa-film" aria-hidden="true" /> Lịch Chiếu HoatHinh3D
                                    </h1>
                                    <p className="lc-title-sub">
                                        Xem lịch chiếu phim hoạt hình trung quốc đang chiếu trong tuần.
                                    </p>
                                </header>
                                <nav className="lc-day-tabs" id="dayTabs" aria-label="Chọn ngày trong tuần">
                                    <button
                                        type="button"
                                        className="lc-day-tab "
                                    >
                                        Chủ Nhật
                                    </button>
                                    <button
                                        type="button"
                                        className="lc-day-tab "
                                        onclick="loadSchedule('thu-hai')"
                                    >
                                        Thứ Hai
                                    </button>
                                    <button
                                        type="button"
                                        className="lc-day-tab "
                                        onclick="loadSchedule('thu-ba')"
                                    >
                                        Thứ Ba
                                    </button>
                                    <button
                                        type="button"
                                        className="lc-day-tab "
                                        onclick="loadSchedule('thu-tu')"
                                    >
                                        Thứ Tư
                                    </button>
                                    <button
                                        type="button"
                                        className="lc-day-tab active"
                                        onclick="loadSchedule('thu-nam')"
                                    >
                                        Thứ Năm
                                    </button>
                                    <button
                                        type="button"
                                        className="lc-day-tab "
                                        onclick="loadSchedule('thu-sau')"
                                    >
                                        Thứ Sáu
                                    </button>
                                    <button
                                        type="button"
                                        className="lc-day-tab "
                                        onclick="loadSchedule('thu-bay')"
                                    >
                                        Thứ Bảy
                                    </button>
                                </nav>
                                <section
                                    className="lc-early-schedule active"
                                    id="earlySchedule"
                                    aria-label="Phim chiếu sớm"
                                >
                                    <div className="lc-section-head">
                                        <i className="fas fa-sun" aria-hidden="true" />
                                        <span>Phim Chiếu Sớm</span>
                                        <div className="lc-head-line" />
                                    </div>
                                    <div
                                        className="lc-schedule-items"
                                        style={{ gridTemplateColumns: "1fr 1fr" }}
                                    >
                                        <a
                                            href="https://hoathinh3d.st/the-gioi-hoan-my"
                                            className="lc-schedule-item"
                                        >
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/the-gioi-hoan-my-thumb.jpg"
                                                alt="Thế Giới Hoàn Mỹ"
                                                loading="lazy"
                                                width={64}
                                                height={90}
                                            />
                                            <div className="lc-schedule-info">
                                                <h3 className="lc-schedule-title">Thế Giới Hoàn Mỹ</h3>
                                                <div className="lc-schedule-meta">
                                                    <div className="lc-schedule-episode">
                                                        <i className="fas fa-play" aria-hidden="true" /> Tập 277
                                                    </div>
                                                    <time
                                                        className="lc-schedule-updated"
                                                        dateTime="2026-07-09T19:13:50+07:00"
                                                    >
                                                        <i className="fas fa-clock" aria-hidden="true" /> Cập nhật: 6
                                                        ngày trước
                                                    </time>
                                                </div>
                                            </div>
                                            <div className="lc-early-time">18:00</div>
                                        </a>
                                    </div>
                                </section>
                                <section className="lc-grid-wrapper">
                                    <div className="lc-section-head jade-head">
                                        {" "}
                                        <i className="fas fa-calendar-alt" aria-hidden="true" />{" "}
                                        <span>Lịch Chiếu Hôm Nay</span>
                                        <div className="lc-head-line" />
                                    </div>
                                    <div className="lc-schedule-grid" id="scheduleGrid">
                                        <a
                                            href="https://hoathinh3d.st/tram-than-pham-tran-than-vuc-phan-2"
                                            className="lc-schedule-item"
                                        >
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/tram-than-pham-tran-than-vuc-phan-2-thumb.webp"
                                                alt="Trảm Thần: Phàm Trần Thần Vực Phần 2"
                                                loading="lazy"
                                                width={64}
                                                height={90}
                                            />
                                            <div className="lc-schedule-info">
                                                <h3 className="lc-schedule-title">
                                                    Trảm Thần: Phàm Trần Thần Vực Phần 2
                                                </h3>
                                                <div className="lc-schedule-meta">
                                                    <div className="lc-schedule-episode">
                                                        <i className="fas fa-play" aria-hidden="true" /> Tập 6
                                                    </div>
                                                    <time
                                                        className="lc-schedule-updated"
                                                        dateTime="2026-07-15T17:53:00+07:00"
                                                    >
                                                        <i className="fas fa-clock" aria-hidden="true" /> Cập nhật: 6
                                                        giờ trước
                                                    </time>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="https://hoathinh3d.st/hoc-vien-cao-vo-dong-dai"
                                            className="lc-schedule-item"
                                        >
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/07/hoc-vien-cao-vo-dong-dai-thumb.webp"
                                                alt="Học Viện Cao Võ Đông Đại"
                                                loading="lazy"
                                                width={64}
                                                height={90}
                                            />
                                            <div className="lc-schedule-info">
                                                <h3 className="lc-schedule-title">Học Viện Cao Võ Đông Đại</h3>
                                                <div className="lc-schedule-meta">
                                                    <div className="lc-schedule-episode">
                                                        <i className="fas fa-play" aria-hidden="true" /> Tập Trailer
                                                    </div>
                                                    <time
                                                        className="lc-schedule-updated"
                                                        dateTime="2026-07-14T14:24:55+07:00"
                                                    >
                                                        <i className="fas fa-clock" aria-hidden="true" /> Cập nhật: 1
                                                        ngày trước
                                                    </time>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="https://hoathinh3d.st/dao-yeu-hanh"
                                            className="lc-schedule-item"
                                        >
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/03/dao-yeu-hanh.jpg"
                                                alt="Đạo Yêu Hành"
                                                loading="lazy"
                                                width={64}
                                                height={90}
                                            />
                                            <div className="lc-schedule-info">
                                                <h3 className="lc-schedule-title">Đạo Yêu Hành</h3>
                                                <div className="lc-schedule-meta">
                                                    <div className="lc-schedule-episode">
                                                        <i className="fas fa-play" aria-hidden="true" /> Tập 44
                                                    </div>
                                                    <time
                                                        className="lc-schedule-updated"
                                                        dateTime="2026-07-14T10:31:37+07:00"
                                                    >
                                                        <i className="fas fa-clock" aria-hidden="true" /> Cập nhật: 1
                                                        ngày trước
                                                    </time>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="https://hoathinh3d.st/than-mo" className="lc-schedule-item">
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2022/07/than-mo.webp"
                                                alt="Thần Mộ"
                                                loading="lazy"
                                                width={64}
                                                height={90}
                                            />
                                            <div className="lc-schedule-info">
                                                <h3 className="lc-schedule-title">Thần Mộ</h3>
                                                <div className="lc-schedule-meta">
                                                    <div className="lc-schedule-episode">
                                                        <i className="fas fa-play" aria-hidden="true" /> Tập 93
                                                    </div>
                                                    <time
                                                        className="lc-schedule-updated"
                                                        dateTime="2026-07-09T16:31:19+07:00"
                                                    >
                                                        <i className="fas fa-clock" aria-hidden="true" /> Cập nhật: 6
                                                        ngày trước
                                                    </time>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="https://hoathinh3d.st/tieu-nhan" className="lc-schedule-item">
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/thu-nam-thumb.webp"
                                                alt="Tiêu Nhân"
                                                loading="lazy"
                                                width={64}
                                                height={90}
                                            />
                                            <div className="lc-schedule-info">
                                                <h3 className="lc-schedule-title">Tiêu Nhân</h3>
                                                <div className="lc-schedule-meta">
                                                    <div className="lc-schedule-episode">
                                                        <i className="fas fa-play" aria-hidden="true" /> Tập 21
                                                    </div>
                                                    <time
                                                        className="lc-schedule-updated"
                                                        dateTime="2026-07-09T13:03:45+07:00"
                                                    >
                                                        <i className="fas fa-clock" aria-hidden="true" /> Cập nhật: 6
                                                        ngày trước
                                                    </time>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="https://hoathinh3d.st/tuong-da" className="lc-schedule-item">
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/04/tuong-da-1.webp"
                                                alt="Tương Dạ"
                                                loading="lazy"
                                                width={64}
                                                height={90}
                                            />
                                            <div className="lc-schedule-info">
                                                <h3 className="lc-schedule-title">Tương Dạ</h3>
                                                <div className="lc-schedule-meta">
                                                    <div className="lc-schedule-episode">
                                                        <i className="fas fa-play" aria-hidden="true" /> Tập 13
                                                    </div>
                                                    <time
                                                        className="lc-schedule-updated"
                                                        dateTime="2026-07-09T11:10:34+07:00"
                                                    >
                                                        <i className="fas fa-clock" aria-hidden="true" /> Cập nhật: 6
                                                        ngày trước
                                                    </time>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="https://hoathinh3d.st/nghich-thien-ta-than"
                                            className="lc-schedule-item"
                                        >
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2023/09/nghich-thien-ta-than-1.webp"
                                                alt="Nghịch Thiên Tà Thần"
                                                loading="lazy"
                                                width={64}
                                                height={90}
                                            />
                                            <div className="lc-schedule-info">
                                                <h3 className="lc-schedule-title">Nghịch Thiên Tà Thần</h3>
                                                <div className="lc-schedule-meta">
                                                    <div className="lc-schedule-episode">
                                                        <i className="fas fa-play" aria-hidden="true" /> Tập 45
                                                    </div>
                                                    <time
                                                        className="lc-schedule-updated"
                                                        dateTime="2026-07-09T10:46:47+07:00"
                                                    >
                                                        <i className="fas fa-clock" aria-hidden="true" /> Cập nhật: 6
                                                        ngày trước
                                                    </time>
                                                </div>
                                            </div>
                                        </a>
                                        <a
                                            href="https://hoathinh3d.st/dan-dao-chi-ton"
                                            className="lc-schedule-item"
                                        >
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2023/12/dan-dao-chi-ton.jpeg"
                                                alt="Đan Đạo Chí Tôn"
                                                loading="lazy"
                                                width={64}
                                                height={90}
                                            />
                                            <div className="lc-schedule-info">
                                                <h3 className="lc-schedule-title">Đan Đạo Chí Tôn</h3>
                                                <div className="lc-schedule-meta">
                                                    <div className="lc-schedule-episode">
                                                        <i className="fas fa-play" aria-hidden="true" /> Tập 183
                                                    </div>
                                                    <time
                                                        className="lc-schedule-updated"
                                                        dateTime="2026-07-09T10:03:37+07:00"
                                                    >
                                                        <i className="fas fa-clock" aria-hidden="true" /> Cập nhật: 6
                                                        ngày trước
                                                    </time>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </section>
                            </div>
                        </div>

                        <div
                            id="lc-sched-loading"
                            role="status"
                            aria-live="polite"
                            aria-busy="true"
                            className={`${false && "active"}`}
                        >
                            <div className="lc-loader-ring">
                                <div className="lc-loader-dot">HH3D</div>
                            </div>
                            <div className="lc-loader-text">
                                Đang tải<span>.</span>
                                <span>.</span>
                                <span>.</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="clearfix" />
                <footer id="footer" className="clearfix">
                    <div className="container footer-columns">
                        <div className="row container">
                            <div className="widget about col-xs-12 col-sm-4 col-md-4">
                                <div className="footer-logo">
                                    {" "}
                                    <img
                                        className="img-responsive"
                                        src="https://hoathinh3d.st/wp-content/uploads/2026/06/logofooter.webp"
                                        alt="Hoạt Hình Trung Quốc - Xem Hoạt Hình 3D Hay | HH3D"
                                    />{" "}
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
                                {" "}
                                ©{" "}
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
                                    {" "}
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
            </div>
        </>

    );
}