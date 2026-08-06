import React, { useState, useRef, useEffect } from "react";

const SearchForm = () => {
    // 1. Quản lý trạng thái đóng/mở của khung gợi ý tìm kiếm
    const [isSuggestOpen, setIsSuggestOpen] = useState(false);

    // 2. Tạo một Reference để bao bọc toàn bộ cụm form tìm kiếm
    const searchContainerRef = useRef(null);

    // 3. Xử lý đóng khung gợi ý khi người dùng click chuột ra vùng bên ngoài form
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                setIsSuggestOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="col-md-5 col-sm-6 halim-search-form hidden-xs">
            <div className="header-nav">
                {/* Thêm reference vào thẻ div cha để kiểm tra sự kiện click outside */}
                <div className="col-xs-12" ref={searchContainerRef}>
                    <form
                        id="search-form-pc"
                        name="halimForm"
                        role="search"
                        action="https://hoathinh3d.st/search"
                        method="GET"
                    >
                        <div className="form-group">
                            <div className="input-group col-xs-12">
                                <input
                                    id="search"
                                    type="text"
                                    name="s"
                                    className="form-control"
                                    placeholder="Nhập từ khoá tìm kiếm..."
                                    autoComplete="off"
                                    required
                                    // Khi trỏ chuột vào ô input -> Kích hoạt hiển thị gợi ý dss
                                    onFocus={() => setIsSuggestOpen(true)}
                                />
                                <i className={`animate-spin hl-spin4 ${false && "hidden"}`} />
                            </div>
                        </div>
                    </form>

                    {/* Giữ nguyên cấu trúc HTML cũ */}
                    <ul className={`ui-autocomplete ajax-results ${true ? "hidden" : ""}`}>
                        <li>
                            Kết quả tìm kiếm: <strong style={{ color: "red" }}>tiên n</strong>
                        </li>
                        <li className="exact_result">
                            <a href="https://hoathinh3d.st/tien-nghich-than-lam-chi-chien">
                                <div className="halim_list_item">
                                    <div className="image">
                                        <img
                                            src="https://hoathinh3d.st/wp-content/uploads/2025/05/tien-nghich-than-lam-chi-chien-300x450.jpg"
                                            alt="Tiên Nghịch – Thần Lâm Chi Chiến Movie"
                                        />
                                    </div>
                                    <div className="item-text">
                                        <span className="label">Tiên Nghịch – Thần Lâm Chi Chiến Movie</span>
                                        <span className="enName">Renegade Immortal: Battle of God Arrival</span>
                                        <span className="date">30/05/2025</span>
                                    </div>
                                </div>
                            </a>
                        </li>

                    </ul>

                    {/* KHUNG GỢI Ý TÌM KIẾM: Thêm class 'open' động dựa trên State */}
                    <div
                        id="desktop-search-suggest"
                        className={`desktop-search-suggest ${isSuggestOpen ? "open" : ""}`}
                        aria-hidden={!isSuggestOpen}
                    >
                        <div className="dss-label">
                            <span className="material-icons">auto_awesome</span>Gợi ý cho bạn
                        </div>

                        {/* Dưới đây là cấu trúc các item gợi ý mẫu theo CSS dss-item bạn đã gửi */}
                        <div className="dss-grid">
                            {/* Thay thế cụm dss-hint này bằng mảng dữ liệu phim thật khi bạn làm API Call */}
                            {/* <p className="dss-hint">Không thể tải gợi ý.</p> */}

                            {/* Mẫu cấu trúc 1 Item Phim hiển thị (Demo khớp class CSS của bạn):
              <a href="https://hoathinh3d.st" className="dss-item">
                <div className="dss-thumb">
                  <img src="https://placeholder.com" alt="Phim" />
                </div>
                <div className="dss-meta">
                  <div className="dss-title">Tiêu Đề Phim Hoạt Hình</div>
                  <div className="dss-sub">Tập mới nhất / Trạng thái</div>
                </div>
                <div className="dss-rate">
                  ⭐ 4.8
                </div>
              </a>
              */}
                            <a
                                href="https://hoathinh3d.st/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky"
                                className="dss-item"
                            >
                                <span className="dss-thumb">
                                    <img
                                        src="https://hoathinh3d.st/wp-content/uploads/2025/04/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky-300x450.jpg"
                                        alt="Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ"
                                        loading="lazy"
                                    />
                                </span>
                                <span className="dss-meta">
                                    <span className="dss-title">
                                        Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ
                                    </span>
                                    <span className="dss-sub">The Crownless God: Electrolux</span>
                                </span>
                                <span className="dss-rate">⭐ 4.4</span>
                            </a>
                            <a
                                href="https://hoathinh3d.st/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky"
                                className="dss-item"
                            >
                                <span className="dss-thumb">
                                    <img
                                        src="https://hoathinh3d.st/wp-content/uploads/2025/04/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky-300x450.jpg"
                                        alt="Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ"
                                        loading="lazy"
                                    />
                                </span>
                                <span className="dss-meta">
                                    <span className="dss-title">
                                        Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ
                                    </span>
                                    <span className="dss-sub">The Crownless God: Electrolux</span>
                                </span>
                                <span className="dss-rate">⭐ 4.4</span>
                            </a>
                            <a
                                href="https://hoathinh3d.st/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky"
                                className="dss-item"
                            >
                                <span className="dss-thumb">
                                    <img
                                        src="https://hoathinh3d.st/wp-content/uploads/2025/04/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky-300x450.jpg"
                                        alt="Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ"
                                        loading="lazy"
                                    />
                                </span>
                                <span className="dss-meta">
                                    <span className="dss-title">
                                        Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ
                                    </span>
                                    <span className="dss-sub">The Crownless God: Electrolux</span>
                                </span>
                                <span className="dss-rate">⭐ 4.4</span>
                            </a>
                            <a
                                href="https://hoathinh3d.st/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky"
                                className="dss-item"
                            >
                                <span className="dss-thumb">
                                    <img
                                        src="https://hoathinh3d.st/wp-content/uploads/2025/04/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky-300x450.jpg"
                                        alt="Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ"
                                        loading="lazy"
                                    />
                                </span>
                                <span className="dss-meta">
                                    <span className="dss-title">
                                        Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ
                                    </span>
                                    <span className="dss-sub">The Crownless God: Electrolux</span>
                                </span>
                                <span className="dss-rate">⭐ 4.4</span>
                            </a>
                            <a
                                href="https://hoathinh3d.st/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky"
                                className="dss-item"
                            >
                                <span className="dss-thumb">
                                    <img
                                        src="https://hoathinh3d.st/wp-content/uploads/2025/04/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky-300x450.jpg"
                                        alt="Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ"
                                        loading="lazy"
                                    />
                                </span>
                                <span className="dss-meta">
                                    <span className="dss-title">
                                        Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ
                                    </span>
                                    <span className="dss-sub">The Crownless God: Electrolux</span>
                                </span>
                                <span className="dss-rate">⭐ 4.4</span>
                            </a>
                            <a
                                href="https://hoathinh3d.st/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky"
                                className="dss-item"
                            >
                                <span className="dss-thumb">
                                    <img
                                        src="https://hoathinh3d.st/wp-content/uploads/2025/04/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky-300x450.jpg"
                                        alt="Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ"
                                        loading="lazy"
                                    />
                                </span>
                                <span className="dss-meta">
                                    <span className="dss-title">
                                        Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ
                                    </span>
                                    <span className="dss-sub">The Crownless God: Electrolux</span>
                                </span>
                                <span className="dss-rate">⭐ 4.4</span>
                            </a>
                            <a
                                href="https://hoathinh3d.st/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky"
                                className="dss-item"
                            >
                                <span className="dss-thumb">
                                    <img
                                        src="https://hoathinh3d.st/wp-content/uploads/2025/04/than-an-vuong-toa-movie-y-lai-khac-tu-truyen-ky-300x450.jpg"
                                        alt="Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ"
                                        loading="lazy"
                                    />
                                </span>
                                <span className="dss-meta">
                                    <span className="dss-title">
                                        Thần Ấn Vương Tọa Movie: Y Lai Khắc Tư Truyền Kỳ
                                    </span>
                                    <span className="dss-sub">The Crownless God: Electrolux</span>
                                </span>
                                <span className="dss-rate">⭐ 4.4</span>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SearchForm;
