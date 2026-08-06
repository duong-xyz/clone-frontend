import root from 'react-shadow';
import Header from '../components/Header';
import { useEffect, useRef, useState } from 'react';
import SearchFullscreenOverlay from '../components/SearchFullscreenOverlay';
import CustomLoginModal from '../components/CustomLoginModal';
import MovieHeader from '../components/MovieHeader';
import MovieBody from '../components/MovieBody';
import MovieRatingModal from '../components/MovieRatingModal'
import UnauthCommentsSystem from '../components/UnauthCommentsSystem';
import TuTienComments from '../components/TuTienComments1';
// import styles from '../../public/detail.css?raw'
import Sticker from '../components/Sticker';
import ReactionPicker from '../components/ReactionPicker';

export default function Detail() {
    // 1. Đọc file từ /public/detail.css đồng bộ ngay khi module JS khởi chạy (0ms delay khi React render)
    const getPublicFileRaw = (url) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, false); // false = Synchronous (Chạy đồng bộ)
        xhr.send(null);
        return xhr.responseText;
    };

    // Chuỗi CSS được nạp TỨC THÌ (Sync) từ public, biến 'styles' có ngay lập tức
    const styles = getPublicFileRaw('/detail.css');

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

    const [isRatingOpen, setIsRatingOpen] = useState(false);

    const handleSubmitRatingData = (score) => {
        alert(`Đã nhận được đánh giá ${score} sao của bạn hệ thống!`);
        setIsRatingOpen(false); // Đóng modal sau khi gửi thành công
    };
    /*useEffect(() => {
        // 1. Tự động tạo một thẻ <link> để nạp file CSS cũ vào đầu trang
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = './detail.css'; // Đường dẫn đến file CSS gốc của bạn
        linkElement.id = 'hoathinh3d-comment-css';
        document.head.appendChild(linkElement);

        // 2. MẸO QUAN TRỌNG: Khi người dùng tắt component hoặc chuyển trang, xóa thẻ link này đi
        return () => {
            const dynamicLink = document.getElementById('hoathinh3d-comment-css');
            if (dynamicLink) {
                dynamicLink.remove(); // Xóa sạch dấu vết CSS, không lo đụng hàng trang khác!
            }
        };
    }, []);*/

    const [isOpen, setIsOpen] = useState(false);
    // Lưu callback xử lý sticker từ CommentForm gửi lên
    const [onSelectStickerCallback, setOnSelectStickerCallback] = useState(null);

    const [popupPos, setPopupPos] = useState(null); // Lưu { top, left }
    const [isReaction, setIsReaction] = useState(false);
    const [cmtId, setCmtId] = useState(null);

    const handleOpenPopup = (rect, cmtId) => {
        // 1. Cấu hình vị trí & Viewport
        const POPUP_WIDTH = 220;
        const POPUP_HEIGHT = 45;
        const GAP = 15;
        const PADDING = 10;

        const win = window;
        const docEl = document.documentElement;
        const viewportWidth = docEl.clientWidth || win.innerWidth;
        const scrollX = win.scrollX || win.pageXOffset;
        const scrollY = win.scrollY || win.pageYOffset;

        // Detect Flip Top/Bottom
        const showOnTop = rect.top >= (POPUP_HEIGHT + GAP + PADDING);

        const absoluteTop = showOnTop
            ? rect.top + scrollY - POPUP_HEIGHT - GAP
            : rect.bottom + scrollY + GAP;

        let absoluteLeft = rect.left + scrollX + (rect.width / 2) - (POPUP_WIDTH / 2);
        absoluteLeft = Math.max(scrollX + PADDING, Math.min(absoluteLeft, scrollX + viewportWidth - POPUP_WIDTH - PADDING));

        // Update React State
        setPopupPos({ top: absoluteTop, left: absoluteLeft });
        setIsReaction(true);
        setCmtId(cmtId);

        // --- 2. INJECT CSS TĨNH 1 LẦN DUY NHẤT ---
        const DYNAMIC_HITBOX_ID = 'wv-picker-hitbox-style';
        if (!document.getElementById(DYNAMIC_HITBOX_ID)) {
            const styleTag = document.createElement('style');
            styleTag.id = DYNAMIC_HITBOX_ID;
            styleTag.textContent = `
            .wv-reaction-picker { position: absolute !important; }
            .wv-reaction-picker::after {
                content: "" !important;
                position: absolute !important;
                left: -15px !important;
                right: -15px !important;
                height: var(--hitbox-height, 30px) !important;
                background: transparent !important;
                pointer-events: auto !important;
                z-index: -1 !important;
            }
            .wv-reaction-picker[data-top="true"]::after { 
                top: 100% !important; 
                bottom: auto !important;
            }
            .wv-reaction-picker[data-top="false"]::after { 
                bottom: 100% !important; 
                top: auto !important;
            }
        `;
            document.head.appendChild(styleTag);
        }

        // --- 3. ĐẢM BẢO BẮT TRÚNG NODE ĐÃ RENDER (RETRY MECHANISM) ---
        const setupPopupNode = (attempts = 0) => {
            const popupEls = document.querySelectorAll('.wv-reaction-picker');
            // Lấy element mới nhất vừa được thêm vào DOM
            const popupEl = popupEls[popupEls.length - 1];

            if (!popupEl) {
                // Nếu React chưa render kịp, thử lại ở frame tiếp theo (tối đa 3 frames ~ 50ms)
                if (attempts < 3) {
                    requestAnimationFrame(() => setupPopupNode(attempts + 1));
                }
                return;
            }

            // Cập nhật Attribute
            popupEl.dataset.top = showOnTop;
            popupEl.style.setProperty('--hitbox-height', `${GAP + 15}px`);

            // Gán handler an toàn
            popupEl.onmouseleave = () => setIsReaction(false);
        };

        requestAnimationFrame(() => setupPopupNode());
    };

    // Hàm ĐÓNG Popup
    const handleClosePopup = () => {
        setIsReaction(false);
    };

    const addVotesRef = useRef(null);

    return (
        <div id="scoped-detail-wrapper">
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
                        className="container col-md-offset-2s col-md-8"
                        id="halim-full-player"
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
                        <main className="col-xs-12 col-sm-12 col-md-8" id="main-contents">
                            <section id="content">
                                <div className="clearfix wrap-content">

                                    <div
                                        className="halim-movie-wrapper tpl-2 info-movie info-movie-v2"
                                    >
                                        <div className="info-v2-inner">
                                            <MovieHeader onRateClick={() => setIsRatingOpen(true)} />
                                            <MovieBody />
                                            {/* Khối modal điều khiển đóng mở động qua State */}
                                            <MovieRatingModal
                                                isOpen={isRatingOpen}
                                                onClose={() => setIsRatingOpen(false)}
                                                onSubmitRating={handleSubmitRatingData}
                                            />
                                        </div>
                                    </div>

                                    <TuTienComments setIsOpen={setIsOpen}
                                        setOnSelectStickerCallback={setOnSelectStickerCallback}
                                        onOpenPopup={handleOpenPopup}
                                        onClosePopup={handleClosePopup}
                                        onInit={(fn) => (addVotesRef.current = fn)}
                                    />

                                </div>
                            </section>
                            <section className="related-movies" />
                            <div className="the_tag_list item-tags" id="the_tag_list">
                                <a href="https://hoathinh3d.st/tag/nhi-can" rel="tag" title="Nhĩ Căn">
                                    Nhĩ Căn
                                </a>
                                <a
                                    href="https://hoathinh3d.st/tag/tien-nghich"
                                    rel="tag"
                                    title="Tiên Nghịch">
                                    Tiên Nghịch
                                </a>
                                <a href="https://hoathinh3d.st/tag/xian-ni" rel="tag" title="Xian Ni">
                                    Xian Ni
                                </a>
                            </div>
                            <div
                                className="item-tags-toggle"
                                style={{
                                    display: "none",
                                }}>
                                <div className="item-tags-gradient" />
                                <span
                                    className="show-more-tags"
                                    data-showless="Ẩn đi..."
                                    data-showmore="Xem thêm..."
                                    data-single="true">
                                    Xem thêm...
                                </span>
                            </div>

                        </main>


                    </div>
                </div>
                <div className="clearfix" />
                <footer className="clearfix" id="footer">
                    <div className="container footer-columns">
                        <div className="row container">
                            <div className="widget about col-xs-12 col-sm-4 col-md-4">
                                <div className="footer-logo">
                                    <img
                                        alt="Hoạt Hình Trung Quốc - Xem Hoạt Hình 3D Hay | HH3D"
                                        className="img-responsive"
                                        src="https://hoathinh3d.st/wp-content/uploads/2026/06/logofooter.webp"
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
                                    href="https://hoathinh3d.st/"
                                    id="halimthemes"
                                    title="Copyright ® 2025 HOATHINH3D.">
                                    Copyright ® 2025 HOATHINH3D.
                                </a>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-6 text-right pull-right">
                                <p className="blog-info">

                                    <a
                                        href="https://hoathinh3d.st/sitemap_index.xml"
                                        rel="noopener"
                                        target="_blank">
                                        Sitemap
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="um_upload_single"
                    style={{
                        display: "none",
                    }}
                />
                <div
                    id="um_view_photo"
                    style={{
                        display: "none",
                    }}>

                    <a
                        aria-label="Close view photo modal"
                        className="um-modal-close"
                        data-action="um_remove_modal"
                        href="javascript:void(0);">

                        <i className="um-faicon-times" />
                    </a>
                    <div className="um-modal-body photo">
                        <div className="um-modal-photo" />
                    </div>
                </div>

                <span
                    data-wpd-lity=""
                    id="wpdUserContentInfoAnchor"
                    rel="#wpdUserContentInfo"
                    style={{
                        display: "none",
                    }}>
                    wpDiscuz
                </span>
                <div
                    className="lity-hide"
                    id="wpdUserContentInfo"
                    style={{
                        background: "#FDFDF6",
                        borderRadius: "6px",
                        maxWidth: "100%",
                        overflow: "auto",
                        padding: "20px",
                        width: "600px",
                    }}
                />
                <div id="wpd-editor-source-code-wrapper-bg" />
                <div id="wpd-editor-source-code-wrapper">
                    <textarea id="wpd-editor-source-code" />
                    <button id="wpd-insert-source-code">Insert</button>
                    <input id="wpd-editor-uid" type="hidden" />
                </div>
                <div aria-live="polite" className="wcai-popover-root" id="wcaiPopoverRoot" />
                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "        .wcaiInfoShort .wcai-wrapper .wcai-full-info a.wcai-finfo {            background-color: #00b38f        }        .wcai-wrapper .wcai-list-item.wcai-active {            border-bottom: none;            background: linear-gradient(135deg, rgba(74, 158, 255, .15) 0%, rgba(74, 158, 255, .05) 100%);            color: #4a9eff        }    ",
                    }}
                />
                <Sticker isOpen={isOpen} setIsOpen={setIsOpen}
                    onSelectSticker={(sticker) => {
                        if (typeof onSelectStickerCallback === 'function') {
                            onSelectStickerCallback(sticker);
                        }
                    }}
                />

                <ReactionPicker isReaction={isReaction} popupPos={popupPos} setIsReaction={setIsReaction} activeCommentId={cmtId} onSelectReaction={(reaction, id) => addVotesRef.current?.(reaction, id)} />

                <div
                    aria-hidden="true"
                    aria-labelledby="wvLikersTitle"
                    aria-modal="true"
                    className="wv-likers-modal wv-likers-modal--fb"
                    id="wvLikersModal"
                    role="dialog"
                    style={{
                        display: "none",
                    }}>
                    <div className="wv-likers-modal__backdrop" role="presentation" />
                    <div className="wv-likers-modal__panel">
                        <div className="wv-likers-modal__head">
                            <div
                                aria-label="Lọc cảm xúc"
                                className="wv-likers-modal__tabs"
                                id="wvLikersTabs"
                                role="tablist"
                            />
                            <button
                                aria-label="Đóng"
                                className="wv-likers-modal__close"
                                type="button">
                                <i aria-hidden="true" className="fas fa-times" />
                            </button>
                        </div>
                        <h2 className="wv-likers-modal__sr-title" id="wvLikersTitle">
                            Cảm xúc
                        </h2>
                        <div className="wv-likers-modal__list" id="wvLikersList" tabIndex="0" />
                    </div>
                </div>
                <div
                    className="wpdiscuz-fem-email"
                    style={{
                        display: "none",
                    }}
                />
                <div
                    className="wpdiscuz-fem-email-form"
                    style={{
                        display: "none",
                    }}>
                    <span className="wpdiscuz-fem-author">
                        You are going to send email to <em />
                    </span>
                    <i className="fas fa-times" />
                    <div className="wpdiscuz_clear" />
                    <input
                        className="wpdiscuz-fem-subj"
                        defaultValue=""
                        placeholder="Email Subject"
                        type="text"
                    />
                    <textarea
                        className="wpdiscuz-fem-msg"
                        placeholder="Enter your message here"
                    />
                    <br />
                    <div className="wpdiscuz-fem-button-align">
                        <button className="wpdiscuz-fem-send" type="button">
                            Send
                        </button>
                    </div>
                    <input id="wpdiscuz_fem_email_comment_id" type="hidden" />
                </div>
                <div
                    className="wpdiscuz-fem-moving"
                    style={{
                        display: "none",
                    }}
                />
                <div
                    className="wpdiscuz-fem-move-form"
                    style={{
                        display: "none",
                    }}>
                    <span className="wpdiscuz-fem-author">
                        Move Comment
                        <br />
                        <em />
                    </span>
                    <i className="fas fa-times" />
                    <div className="wpdiscuz_clear" />
                    <div className="wpdiscuz-fem-posts-search">
                        <input
                            className="wpdiscuz-fem-post"
                            placeholder="Enter post title..."
                            type="text"
                        />
                        <div className="wpdiscuz-fem-posts" />
                    </div>
                    <div className="wpdiscuz-fem-button-align">
                        <button className="wpdiscuz-fem-move" type="button">
                            Move
                        </button>
                    </div>
                    <input id="wpdiscuz_fem_move_comment_id" type="hidden" />
                </div>
            </div>
        </div>
    );
}