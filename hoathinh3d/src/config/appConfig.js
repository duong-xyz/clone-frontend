import { useEffect } from 'react';

// =========================================================================
// 1. ĐỊNH NGHĨA BIẾN DỮ LIỆU MOCK (LOCAL VARIABLES) KHỚP FORMAT WORDPRESS API
// =========================================================================
const MOCK_LATEST_UPDATES = [
    {
        "id": 1,
        "title": "Tiên Nghịch (Mùa 2)",
        "subtitle": "Xian Ni",
        "slug": "tien-nghich",
        "poster_url": "https://hoathinh3d.st",
        "current_episode": "Tập 149",
        "hot_score": "279",
        "rating": "4.6",
        "release_day": "Thứ Hai",
        "time_ago": "3 giờ trước"
    },
    {
        "id": 2,
        "title": "Mục Thần Ký",
        "subtitle": "Mu Shen Ji",
        "slug": "muc-than-ky",
        "poster_url": "https://hoathinh3d.st",
        "current_episode": "Tập 91",
        "hot_score": "204",
        "rating": "4.6",
        "release_day": "Chủ Nhật",
        "time_ago": "13 giờ trước"
    },
    {
        "id": 3,
        "title": "Thôn Phệ Tinh Không",
        "subtitle": "Swallowed Star",
        "slug": "thon-phe-tinh-khong",
        "poster_url": "https://hoathinh3d.st",
        "current_episode": "Tập 132",
        "hot_score": "188",
        "rating": "4.7",
        "release_day": "Thứ Ba",
        "time_ago": "1 ngày trước"
    }
];

const MOCK_GENERIC_RESPONSE = {
    "status": "success",
    "message": "Local database intercept success"
};

export function UseHH3DLegacyMockLogic() {
    useEffect(() => {
        // Lưu lại hàm fetch nguyên bản của trình duyệt
        const originalFetch = window.fetch;

        // =========================================================================
        // 2. CHẶN HÀM FETCH TOÀN CỤC ĐỂ TRẢ VỀ BIẾN DỮ LIỆU CỤ CỤC
        // =========================================================================
        window.fetch = async function (input, init) {
            const url = typeof input === 'string' ? input : input.url;

            if (url.includes('/latest-updates')) {
                return new Response(JSON.stringify(MOCK_LATEST_UPDATES), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            if (url.includes('/action') || url.includes('/dang-nhap') || url.includes('/halim-ajax.php')) {
                return new Response(JSON.stringify(MOCK_GENERIC_RESPONSE), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            return originalFetch.apply(this, arguments);
        };

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
            "restBase": "https://hoathinh3d.st",
            "restAction": "https://hoathinh3d.st/hh3d/v1/action",
            "restLogin": "https://hoathinh3d.st/hh3d/v1/dang-nhap",
            "restNonce": "73d9011d56",
            "widgetPreview": "1"
        };
        // --- B. TẢI ĐỘNG CÁC SCRIPT TIVI VÀ LÕI JQUERY ---
        const headScripts = [
            "https://hoathinh3d.st",
            "https://hoathinh3d.st"
        ];

        const loadedHeadScripts = [];

        // 1. Khởi tạo script cấu hình Tivi (hh3d-tv-boot) bám sát dữ liệu trang cũ
        const tvScript = document.createElement('script');
        tvScript.id = "hh3d-tv-boot";
        tvScript.src = "https://hoathinh3d.st";
        tvScript.setAttribute('data-cfasync', 'false');
        tvScript.setAttribute('data-noptimize', '1');
        tvScript.setAttribute('data-hh3d-tv', JSON.stringify({
            context: "home",
            isLoggedIn: false,
            home: "https://hoathinh3d.st",
            historyUrl: "https://hoathinh3d.st",
            restBase: "https://hoathinh3d.stwp-json",
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

        // CẤU HÌNH CÁC BIẾN TOÀN CỤC CHO THƯ VIỆN GỐC (WINDOW OBJECT)
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;

        window.halim = {
            "ajax_url": "https://hoathinh3d.stwp-content/themes/halimmovies/halim-ajax.php",
            "light_mode": "0",
            "light_mode_btn": "0",
            "ajax_live_search": "1",
            "sync": "1",
            "db_redirect_url": "https://hoathinh3d.st"
        };

        window.login_object = {
            "rest_url": "https://hoathinh3d.stwp-json/hh3d/v1/dang-nhap",
            "token_url": "https://hoathinh3d.stwp-json/hh3d/v1/dang-nhap-token",
            "google_nonce": "e24d581b02"
        };

        window.hh3dLatest = {
            "api": "https://hoathinh3d.stwp-json/halim/v1/latest-updates",
            "perPage": "20"
        };

        // LOGIC KIỂM TRA CHẾ ĐỘ TIẾT KIỆM PIN & HUY HIỆU (TỪ SCRIPT GỐC)
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

        // TẠO THẺ ĐỂ TẢI CÁC FILE JS TỪ HỆ THỐNG CŨ THEO THỨ TỰ TRỰC TIẾP
        const scriptsToLoad = [
            "https://hoathinh3d.stwp-content/plugins/autoptimize/classes/external/js/lazysizes.min.js?ao_version=3.1.15",
            "https://hoathinh3d.stwp-content/themes/halimmovies/assets/js/bootstrap.min.js?ver=6.9",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/optimize/dist/halim-core.min.js?t=1783621089",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/optimize/dist/custom-login.min.js?t=1783621089",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/sweetalert2.min.js?t=1783621088",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/nav-drawer.js?t=1783621088",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/optimize/dist/latest-updates.min.js?t=1783621089",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/widget-preview.js?t=1783621089",
            "https://cloudflare.com",
            "https://cloudflareinsights.com"
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

        // XỬ LÝ SỰ KIỆN LOAD CỦA JQUERY ĐỂ RESET INPUT VÀ BẪY LUỒNG AJAX (.AJAX CỦA JQUERY)
        const handleWindowLoad = () => {
            if (window.jQuery) {
                window.jQuery('input[name="um_request"]').val('');

                // Ghi đè phương thức AJAX của JQuery để ép luồng phản hồi dữ liệu từ biến cục bộ
                const originalAjax = window.jQuery.ajax;
                window.jQuery.ajax = function (settings) {
                    const url = settings.url || "";
                    if (url.includes('/latest-updates') || url.includes('latest-updates')) {
                        if (typeof settings.success === 'function') {
                            settings.success(MOCK_LATEST_UPDATES);
                        }
                        return window.jQuery.Deferred().resolve(MOCK_LATEST_UPDATES);
                    }
                    if (url.includes('halim-ajax.php') || url.includes('/action')) {
                        if (typeof settings.success === 'function') {
                            settings.success(MOCK_GENERIC_RESPONSE);
                        }
                        return window.jQuery.Deferred().resolve(MOCK_GENERIC_RESPONSE);
                    }
                    return originalAjax.apply(this, arguments);
                };
            }
        };
        window.addEventListener('load', handleWindowLoad);

        // DỌN DẸP SCRIPT VÀ SỰ KIỆN KHI RỜI COMPONENT (CLEANUP)
        return () => {
            // Khôi phục lại trạng thái ban đầu của trình duyệt
            window.fetch = originalFetch;
            
            elementList.forEach(el => el.remove());
            window.removeEventListener('load', handleWindowLoad);
            loadedHeadScripts.forEach(script => script.remove());
        };
    }, []);

    return null;
}

// =========================================================================
// 2. ĐỊNH NGHĨA HÀM CUSTOM HOOK CHUẨN REACT
// =========================================================================
export default function useHH3DLegacyMock() {
    useEffect(() => {
        const originalFetch = window.fetch;

        // CHẶN HÀM FETCH TOÀN CỤC
        window.fetch = async function (input, init) {
            const url = typeof input === 'string' ? input : input.url;

            if (url.includes('/latest-updates')) {
                return new Response(JSON.stringify(MOCK_LATEST_UPDATES), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            if (url.includes('/action') || url.includes('/dang-nhap') || url.includes('/halim-ajax.php')) {
                return new Response(JSON.stringify(MOCK_GENERIC_RESPONSE), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            return originalFetch.apply(this, arguments);
        };

        // GÁN BIẾN CẤU HÌNH LÊN WINDOW
        window._nslDOMReady = function (callback) {
            if (document.readyState === "complete" || document.readyState === "interactive") {
                callback();
            } else {
                document.addEventListener("DOMContentLoaded", callback);
            }
        };

        window.hh3dData = {
            "loggedIn": "",
            "restBase": "https://hoathinh3d.st",
            "restAction": "https://hoathinh3d.sthh3d/v1/action",
            "restLogin": "https://hoathinh3d.sthh3d/v1/dang-nhap",
            "restNonce": "73d9011d56",
            "widgetPreview": "1"
        };

        // TẢI ĐỘNG CÁC SCRIPT TIVI VÀ LÕI JQUERY
        const headScripts = [
            "https://hoathinh3d.st",
            "https://hoathinh3d.st"
        ];

        const loadedHeadScripts = [];

        const tvScript = document.createElement('script');
        tvScript.id = "hh3d-tv-boot";
        tvScript.src = "https://hoathinh3d.st";
        tvScript.setAttribute('data-cfasync', 'false');
        tvScript.setAttribute('data-noptimize', '1');
        tvScript.setAttribute('data-hh3d-tv', JSON.stringify({
            context: "home",
            isLoggedIn: false,
            home: "https://hoathinh3d.st",
            historyUrl: "https://hoathinh3d.st",
            restBase: "https://hoathinh3d.st",
            restSearch: "https://hoathinh3d.st"
        }));
        document.body.appendChild(tvScript);
        loadedHeadScripts.push(tvScript);

        headScripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.async = false;
            document.body.appendChild(script);
            loadedHeadScripts.push(script);
        });

        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;

        window.halim = {
            "ajax_url": "https://hoathinh3d.stwp-content/themes/halimmovies/halim-ajax.php",
            "light_mode": "0",
            "light_mode_btn": "0",
            "ajax_live_search": "1",
            "sync": "1",
            "db_redirect_url": "https://hoathinh3d.st"
        };

        window.login_object = {
            "rest_url": "https://hoathinh3d.sthh3d/v1/dang-nhap",
            "token_url": "https://hoathinh3d.sthh3d/v1/dang-nhap-token",
            "google_nonce": "e24d581b02"
        };

        window.hh3dLatest = {
            "api": "https://hoathinh3d.sthalim/v1/latest-updates",
            "perPage": "20"
        };

        // LOGIC KIỂM TRA CHẾ ĐỘ TIẾT KIỆM PIN
        let ps = document.cookie.indexOf('hh3d_power_saving=true') !== -1;
        try { ps = ps || localStorage.getItem('hh3d_power_saving') === 'true'; } catch (e) { }

        const wrapper = document.getElementById('hh3d-root-wrapper');
        if (wrapper) {
            const hasBadgesDisabled = document.cookie.indexOf('wpdiscuz_badges_disabled=true') !== -1 ||
                document.cookie.indexOf('profile_badges_disabled=true') !== -1 || ps;
            if (hasBadgesDisabled) wrapper.classList.add('wpdiscuz-badges-disabled', 'profile-badges-disabled');
            if (ps) wrapper.classList.add('hh3d-power-saving');
            try {
                if (!ps && localStorage.getItem('hh3d_pb_dh_reduce') === 'true') wrapper.classList.add('hh3d-badges-max10');
            } catch (e3) { }
        }

        // TẢI FILE JS TỪ HỆ THỐNG CŨ
        const scriptsToLoad = [
            "https://hoathinh3d.stwp-content/plugins/autoptimize/classes/external/js/lazysizes.min.js?ao_version=3.1.15",
            "https://hoathinh3d.stwp-content/themes/halimmovies/assets/js/bootstrap.min.js?ver=6.9",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/optimize/dist/halim-core.min.js?t=1783621089",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/optimize/dist/custom-login.min.js?t=1783621089",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/sweetalert2.min.js?t=1783621088",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/nav-drawer.js?t=1783621088",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/optimize/dist/latest-updates.min.js?t=1783621089",
            "https://hoathinh3d.stwp-content/themes/halimmovies-child/assets/js/widget-preview.js?t=1783621089",
            "https://cloudflare.com",
            "https://cloudflareinsights.com"
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

        // BẪY LUỒNG JQUERY AJAX
        const handleWindowLoad = () => {
            if (window.jQuery) {
                window.jQuery('input[name="um_request"]').val('');

                const originalAjax = window.jQuery.ajax;
                window.jQuery.ajax = function (settings) {
                    const url = settings.url || "";
                    if (url.includes('/latest-updates') || url.includes('latest-updates')) {
                        if (typeof settings.success === 'function') settings.success(MOCK_LATEST_UPDATES);
                        return window.jQuery.Deferred().resolve(MOCK_LATEST_UPDATES);
                    }
                    if (url.includes('halim-ajax.php') || url.includes('/action')) {
                        if (typeof settings.success === 'function') settings.success(MOCK_GENERIC_RESPONSE);
                        return window.jQuery.Deferred().resolve(MOCK_GENERIC_RESPONSE);
                    }
                    return originalAjax.apply(this, arguments);
                };
            }
        };
        window.addEventListener('load', handleWindowLoad);

        // DỌN DẸP KHI UNMOUNT
        return () => {
            window.fetch = originalFetch;
            elementList.forEach(el => el.remove());
            window.removeEventListener('load', handleWindowLoad);
            loadedHeadScripts.forEach(script => script.remove());
        };
    }, []);
}
