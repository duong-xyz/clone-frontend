import { useEffect } from "react";
import useHH3DLegacyMock from '../config/appConfig'

export default function Bodys() {
    useEffect(() => {
        // --- A. GÁN BIẾN CẤU HÌNH HỆ THỐNG MỚI LÊN WINDOW MÔI TRƯỜNG ---
        window._nslDOMReady = function (callback) {
            if (document.readyState === "complete" || document.readyState === "interactive") {
                callback();
            } else {
                document.addEventListener("DOMContentLoaded", callback);
            }
        };

        window.hh3dData = {
            "loggedIn": "",
            "restBase": "https://hoathinh3d.st/wp-json",
            "restAction": "https://hoathinh3d.st/wp-json/hh3d/v1/action",
            "restLogin": "https://hoathinh3d.st/wp-json/hh3d/v1/dang-nhap",
            "restNonce": "73d9011d56",
            "widgetPreview": "1"
        };

        // --- B. TẢI ĐỘNG CÁC SCRIPT TIVI VÀ LÕI JQUERY ---
        const headScripts = [
            "https://hoathinh3d.st/wp-includes/js/jquery/jquery.min.js?ver=3.7.1",
            "https://hoathinh3d.st/wp-content/themes/halimmovies-child/assets/js/optimize/dist/hh3d-main.min.js?t=1783625393"
        ];

        const loadedHeadScripts = [];

        // 1. Khởi tạo script cấu hình Tivi (hh3d-tv-boot) bám sát dữ liệu trang cũ
        const tvScript = document.createElement('script');
        tvScript.id = "hh3d-tv-boot";
        tvScript.src = "https://hoathinh3d.st/wp-content/themes/halimmovies-child/assets/js/tv/detect.min.js?ver=1783621089";
        tvScript.setAttribute('data-cfasync', 'false');
        tvScript.setAttribute('data-noptimize', '1');
        tvScript.setAttribute('data-hh3d-tv', JSON.stringify({
            context: "home",
            isLoggedIn: false,
            home: "https://hoathinh3d.st/",
            historyUrl: "https://hoathinh3d.st",
            restBase: "https://hoathinh3d.st/wp-json",
            restSearch: "https://hoathinh3d.st"
        }));
        document.body.appendChild(tvScript);
        loadedHeadScripts.push(tvScript);

        // 2. Tải lần lượt JQuery và mã JS core chính
        headScripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.async = false; // Tải tuần tự để tránh lỗi mất đồng bộ thư viện
            document.body.appendChild(script);
            loadedHeadScripts.push(script);
        });
        // 1. CẤU HÌNH CÁC BIẾN TOÀN CỤC CHO THƯ VIỆN GỐC (WINDOW OBJECT)
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;

        window.halim = {
            "ajax_url": "https://hoathinh3d.st/wp-content/themes/halimmovies/halim-ajax.php",
            "light_mode": "0",
            "light_mode_btn": "0",
            "ajax_live_search": "1",
            "sync": "1",
            "db_redirect_url": "https://hoathinh3d.st/"
        };

        window.login_object = {
            "rest_url": "https://hoathinh3d.st/wp-json/hh3d/v1/dang-nhap",
            "token_url": "https://hoathinh3d.st/wp-json/hh3d/v1/dang-nhap-token",
            "google_nonce": "e24d581b02"
        };

        window.hh3dLatest = {
            "api": "https://hoathinh3d.st/wp-json/halim/v1/latest-updates",
            "perPage": "20"
        };

        // 2. LOGIC KIỂM TRA CHẾ ĐỘ TIẾT KIỆM PIN & HUY HIỆU (TỪ SCRIPT GỐC)
        let ps = document.cookie.indexOf('hh3d_power_saving=true') !== -1;
        try {
            ps = ps || localStorage.getItem('hh3d_power_saving') === 'true';
        } catch (e) { }

        const wrapper = document.getElementById('hh3d-root-wrapper');
        if (wrapper) {
            const hasBadgesDisabled = document.cookie.indexOf('wpdiscuz_badges_disabled=true') !== -1 ||
                document.cookie.indexOf('profile_badges_disabled=true') !== -1 || ps;
            if (hasBadgesDisabled) {
                wrapper.classList.add('wpdiscuz-badges-disabled', 'profile-badges-disabled');
            }
            if (ps) wrapper.classList.add('hh3d-power-saving');
            try {
                if (!ps && localStorage.getItem('hh3d_pb_dh_reduce') === 'true') {
                    wrapper.classList.add('hh3d-badges-max10');
                }
            } catch (e3) { }
        }

        // 3. TẠO THẺ ĐỂ TẢI CÁC FILE JS TỪ HỆ THỐNG CŨ THEO THỨ TỰ TRỰC TIẾP
        const scriptsToLoad = [
            "https://hoathinh3d.st/wp-content/plugins/autoptimize/classes/external/js/lazysizes.min.js?ao_version=3.1.15",
            "https://hoathinh3d.st/wp-content/themes/halimmovies/assets/js/bootstrap.min.js?ver=6.9",
            "https://hoathinh3d.st/wp-content/themes/halimmovies-child/assets/js/optimize/dist/halim-core.min.js?t=1783621089",
            "https://hoathinh3d.st/wp-content/themes/halimmovies-child/assets/js/optimize/dist/custom-login.min.js?t=1783621089",
            "https://hoathinh3d.st/wp-content/themes/halimmovies-child/assets/js/sweetalert2.min.js?t=1783621088",
            "https://hoathinh3d.st/wp-content/themes/halimmovies-child/assets/js/nav-drawer.js?t=1783621088",
            "https://hoathinh3d.st/wp-content/themes/halimmovies-child/assets/js/optimize/dist/latest-updates.min.js?t=1783621089",
            "https://hoathinh3d.st/wp-content/themes/halimmovies-child/assets/js/widget-preview.js?t=1783621089",
            "https://cdnjs.cloudflare.com/ajax/libs/jquery-loading-overlay/2.1.7/loadingoverlay.min.js",
            "https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496"
        ];

        const elementList = [];

        scriptsToLoad.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            if (src.includes('beacon.min.js')) {
                script.defer = true;
                script.setAttribute('crossorigin', 'anonymous');
                script.setAttribute('data-cf-beacon', '{"version":"2024.11.0","token":"9ec803f663fb45d8b584c292b3328d51"}');
            }
            document.body.appendChild(script);
            elementList.push(script);
        });

        // 4. XỬ LÝ SỰ KIỆN LOAD CỦA JQUERY ĐỂ RESET INPUT
        const handleWindowLoad = () => {
            if (window.jQuery) {
                window.jQuery('input[name="um_request"]').val('');
            }
        };
        window.addEventListener('load', handleWindowLoad);

        // DỌN DẸP SCRIPT VÀ SỰ KIỆN KHI RỜI COMPONENT (CLEANUP)
        return () => {
            elementList.forEach(el => el.remove());
            window.removeEventListener('load', handleWindowLoad);
            loadedHeadScripts.forEach(script => script.remove());
        };
    }, []);
    return (
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
                <div id="search-fullscreen-overlay">
                    <div className="search-overlay-header">
                        {" "}
                        <span className="material-icons search-overlay-search-icon">
                            search
                        </span>{" "}
                        <input
                            type="text"
                            id="search-overlay-input"
                            placeholder="Nhập từ khóa tìm kiếm..."
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                        />
                        <button id="search-overlay-close" type="button">
                            <span className="material-icons">close</span>
                        </button>
                    </div>
                    <div
                        id="search-overlay-suggestions"
                        className="search-overlay-suggestions"
                    >
                        <div className="search-overlay-trending-label">
                            {" "}
                            <span
                                className="material-icons"
                                style={{ fontSize: 15, verticalAlign: "middle", color: "#ff6b35" }}
                            >
                                auto_awesome
                            </span>{" "}
                            Gợi ý cho bạn
                        </div>
                        <div
                            id="search-overlay-trending-grid"
                            className="search-overlay-trending-grid"
                        >
                            <div className="search-overlay-loading">
                                <span className="material-icons">autorenew</span>
                            </div>
                        </div>
                    </div>
                    <div
                        id="search-overlay-results"
                        className="search-overlay-results"
                        style={{ display: "none" }}
                    />
                </div>
                <div
                    id="custom-login-modal"
                    className="custom-login hidden"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="custom-login-title"
                    aria-hidden="true"
                >
                    <div className="custom-login-backdrop" data-close-login="" />
                    <div className="custom-login-content">
                        {" "}
                        <button
                            type="button"
                            id="custom-close-login-modal"
                            className="custom-close"
                            aria-label="Đóng"
                        >
                            ×
                        </button>
                        <div className="custom-login-brand">
                            <div className="custom-login-brand__seal" aria-hidden="true">
                                {" "}
                                <i className="fas fa-scroll" />
                            </div>
                            <h2 id="custom-login-title" className="custom-login-title">
                                Đăng Nhập
                            </h2>
                            <p className="custom-login-subtitle">
                                Nhập danh — tiếp tục hành trình tu luyện
                            </p>
                        </div>{" "}
                        <button
                            type="button"
                            id="custom-google-login"
                            className="google-login-button"
                        >
                            {" "}
                            <span className="google-icon" aria-hidden="true">
                                {" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 48 48"
                                    width={18}
                                    height={18}
                                >
                                    {" "}
                                    <path
                                        fill="#EA4335"
                                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                                    />{" "}
                                    <path
                                        fill="#4285F4"
                                        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                                    />{" "}
                                    <path
                                        fill="#FBBC05"
                                        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                                    />{" "}
                                    <path
                                        fill="#34A853"
                                        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                                    />{" "}
                                </svg>{" "}
                            </span>{" "}
                            <span className="google-login-button__text">
                                Đăng nhập bằng Google
                            </span>{" "}
                        </button>
                        <div className="custom-login-divider" role="separator">
                            <span>✦</span>
                        </div>
                        <form
                            id="custom-login-form"
                            className="custom-login-form"
                            noValidate=""
                        >
                            <div className="custom-field">
                                {" "}
                                <span className="custom-field__icon" aria-hidden="true">
                                    <i className="fas fa-user" />
                                </span>{" "}
                                <input
                                    type="text"
                                    id="custom-username"
                                    name="username"
                                    className="custom-input"
                                    placeholder="Tên tài khoản"
                                    autoComplete="username"
                                    required=""
                                />
                            </div>
                            <div className="custom-field">
                                {" "}
                                <span className="custom-field__icon" aria-hidden="true">
                                    <i className="fas fa-lock" />
                                </span>{" "}
                                <input
                                    type="password"
                                    id="custom-password"
                                    name="password"
                                    className="custom-input"
                                    placeholder="Mật khẩu"
                                    autoComplete="current-password"
                                    required=""
                                />
                            </div>
                            <label htmlFor="custom-remember" className="custom-checkbox-label">
                                {" "}
                                <input
                                    type="checkbox"
                                    id="custom-remember"
                                    name="remember"
                                    className="custom-checkbox"
                                />{" "}
                                <span className="custom-checkbox-ui" aria-hidden="true" />{" "}
                                <span>Ghi nhớ phiên đăng nhập</span>{" "}
                            </label>
                            <div className="custom-field custom-field--hp" aria-hidden="true">
                                {" "}
                                <label htmlFor="custom-login-website">Website</label>{" "}
                                <input
                                    type="text"
                                    id="custom-login-website"
                                    name="website"
                                    className="custom-input"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    defaultValue=""
                                />
                            </div>{" "}
                            <button
                                type="submit"
                                id="custom-login-submit"
                                className="custom-submit"
                            >
                                {" "}
                                <span className="custom-submit__text">Đăng nhập</span>{" "}
                            </button>
                            <div
                                id="custom-login-message"
                                className="custom-message"
                                role="status"
                                aria-live="polite"
                            />
                        </form>
                    </div>
                </div>
                <div className="col-xs-12 carausel-sliderWidget" />
                <main id="main-contents" className="col-xs-12 col-sm-12 col-md-8">
                    <div className="halim-trending-slider">
                        <div className="section-bar clearfix">
                            <h3 className="section-title">
                                {" "}
                                <span>
                                    <i className="fas fa-fire-alt halim-trending-icon" /> Đang thịnh
                                    hành
                                </span>
                            </h3>
                        </div>
                        <div className="halim-trending-container">
                            {" "}
                            <button
                                className="halim-trending-nav-button halim-trending-prev-button"
                                aria-label="Previous"
                            >
                                {" "}
                                <i className="fas fa-chevron-left" />{" "}
                            </button>
                            <div className="halim-trending-track">
                                <div className="halim-trending-card">
                                    <a
                                        href="https://hoathinh3d.st/tien-nghich"
                                        className="halim-trending-link"
                                    >
                                        <div className="halim-trending-poster-container halim-trending-clip-path-odd">
                                            <div className="halim-trending-poster-mask halim-trending-clip-path-odd" />{" "}
                                            <img
                                                width={224}
                                                height={299}
                                                src="https://hoathinh3d.st/wp-content/uploads/2023/09/tien-nghich-6.jpg"
                                                className="halim-trending-poster-image"
                                                alt="Tiên Nghịch"
                                                decoding="async"
                                                sizes="(max-width: 480px) 180px, (max-width: 768px) 220px, 224px"
                                                loading="eager"
                                                fetchpriority="high"
                                            />
                                            <div className="halim-trending-rating">
                                                <div className="halim-trending-rating-value">4.6</div>
                                            </div>
                                        </div>
                                        <div className="halim-trending-info">
                                            <div className="halim-trending-number">1</div>
                                            <div className="halim-trending-details">
                                                <h3 className="halim-trending-title-text">Tiên Nghịch</h3>
                                                <p className="halim-trending-original-title">Xian Ni</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="halim-trending-card">
                                    <a
                                        href="https://hoathinh3d.st/dau-pha-thuong-khung-phan-5-gia-nam-hoc-vien"
                                        className="halim-trending-link"
                                    >
                                        <div className="halim-trending-poster-container halim-trending-clip-path-even">
                                            <div className="halim-trending-poster-mask halim-trending-clip-path-even" />{" "}
                                            <img
                                                width={224}
                                                height={299}
                                                src="https://hoathinh3d.st/wp-content/uploads/2022/06/dau-pha-thuong-khung.webp"
                                                className="halim-trending-poster-image"
                                                alt="Đấu Phá Thương Khung Phần 5"
                                                decoding="async"
                                                sizes="auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px"
                                                loading="lazy"
                                                fetchpriority="low"
                                            />
                                            <div className="halim-trending-rating">
                                                <div className="halim-trending-rating-value">3.8</div>
                                            </div>
                                        </div>
                                        <div className="halim-trending-info">
                                            <div className="halim-trending-number">2</div>
                                            <div className="halim-trending-details">
                                                <h3 className="halim-trending-title-text">
                                                    Đấu Phá Thương Khung Phần 5
                                                </h3>
                                                <p className="halim-trending-original-title">
                                                    Fights Break Sphere 5
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="halim-trending-card">
                                    <a
                                        href="https://hoathinh3d.st/muc-than-ky"
                                        className="halim-trending-link"
                                    >
                                        <div className="halim-trending-poster-container halim-trending-clip-path-odd">
                                            <div className="halim-trending-poster-mask halim-trending-clip-path-odd" />{" "}
                                            <img
                                                width={224}
                                                height={299}
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/07/muc-than-ky-thumb.webp"
                                                className="halim-trending-poster-image"
                                                alt="Mục Thần Ký"
                                                decoding="async"
                                                sizes="auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px"
                                                loading="lazy"
                                                fetchpriority="low"
                                            />
                                            <div className="halim-trending-rating">
                                                <div className="halim-trending-rating-value">4.6</div>
                                            </div>
                                        </div>
                                        <div className="halim-trending-info">
                                            <div className="halim-trending-number">3</div>
                                            <div className="halim-trending-details">
                                                <h3 className="halim-trending-title-text">Mục Thần Ký</h3>
                                                <p className="halim-trending-original-title">Mu Shen Ji</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="halim-trending-card">
                                    <a
                                        href="https://hoathinh3d.st/quang-am-chi-ngoai"
                                        className="halim-trending-link"
                                    >
                                        <div className="halim-trending-poster-container halim-trending-clip-path-even">
                                            <div className="halim-trending-poster-mask halim-trending-clip-path-even" />{" "}
                                            <img
                                                width={224}
                                                height={299}
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/quang-am-chi-ngoai-thumb.jpg"
                                                className="halim-trending-poster-image"
                                                alt="Quang Âm Chi Ngoại"
                                                decoding="async"
                                                sizes="auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px"
                                                loading="lazy"
                                                fetchpriority="low"
                                            />
                                            <div className="halim-trending-rating">
                                                <div className="halim-trending-rating-value">4.6</div>
                                            </div>
                                        </div>
                                        <div className="halim-trending-info">
                                            <div className="halim-trending-number">4</div>
                                            <div className="halim-trending-details">
                                                <h3 className="halim-trending-title-text">
                                                    Quang Âm Chi Ngoại
                                                </h3>
                                                <p className="halim-trending-original-title">
                                                    Beyond Time's Gaze
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="halim-trending-card">
                                    <a
                                        href="https://hoathinh3d.st/pham-nhan-tu-tien-phan-3"
                                        className="halim-trending-link"
                                    >
                                        <div className="halim-trending-poster-container halim-trending-clip-path-odd">
                                            <div className="halim-trending-poster-mask halim-trending-clip-path-odd" />{" "}
                                            <img
                                                width={224}
                                                height={299}
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/pham-nhan-tu-tien-phan-3-thumb.jpg"
                                                className="halim-trending-poster-image"
                                                alt="Phàm Nhân Tu Tiên Phần 3"
                                                decoding="async"
                                                sizes="auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px"
                                                loading="lazy"
                                                fetchpriority="low"
                                            />
                                            <div className="halim-trending-rating">
                                                <div className="halim-trending-rating-value">4.4</div>
                                            </div>
                                        </div>
                                        <div className="halim-trending-info">
                                            <div className="halim-trending-number">5</div>
                                            <div className="halim-trending-details">
                                                <h3 className="halim-trending-title-text">
                                                    Phàm Nhân Tu Tiên Phần 3
                                                </h3>
                                                <p className="halim-trending-original-title">
                                                    Fanren Xiu Xian Chuan SS3
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="halim-trending-card">
                                    <a
                                        href="https://hoathinh3d.st/trach-thien-ky"
                                        className="halim-trending-link"
                                    >
                                        <div className="halim-trending-poster-container halim-trending-clip-path-even">
                                            <div className="halim-trending-poster-mask halim-trending-clip-path-even" />{" "}
                                            <img
                                                width={224}
                                                height={299}
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/01/trach-thien-ky.webp"
                                                className="halim-trending-poster-image"
                                                alt="Trạch Thiên Ký"
                                                decoding="async"
                                                sizes="auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px"
                                                loading="lazy"
                                                fetchpriority="low"
                                            />
                                            <div className="halim-trending-rating">
                                                <div className="halim-trending-rating-value">4.7</div>
                                            </div>
                                        </div>
                                        <div className="halim-trending-info">
                                            <div className="halim-trending-number">6</div>
                                            <div className="halim-trending-details">
                                                <h3 className="halim-trending-title-text">
                                                    Trạch Thiên Ký
                                                </h3>
                                                <p className="halim-trending-original-title">
                                                    Fighter of the Destiny
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="halim-trending-card">
                                    <a
                                        href="https://hoathinh3d.st/the-gioi-hoan-my"
                                        className="halim-trending-link"
                                    >
                                        <div className="halim-trending-poster-container halim-trending-clip-path-odd">
                                            <div className="halim-trending-poster-mask halim-trending-clip-path-odd" />{" "}
                                            <img
                                                width={224}
                                                height={299}
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/the-gioi-hoan-my-thumb.jpg"
                                                className="halim-trending-poster-image"
                                                alt="Thế Giới Hoàn Mỹ"
                                                decoding="async"
                                                sizes="auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px"
                                                loading="lazy"
                                                fetchpriority="low"
                                            />
                                            <div className="halim-trending-rating">
                                                <div className="halim-trending-rating-value">4.0</div>
                                            </div>
                                        </div>
                                        <div className="halim-trending-info">
                                            <div className="halim-trending-number">7</div>
                                            <div className="halim-trending-details">
                                                <h3 className="halim-trending-title-text">
                                                    Thế Giới Hoàn Mỹ
                                                </h3>
                                                <p className="halim-trending-original-title">
                                                    Perfect World
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="halim-trending-card">
                                    <a
                                        href="https://hoathinh3d.st/dau-la-dai-luc-2-tuyet-the-duong-mon"
                                        className="halim-trending-link"
                                    >
                                        <div className="halim-trending-poster-container halim-trending-clip-path-even">
                                            <div className="halim-trending-poster-mask halim-trending-clip-path-even" />{" "}
                                            <img
                                                width={224}
                                                height={299}
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/dau-la-dai-luc-2-tuyet-the-duong-mon-thumb.jpg"
                                                className="halim-trending-poster-image"
                                                alt="Đấu La Đại Lục 2: Tuyệt Thế Đường Môn"
                                                decoding="async"
                                                sizes="auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px"
                                                loading="lazy"
                                                fetchpriority="low"
                                            />
                                            <div className="halim-trending-rating">
                                                <div className="halim-trending-rating-value">4.1</div>
                                            </div>
                                        </div>
                                        <div className="halim-trending-info">
                                            <div className="halim-trending-number">8</div>
                                            <div className="halim-trending-details">
                                                <h3 className="halim-trending-title-text">
                                                    Đấu La Đại Lục 2: Tuyệt Thế Đường Môn
                                                </h3>
                                                <p className="halim-trending-original-title">
                                                    Douluo Dalu II: Jue Shi Tang Men
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="halim-trending-card">
                                    <a
                                        href="https://hoathinh3d.st/thuong-nguyen-do"
                                        className="halim-trending-link"
                                    >
                                        <div className="halim-trending-poster-container halim-trending-clip-path-odd">
                                            <div className="halim-trending-poster-mask halim-trending-clip-path-odd" />{" "}
                                            <img
                                                width={224}
                                                height={299}
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/thuong-nguyen-do-thumb.webp"
                                                className="halim-trending-poster-image"
                                                alt="Thương Nguyên Đồ"
                                                decoding="async"
                                                sizes="auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px"
                                                loading="lazy"
                                                fetchpriority="low"
                                            />
                                            <div className="halim-trending-rating">
                                                <div className="halim-trending-rating-value">4.5</div>
                                            </div>
                                        </div>
                                        <div className="halim-trending-info">
                                            <div className="halim-trending-number">9</div>
                                            <div className="halim-trending-details">
                                                <h3 className="halim-trending-title-text">
                                                    Thương Nguyên Đồ
                                                </h3>
                                                <p className="halim-trending-original-title">
                                                    Cang Yuan Tu
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="halim-trending-card">
                                    <a
                                        href="https://hoathinh3d.st/gia-thien"
                                        className="halim-trending-link"
                                    >
                                        <div className="halim-trending-poster-container halim-trending-clip-path-even">
                                            <div className="halim-trending-poster-mask halim-trending-clip-path-even" />{" "}
                                            <noscript>
                                                &lt;img width="224" height="299"
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/gia-thien-thumb.png"
                                                class="halim-trending-poster-image" alt="Già Thiên"
                                                decoding="async" sizes="auto, (max-width: 480px) 180px,
                                                (max-width: 768px) 220px, 224px" loading="lazy"
                                                fetchpriority="low" /&gt;
                                            </noscript>
                                            <img
                                                src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20224%20299%22%3E%3C/svg%3E"
                                                width={224}
                                                height={299}
                                                data-src="https://hoathinh3d.st/wp-content/uploads/2026/06/gia-thien-thumb.png"
                                                className="lazyload halim-trending-poster-image"
                                                alt="Già Thiên"
                                                decoding="async"
                                                data-sizes="auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px"
                                                loading="lazy"
                                                fetchpriority="low"
                                            />
                                            <div className="halim-trending-rating">
                                                <div className="halim-trending-rating-value">4.3</div>
                                            </div>
                                        </div>
                                        <div className="halim-trending-info">
                                            <div className="halim-trending-number">10</div>
                                            <div className="halim-trending-details">
                                                <h3 className="halim-trending-title-text">Già Thiên</h3>
                                                <p className="halim-trending-original-title">
                                                    Shrouding the Heavens
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>{" "}
                            <button
                                className="halim-trending-nav-button halim-trending-next-button"
                                aria-label="Next"
                            >
                                {" "}
                                <i className="fas fa-chevron-right" />{" "}
                            </button>
                        </div>
                    </div>
                    <section>
                        <ul
                            className="nav nav-pills nav-justified halim-schedule-block schedule"
                            data-today="chu-nhat"
                        >
                            <li role="presentation" className="active">
                                {" "}
                                <a href="" title="" className="hh3d-latest-tab">
                                    {" "}
                                    <span className="h-text">Mới Cập Nhật</span>{" "}
                                </a>
                            </li>
                            <li role="presentation" data-id="thu-hai">
                                {" "}
                                <a href="javascript:;">Thứ Hai</a>
                            </li>
                            <li role="presentation" data-id="thu-ba">
                                {" "}
                                <a href="javascript:;">Thứ Ba</a>
                            </li>
                            <li role="presentation" data-id="thu-tu">
                                {" "}
                                <a href="javascript:;">Thứ Tư</a>
                            </li>
                            <li role="presentation" data-id="thu-nam">
                                {" "}
                                <a href="javascript:;">Thứ Năm</a>
                            </li>
                            <li role="presentation" data-id="thu-sau">
                                {" "}
                                <a href="javascript:;">Thứ Sáu</a>
                            </li>
                            <li role="presentation" data-id="thu-bay">
                                {" "}
                                <a href="javascript:;">Thứ Bảy</a>
                            </li>
                            <li role="presentation" data-id="chu-nhat">
                                {" "}
                                <a href="javascript:;">Chủ Nhật</a>
                            </li>
                        </ul>
                        <ul className="nav nav-pills nav-justified halim-schedule-block-mobile mt-3">
                            <li role="presentation" className="active" id="moviesLatest">
                                {" "}
                                <a href="" title="" className="hh3d-latest-tab">
                                    {" "}
                                    <span className="h-text">
                                        <i className="fas fa-fire" /> Mới Cập Nhật
                                    </span>{" "}
                                </a>
                            </li>
                            <li role="presentation" id="scheduleFullLink">
                                {" "}
                                <a href="/lich-chieu">
                                    <i className="fas fa-calendar-alt" /> Lịch Chiếu
                                </a>
                            </li>
                        </ul>
                        <ul className="nav nav-pills nav-justified halim-schedule-block-mobile menu schedule">
                            <li role="presentation" data-id="thu-hai">
                                {" "}
                                <a href="javascript:;">Thứ Hai</a>
                            </li>
                            <li role="presentation" data-id="thu-ba">
                                {" "}
                                <a href="javascript:;">Thứ Ba</a>
                            </li>
                            <li role="presentation" data-id="thu-tu">
                                {" "}
                                <a href="javascript:;">Thứ Tư</a>
                            </li>
                            <li role="presentation" data-id="thu-nam">
                                {" "}
                                <a href="javascript:;">Thứ Năm</a>
                            </li>
                            <li role="presentation" data-id="thu-sau">
                                {" "}
                                <a href="javascript:;">Thứ Sáu</a>
                            </li>
                            <li role="presentation" data-id="thu-bay">
                                {" "}
                                <a href="javascript:;">Thứ Bảy</a>
                            </li>
                            <li role="presentation" data-id="chu-nhat">
                                {" "}
                                <a href="javascript:;">Chủ Nhật</a>
                            </li>
                        </ul>
                        <div id="hh3d-latest-box" className="halim_box halim-schedule-box">
                            <div className="halim-ajax-popular-post-loading hidden" />
                            <div className="section-bar clearfix hh3d-latest-bar">
                                <h3 className="section-title">
                                    {" "}
                                    <span>Mới Cập Nhật</span>
                                </h3>{" "}
                                <button
                                    type="button"
                                    id="hh3d-latest-refresh"
                                    className="hh3d-latest-refresh"
                                    aria-label="Làm mới danh sách"
                                    title="Làm mới danh sách"
                                >
                                    {" "}
                                    <i className="fas fa-sync-alt" aria-hidden="true" />{" "}
                                    <span className="hh3d-latest-refresh-label">Làm mới</span>{" "}
                                </button>
                            </div>
                            <div
                                className="halim_box hh3d-latest-grid"
                                id="hh3d-latest-grid"
                                aria-live="polite"
                                aria-busy="false"
                                data-page={1}
                            >
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-20224">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/tien-nghich"
                                            title="Tiên Nghịch"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2023/09/tien-nghich-6-300x450.jpg"
                                                    alt="Tiên Nghịch" title="Tiên Nghịch"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2023/09/tien-nghich-6-300x450.jpg"
                                                    alt="Tiên Nghịch"
                                                    title="Tiên Nghịch"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score is-high"
                                                aria-label="Đánh giá 4.6/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4.6</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 149</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Tiên Nghịch</h2>
                                                    <p className="original_title">Xian Ni</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-672761">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/muc-than-ky"
                                            title="Mục Thần Ký"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2026/07/muc-than-ky-thumb-300x450.webp"
                                                    alt="Mục Thần Ký" title="Mục Thần Ký"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2026/07/muc-than-ky-thumb-300x450.webp"
                                                    alt="Mục Thần Ký"
                                                    title="Mục Thần Ký"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score is-high"
                                                aria-label="Đánh giá 4.6/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4.6</span>
                                            </span>
                                            <span className="episode">Tập 91</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Mục Thần Ký</h2>
                                                    <p className="original_title">Mu Shen Ji</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-127">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/vo-than-chua-te"
                                            title="Võ Thần Chúa Tể"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2021/02/vo-than-chua-te-300x450.jpg"
                                                    alt="Võ Thần Chúa Tể" title="Võ Thần Chúa Tể"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2021/02/vo-than-chua-te-300x450.jpg"
                                                    alt="Võ Thần Chúa Tể"
                                                    title="Võ Thần Chúa Tể"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 3.9/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">3.9</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 673</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Võ Thần Chúa Tể</h2>
                                                    <p className="original_title">Wu Shen Zhu Zai</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-659164">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/do-thi-co-tien-y"
                                            title="Đô Thị Cổ Tiên Y"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2024/10/do-thi-co-tien-y.jpg"
                                                    alt="Đô Thị Cổ Tiên Y" title="Đô Thị Cổ Tiên Y"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2024/10/do-thi-co-tien-y.jpg"
                                                    alt="Đô Thị Cổ Tiên Y"
                                                    title="Đô Thị Cổ Tiên Y"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 3.5/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">3.5</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 192</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Đô Thị Cổ Tiên Y</h2>
                                                    <p className="original_title">
                                                        Immortal Doctor In Modern City
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-1321">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/dau-pha-thuong-khung-phan-5-gia-nam-hoc-vien"
                                            title="Đấu Phá Thương Khung Phần 5"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2022/06/dau-pha-thuong-khung-300x450.webp"
                                                    alt="Đấu Phá Thương Khung Phần 5" title="Đấu Phá Thương
                                                    Khung Phần 5"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2022/06/dau-pha-thuong-khung-300x450.webp"
                                                    alt="Đấu Phá Thương Khung Phần 5"
                                                    title="Đấu Phá Thương Khung Phần 5"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 3.8/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">3.8</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 207</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">
                                                        Đấu Phá Thương Khung Phần 5
                                                    </h2>
                                                    <p className="original_title">Fights Break Sphere 5</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-862135">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/quang-am-chi-ngoai"
                                            title="Quang Âm Chi Ngoại"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2026/06/quang-am-chi-ngoai-thumb-300x450.jpg"
                                                    alt="Quang Âm Chi Ngoại" title="Quang Âm Chi Ngoại"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2026/06/quang-am-chi-ngoai-thumb-300x450.jpg"
                                                    alt="Quang Âm Chi Ngoại"
                                                    title="Quang Âm Chi Ngoại"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score is-high"
                                                aria-label="Đánh giá 4.7/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4.7</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 30</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Quang Âm Chi Ngoại</h2>
                                                    <p className="original_title">Beyond Time's Gaze</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-1766">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/pham-nhan-tu-tien-phan-3"
                                            title="Phàm Nhân Tu Tiên Phần 3"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2026/06/pham-nhan-tu-tien-phan-3-thumb-300x450.jpg"
                                                    alt="Phàm Nhân Tu Tiên Phần 3" title="Phàm Nhân Tu Tiên
                                                    Phần 3"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2026/06/pham-nhan-tu-tien-phan-3-thumb-300x450.jpg"
                                                    alt="Phàm Nhân Tu Tiên Phần 3"
                                                    title="Phàm Nhân Tu Tiên Phần 3"
                                                />
                                            </figure>
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 4.4/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4.4</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 182</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Phàm Nhân Tu Tiên Phần 3</h2>
                                                    <p className="original_title">
                                                        Fanren Xiu Xian Chuan SS3
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-1472">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/van-gioi-doc-ton-phan-2"
                                            title="Vạn Giới Độc Tôn Phần 2"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2022/08/van-gioi-doc-ton-phan-2-300x449.jpg"
                                                    alt="Vạn Giới Độc Tôn Phần 2" title="Vạn Giới Độc Tôn Phần
                                                    2"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2022/08/van-gioi-doc-ton-phan-2-300x449.jpg"
                                                    alt="Vạn Giới Độc Tôn Phần 2"
                                                    title="Vạn Giới Độc Tôn Phần 2"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 3.9/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">3.9</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 464</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Vạn Giới Độc Tôn Phần 2</h2>
                                                    <p className="original_title">Wan Jie Du Zun Seesion 2</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-2430">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/luyen-khi-muoi-van-nam"
                                            title="Luyện Khí Mười Vạn Năm"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2026/06/luyen-khi-muoi-van-nam-thumb-300x450.webp"
                                                    alt="Luyện Khí Mười Vạn Năm" title="Luyện Khí Mười Vạn
                                                    Năm"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2026/06/luyen-khi-muoi-van-nam-thumb-300x450.webp"
                                                    alt="Luyện Khí Mười Vạn Năm"
                                                    title="Luyện Khí Mười Vạn Năm"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 3.9/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">3.9</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 356</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Luyện Khí Mười Vạn Năm</h2>
                                                    <p className="original_title">Lian Qi Shi Wan Nian</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-869469">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/trach-thien-ky"
                                            title="Trạch Thiên Ký"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2026/01/trach-thien-ky-300x450.webp"
                                                    alt="Trạch Thiên Ký" title="Trạch Thiên Ký"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2026/01/trach-thien-ky-300x450.webp"
                                                    alt="Trạch Thiên Ký"
                                                    title="Trạch Thiên Ký"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score is-high"
                                                aria-label="Đánh giá 4.7/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4.7</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 26 END</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Trạch Thiên Ký</h2>
                                                    <p className="original_title">Fighter of the Destiny</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-15137">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/dau-la-dai-luc-2-tuyet-the-duong-mon"
                                            title="Đấu La Đại Lục 2: Tuyệt Thế Đường Môn"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2026/06/dau-la-dai-luc-2-tuyet-the-duong-mon-thumb-300x450.jpg"
                                                    alt="Đấu La Đại Lục 2: Tuyệt Thế Đường Môn" title="Đấu La
                                                    Đại Lục 2: Tuyệt Thế Đường Môn"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2026/06/dau-la-dai-luc-2-tuyet-the-duong-mon-thumb-300x450.jpg"
                                                    alt="Đấu La Đại Lục 2: Tuyệt Thế Đường Môn"
                                                    title="Đấu La Đại Lục 2: Tuyệt Thế Đường Môn"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 4.1/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4.1</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 161</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">
                                                        Đấu La Đại Lục 2: Tuyệt Thế Đường Môn
                                                    </h2>
                                                    <p className="original_title">
                                                        Douluo Dalu II: Jue Shi Tang Men
                                                    </p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-645582">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/dai-luc-linh-vo"
                                            title="Đại Lục Linh Võ"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2024/07/dai-luc-linh-vo1-300x449.jpg"
                                                    alt="Đại Lục Linh Võ" title="Đại Lục Linh Võ"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2024/07/dai-luc-linh-vo1-300x449.jpg"
                                                    alt="Đại Lục Linh Võ"
                                                    title="Đại Lục Linh Võ"
                                                />
                                            </figure>{" "}
                                            <span className="halim-card-score" aria-label="Đánh giá 4/5">
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 194</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Đại Lục Linh Võ</h2>
                                                    <p className="original_title">Lingwu Continent</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-13157">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/dai-chua-te"
                                            title="Đại Chúa Tể"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2023/05/dai-chua-te-300x450.webp"
                                                    alt="Đại Chúa Tể" title="Đại Chúa Tể"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2023/05/dai-chua-te-300x450.webp"
                                                    alt="Đại Chúa Tể"
                                                    title="Đại Chúa Tể"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 4.1/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4.1</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 81</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Đại Chúa Tể</h2>
                                                    <p className="original_title">Da Zhu Zai</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-843">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/nghich-thien-chi-ton"
                                            title="Nghịch Thiên Chí Tôn"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2021/09/nghich-thien-chi-ton-300x450.jpg"
                                                    alt="Nghịch Thiên Chí Tôn" title="Nghịch Thiên Chí
                                                    Tôn"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2021/09/nghich-thien-chi-ton-300x450.jpg"
                                                    alt="Nghịch Thiên Chí Tôn"
                                                    title="Nghịch Thiên Chí Tôn"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 3.9/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">3.9</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 530</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Nghịch Thiên Chí Tôn</h2>
                                                    <p className="original_title">Ni Tian Zhi Zun</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-166">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/vo-thuong-than-de"
                                            title="Vô Thượng Thần Đế"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2026/06/vo-thuong-than-de-thumb-300x450.webp"
                                                    alt="Vô Thượng Thần Đế" title="Vô Thượng Thần Đế"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2026/06/vo-thuong-than-de-thumb-300x450.webp"
                                                    alt="Vô Thượng Thần Đế"
                                                    title="Vô Thượng Thần Đế"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 3.9/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">3.9</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 621</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Vô Thượng Thần Đế</h2>
                                                    <p className="original_title">Wu Shang Shen Di</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-15571">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/thuong-nguyen-do"
                                            title="Thương Nguyên Đồ"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2026/06/thuong-nguyen-do-thumb-300x450.webp"
                                                    alt="Thương Nguyên Đồ" title="Thương Nguyên Đồ"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2026/06/thuong-nguyen-do-thumb-300x450.webp"
                                                    alt="Thương Nguyên Đồ"
                                                    title="Thương Nguyên Đồ"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score is-high"
                                                aria-label="Đánh giá 4.5/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4.5</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 85</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Thương Nguyên Đồ</h2>
                                                    <p className="original_title">Cang Yuan Tu</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-886568">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/ban-long"
                                            title="Bàn Long"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2026/04/ban-long-1-300x450.webp"
                                                    alt="Bàn Long" title="Bàn Long"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2026/04/ban-long-1-300x450.webp"
                                                    alt="Bàn Long"
                                                    title="Bàn Long"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 3.5/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">3.5</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 20 END</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Bàn Long</h2>
                                                    <p className="original_title">Coiling Dragon</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-740">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/the-gioi-hoan-my"
                                            title="Thế Giới Hoàn Mỹ"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2026/06/the-gioi-hoan-my-thumb-300x450.jpg"
                                                    alt="Thế Giới Hoàn Mỹ" title="Thế Giới Hoàn Mỹ"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2026/06/the-gioi-hoan-my-thumb-300x450.jpg"
                                                    alt="Thế Giới Hoàn Mỹ"
                                                    title="Thế Giới Hoàn Mỹ"
                                                />
                                            </figure>{" "}
                                            <span className="halim-card-score" aria-label="Đánh giá 4/5">
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 277</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Thế Giới Hoàn Mỹ</h2>
                                                    <p className="original_title">Perfect World</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-1264">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/than-mo"
                                            title="Thần Mộ"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2022/07/than-mo-300x450.webp"
                                                    alt="Thần Mộ" title="Thần Mộ"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2022/07/than-mo-300x450.webp"
                                                    alt="Thần Mộ"
                                                    title="Thần Mộ"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 4.3/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4.3</span>
                                            </span>
                                            <span className="status">HD</span>
                                            <span className="episode">Tập 93</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Thần Mộ</h2>
                                                    <p className="original_title">Tomb Of Fallen Gods</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                                <article className="col-md-3 col-sm-3 col-xs-6 thumb grid-item post-905555">
                                    <div className="halim-item">
                                        <a
                                            className="halim-thumb"
                                            href="https://hoathinh3d.st/tam-thon-nhan-gian"
                                            title="Tam Thốn Nhân Gian"
                                        >
                                            <figure>
                                                <noscript>
                                                    &lt;img class="img-responsive"
                                                    src="https://hoathinh3d.st/wp-content/uploads/2026/07/tam-thon-nhan-gian-thumb-300x450.webp"
                                                    alt="Tam Thốn Nhân Gian" title="Tam Thốn Nhân Gian"&gt;
                                                </noscript>
                                                <img
                                                    src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
                                                    className="lazyload img-responsive"
                                                    data-src="https://hoathinh3d.st/wp-content/uploads/2026/07/tam-thon-nhan-gian-thumb-300x450.webp"
                                                    alt="Tam Thốn Nhân Gian"
                                                    title="Tam Thốn Nhân Gian"
                                                />
                                            </figure>{" "}
                                            <span
                                                className="halim-card-score"
                                                aria-label="Đánh giá 4.2/5"
                                            >
                                                <i className="fas fa-star" aria-hidden="true" />
                                                <span className="halim-card-score-num">4.2</span>
                                            </span>
                                            <span className="episode">Tập 16 END</span>
                                            <div className="icon_overlay" />
                                            <div className="halim-post-title-box">
                                                <div className="halim-post-title ">
                                                    <h2 className="entry-title">Tam Thốn Nhân Gian</h2>
                                                    <p className="original_title">San Cun Ren Jian</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </article>
                            </div>
                            <div className="clearfix" />
                            <div className="hh3d-latest-pagination" id="hh3d-latest-pagination">
                                <ul className="page-numbers">
                                    <li>
                                        <span aria-current="page" className="page-numbers current">
                                            1
                                        </span>
                                    </li>
                                    <li>
                                        <a
                                            className="page-numbers"
                                            href="https://hoathinh3d.st/page/2"
                                            data-page={2}
                                        >
                                            2
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="page-numbers"
                                            href="https://hoathinh3d.st/page/3"
                                            data-page={3}
                                        >
                                            3
                                        </a>
                                    </li>
                                    <li>
                                        <span className="page-numbers dots">…</span>
                                    </li>
                                    <li>
                                        <a
                                            className="page-numbers"
                                            href="https://hoathinh3d.st/page/19"
                                            data-page={19}
                                        >
                                            19
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="page-numbers next"
                                            href="https://hoathinh3d.st/page/2"
                                            data-page={2}
                                        >
                                            <i className="hl-down-open rotate-right" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <div className="hh3d-widget-preview" id="hh3d-widget-preview">
                        <section
                            className="hh3d-preview-section hh3d-preview-trending-block"
                            aria-label="Đang sôi nổi"
                        >
                            <header className="hh3d-preview-section-header hh3d-preview-section-header--compact">
                                <h3 className="hh3d-preview-section-title">
                                    {" "}
                                    <i className="fas fa-fire" aria-hidden="true" />{" "}
                                    <span className="hh3d-preview-section-title-text">
                                        Đang sôi nổi
                                    </span>
                                </h3>{" "}
                                <button
                                    type="button"
                                    className="hh3d-preview-refresh-btn hh3d-preview-refresh-btn--sm"
                                    id="hh3d-preview-refresh-trending"
                                    aria-label="Làm mới danh sách phim hot"
                                >
                                    {" "}
                                    <i className="fas fa-sync-alt" aria-hidden="true" />{" "}
                                </button>
                            </header>
                            <div className="hh3d-preview-trending-carousel-wrap">
                                <div
                                    className="hh3d-preview-trending-carousel"
                                    id="hh3d-preview-trending-container"
                                    aria-busy="true"
                                >
                                    <div
                                        className="hh3d-preview-skeleton hh3d-preview-skeleton-trending"
                                        aria-hidden="true"
                                    >
                                        <div className="hh3d-preview-skeleton-card">
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-poster is-cinematic" />
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title" />
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title-2" />
                                        </div>
                                        <div className="hh3d-preview-skeleton-card">
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-poster is-cinematic" />
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title" />
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title-2" />
                                        </div>
                                        <div className="hh3d-preview-skeleton-card">
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-poster is-cinematic" />
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title" />
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title-2" />
                                        </div>
                                        <div className="hh3d-preview-skeleton-card">
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-poster is-cinematic" />
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title" />
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title-2" />
                                        </div>
                                        <div className="hh3d-preview-skeleton-card">
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-poster is-cinematic" />
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title" />
                                            <div className="hh3d-preview-skeleton-bone hh3d-preview-skeleton-line is-title-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="hh3d-preview-trending-extended"
                                id="hh3d-preview-trending-extended"
                                hidden=""
                            >
                                <div
                                    className="hh3d-preview-trending-extended-grid"
                                    id="hh3d-preview-trending-extended-container"
                                    aria-hidden="true"
                                />
                            </div>
                            <div
                                className="hh3d-preview-trending-footer"
                                id="hh3d-preview-trending-footer"
                                hidden=""
                            >
                                {" "}
                                <button
                                    type="button"
                                    className="hh3d-preview-rank-toggle"
                                    id="hh3d-preview-rank-toggle"
                                    aria-expanded="false"
                                >
                                    {" "}
                                    <span className="hh3d-preview-rank-toggle-label">
                                        Xem đầy đủ
                                    </span>{" "}
                                    <i
                                        className="fas fa-chevron-down hh3d-preview-rank-toggle-icon"
                                        aria-hidden="true"
                                    />{" "}
                                </button>
                            </div>
                        </section>
                        <section
                            className="hh3d-preview-section hh3d-preview-comments-block"
                            aria-label="Luận đạo gần đây"
                        >
                            <header className="hh3d-preview-section-header hh3d-preview-section-header--comments">
                                <div className="hh3d-preview-section-leading">
                                    <h3 className="hh3d-preview-section-title">
                                        {" "}
                                        <i className="fas fa-comments" aria-hidden="true" />{" "}
                                        <span className="hh3d-preview-section-title-text">
                                            Luận đạo gần đây
                                        </span>
                                    </h3>
                                    <p
                                        className="hh3d-preview-subtitle"
                                        id="hh3d-preview-comments-subtitle"
                                    >
                                        Bình luận mới từ cộng đồng
                                    </p>
                                </div>
                            </header>
                            <div
                                className="hh3d-preview-comments-list"
                                id="hh3d-preview-comments-container"
                                aria-busy="true"
                            >
                                <div
                                    className="hh3d-preview-skeleton hh3d-preview-skeleton-comments"
                                    aria-hidden="true"
                                >
                                    <div className="hh3d-preview-skeleton-comment">
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
                                    <div className="hh3d-preview-skeleton-comment">
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
                                    <div className="hh3d-preview-skeleton-comment">
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
                                    <div className="hh3d-preview-skeleton-comment">
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
                                    <div className="hh3d-preview-skeleton-comment">
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
                                    <div className="hh3d-preview-skeleton-comment">
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
                                </div>
                            </div>
                            <div
                                className="hh3d-preview-comments-extended"
                                id="hh3d-preview-comments-extended"
                                hidden=""
                            >
                                <div
                                    className="hh3d-preview-comments-list hh3d-preview-comments-extended-list"
                                    id="hh3d-preview-comments-extended-container"
                                    aria-hidden="true"
                                />
                            </div>
                            <div
                                className="hh3d-preview-comments-footer"
                                id="hh3d-preview-comments-footer"
                                hidden=""
                            >
                                {" "}
                                <button
                                    type="button"
                                    className="hh3d-preview-rank-toggle"
                                    id="hh3d-preview-comments-toggle"
                                    aria-expanded="false"
                                >
                                    {" "}
                                    <span className="hh3d-preview-rank-toggle-label">
                                        Xem đầy đủ
                                    </span>{" "}
                                    <i
                                        className="fas fa-chevron-down hh3d-preview-rank-toggle-icon"
                                        aria-hidden="true"
                                    />{" "}
                                </button>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </div>


    );
}