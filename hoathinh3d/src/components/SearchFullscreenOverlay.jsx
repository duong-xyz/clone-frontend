import React, { useState, useEffect, useRef } from "react";

const SearchFullscreenOverlay = ({ isOpen, onClose }) => {
    // 1. Quản lý nội dung văn bản người dùng nhập vào ô tìm kiếm
    const [searchQuery, setSearchQuery] = useState("");

    // 2. Tạo Reference để tự động focus vào ô nhập liệu khi overlay mở ra
    const inputRef = useRef(null);

    // 3. Tự động focus vào ô input khi overlay được mở lên (tăng trải nghiệm người dùng)
    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        } else {
            setSearchQuery(""); // Xóa sạch nội dung tìm kiếm cũ khi đóng overlay
        }
    }, [isOpen]);

    return (
        /* THÀNH PHẦN CHÍNH: Thêm class 'active' động dựa trên prop isOpen nhận từ component cha */
        <div
            id="search-fullscreen-overlay"
            className={isOpen ? "active" : ""}
        >
            {/* THANH HEADER CHỨA Ô INPUT VÀ NÚT ĐÓNG */}
            <div className="search-overlay-header">
                <span className="material-icons search-overlay-search-icon">
                    search
                </span>
                <input
                    ref={inputRef}
                    type="text"
                    id="search-overlay-input"
                    placeholder="Nhập từ khóa tìm kiếm..."
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Cập nhật nội dung nhập
                />
                {/* NÚT X ĐÓNG OVERLAY */}
                <button
                    id="search-overlay-close"
                    type="button"
                    onClick={onClose} // Gọi hàm đóng từ component cha truyền xuống
                >
                    <span className="material-icons">close</span>
                </button>
            </div>

            {/* VÙNG 1: GỢI Ý / XU HƯỚNG TÌM KIẾM (Hiển thị khi ô input trống) */}
            <div
                id="search-overlay-suggestions"
                className="search-overlay-suggestions"
                style={{ display: searchQuery === "" ? "block" : "none" }}
            >
                <div className="search-overlay-trending-label">
                    <span
                        className="material-icons"
                        style={{
                            fontSize: 15,
                            verticalAlign: "middle",
                            color: "#ff6b35"
                        }}
                    >
                        auto_awesome
                    </span>{" "}
                    Gợi ý cho bạn
                </div>
                <div
                    id="search-overlay-trending-grid"
                    className="search-overlay-trending-grid"
                >
                    {/* Vòng quay loading xoay tròn đồng bộ theo CSS của bạn */}
                    <div className="search-overlay-loading">
                        <span className="material-icons">autorenew</span>
                    </div>
                    <a
                        href="https://hoathinh3d.st/tien-nghich-than-lam-chi-chien"
                        className="dss-item"
                    >
                        <span className="dss-thumb">
                            <img
                                src="https://hoathinh3d.st/wp-content/uploads/2025/05/tien-nghich-than-lam-chi-chien-300x450.jpg"
                                alt="Tiên Nghịch - Thần Lâm Chi Chiến Movie"
                                loading="lazy"
                            />
                        </span>
                        <span className="dss-meta">
                            <span className="dss-title">Tiên Nghịch - Thần Lâm Chi Chiến Movie</span>
                            <span className="dss-sub">Renegade Immortal: Battle of God Arrival</span>
                        </span>
                        <span className="dss-rate">⭐ 4.7</span>
                    </a>
                    <a
                        href="https://hoathinh3d.st/tien-nghich-than-lam-chi-chien"
                        className="dss-item"
                    >
                        <span className="dss-thumb">
                            <img
                                src="https://hoathinh3d.st/wp-content/uploads/2025/05/tien-nghich-than-lam-chi-chien-300x450.jpg"
                                alt="Tiên Nghịch - Thần Lâm Chi Chiến Movie"
                                loading="lazy"
                            />
                        </span>
                        <span className="dss-meta">
                            <span className="dss-title">Tiên Nghịch - Thần Lâm Chi Chiến Movie</span>
                            <span className="dss-sub">Renegade Immortal: Battle of God Arrival</span>
                        </span>
                        <span className="dss-rate">⭐ 4.7</span>
                    </a>

                </div>
            </div>

            {/* VÙNG 2: KẾT QUẢ TÌM KIẾM (Tự động mở ra khi người dùng bắt đầu gõ chữ) */}
            <div
                id="search-overlay-results"
                className="search-overlay-results"
                style={{ display: searchQuery !== "" ? "block" : "none" }}
            >

                {/* Khung cấu trúc danh sách phim kết quả mẫu khớp CSS của bạn:
        <ul id="search-overlay-results-list">
          <li className="exact_result">
            <a href="https://hoathinh3d.st">
              <div className="halim_list_item">
                <div className="image">
                  <img src="https://placeholder.com" alt="phim" />
                </div>
                <div className="item-text">
                  <div className="label">Đấu La Đại Lục Phần 2</div>
                  <div className="enName">Soul Land 2</div>
                  <div className="date">Năm chiếu: 2024</div>
                </div>
              </div>
            </a>
          </li>
        </ul>
        */}
                {searchQuery !== "" && <div className="search-overlay-loading">
                    <span className="material-icons">autorenew</span>
                </div>}
                <ul>
                    <li>
                        Đang tìm kiếm kết quả cho: <strong style={{ color: "red" }}>{searchQuery}</strong>
                    </li>
                    <li className="exact_result">
                        <a href="https://hoathinh3d.st/tu-tien-gia-dai-chien-sieu-nang-luc">
                            <div className="halim_list_item">
                                <div className="image">
                                    <img
                                        src="https://hoathinh3d.st/wp-content/uploads/2026/02/Tu-Tien-Gia-Dai-Chien-Sieu-Nang-Luc-300x450-1.webp"
                                        alt="Tu Tiên Giả Đại Chiến Siêu Năng Lực"
                                    />
                                </div>
                                <div className="item-text">
                                    <span className="label">Tu Tiên Giả Đại Chiến Siêu Năng Lực</span>
                                    <span className="enName">Cultivator vs. Superpower 3D</span>
                                    <span className="date">14/02/2026</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="exact_result">
                        <a href="https://hoathinh3d.st/tien-nghich">
                            <div className="halim_list_item">
                                <div className="image">
                                    <img
                                        src="https://hoathinh3d.st/wp-content/uploads/2023/09/tien-nghich-6-300x450.jpg"
                                        alt="Tiên Nghịch"
                                    />
                                </div>
                                <div className="item-text">
                                    <span className="label">Tiên Nghịch</span>
                                    <span className="enName">Xian Ni</span>
                                    <span className="date">01/09/2023</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SearchFullscreenOverlay;
