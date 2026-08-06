import React, { useState, useEffect, useRef } from "react";

export default function ScheduleTabs() {
  // Định nghĩa danh sách các Thứ trong tuần
  const daysOfWeek = [
    { id: "thu-hai", label: "Thứ Hai" },
    { id: "thu-ba", label: "Thứ Ba" },
    { id: "thu-tu", label: "Thứ Tư" },
    { id: "thu-nam", label: "Thứ Năm" },
    { id: "thu-sau", label: "Thứ Sáu" },
    { id: "thu-bay", label: "Thứ Bảy" },
    { id: "chu-nhat", label: "Chủ Nhật" },
  ];

  // Khởi tạo State quản lý Tab đang chọn (Mặc định: mới cập nhật)
  const [activeTab, setActiveTab] = useState("latest");
  // Khởi tạo State tự động bắt ngày hiện tại trong tuần
  const [todayId, setTodayId] = useState("thu-ba"); // Giá trị dự phòng khớp với mẫu

  // Tạo tham chiếu đến thanh cuộn ngang di động để xử lý nút bấm mũi tên
  const scrollContainerRef = useRef(null);

  // Tự động cập nhật ngày thực tế khi vừa tải trang
  useEffect(() => {
    const daysMap = ["chu-nhat", "thu-hai", "thu-ba", "thu-tu", "thu-nam", "thu-sau", "thu-bay"];
    const currentDayIndex = new Date().getDay();
    setTodayId(daysMap[currentDayIndex]);
  }, []);

  // Xử lý sự kiện khi nhấn chọn Tab
  const handleTabClick = (e, tabId) => {
    e.preventDefault();
    setActiveTab(tabId);
  };

  // Hàm điều khiển cuộn ngang khi click mũi tên trái/phải trên Mobile
  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 150; // Số pixels sẽ dịch chuyển mỗi lần click
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth", // Hiệu ứng cuộn mượt mà
      });
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* GIAO DIỆN KHỐI LỊCH CHIẾU TRÊN PC                                         */}
      {/* ========================================================================= */}
      <ul
        className="nav nav-pills nav-justified halim-schedule-block schedule"
        data-today={todayId}
      >
        <li role="presentation" className={activeTab === "latest" ? "active" : ""}>
          <a
            href="#latest"
            className="hh3d-latest-tab"
            onClick={(e) => handleTabClick(e, "latest")}
          >
            <span className="h-text">Mới Cập Nhật</span>
          </a>
        </li>

        {daysOfWeek.map((day) => {
          let liClass = "";
          if (activeTab === day.id) liClass += " active";
          if (todayId === day.id) liClass += " today";

          return (
            <li key={day.id} role="presentation" data-id={day.id} className={liClass.trim()}>
              <a href={`#${day.id}`} onClick={(e) => handleTabClick(e, day.id)}>
                {day.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* ========================================================================= */}
      {/* GIAO DIỆN THANH CHUYỂN ĐỔI CHẾ ĐỘ NHANH TRÊN MOBILE                        */}
      {/* ========================================================================= */}
      <ul className="nav nav-pills nav-justified halim-schedule-block-mobile mt-3">
        <li
          role="presentation"
          id="moviesLatest"
          className={activeTab === "latest" ? "active" : ""}
        >
          <a
            href="#latest"
            className="hh3d-latest-tab"
            onClick={(e) => handleTabClick(e, "latest")}
          >
            <span className="h-text">
              <i className="fas fa-fire" /> Mới Cập Nhật
            </span>
          </a>
        </li>
        <li role="presentation" id="scheduleFullLink">
          <a href="/lich-chieu">
            <i className="fas fa-calendar-alt" /> Lịch Chiếu
          </a>
        </li>
      </ul>

      {/* ========================================================================= */}
      {/* GIAO DIỆN THANH TRƯỢT NGANG CHỌN THỨ CÓ MŨI TÊN (MOBILE STRIP)             */}
      {/* ========================================================================= */}
      <div className="hh3d-sched-strip">
        {/* Nút mũi tên TRÁI */}
        <button
          type="button"
          className="hh3d-sched-arrow left"
          aria-label="Xem ngày trước"
          onClick={() => handleScroll("left")}
        >
          <i className="fas fa-chevron-left" aria-hidden="true" />
        </button>

        {/* Danh sách Thứ trượt ngang */}
        <ul 
          ref={scrollContainerRef}
          className="nav nav-pills nav-justified halim-schedule-block-mobile menu schedule"
        >
          {daysOfWeek.map((day) => {
            let liClass = "";
            if (activeTab === day.id) liClass += " active";
            if (todayId === day.id) liClass += " today";

            return (
              <li key={`mobile-${day.id}`} role="presentation" data-id={day.id} className={liClass.trim()}>
                <a href={`#${day.id}`} onClick={(e) => handleTabClick(e, day.id)}>
                  {day.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Nút mũi tên PHẢI */}
        <button
          type="button"
          className="hh3d-sched-arrow right"
          aria-label="Xem ngày sau"
          onClick={() => handleScroll("right")}
        >
          <i className="fas fa-chevron-right" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
