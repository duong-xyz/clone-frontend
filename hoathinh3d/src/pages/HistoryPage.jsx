import { useState } from "react";

export default function HistoryPage() {
    const getPublicFileRaw = (url) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.send(null);
        return xhr.responseText;
    };
    const styles = getPublicFileRaw('/css/history.css');
    const [confirm, setConfirm] = useState(false);
    return (
        <>
            <style>{styles}</style>
            <main
                id="main-contents"
                className="col-xs-12 col-sm-12 col-md-12 hh3d-history-page-wrap"
                style={{
                    '--hh3d-hist-frosted':
                        "url('https://hoathinh3d.st/wp-content/themes/halimmovies-child/assets/image/frosted.png')",
                }}
            >
                <div className="hh3d-history-page">
                    <div className="hh3d-history-toolbar hh3d-history-toolbar--ambient">
                        <div className="hh3d-history-ambient" aria-hidden="true">
                            <img
                                className="hh3d-history-ambient__blur"
                                src="https://hoathinh3d.st/wp-content/uploads/2023/09/tien-nghich-6-300x450.jpg"
                                alt=""
                                decoding="async"
                            />
                            <span className="hh3d-history-ambient__grain" />
                        </div>
                        <div className="hh3d-history-toolbar__inner">
                            <header className="hh3d-history-page__header">
                                <h1 className="hh3d-history-page__title">Lịch sử xem phim</h1>
                                <a
                                    href="#"
                                    className="hh3d-history-page__clear"
                                    id="delete-history-user"
                                    onClick={(e) => {e.preventDefault(); setConfirm(true);}}
                                >
                                    <i className="fas fa-trash-alt" /> Xóa tất cả
                                </a>
                            </header>
                            <div className="hh3d-history-search">
                                <i
                                    className="fas fa-search hh3d-history-search__icon"
                                    aria-hidden="true"
                                />
                                <input
                                    type="search"
                                    className="hh3d-history-search__input search-input"
                                    placeholder="Tìm kiếm phim trong lịch sử..."
                                    id="history-search"
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hh3d-history-mount halim_box" aria-live="polite">
                        <div className="hh3d-history-list" style={{}}>
                            <section
                                className="hh3d-history-group"
                                data-group-key="yesterday"
                            >
                                <h2 className="hh3d-history-group__title">Hôm qua</h2>
                                <div className="hh3d-history-group__rows">
                                    <article
                                        className="hh3d-history-row"
                                        data-history-id="208962412"
                                    >
                                        <div
                                            className="hh3d-history-row__ambient"
                                            aria-hidden="true"
                                        >
                                            <img
                                                className="hh3d-history-row__ambient-blur"
                                                src="https://hoathinh3d.st/wp-content/uploads/2023/09/tien-nghich-6-300x450.jpg"
                                                alt=""
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <span className="hh3d-history-row__ambient-grain" />
                                        </div>
                                        <a
                                            href="/xem-phim-tien-nghich/tap-27-sv1.html"
                                            className="hh3d-history-row__thumb"
                                            title="Tiên Nghịch"
                                        >
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2023/09/tien-nghich-6-300x450.jpg"
                                                alt="Tiên Nghịch"
                                                loading="lazy"
                                            />
                                            <span className="hh3d-history-row__ep">
                                                <i className="fas fa-play" /> Tập 27
                                            </span>
                                        </a>
                                        <div className="hh3d-history-row__body">
                                            <a
                                                href="/xem-phim-tien-nghich/tap-27-sv1.html"
                                                className="hh3d-history-row__title"
                                            >
                                                Tiên Nghịch
                                            </a>
                                            <div className="hh3d-history-row__meta">
                                                <span
                                                    className="hh3d-history-row__time"
                                                    data-raw-date="2026-07-29 23:45:59"
                                                >
                                                    <i className="far fa-clock" /> 11 giờ trước
                                                </span>
                                                <span className="hh3d-history-row__duration">
                                                    <i className="fas fa-film" /> 2p / 21p
                                                </span>
                                            </div>
                                            <div className="hh3d-history-row__progress">
                                                <div
                                                    className="hh3d-history-row__progress-fill"
                                                    style={{ width: '13%' }}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="hh3d-history-row__delete delete-history"
                                            data-history-id="208962412"
                                            title="Xóa"
                                            aria-label="Xóa khỏi lịch sử"
                                            onClick={(e) => {e.preventDefault(); setConfirm(true);}}
                                        >
                                            <i className="fas fa-times" />
                                        </button>
                                    </article>
                                </div>
                            </section>
                            <section className="hh3d-history-group" data-group-key="week">
                                <h2 className="hh3d-history-group__title">Tuần này</h2>
                                <div className="hh3d-history-group__rows">
                                    <article
                                        className="hh3d-history-row"
                                        data-history-id="206538796"
                                    >
                                        <div
                                            className="hh3d-history-row__ambient"
                                            aria-hidden="true"
                                        >
                                            <img
                                                className="hh3d-history-row__ambient-blur"
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/pham-nhan-tu-tien-phan-3-thumb-300x450.jpg"
                                                alt=""
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <span className="hh3d-history-row__ambient-grain" />
                                        </div>
                                        <a
                                            href="/xem-phim-pham-nhan-tu-tien-phan-3/tap-134-sv1.html"
                                            className="hh3d-history-row__thumb"
                                            title="Phàm Nhân Tu Tiên Phần 3"
                                        >
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/pham-nhan-tu-tien-phan-3-thumb-300x450.jpg"
                                                alt="Phàm Nhân Tu Tiên Phần 3"
                                                loading="lazy"
                                            />
                                            <span className="hh3d-history-row__ep">
                                                <i className="fas fa-play" /> Tập 134
                                            </span>
                                        </a>
                                        <div className="hh3d-history-row__body">
                                            <a
                                                href="/xem-phim-pham-nhan-tu-tien-phan-3/tap-134-sv1.html"
                                                className="hh3d-history-row__title"
                                            >
                                                Phàm Nhân Tu Tiên Phần 3
                                            </a>
                                            <div className="hh3d-history-row__meta">
                                                <span
                                                    className="hh3d-history-row__time"
                                                    data-raw-date="2026-07-27 13:59:33"
                                                >
                                                    <i className="far fa-clock" /> 2 ngày trước
                                                </span>
                                                <span className="hh3d-history-row__duration">
                                                    <i className="fas fa-film" /> 18p / 19p
                                                </span>
                                            </div>
                                            <div className="hh3d-history-row__progress">
                                                <div
                                                    className="hh3d-history-row__progress-fill"
                                                    style={{ width: '91%' }}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="hh3d-history-row__delete delete-history"
                                            data-history-id="206538796"
                                            title="Xóa"
                                            aria-label="Xóa khỏi lịch sử"
                                        >
                                            <i className="fas fa-times" />
                                        </button>
                                    </article>
                                    <article
                                        className="hh3d-history-row"
                                        data-history-id="206184326"
                                    >
                                        <div
                                            className="hh3d-history-row__ambient"
                                            aria-hidden="true"
                                        >
                                            <img
                                                className="hh3d-history-row__ambient-blur"
                                                src="https://hoathinh3d.st/wp-content/uploads/2021/10/pham-nhan-tu-tien-phan-2-300x450.png"
                                                alt=""
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <span className="hh3d-history-row__ambient-grain" />
                                        </div>
                                        <a
                                            href="/xem-phim-pham-nhan-tu-tien-phan-2/tap-72-sv1.html"
                                            className="hh3d-history-row__thumb"
                                            title="Phàm Nhân Tu Tiên Phần 2"
                                        >
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2021/10/pham-nhan-tu-tien-phan-2-300x450.png"
                                                alt="Phàm Nhân Tu Tiên Phần 2"
                                                loading="lazy"
                                            />
                                            <span className="hh3d-history-row__ep">
                                                <i className="fas fa-play" /> Tập 72
                                            </span>
                                        </a>
                                        <div className="hh3d-history-row__body">
                                            <a
                                                href="/xem-phim-pham-nhan-tu-tien-phan-2/tap-72-sv1.html"
                                                className="hh3d-history-row__title"
                                            >
                                                Phàm Nhân Tu Tiên Phần 2
                                            </a>
                                            <div className="hh3d-history-row__meta">
                                                <span
                                                    className="hh3d-history-row__time"
                                                    data-raw-date="2026-07-27 02:10:48"
                                                >
                                                    <i className="far fa-clock" /> 3 ngày trước
                                                </span>
                                                <span className="hh3d-history-row__duration">
                                                    <i className="fas fa-film" /> 21p / 21p
                                                </span>
                                            </div>
                                            <div className="hh3d-history-row__progress">
                                                <div
                                                    className="hh3d-history-row__progress-fill"
                                                    style={{ width: '99%' }}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="hh3d-history-row__delete delete-history"
                                            data-history-id="206184326"
                                            title="Xóa"
                                            aria-label="Xóa khỏi lịch sử"
                                        >
                                            <i className="fas fa-times" />
                                        </button>
                                    </article>
                                </div>
                            </section>
                            <section className="hh3d-history-group" data-group-key="month">
                                <h2 className="hh3d-history-group__title">Tháng này</h2>
                                <div className="hh3d-history-group__rows">
                                    <article
                                        className="hh3d-history-row"
                                        data-history-id="193735412"
                                    >
                                        <div
                                            className="hh3d-history-row__ambient"
                                            aria-hidden="true"
                                        >
                                            <img
                                                className="hh3d-history-row__ambient-blur"
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/tram-than-pham-tran-than-vuc-phan-2-thumb-300x450.webp"
                                                alt=""
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <span className="hh3d-history-row__ambient-grain" />
                                        </div>
                                        <a
                                            href="/xem-phim-tram-than-pham-tran-than-vuc-phan-2/tap-6-sv1.html"
                                            className="hh3d-history-row__thumb"
                                            title="Trảm Thần: Phàm Trần Thần Vực Phần 2"
                                        >
                                            <img
                                                src="https://hoathinh3d.st/wp-content/uploads/2026/06/tram-than-pham-tran-than-vuc-phan-2-thumb-300x450.webp"
                                                alt="Trảm Thần: Phàm Trần Thần Vực Phần 2"
                                                loading="lazy"
                                            />
                                            <span className="hh3d-history-row__ep">
                                                <i className="fas fa-play" /> Tập 6
                                            </span>
                                        </a>
                                        <div className="hh3d-history-row__body">
                                            <a
                                                href="/xem-phim-tram-than-pham-tran-than-vuc-phan-2/tap-6-sv1.html"
                                                className="hh3d-history-row__title"
                                            >
                                                Trảm Thần: Phàm Trần Thần Vực Phần 2
                                            </a>
                                            <div className="hh3d-history-row__meta">
                                                <span
                                                    className="hh3d-history-row__time"
                                                    data-raw-date="2026-07-16 04:34:24"
                                                >
                                                    <i className="far fa-clock" /> 14 ngày trước
                                                </span>
                                                <span className="hh3d-history-row__duration">
                                                    <i className="fas fa-film" /> 2p / 26p
                                                </span>
                                            </div>
                                            <div className="hh3d-history-row__progress">
                                                <div
                                                    className="hh3d-history-row__progress-fill"
                                                    style={{ width: '10%' }}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            className="hh3d-history-row__delete delete-history"
                                            data-history-id="193735412"
                                            title="Xóa"
                                            aria-label="Xóa khỏi lịch sử"
                                        >
                                            <i className="fas fa-times" />
                                        </button>
                                    </article>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="hh3d-history-loadmore">
                        <button
                            type="button"
                            className="hh3d-history-loadmore__btn load-more"
                            style={{ display: 'none' }}
                        >
                            Tải thêm
                        </button>
                        <div
                            className="hh3d-history-loadmore__loading loading-indicator"
                            style={{ display: 'none' }}
                        >
                            <div
                                className="lds-ellipsis"
                                style={{ display: 'inline-block', position: 'relative' }}
                            >
                                <div />
                                <div />
                                <div />
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {confirm && (
                <div className="hh3d-history-confirm-overlay" style={{}}>
                    <div className="hh3d-history-confirm-modal">
                        <h2 className="hh3d-history-confirm-modal__title">Xác nhận xóa</h2>
                        <p className="hh3d-history-confirm-modal__text">
                            Bạn có chắc chắn muốn xóa lịch sử này?
                        </p>
                        <div className="hh3d-history-confirm-modal__actions">
                            <button
                                onClick={() => setConfirm(false)}
                                type="button"
                                className="hh3d-history-confirm-modal__btn hh3d-history-confirm-modal__btn--cancel"
                            >
                                Hủy
                            </button>
                            <button
                                type="button"
                                className="hh3d-history-confirm-modal__btn hh3d-history-confirm-modal__btn--confirm"
                            >
                                Xóa
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}