import { Outlet } from "react-router-dom";
import Follow from "../pages/Follow";
import { useState } from "react";
import Header from "../components/Header";
import NotiTick from "../components/NotiTick";
import SearchFullscreenOverlay from "../components/SearchFullscreenOverlay";
import CustomLoginModal from "../components/CustomLoginModal";
import NavbarCollapse from "../components/NavbarCollapse";
import logofooter from '../assets/logofooter.webp'

const MainLayout = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isGenreOpen, setIsGenreOpen] = useState(false);
    const handleCloseSearch = () => {
        setIsSearchOpen(false);
    };

    const [hide, setHide] = useState(true);
    return (
        <div id="scoped-main-wrapper">
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
                            {hide && (<CustomLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />)}
                            <div className="col-xs-12 carausel-sliderWidget" />
                            <Outlet context={{ setHide }} />
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
                </>
            </div>
        </div>
    );
}

export default MainLayout;