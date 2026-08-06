<div className="info-v2-body ah-frame-bg">
  <div id="halim_trailer" />
  <nav className="info-parts" aria-label="Các phần phim">
    <ul id="list-movies-part" className="list-movies-part">
      <li className="movies-part">
        {" "}
        <a
          href="https://hoathinh3d.st/tien-nghich"
          className="active"
          title="Phần Chính"
        >
          {" "}
          Phần Chính{" "}
        </a>
      </li>
      <li className="movies-part">
        {" "}
        <a
          href="https://hoathinh3d.st/tien-nghich-than-lam-chi-chien"
          className=""
          title=" Movie Thần Lâm Chi Chiến"
        >
          {" "}
          Movie Thần Lâm Chi Chiến{" "}
        </a>
      </li>
    </ul>
  </nav>
  <p className="info-schedule">
    <i className="hl-calendar" /> Lịch chiếu vào trưa{" "}
    <a href="/lich-chieu/">Thứ 2</a>, chiếu sớm lúc <strong>18:00</strong> Chủ
    Nhật
  </p>
  <section className="info-block info-block--eps">
    <div className="info-block__head">
      {" "}
      <span className="info-block__title">
        <i className="hl-search" /> Chọn tập
      </span>
      <div className="info-block__actions">
        {" "}
        <button
          type="button"
          className="info-ep-sort-btn"
          id="info-ep-sort"
          aria-pressed="false"
          aria-label="Sắp xếp: tập mới trước (bấm để tập cũ trước)"
          title="Tập mới → cũ (bấm để đảo)"
        >
          {" "}
          <svg
            className="info-ep-sort-icon info-ep-sort-icon--desc"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            {" "}
            <path d="M6.808 9.467a.5.5 0 0 1-.16-.107l-.288-.298-.86-.889V17a.5.5 0 0 1-1 0V8.173l-.86.89-.286.296a.504.504 0 0 1-.71-.715l1.995-1.996a.5.5 0 0 1 .162-.102l.01-.004a.5.5 0 0 1 .38 0l.008.004a.5.5 0 0 1 .162.102l1.996 1.996.001.001a.5.5 0 0 1 0 .71l-.003.003a.5.5 0 0 1-.547.11M21 7.5H11a.5.5 0 0 1 0-1h10a.5.5 0 1 1 0 1m-10 9h10a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1m0-5h10a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1" />{" "}
          </svg>{" "}
          <svg
            className="info-ep-sort-icon info-ep-sort-icon--asc"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            {" "}
            <path d="m6.36 14.938.286-.297a.503.503 0 0 1 .71.715l-1.995 1.996a.5.5 0 0 1-.162.102l-.01.004-.01.005a.44.44 0 0 1-.357 0l-.01-.005-.011-.004a.5.5 0 0 1-.162-.102l-1.995-1.996a.504.504 0 0 1 .71-.715l.287.297.86.889V7a.5.5 0 1 1 1 0v8.827zM21 7.5H11a.5.5 0 0 1 0-1h10a.5.5 0 1 1 0 1m-10 4h10a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1m0 5h10a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1" />{" "}
          </svg>{" "}
        </button>
        <div className="info-block__search">
          {" "}
          <i className="hl-search" aria-hidden="true" />{" "}
          <input
            id="keyword-ep"
            name="q"
            type="text"
            autoComplete="off"
            placeholder="Nhập số tập"
            aria-controls="ajax-episode"
          />
        </div>
      </div>
    </div>
    <p className="info-eps-empty" id="info-eps-empty" hidden="">
      Không tìm thấy tập phù hợp.
    </p>
    <div className="info-eps-panel collapse " id="collapseEps">
      <div id="ajax-episode" className="info-eps-content">
        <div className="text-center halim-ajax-list-server">
          <div id="halim-ajax-list-server" />
        </div>
        <div id="halim-list-server" className="list-eps-ajax">
          <div className="halim-server show_all_eps" data-episode-nav="">
            <span className="halim-server-name">
              <span className="hl-server" /> Việt Sub
            </span>
            <ul id="listsv-1" className="halim-list-eps">
              <li className="halim-episode halim-episode-1-tap-3 col-xs-3 col-sm-2 col-lg-1">
                <a
                  href="https://hoathinh3d.st/xem-phim-tien-nghich/tap-3-sv1.html"
                  title={3}
                >
                  <span
                    className="halim-info-1-tap-3 box-shadow halim-btn"
                    data-post-id={20224}
                    data-server={1}
                    data-episode-slug="tap-3"
                    data-position=""
                    data-embed={0}
                  >
                    3
                  </span>
                </a>
              </li>
              <li className="halim-episode halim-episode-1-tap-2 col-xs-3 col-sm-2 col-lg-1">
                <a
                  href="https://hoathinh3d.st/xem-phim-tien-nghich/tap-2-sv1.html"
                  title={2}
                >
                  <span
                    className="halim-info-1-tap-2 box-shadow halim-btn"
                    data-post-id={20224}
                    data-server={1}
                    data-episode-slug="tap-2"
                    data-position=""
                    data-embed={0}
                  >
                    2
                  </span>
                </a>
              </li>
              <li className="halim-episode halim-episode-1-tap-1 col-xs-3 col-sm-2 col-lg-1">
                <a
                  href="https://hoathinh3d.st/xem-phim-tien-nghich/tap-1-sv1.html"
                  title={1}
                >
                  <span
                    className="halim-info-1-tap-1 box-shadow halim-btn"
                    data-post-id={20224}
                    data-server={1}
                    data-episode-slug="tap-1"
                    data-position="first"
                    data-embed={0}
                  >
                    1
                  </span>
                </a>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
          <div id="pagination-1" />
        </div>
      </div>
    </div>
  </section>
  <section id="info-story" className="info-block info-block--story">
    <h2 className="info-block__title">Nội dung</h2>
    <div className="video-item halim-entry-box">
      <article id="post-20224" className="item-content ">
        <p>
          Cải biên từ tiểu thuyết “Tiên Nghịch” của tác giả Nhĩ Căn, kể về thiếu
          niên bình phàm Vương Lâm xuất thân nông thôn, mang theo nhiệt huyết,
          tu luyện nghịch tiên, không chỉ cầu trường sinh, mà còn muốn thoát
          khỏi thân phận giun dế. Hắn tin rằng đạo do người quyết định, dùng tư
          chất bình phàm bước vào con đường tu chân, trải qua bao phong ba bão
          táp, dựa vào trí tuệ sáng suốt, từng bước một bước lên đỉnh cao, dựa
          vào sức một người, danh chấn Tu chân giới.
        </p>
        <p>
          Cấp bậc tu tiên trong Tiên Nghịch​
          <br /> 1/ Nhất Bộ Tung Hoành gồm:
          <br /> Ngưng Khí: 15 Tầng
          <br /> • Trúc Cơ: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn
        </p>
        <p>• Kết Đan: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn</p>
        <p>• Nguyên Anh: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn</p>
        <p>• Hóa Thần: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn</p>
        <p>• Anh Biến: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn</p>
        <p>• Vấn Đỉnh: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn</p>
        <p>• Cảnh Giới Quá Độ: Âm Hư — Dương Thực</p>
        <p>2/ Nhị Bộ Phi Thăng gồm:</p>
        <p>• Khuy Niết: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn</p>
        <p>• Tịnh Niết: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn</p>
        <p>• Toái Niết: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn</p>
        <p>• Thiên Nhân Ngũ Suy: Đệ Nhất Suy –&gt; Đệ Ngũ Suy</p>
        <p>3/ Tam Bộ Vô Biên – Đại Năng gồm:</p>
        <p>• Tứ Không Cảnh:</p>
        <p>
          • Không Niết: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn
          <br /> • Không Linh: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn
          <br /> • Không Huyền: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn
          <br /> • Huyền Kiếp ( 9 Kiếp ): Ngoại Kiếp ( 3 Kiếp đầu ) — Nội Kiếp (
          3 Kiếp giữa ) — Hồn Kiếp ( 3 Kiếp cuối )<br /> • Ngoại Kiếp: Tuyết
          Kiếp — Phong Kiếp — Lôi Kiếp
          <br /> • Nội Kiếp: Trảm Ly Kiếp — Huyết Ảnh Kiếp — Kiếp này chưa hiện
          đã bị Vương Lâm chém
          <br /> • Hồn Kiếp: Thập Tức Khô Thần Kiếp — Hồn Thọ Kiếp — Luân Hồi
          Kiếp
        </p>
        <p>
          • Không Kiếp = Đại Tôn: Sơ Kỳ — Trung Kỳ — Hậu Kỳ — Viên Mãn
          <br /> • Kim Tôn = Không Kiếp Hậu Kỳ Đỉnh Phong
          <br /> • Thiên Tôn = Không Kiếp Viên Mãn
          <br /> • Dược Thiên Tôn = Không Kiếp Quá Độ
          <br /> • Đại Thiên Tôn = ngưng tụ Thiên Tôn Chi Dương
        </p>
        <p>
          • Bán Bộ Đạp Thiên: Đệ Nhất Đạp Thiên Kiều –&gt; Đệ Cửu Đạp Thiên Kiều
          <br /> • Đệ nhất cầu :dung nhập quy tắc thiên địa vào trong thần thức
          <br /> • Đệ Nhị cầu : Đạp Thiên Nhãn
          <br /> • Đệ Tam cầu: Vấn Đạo Tâm
        </p>
        <p>4/ Tứ Bộ Đạp Thiên – Siêu Thoát</p>
      </article>
      <div className="item-content-toggle">
        <div className="item-content-gradient" />{" "}
        <span
          className="show-more"
          data-single="true"
          data-showmore="Xem thêm"
          data-showless="Ẩn bớt"
        >
          Xem thêm
        </span>
      </div>
    </div>
  </section>
</div>
