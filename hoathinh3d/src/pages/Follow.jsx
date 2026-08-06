
const Follow = () => {
    // Đọc file detail.css dưới dạng string thô (?raw)
    const cssModules = import.meta.glob('/public/css/follow.css', {
        query: '?raw',
        import: 'default',
        eager: true
    });

    // Lấy nội dung chuỗi CSS
    const styles = cssModules['/public/css/follow.css'];
    return (
        <>
            <style>{styles}</style>
            <style>{`/* HTML: <div class="loader"></div> */
.loader {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
  /* SỬA TẠI ĐÂY: Thêm cụm này để tự căn giữa độc lập */
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.loader::before,
.loader::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #fdfdfd;
}
.loader::before {
  box-shadow: -25px 0 #fdfdfd;
  animation: l8-1 1s infinite linear;
}
.loader::after {
  transform: rotate(0deg) translateX(25px);
  animation: l8-2 1s infinite linear;
}

@keyframes l8-1 {
    100%{transform: translateX(25px)}
}
@keyframes l8-2 {
    100%{transform: rotate(-180deg) translateX(25px)}
}`}</style>
            <main
                id="main-contents"
                className="col-xs-12 col-sm-12 col-md-12 hh3d-follow-page-wrap"
                style={{ "--hh3d-follow-frosted": "url('https://hoathinh3d.st/wp-content/themes/halimmovies-child/assets/image/frosted.png')" }}
            >

                <div className="hh3d-follow-page">
                    <div className="hh3d-follow-toolbar">
                        <div className="hh3d-follow-toolbar__inner">
                            <header className="hh3d-follow-header">
                                <div>
                                    <h1 className="hh3d-follow-header__title">
                                        <i className="fas fa-heart" aria-hidden="true" /> Tủ phim theo dõi
                                    </h1>
                                    <p id="totalFollowsText" className="hh3d-follow-header__count">
                                        Bạn đang theo dõi 2 bộ phim
                                    </p>
                                </div>
                            </header>
                            <div className="hh3d-follow-sort">
                                {" "}
                                <button
                                    type="button"
                                    className="hh3d-follow-sort__btn is-active"
                                    data-sort="modified"
                                >
                                    {" "}
                                    <i className="far fa-clock" aria-hidden="true" />{" "}
                                    <span className="hh3d-follow-sort__label">Cập nhật mới</span>{" "}
                                </button>{" "}
                                <button
                                    type="button"
                                    className="hh3d-follow-sort__btn"
                                    data-sort="date_added"
                                >
                                    {" "}
                                    <i className="far fa-bookmark" aria-hidden="true" />{" "}
                                    <span className="hh3d-follow-sort__label">Đã lưu gần đây</span>{" "}
                                </button>{" "}
                                <button
                                    type="button"
                                    className="hh3d-follow-sort__btn"
                                    data-sort="title"
                                >
                                    {" "}
                                    <i className="fas fa-sort-alpha-down" aria-hidden="true" />{" "}
                                    <span className="hh3d-follow-sort__label">A-Z</span>{" "}
                                </button>
                            </div>
                            <div className="hh3d-follow-search">
                                {" "}
                                <i
                                    className="fas fa-search hh3d-follow-search__icon"
                                    aria-hidden="true"
                                />{" "}
                                <input
                                    type="search"
                                    id="followSearch"
                                    className="hh3d-follow-search__input"
                                    placeholder="Tìm kiếm phim..."
                                    autoComplete="off"
                                />
                            </div>
                        </div>
                    </div>
                    <div id="followsGrid" className="hh3d-follow-grid" aria-live="polite">
                        <article className="hh3d-follow-card" data-id={20224}>
                            <div className="hh3d-follow-card__poster">
                                <a
                                    href="https://hoathinh3d.st/tien-nghich"
                                    className="hh3d-follow-card__thumb"
                                    title="Tiên Nghịch"
                                >
                                    <img
                                        src="/stickers/tien-nghich-6.jpg"
                                        alt="Tiên Nghịch"
                                        loading="lazy"
                                    />
                                </a>
                                <span className="hh3d-follow-card__ep">Tập 151</span>
                                <button
                                    type="button"
                                    className="hh3d-follow-card__remove btn-remove-follow"
                                    data-id={20224}
                                    data-type="db"
                                    title="Bỏ theo dõi"
                                    aria-label="Bỏ theo dõi"
                                >
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                            <div className="hh3d-follow-card__info">
                                <div className="hh3d-follow-card__info-ambient" aria-hidden="true">
                                    <img
                                        className="hh3d-follow-card__info-ambient-blur"
                                        src="https://hoathinh3d.st/wp-content/uploads/2023/09/tien-nghich-6-300x450.jpg"
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="hh3d-follow-card__info-ambient-grain" />
                                </div>
                                <div className="hh3d-follow-card__info-scrim" aria-hidden="true" />
                                <div className="hh3d-follow-card__info-body">
                                    <h3 className="hh3d-follow-card__title">
                                        <a href="https://hoathinh3d.st/tien-nghich">Tiên Nghịch</a>
                                    </h3>
                                    <p
                                        className="hh3d-follow-card__chip"
                                        title="Phim cập nhật tập mới: 26/07/2026 19:34:08"
                                    >
                                        <i className="far fa-clock" aria-hidden="true" />
                                        <span>Cập nhật · 23 giờ trước</span>
                                    </p>
                                </div>
                            </div>
                        </article>
                        <article className="hh3d-follow-card" data-id={1766}>
                            <div className="hh3d-follow-card__poster">
                                <a
                                    href="https://hoathinh3d.st/pham-nhan-tu-tien-phan-3"
                                    className="hh3d-follow-card__thumb"
                                    title="Phàm Nhân Tu Tiên Phần 3"
                                >
                                    <img
                                        src="https://hoathinh3d.st/wp-content/uploads/2026/06/pham-nhan-tu-tien-phan-3-thumb-300x450.jpg"
                                        alt="Phàm Nhân Tu Tiên Phần 3"
                                        loading="lazy"
                                    />
                                </a>
                                <span className="hh3d-follow-card__ep">Tập 184</span>
                                <button
                                    type="button"
                                    className="hh3d-follow-card__remove btn-remove-follow"
                                    data-id={1766}
                                    data-type="db"
                                    title="Bỏ theo dõi"
                                    aria-label="Bỏ theo dõi"
                                >
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                            <div className="hh3d-follow-card__info">
                                <div className="hh3d-follow-card__info-ambient" aria-hidden="true">
                                    <img
                                        className="hh3d-follow-card__info-ambient-blur"
                                        src="https://hoathinh3d.st/wp-content/uploads/2026/06/pham-nhan-tu-tien-phan-3-thumb-300x450.jpg"
                                        alt=""
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <span className="hh3d-follow-card__info-ambient-grain" />
                                </div>
                                <div className="hh3d-follow-card__info-scrim" aria-hidden="true" />
                                <div className="hh3d-follow-card__info-body">
                                    <h3 className="hh3d-follow-card__title">
                                        <a href="https://hoathinh3d.st/pham-nhan-tu-tien-phan-3">
                                            Phàm Nhân Tu Tiên Phần 3
                                        </a>
                                    </h3>
                                    <p
                                        className="hh3d-follow-card__chip"
                                        title="Phim cập nhật tập mới: 25/07/2026 16:08:11"
                                    >
                                        <i className="far fa-clock" aria-hidden="true" />
                                        <span>Cập nhật · 2 ngày trước</span>
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div
                        id="followEmptyState"
                        className="hh3d-follow-empty"
                        style={{ display: "none" }}
                    >
                        <div className="hh3d-follow-empty__icon">
                            <i className="far fa-heart" />
                        </div>
                        <h3>Chưa có phim theo dõi</h3>
                        <p>Hãy nhấn nút "Theo dõi" ở các bộ phim bạn thích!</p>
                    </div>
                    <nav
                        id="followPagination"
                        className="hh3d-follow-pagination"
                        style={{ display: "none" }}
                        aria-label="Phân trang"
                    >
                        {" "}
                        <button
                            type="button"
                            id="followPrevPage"
                            className="hh3d-follow-pagination__btn"
                        >
                            {" "}
                            <i className="fas fa-chevron-left" /> Trước{" "}
                        </button>
                        <div id="followPageNumbers" className="hh3d-follow-pagination__nums" />{" "}
                        <button
                            type="button"
                            id="followNextPage"
                            className="hh3d-follow-pagination__btn"
                        >
                            {" "}
                            Sau <i className="fas fa-chevron-right" />{" "}
                        </button>
                    </nav>
                </div>

            </main>

            <div
                id="hh3dFollowConfirm"
                className={`hh3d-follow-confirm ${false && "is-open"}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="hh3dFollowConfirmTitle"
            >
                <div className="hh3d-follow-confirm__box">
                    <h2 id="hh3dFollowConfirmTitle" className="hh3d-follow-confirm__title">
                        Xác nhận xóa
                    </h2>
                    <p className="hh3d-follow-confirm__text">
                        Bạn có chắc muốn xóa phim này khỏi danh sách theo dõi? Hành động này không
                        thể hoàn tác.
                    </p>
                    <div className="hh3d-follow-confirm__actions">
                        {" "}
                        <button
                            type="button"
                            id="hh3dFollowConfirmCancel"
                            className="hh3d-follow-confirm__btn hh3d-follow-confirm__btn--cancel"
                        >
                            Hủy
                        </button>{" "}
                        <button
                            type="button"
                            id="hh3dFollowConfirmOk"
                            className="hh3d-follow-confirm__btn hh3d-follow-confirm__btn--confirm"
                        >
                            Xóa phim
                        </button>
                    </div>
                </div>
            </div>
            {false && (<div class="loader"></div>)}
        </>
    );
}

export default Follow