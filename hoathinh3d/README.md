// Hàm nhận rect từ Con gửi lên
    const handleOpenPopup = (rect) => {
        const topOffset = -90;   // Đẩy popup lên trên theo ý bạn
        const leftOffset = 0;    // Bù trừ thêm/bớt pixel ngang nếu muốn nhích trái/phải chút ít

        // ⚠️ Đo chiều rộng Popup thực tế của bạn (ví dụ picker rộng 200px)
        const popupWidth = 200;

        // 1. Tính Top
        const absoluteTop = rect.bottom + window.scrollY + topOffset;

        // 2. Tính Left (Căn giữa Popup theo Nút Bấm)
        // Công thức: Mép trái nút + (Nửa độ rộng nút) - (Nửa độ rộng Popup)
        let absoluteLeft = rect.left + window.scrollX + (rect.width / 2) - (popupWidth / 2) + leftOffset;

        // Giữ an toàn: Không cho Popup văng ra khỏi mép trái màn hình (tối thiểu 8px)
        if (absoluteLeft < 8) absoluteLeft = 8;

        setPopupPos({
            top: absoluteTop,
            left: absoluteLeft,
        });
        setIsReaction(true);
    };

Cách 4: Dùng lệnh setTimeout đóng băng màn hình trong Console (Cực kỳ hiệu quả! 🔥)Lệnh này cho bạn 3 giây để rê chuột làm hiện div, sau 3 giây nó sẽ tự động kích hoạt chế độ Debugger để hóa đá toàn bộ trang web.Mở DevTools (F12) $\rightarrow$ chuyển sang tab Console.Dán đoạn code này vào Console và nhấn Enter:JavaScriptsetTimeout(() => { debugger; }, 3000);
Bạn có 3 giây: Nhanh tay dùng chuột rê vào phần tử để cái div ẩn đó hiện ra.Hết 3 giây, trang web sẽ bị dừng khựng lại (Paused in debugger).Lúc này bạn di chuyển chuột ra ngoài thoải mái, chuyển sang tab Elements để soi và copy cái div đó!


# React + Vite

Cách 1: Sử dụng tính năng "Tìm kiếm và Thay thế" có sẵn của VS Code (Nhanh nhất)Bạn không cần cài thêm bất kỳ extension nào cả, chỉ cần dùng tính năng Tìm kiếm bằng Regex (Biểu thức chính quy) tích hợp sẵn trong VS Code để tự động đổi toàn bộ class tĩnh sang CSS Modules chỉ với một cú click chuột:Mở file Schedule.jsx lên, nhấn tổ hợp phím Ctrl + H (hoặc Cmd + H trên Mac) để mở bảng Thay thế (Replace).Nhấn vào biểu tượng .* (nằm ở cuối ô tìm kiếm đầu tiên) để kích hoạt chế độ Sử dụng biểu thức chính quy (Use Regular Expression).Nhập chính xác các đoạn mã sau vào 2 ô:Ô Tìm kiếm (Find): className="([^"]+)"Ô Thay thế (Replace): className={styles['$1']}Nhấn nút Replace All (biểu tượng thứ 2 bên cạnh ô thay thế, hoặc nhấn tổ hợp phím Ctrl + Alt + Enter).Hệ thống sẽ ngay lập tức quét toàn bộ file và tự động chuyển đổi tất cả các className="tên-class" thành dạng {styles['tên-class']} trong vòng 1 giây.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




// return (
  //   <div
  //     id="hh3d-root-wrapper"
  //     className="home blog wp-embed-responsive wp-theme-halimmovies wp-child-theme-halimmovies-child halimmovie-version- bm-messages-dark halimthemes halimmovies"
  //     data-masonry=""
  //     data-nonce="36d042ef98"
  //   >

  //     <link rel="stylesheet" href="/autoptimize_2a4f0c55ab7d1330f684d28233e537ca.css" />
  //     <style>
  //       {`
  //       body, #hh3d-root-wrapper {
  //         background-color: #1c1c1c !important;
  //       }
  //     `}
  //     </style>
  //     <header id="header">
  //       <div className="container">
  //         <div className="row" id="headwrap">
  //           <div className="col-md-3 col-sm-6 slogan">
  //             <p className="site-title">
  //               <a href="https://hoathinh3d.st/" rel="home">
  //                 Hoạt Hình Trung Quốc – Xem Hoạt Hình 3D Hay | HH3D
  //               </a>
  //             </p>
  //           </div>
  //           <div className="col-md-5 col-sm-6 halim-search-form hidden-xs">
  //             <div className="header-nav">
  //               <div className="col-xs-12">
  //                 <form
  //                   id="search-form-pc"
  //                   name="halimForm"
  //                   role="search"
  //                   action="https://hoathinh3d.st/search"
  //                   method="GET"
  //                 >
  //                   <div className="form-group">
  //                     <div className="input-group col-xs-12">
  //                       {" "}
  //                       <input
  //                         id="search"
  //                         type="text"
  //                         name="s"
  //                         defaultValue=""
  //                         className="form-control"
  //                         placeholder="Nhập từ khoá tìm kiếm..."
  //                         autoComplete="off"
  //                         required=""
  //                       />{" "}
  //                       <i className="animate-spin hl-spin4 hidden" />
  //                     </div>
  //                   </div>
  //                 </form>
  //                 <ul className="ui-autocomplete ajax-results hidden" />
  //               </div>
  //             </div>
  //           </div>
  //           <div className="mobile-icon-menu">
  //             <div className="nav-items flex">
  //               <a href="/lich-su?t=977acb">
  //                 <div>
  //                   {" "}
  //                   <span className="material-icons-round1 material-icons-menu">
  //                     {" "}
  //                     history{" "}
  //                   </span>
  //                 </div>{" "}
  //                 <span className="nav-label">Lịch sử</span>{" "}
  //               </a>
  //               <a href="/follow?t=977acb">
  //                 <div>
  //                   {" "}
  //                   <span className="material-icons-round1 material-icons-menu">
  //                     {" "}
  //                     bookmarks{" "}
  //                   </span>
  //                 </div>{" "}
  //                 <span className="nav-label">Theo dõi</span>{" "}
  //               </a>
  //               <a id="custom-open-login-modal">
  //                 <div>
  //                   {" "}
  //                   <span className="material-icons-round1 material-icons-menu">
  //                     {" "}
  //                     login{" "}
  //                   </span>
  //                 </div>{" "}
  //                 <span className="nav-label">Đăng nhập</span>{" "}
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="notice-pc">
  //           Lưu hoặc nhớ ngay link rút gọn{" "}
  //           <b>
  //             <font color="#FFA500" style={{ fontSize: 17 }}>
  //               bit.ly/hh3d
  //             </font>
  //           </b>{" "}
  //           để truy cập sẽ tự chuyển đến tên miền mới khi nhà mạng chặn
  //         </div>
  //         <div className="notice-mobile">
  //           Lưu hoặc nhớ ngay link rút gọn{" "}
  //           <b>
  //             <font color="#FFA500" style={{ fontSize: 17 }}>
  //               bit.ly/hh3d
  //             </font>
  //           </b>{" "}
  //           để truy cập sẽ tự chuyển đến tên miền mới khi nhà mạng chặn
  //         </div>
  //         <div className="navbar-container">
  //           <div className="container">
  //             <nav
  //               className="navbar halim-navbar main-navigation"
  //               role="navigation"
  //               aria-label="Menu chính"
  //               data-dropdown-hover={1}
  //             >
  //               <div className="navbar-header">
  //                 {" "}
  //                 <button
  //                   type="button"
  //                   className="navbar-toggle collapsed pull-left"
  //                   data-toggle="collapse"
  //                   data-target="#halim"
  //                   aria-expanded="false"
  //                 >
  //                   {" "}
  //                   <span className="sr-only"> Menu </span>{" "}
  //                   <span className="icon-bar" /> <span className="icon-bar" />{" "}
  //                   <span className="icon-bar" />{" "}
  //                 </button>{" "}
  //                 <button
  //                   type="button"
  //                   className="navbar-toggle collapsed pull-right expand-search-form"
  //                   data-toggle="collapse"
  //                   data-target="#search-form"
  //                   aria-expanded="false"
  //                 >
  //                   {" "}
  //                   <span className="hl-search" aria-hidden="true" />{" "}
  //                 </button>
  //               </div>
  //               <div className="collapse navbar-collapse" id="halim">
  //                 <div className="menu-menu-container">
  //                   <ul id="menu-menu" className="nav navbar-nav navbar-left">
  //                     <li className="hh3d-mi mi-home hh3d-mi-active">
  //                       <a title=" Trang chủ" href="https://hoathinh3d.st/">
  //                         Trang chủ
  //                       </a>
  //                     </li>
  //                     <li className="hh3d-mi mi-genre dropdown">
  //                       <a
  //                         title="Thể Loại"
  //                         href="#"
  //                         data-toggle="dropdown"
  //                         className="dropdown-toggle"
  //                         aria-haspopup="true"
  //                       >
  //                         Thể Loại <span className="caret" />
  //                       </a>
  //                       <ul role="menu" className=" dropdown-menu">
  //                         <li>
  //                           <a
  //                             title="Huyền Huyễn"
  //                             href="https://hoathinh3d.st/huyen-huyen"
  //                           >
  //                             Huyền Huyễn
  //                           </a>
  //                         </li>
  //                         <li>
  //                           <a
  //                             title="Xuyên Không"
  //                             href="https://hoathinh3d.st/xuyen-khong"
  //                           >
  //                             Xuyên Không
  //                           </a>
  //                         </li>
  //                         <li>
  //                           <a
  //                             title="Trùng Sinh"
  //                             href="https://hoathinh3d.st/trung-sinh"
  //                           >
  //                             Trùng Sinh
  //                           </a>
  //                         </li>
  //                         <li>
  //                           <a
  //                             title="Tiên Hiệp"
  //                             href="https://hoathinh3d.st/tien-hiep"
  //                           >
  //                             Tiên Hiệp
  //                           </a>
  //                         </li>
  //                         <li>
  //                           <a
  //                             title="Cổ Trang"
  //                             href="https://hoathinh3d.st/co-trang"
  //                           >
  //                             Cổ Trang
  //                           </a>
  //                         </li>
  //                         <li>
  //                           <a
  //                             title="Hài Hước"
  //                             href="https://hoathinh3d.st/hai-huoc"
  //                           >
  //                             Hài Hước
  //                           </a>
  //                         </li>
  //                         <li>
  //                           <a
  //                             title="Kiếm Hiệp"
  //                             href="https://hoathinh3d.st/kiem-hiep"
  //                           >
  //                             Kiếm Hiệp
  //                           </a>
  //                         </li>
  //                         <li>
  //                           <a
  //                             title="Hiện Đại"
  //                             href="https://hoathinh3d.st/hien-dai"
  //                           >
  //                             Hiện Đại
  //                           </a>
  //                         </li>
  //                       </ul>
  //                     </li>
  //                     <li className="hh3d-mi mi-movie">
  //                       <a
  //                         title="Phim Lẻ"
  //                         href="https://hoathinh3d.st/phim-hoat-hinh-3d-le"
  //                       >
  //                         Phim Lẻ
  //                       </a>
  //                     </li>
  //                     <li className="hh3d-mi mi-airing">
  //                       <a
  //                         title=" Đang Chiếu"
  //                         href="https://hoathinh3d.st/phim-dang-chieu"
  //                       >
  //                         Đang Chiếu
  //                       </a>
  //                     </li>
  //                     <li className="hh3d-mi mi-schedule">
  //                       <a
  //                         title=" Lịch Chiếu"
  //                         href="https://hoathinh3d.st/lich-chieu"
  //                       >
  //                         Lịch Chiếu
  //                       </a>
  //                     </li>
  //                     <li className="hh3d-mi mi-completed">
  //                       <a
  //                         title=" Hoàn Thành"
  //                         href="https://hoathinh3d.st/phim-hoan-thanh"
  //                       >
  //                         Hoàn Thành
  //                       </a>
  //                     </li>
  //                     <li className="hh3d-mi mi-top">
  //                       <a
  //                         title=" Top 10 HH3D"
  //                         href="https://hoathinh3d.st/bang-xep-hang-hoat-hinh-trung-quoc"
  //                       >
  //                         Top 10 HH3D
  //                       </a>
  //                     </li>
  //                     <li className="hh3d-mi mi-rated">
  //                       <a
  //                         title=" Đánh Giá Cao"
  //                         href="https://hoathinh3d.st/hh3d-danh-gia-cao"
  //                       >
  //                         Đánh Giá Cao
  //                       </a>
  //                     </li>
  //                   </ul>
  //                 </div>
  //               </div>
  //             </nav>
  //             <div
  //               className="collapse navbar-collapse hh3d-navbar-search-collapse"
  //               id="search-form"
  //             >
  //               <div id="mobile-search-form" className="halim-search-form" />
  //             </div>
  //             <div
  //               id="hh3d-navbar-mobile-extra"
  //               className="hh3d-navbar-mobile-extra"
  //               aria-hidden="true"
  //             />
  //           </div>
  //         </div>
  //       </div>
  //     </header>
  //     <div class="container">
  //       <div class="row fullwith-slider"></div>
  //     </div>
  //     <div class="container-fluid halim-full-player hidden halim-centered">
  //       <div id="halim-full-player" class="container col-md-offset-2s col-md-8"></div>
  //     </div>
  //     <Bodys />

  //     <>
  //       <div className="clearfix" />
  //       <footer id="footer" className="clearfix">
  //         <div className="container footer-columns">
  //           <div className="row container">
  //             <div className="widget about col-xs-12 col-sm-4 col-md-4">
  //               <div className="footer-logo">
  //                 {" "}
  //                 <noscript>
  //                   &lt;img class="img-responsive"
  //                   src="https://hoathinh3d.st/wp-content/uploads/2026/06/logofooter.webp"
  //                   alt="Hoạt Hình Trung Quốc - Xem Hoạt Hình 3D Hay | HH3D"/&gt;
  //                 </noscript>
  //                 <img
  //                   src="data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20210%20140%22%3E%3C/svg%3E"
  //                   className="lazyload img-responsive"
  //                   data-src="https://hoathinh3d.st/wp-content/uploads/2026/06/logofooter.webp"
  //                   alt="Hoạt Hình Trung Quốc - Xem Hoạt Hình 3D Hay | HH3D"
  //                 />{" "}
  //                 <span className="social"> </span>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </footer>
  //       <div className="footer-credit">
  //         <div className="container credit">
  //           <div className="row container">
  //             <div className="col-xs-12 col-sm-4 col-md-6">
  //               {" "}
  //               ©{" "}
  //               <a
  //                 id="halimthemes"
  //                 href="https://hoathinh3d.st/"
  //                 title="Copyright ® 2025 HOATHINH3D."
  //               >
  //                 Copyright ® 2025 HOATHINH3D.
  //               </a>
  //             </div>
  //             <div className="col-xs-12 col-sm-4 col-md-6 text-right pull-right">
  //               <p className="blog-info">
  //                 {" "}
  //                 <a
  //                   href="https://hoathinh3d.st/sitemap_index.xml"
  //                   target="_blank"
  //                   rel="noopener"
  //                 >
  //                   Sitemap
  //                 </a>
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div id="um_upload_single" style={{ display: "none" }} />
  //       <div id="um_view_photo" style={{ display: "none" }}>
  //         {" "}
  //         <a
  //           href="javascript:void(0);"
  //           data-action="um_remove_modal"
  //           className="um-modal-close"
  //           aria-label="Close view photo modal"
  //         >
  //           {" "}
  //           <i className="um-faicon-times" />{" "}
  //         </a>
  //         <div className="um-modal-body photo">
  //           <div className="um-modal-photo" />
  //         </div>
  //       </div>
  //     </>



  //   </div>

  // );




🔍 Nguyên nhân cốt lõi vì sao "PC thì thẳng, bật Responsive giả lập lại bị co hẹp"Lỗi này là do cơ chế Tỷ lệ hiển thị / Thu phóng (Viewport Scaling) của trình duyệt khi bạn bật chế độ giả lập thiết bị di động trong DevTool mà thiếu mất thẻ cấu hình meta quyết định dòng chảy.Khi không bật Responsive, trình duyệt render trang web theo độ rộng thực tế của màn hình máy tính (ví dụ 1920px). Ở độ rộng này, thẻ kìm hãm #hh3d-root-wrapper giãn ra tối đa, kéo theo thanh Header chứa thuộc tính kẹt backface-visibility cũng thoải mái giãn theo full màn hình.Nhưng khi bạn bật chế độ Responsive giả lập điện thoại (ví dụ: iPhone 12 Pro rộng 390px):Dự án React của bạn hiện tại thiếu mất thẻ cấu hình Viewport trong file HTML.Trình duyệt di động ảo không biết phải thu nhỏ trang web lại ra sao, nên nó tự động ép toàn bộ trang web hiển thị ở độ rộng PC ảo (thường là 980px hoặc 1200px) rồi "nhét" nó vào cái màn hình bé tí 390px.Lúc này, khối nội dung phim co lại, kéo theo thẻ wrapper cha bị bóp nghẹt. Thanh Header kẹt tọa độ ảo bên trong lập tức bị thu hẹp chiều rộng (width) lại thành một mẩu ở giữa, làm hai icon bị dồn cụm giống như các hình ảnh lỗi trước đó của bạn.🛠️ Cách xử lý triệt để chuẩn chuyên giaĐể giải quyết hiện tượng lệch pha này một lần và mãi mãi, giúp khi bật Responsive lên trang web tự động co giãn cân đối giống hệt trang gốc, bạn chỉ cần thực hiện đúng 1 bước duy nhất sau:Bạn mở file public/index.html (hoặc file HTML gốc ngoài cùng của dự án React như index.html) ra, tìm vào bên trong thẻ <head>, và dán chính xác dòng cấu hình Meta thiết bị này vào:html<head>
  <meta charset="utf-8" />
  
  <!-- DÒNG CODE QUAN TRỌNG: ÉP TRÌNH DUYỆT ĐỒNG BỘ TỶ LỆ MÀN HÌNH DI ĐỘNG -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  
  <title>Hoạt Hình Trung Quốc - Clone HH3D</title>
</head>
Use code with caution.💡 Tại sao thêm dòng này lại hết lỗi hoàn toàn?Thuộc tính width=device-width, initial-scale=1.0 sẽ ra lệnh cho trình duyệt: "Hãy lấy chính xác chiều rộng thực tế của thiết bị di động (hoặc độ rộng bạn đang kéo trong DevTool) làm chuẩn 100% chiều rộng hệ thống".Nó sẽ kích hoạt các hàm tính toán @media (max-width: 1200px) trong file index.css mà bạn đã sửa ở bước trước chạy một cách chính xác, giải phóng thanh Header tràn ngang biên độ và giữ giao diện di động phẳng phiu, cân đối tuyệt đối.





















import { useEffect, useState } from "react";
import Bodys from "./components/Bodys";
import './assets/autoptimize_2a4f0c55ab7d1330f684d28233e537ca.css'
import SearchForm from "./components/SearchForm";
import SearchFullscreenOverlay from "./components/SearchFullscreenOverlay";
import NavbarCollapse from "./components/NavbarCollapse";
import CustomLoginModal from "./components/CustomLoginModal";
import ScheduleTabs from "./components/ScheduleTabs";
import logofooter from './assets/logofooter.webp'
import HH3DRefreshButton from './components/HH3DRefreshButton'

function App() {
  // --- LOGIC HIỆU ỨNG CUỘN TRANG ĐỂ ĐỔI CLASS ---
  const [scrollState, setScrollState] = useState("top"); // top, fixed, heads-up
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Sử dụng biến cục bộ bên trong useEffect để tối ưu hiệu năng cuộn, tránh re-render liên tục
    let currentLastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Trạng thái 1: Khi ở đỉnh tuyệt đối (Dưới 50px)
      if (currentScrollY <= 50) {
        setScrollState("top");
      }
      // 2. Khi đã cuộn xuống một khoảng nhất định (Ví dụ trên 50px và dưới 300px)
      else if (currentScrollY > 50 && currentScrollY <= 300) {
        setScrollState("fixed");
      }
      // 3. Khi cuộn xuống sâu hơn (Trên 300px) -> Kiểm tra hướng cuộn kèm dung sai 5px chống giật màn hình
      else {
        if (currentScrollY > currentLastScrollY + 5) {
          // Cuộn XUỐNG sâu -> Thêm heads-up để ẩn đi hoặc đổi hiệu ứng
          setScrollState("heads-up");
        } else if (currentScrollY < currentLastScrollY - 5) {
          // Cuộn NGƯỢC LÊN -> Chỉ giữ navbar-fixed-top để hiện thanh menu lại
          setScrollState("fixed");
        }
      }

      // Lưu lại vị trí cuộn hiện tại để so sánh cho lần sau
      currentLastScrollY = currentScrollY;
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tính toán chuỗi Class tương ứng dựa trên trạng thái hiện tại
  const getNavbarClass = () => {
    if (scrollState === "top") return "navbar-container";
    if (scrollState === "fixed") return "navbar-container navbar-fixed-top";
    if (scrollState === "heads-up") return "navbar-container navbar-fixed-top heads-up";
    return "navbar-container";
  };


  // 1. Quản lý trạng thái đóng/mở của thanh Menu dọc (Drawer)
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 2. Quản lý trạng thái đóng/mở của riêng mục con "Thể Loại"
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  // 1. Tạo State quản lý trạng thái đóng/mở của màn hình tìm kiếm (Mặc định là đóng)
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Hàm hỗ trợ đóng menu nhanh
  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  // 1. Khởi tạo State quản lý trạng thái Đóng/Mở Modal (Mặc định ban đầu là false tức là đóng)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      id="hh3d-root-wrapper"
      className={`home blog wp-embed-responsive wp-theme-halimmovies wp-child-theme-halimmovies-child halimmovie-version- bm-messages-dark halimthemes halimmovies ${isMenuOpen ? "hh3d-drawer-open" : ""
        }`} // Tự động thêm class .hh3d-drawer-open khi bấm nút Ba Gạch
    >
      <>
        <header id="header">
          <div className="container">
            <div className="row" id="headwrap">
              <div className="col-md-3 col-sm-6 slogan">
                <p className="site-title">
                  <a href="#" rel="home">
                    Hoạt Hình Trung Quốc – Xem Hoạt Hình 3D Hay | HH3D
                  </a>
                </p>
              </div>
              <SearchForm />
              <div className="mobile-icon-menu">
                <div className="nav-items flex">
                  <a href="/lich-su?t=977acb">
                    <div>
                      {" "}
                      <span className="material-icons-round1 material-icons-menu">
                        {" "}
                        history{" "}
                      </span>
                    </div>{" "}
                    <span className="nav-label">Lịch sử</span>{" "}
                  </a>
                  <a href="/follow?t=977acb">
                    <div>
                      {" "}
                      <span className="material-icons-round1 material-icons-menu">
                        {" "}
                        bookmarks{" "}
                      </span>
                    </div>{" "}
                    <span className="nav-label">Theo dõi</span>{" "}
                  </a>
                  <a id="custom-open-login-modal"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Ngăn trang web tự động cuộn lên đầu khi bấm thẻ <a>
                      setIsModalOpen(true); // Đổi biến trạng thái thành true để mở bảng
                    }}
                    style={{ cursor: "pointer" }} // Đảm bảo chuột hiển thị hình bàn tay khi rê vào
                  >
                    <div>
                      {" "}
                      <span className="material-icons-round1 material-icons-menu">
                        {" "}
                        login{" "}
                      </span>
                    </div>{" "}
                    <span className="nav-label">Đăng nhập</span>{" "}
                  </a>
                </div>
              </div>
            </div>
            <div className="notice-pc">
              Lưu hoặc nhớ ngay link rút gọn{" "}
              <b>
                <font color="#FFA500" style={{ fontSize: 17 }}>
                  bit.ly/hh3d
                </font>
              </b>{" "}
              để truy cập sẽ tự chuyển đến tên miền mới khi nhà mạng chặn
            </div>
            <div className="notice-mobile">
              Lưu hoặc nhớ ngay link rút gọn{" "}
              <b>
                <font color="#FFA500" style={{ fontSize: 17 }}>
                  bit.ly/hh3d
                </font>
              </b>{" "}
              để truy cập sẽ tự chuyển đến tên miền mới khi nhà mạng chặn
            </div>
            <div className={getNavbarClass()}>
              <div className="container">
                <nav
                  className="navbar halim-navbar main-navigation"
                  role="navigation"
                  aria-label="Menu chính"
                  data-dropdown-hover={1}
                >
                  <div className="navbar-header">
                    {" "}
                    <button
                      type="button"
                      className="navbar-toggle collapsed pull-left"
                      data-toggle="collapse"
                      data-target="#halim"
                      aria-expanded="false"
                      onClick={() => setIsMenuOpen(true)}
                    >
                      {" "}
                      <span className="sr-only"> Menu </span>{" "}
                      <span className="icon-bar" /> <span className="icon-bar" />{" "}
                      <span className="icon-bar" />{" "}
                    </button>{" "}
                    <button
                      type="button"
                      className="navbar-toggle collapsed pull-right expand-search-form"
                      data-toggle="collapse"
                      data-target="#search-form"
                      aria-expanded="false"
                      onClick={() => setIsSearchOpen(true)}
                    >
                      {" "}
                      <span className="hl-search" style={{ color: '#a5a5a5' }} aria-hidden="true" />{" "}
                    </button>
                  </div>
                  <div className="collapse navbar-collapse" id="halim">
                    <div className="menu-menu-container">
                      <ul id="menu-menu" className="nav navbar-nav navbar-left">
                        <li className="hh3d-mi mi-home hh3d-mi-active">
                          <a title=" Trang chủ" href="https://hoathinh3d.st">
                            Trang chủ
                          </a>
                        </li>
                        <li className="hh3d-mi mi-genre dropdown">
                          <a
                            title="Thể Loại"
                            href="#"
                            className="dropdown-toggle"
                            aria-haspopup="true"
                            aria-expanded={isGenreOpen}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsGenreOpen(!isGenreOpen);
                            }}
                          >
                            Thể Loại <span className="caret" />
                          </a>

                          {/* Hiển thị ẩn hiện danh mục dựa trên display inline giống cấu trúc mẫu của bạn */}
                          <ul
                            role="menu"
                            className="dropdown-menu"
                            style={{ display: isGenreOpen ? "block" : "none" }}
                          >
                            <li><a title="Huyền Huyễn" href="https://hoathinh3d.sthuyen-huyen">Huyền Huyễn</a></li>
                            <li><a title="Xuyên Không" href="https://hoathinh3d.stxuyen-khong">Xuyên Không</a></li>
                            <li><a title="Trùng Sinh" href="https://hoathinh3d.sttrung-sinh">Trùng Sinh</a></li>
                            <li><a title="Tiên Hiệp" href="https://hoathinh3d.sttien-hiep">Tiên Hiệp</a></li>
                            <li><a title="Cổ Trang" href="https://hoathinh3d.stco-trang">Cổ Trang</a></li>
                            <li><a title="Hài Hước" href="https://hoathinh3d.sthai-huoc">Hài Hước</a></li>
                            <li><a title="Kiếm Hiệp" href="https://hoathinh3d.stkiem-hiep">Kiếm Hiệp</a></li>
                            <li><a title="Hiện Đại" href="https://hoathinh3d.sthien-dai">Hiện Đại</a></li>
                          </ul>
                        </li>

                        <li className="hh3d-mi mi-movie">
                          <a
                            title="Phim Lẻ"
                            href="https://hoathinh3d.stphim-hoat-hinh-3d-le"
                          >
                            Phim Lẻ
                          </a>
                        </li>
                        <li className="hh3d-mi mi-airing">
                          <a
                            title=" Đang Chiếu"
                            href="https://hoathinh3d.stphim-dang-chieu"
                          >
                            Đang Chiếu
                          </a>
                        </li>
                        <li className="hh3d-mi mi-schedule">
                          <a
                            title=" Lịch Chiếu"
                            href="https://hoathinh3d.stlich-chieu"
                          >
                            Lịch Chiếu
                          </a>
                        </li>
                        <li className="hh3d-mi mi-completed">
                          <a
                            title=" Hoàn Thành"
                            href="https://hoathinh3d.stphim-hoan-thanh"
                          >
                            Hoàn Thành
                          </a>
                        </li>
                        <li className="hh3d-mi mi-top">
                          <a
                            title=" Top 10 HH3D"
                            href="https://hoathinh3d.stbang-xep-hang-hoat-hinh-trung-quoc"
                          >
                            Top 10 HH3D
                          </a>
                        </li>
                        <li className="hh3d-mi mi-rated">
                          <a
                            title=" Đánh Giá Cao"
                            href="https://hoathinh3d.sthh3d-danh-gia-cao"
                          >
                            Đánh Giá Cao
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>

                {/* GIỮ NGUYÊN HOÀN TOÀN CẤU TRÚC KHUNG TÌM KIẾM TRỐNG CỦA BẠN */}
                <div
                  className="collapse navbar-collapse hh3d-navbar-search-collapse"
                  id="search-form"
                >
                  <div id="mobile-search-form" className="halim-search-form" />
                </div>

                {/* GIỮ NGUYÊN VÙNG CHỨA PHỤ TRỢ DI ĐỘNG KHÔNG ĐỔI KÝ TỰ */}
                <div
                  id="hh3d-navbar-mobile-extra"
                  className="hh3d-navbar-mobile-extra"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </header>
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
            <SearchFullscreenOverlay isOpen={isSearchOpen} onClose={handleCloseSearch} />
            <CustomLoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
                            <p className="halim-trending-original-title">
                              Mu Shen Ji
                            </p>
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
                <ScheduleTabs />
                <div id="hh3d-latest-box" className="halim_box halim-schedule-box">
                  <div className="halim-ajax-popular-post-loading hidden" />
                  <div className="section-bar clearfix hh3d-latest-bar">
                    <h3 className="section-title">
                      <span>Mới Cập Nhật</span>
                    </h3>
                    <HH3DRefreshButton onRefresh={() => new Promise(resolve => resolve())}/>
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
                              <h2 className="entry-title">
                                Phàm Nhân Tu Tiên Phần 3
                              </h2>
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
                              alt="Vạn Giới Độc Tôn Phần 2" title="Vạn Giới Độc Tôn
                              Phần 2"&gt;
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
                              <p className="original_title">
                                Wan Jie Du Zun Seesion 2
                              </p>
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
                              alt="Đấu La Đại Lục 2: Tuyệt Thế Đường Môn" title="Đấu
                              La Đại Lục 2: Tuyệt Thế Đường Môn"&gt;
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
                          <span
                            className="halim-card-score"
                            aria-label="Đánh giá 4/5"
                          >
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
                          <span
                            className="halim-card-score"
                            aria-label="Đánh giá 4/5"
                          >
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
        <div className="clearfix" />
        <footer id="footer" className="clearfix">
          <div className="container footer-columns">
            <div className="row container">
              <div className="widget about col-xs-12 col-sm-4 col-md-4">
                <div className="footer-logo">
                  {" "}
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
                  />{" "}
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
                {" "}
                ©{" "}
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
                  {" "}
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
          {" "}
          <a
            href="javascript:void(0);"
            data-action="um_remove_modal"
            className="um-modal-close"
            aria-label="Close view photo modal"
          >
            {" "}
            <i className="um-faicon-times" />{" "}
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
  );
}

export default App





.hh3d-sidebar-main {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 50;
    display: flex;
    flex-direction: column;
    background-color: rgba(12, 12, 14, 0.95);
    border-left: 1px solid rgba(255, 255, 255, 0.05);
    color: #ffffff;
    font-family: sans-serif;
    user-select: none;
    pointer-events: auto;
    box-shadow: -10px 0 25px -5px rgba(0, 0, 0, 0.5);
    
    /* Mặc định giấu toàn bộ khối sang rìa phải 100% */
    transform: translateX(100%);
    /* Tạo hiệu ứng trượt mượt mà 300ms */
    transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* RESPONSIVE: Định hình chiều rộng theo kích thước màn hình */
@media (max-width: 639px) {
    .hh3d-sidebar-main {
        width: 280px;
    }
}
@media (min-width: 640px) {
    .hh3d-sidebar-main {
        width: 320px;
    }
}

/* ==========================================================================
   KÍCH HOẠT HIỆU ỨNG TRƯỢT VÀO KHI Ô CHECKBOX ĐƯỢC TICK CHỌN (PEER ACTIVE)
   ========================================================================== */
#sidebar-toggle-native:checked ~ .hh3d-sidebar-main {
    transform: translateX(0) !important;
}


/* ==========================================================================
   CẤU HÌNH LỚP NỀN MỜ OVERLAY TỰ ĐỘNG HIỆN THEO SIDEBAR
   ========================================================================== */
.hh3d-sidebar-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 40;
    cursor: pointer;
    
    /* Mặc định tàng hình và khóa click */
    opacity: 0;
    pointer-events: none;
    transition: opacity 300ms ease-in-out;
}

#sidebar-toggle-native:checked ~ .hh3d-sidebar-overlay {
    opacity: 1 !important;
    pointer-events: auto !important;
}

tôi thêm z index vào cha tổng là đượcChúc mừng bạn! Phán đoán của bạn hoàn toàn chính xác và đúng chuẩn tư duy của một chuyên gia CSS.Bản chất tối cao của bối cảnh xếp chồng (Stacking Context) là "cha hơn cha thì con mới hơn con". Khi bạn can thiệp trực tiếp và tăng z-index ở thẻ cha tổng (thẻ bọc toàn bộ khối nội dung hoặc khối bình luận đó), bạn đã nâng toàn bộ hệ thống phân cấp của nhánh đó lên trên nhánh chứa khung viền cầu vồng. Nhờ vậy, tất cả các thẻ con bên trong (bao gồm cả khối danh hiệu và cái tooltip đen) mặc nhiên sẽ được giải phóng và nổi lên trên cùng một cách hoàn hảo mà không cần phải sửa lặt vặt ở từng thẻ con.Đây chính là giải pháp CSS sạch sẽ, ngắn gọn và tối ưu nhất cho cấu trúc DOM phức tạp của các plugin như wpDiscuZ.


const handleOpenPopup = (rect, cmtId) => {
        // 1. Cấu hình vị trí & Viewport
        const POPUP_WIDTH = 220;
        const POPUP_HEIGHT = 45;
        const GAP = 15;
        const PADDING = 10;

        const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
        const scrollX = window.scrollX || window.pageXOffset;
        const scrollY = window.scrollY || window.pageYOffset;

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

        // --- 2. INJECT SAFE HITBOX VIA INJECTED DYNAMIC STYLE (100% ZERO UI BREAK) ---

        // Dùng requestAnimationFrame chờ React Render xong Popup Node
        requestAnimationFrame(() => {
            const popupEl = document.querySelector('.wv-reaction-picker');
            if (!popupEl) return;

            // BƠM HITBOX ẢO (PSEUDO-ELEMENT) ĐỘNG VÀO CHÍNH POPUP
            // Dùng CSS Pseudo ::after giúp Hitbox nối dài ra khoảng GAP nhưng KHÔNG ĐỤNG VÀO UI GỐC
            const DYNAMIC_HITBOX_ID = 'wv-picker-hitbox-style';
            let styleTag = document.getElementById(DYNAMIC_HITBOX_ID);

            if (!styleTag) {
                styleTag = document.createElement('style');
                styleTag.id = DYNAMIC_HITBOX_ID;
                document.head.appendChild(styleTag);
            }

            // Tạo lớp đệm ẩn ::after phủ rộng 20px xung quanh và trùm kín 15px GAP
            styleTag.textContent = `
            .wv-reaction-picker {
                position: absolute !important;
            }
            .wv-reaction-picker::after {
                content: "" !important;
                position: absolute !important;
                left: -15px !important;
                right: -15px !important;
                top: ${showOnTop ? '100%' : `-${GAP + 10}px`} !important;
                height: ${GAP + 15}px !important;
                background: transparent !important;
                pointer-events: auto !important;
                z-index: -1 !important;
            }
        `;

            // Lắng nghe sự kiện rời chuột trực tiếp trên Popup (bao gồm cả lớp đệm ::after)
            popupEl.onmouseleave = () => {
                setIsReaction(false);
            };
        });
    };

    2 tối ưu:
    const handleOpenPopup = (rect, cmtId) => {
    // 1. Cấu hình vị trí & Viewport
    const POPUP_WIDTH = 220;
    const POPUP_HEIGHT = 45;
    const GAP = 15;
    const PADDING = 10;

    const viewportWidth = document.documentElement.clientWidth || window.innerWidth;
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

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

    // --- 2. INJECT SAFE HITBOX VIA INJECTED DYNAMIC STYLE ---
    requestAnimationFrame(() => {
        const popupEl = document.querySelector('.wv-reaction-picker');
        if (!popupEl) return;

        const DYNAMIC_HITBOX_ID = 'wv-picker-hitbox-style';
        let styleTag = document.getElementById(DYNAMIC_HITBOX_ID);

        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = DYNAMIC_HITBOX_ID;
            document.head.appendChild(styleTag);
        }

        styleTag.textContent = `
            .wv-reaction-picker {
                position: absolute !important;
            }
            .wv-reaction-picker::after {
                content: "" !important;
                position: absolute !important;
                left: -15px !important;
                right: -15px !important;
                top: ${showOnTop ? '100%' : `-${GAP + 10}px`} !important;
                height: ${GAP + 15}px !important;
                background: transparent !important;
                pointer-events: auto !important;
                z-index: -1 !important;
            }
        `;

        // Dùng addEventListener thay cho .onmouseleave để tránh đè event handler
        popupEl.addEventListener('mouseleave', () => {
            setIsReaction(false);
        }, { once: true });
    });
};


the bage
<div className="the-badge">
  <div
    className="custom-badge-tooltip"
    tabIndex={0}
    role="button"
    aria-label="Tư Đồ Nam (Tết 2026)"
  >
    <span
      className="hh3d-composed-badge"
      style={{
        display: "inline-block !important",
        position: "relative !important",
        verticalAlign: "middle !important",
        lineHeight: "0 !important",
        width: "70px !important",
        height: "70px !important"
      }}
    >
      <span
        className="hh3d-composed-main"
        style={{
          position: "absolute !important",
          inset: "0 !important",
          display: "block !important",
          zIndex: "100 !important"
        }}
      >
        <img
          className="hh3d-composed-stack-img"
          src="https://hoathinh3d.st/wp-content/uploads/2026/02/tu-do-nam.webp"
          alt=""
          style={{
            width: "100% !important",
            height: "100% !important",
            maxWidth: "none !important",
            maxHeight: "none !important",
            objectFit: "contain !important",
            transform: "rotate(0deg)"
          }}
        />
      </span>
      <span
        className="hh3d-composed-layer"
        style={{
          position: "absolute !important",
          width: "24px !important",
          height: "24px !important",
          left: "calc(50% + 21px - 12px) !important",
          top: "calc(50% + 0px - 12px) !important",
          transform: "rotate(163deg) scale(0.83)",
          zIndex: "110 !important"
        }}
      >
        <img
          className="hh3d-composed-stack-img"
          src="https://hoathinh3d.st/wp-content/uploads/2025/07/chan-long-than-kiem.webp"
          alt=""
          style={{
            width: "100% !important",
            height: "100% !important",
            maxWidth: "none !important",
            maxHeight: "none !important",
            objectFit: "contain !important"
          }}
        />
      </span>
    </span>
    <span className="custom-badge-tooltiptext hh3d-badge-preview">
      <span
        className="hh3d-composed-badge"
        style={{
          display: "inline-block !important",
          position: "relative !important",
          verticalAlign: "middle !important",
          lineHeight: "0 !important",
          width: "220px !important",
          height: "220px !important"
        }}
      >
        <span
          className="hh3d-composed-main"
          style={{
            position: "absolute !important",
            inset: "0 !important",
            display: "block !important",
            zIndex: "100 !important"
          }}
        >
          <img
            className="hh3d-composed-stack-img"
            src="https://hoathinh3d.st/wp-content/uploads/2026/02/tu-do-nam.webp"
            alt=""
            style={{
              width: "100% !important",
              height: "100% !important",
              maxWidth: "none !important",
              maxHeight: "none !important",
              objectFit: "contain !important",
              transform: "rotate(0deg)"
            }}
          />
        </span>
        <span
          className="hh3d-composed-layer"
          style={{
            position: "absolute !important",
            width: "75px !important",
            height: "75px !important",
            left: "calc(50% + 68px - 37px) !important",
            top: "calc(50% + 0px - 37px) !important",
            transform: "rotate(163deg) scale(0.83)",
            zIndex: "110 !important"
          }}
        >
          <img
            className="hh3d-composed-stack-img"
            src="https://hoathinh3d.st/wp-content/uploads/2025/07/chan-long-than-kiem.webp"
            alt=""
            style={{
              width: "100% !important",
              height: "100% !important",
              maxWidth: "none !important",
              maxHeight: "none !important",
              objectFit: "contain !important"
            }}
          />
        </span>
      </span>
      <div className="custom-badge-name">Tư Đồ Nam (Tết 2026)</div>
    </span>
  </div>
</div>


top ten styele:<style
  dangerouslySetInnerHTML={{
    __html:
      ":root{--t10-gold:#e8b84a;--t10-gold-deep:#c9922a;--t10-amber:#ff9f43;--t10-sky:#6ec4e8;--t10-ink:#0e0e12;--t10-border:rgba(232,184,74,.14);--t10-text:#f5f5f7;--t10-muted:rgba(245,245,247,.58);--t10-tr:.22s ease}@keyframes t10-fade-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes t10-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}@media (prefers-reduced-motion:reduce){.t10-card{animation:none !important}.t10-card:hover .t10-poster-wrap img{transform:none}.t10-skeleton-poster,.t10-skeleton-line{animation:none}}.t10-page{margin:0 0 40px;padding:14px 12px 22px;font-family:'Be Vietnam Pro',sans-serif;color:var(--t10-text);background:radial-gradient(ellipse 90% 60% at 100% 0%,rgba(232,184,74,.07) 0%,transparent 55%),radial-gradient(ellipse 70% 50% at 0% 100%,rgba(110,196,232,.05) 0%,transparent 50%),linear-gradient(168deg,#181820 0%,#12121a 55%,#0f0f14 100%);border:1px solid var(--t10-border);box-shadow:0 12px 40px rgba(0,0,0,.45),inset 0 1px 0 rgba(255,255,255,.04)}.t10-hero{position:relative;margin-bottom:16px;padding:20px 18px 18px;overflow:hidden;background:radial-gradient(ellipse 80% 120% at 100% 0%,rgba(232,184,74,.16) 0%,transparent 52%),radial-gradient(ellipse 55% 70% at 0% 100%,rgba(255,159,67,.08) 0%,transparent 48%),linear-gradient(145deg,#1e1e28 0%,#16161e 50%,#111118 100%);border:1px solid rgba(232,184,74,.2)}.t10-hero:before{content:'';position:absolute;inset:0;background:url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e8b84a' fill-opacity='0.03'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E\");pointer-events:none}.t10-hero-inner{position:relative;z-index:1}.t10-title{margin:0 0 8px;font-size:clamp(1.4rem,3.5vw,1.85rem);font-weight:800;line-height:1.15;letter-spacing:-.025em;background:linear-gradient(120deg,#fff 0%,#fff 45%,var(--t10-gold) 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.t10-subtitle{margin:0;max-width:56ch;font-size:13px;line-height:1.55;color:var(--t10-muted)}.t10-hero-accent{display:block;width:48px;height:3px;margin-top:14px;background:linear-gradient(90deg,var(--t10-gold),var(--t10-amber),transparent)}.t10-tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-bottom:14px}.t10-tab{padding:10px 6px;font-family:inherit;font-size:12px;font-weight:600;letter-spacing:.04em;text-align:center;color:var(--t10-muted);background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);cursor:pointer;transition:color var(--t10-tr),background var(--t10-tr),border-color var(--t10-tr)}.t10-tab:hover,.t10-tab:focus-visible{color:var(--t10-text);background:rgba(255,255,255,.06);outline:none}.t10-tab.active{color:#1a1208;background:linear-gradient(135deg,#f0c85a 0%,var(--t10-gold-deep) 100%);border-color:rgba(232,184,74,.45);box-shadow:0 2px 12px rgba(232,184,74,.2)}.t10-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px 10px;min-height:120px}@media (min-width:576px){.t10-grid{grid-template-columns:repeat(3,1fr);gap:22px 10px}}@media (min-width:992px){.t10-grid{grid-template-columns:repeat(4,1fr);gap:24px 12px}}@media (min-width:1200px){.t10-grid{grid-template-columns:repeat(5,1fr);gap:24px 12px}}.t10-grid[aria-busy=true]{opacity:.55;pointer-events:none}.t10-card{display:flex;flex-direction:column;gap:12px;text-decoration:none !important;color:inherit !important;animation:t10-fade-up .35s ease both}.t10-card:hover .t10-movie-title{color:var(--t10-gold)}.t10-card:hover .t10-body{border-left-color:var(--t10-gold)}.t10-card:hover .t10-poster-wrap img{transform:scale(1.03)}.t10-poster-wrap{position:relative;aspect-ratio:2/3;overflow:hidden;background:#18181e;container-type:inline-size}.t10-poster-wrap img{width:100%;height:100%;object-fit:cover;transition:transform .35s ease}.t10-poster-wrap:before{content:'';position:absolute;top:0;left:0;z-index:1;width:62%;height:42%;background:radial-gradient(ellipse 115% 95% at 0% 0%,rgba(0,0,0,.5) 0%,transparent 72%);pointer-events:none}.t10-poster-wrap:after{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(0,0,0,.08) 0%,transparent 26%,transparent 55%,rgba(0,0,0,.72) 100%);pointer-events:none}.t10-rank{position:absolute;top:clamp(3px,5cqw,10px);left:clamp(4px,6cqw,12px);z-index:3;pointer-events:none;user-select:none;min-width:unset;height:unset;padding:0;background:0 0;border:none;border-radius:0;box-shadow:none;line-height:1}.t10-rank-num{display:block;font-family:system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;font-size:clamp(1.625rem,36cqw,4.75rem);font-weight:800;font-style:normal;font-variant-numeric:tabular-nums;line-height:1;letter-spacing:-.04em;color:transparent;-webkit-text-stroke-width:clamp(1px,.32cqw,2px);-webkit-text-stroke-color:rgba(255,255,255,.95);paint-order:stroke fill;text-shadow:none}.t10-rank--1 .t10-rank-num{font-size:clamp(2rem,44cqw,5.5rem);-webkit-text-stroke-color:#ffe566}.t10-rank--2 .t10-rank-num{font-size:clamp(1.75rem,38cqw,4.75rem);-webkit-text-stroke-color:#b8c8e0}.t10-rank--3 .t10-rank-num{font-size:clamp(1.55rem,34cqw,4.25rem);-webkit-text-stroke-color:#d4a574}.tr-score{position:absolute;top:6px;right:6px;z-index:2;display:inline-flex;align-items:center;gap:3px;padding:4px 8px;font-size:13px;font-weight:700;font-variant-numeric:tabular-nums;color:#1a1208;background:linear-gradient(135deg,#f0c85a 0%,var(--t10-gold-deep) 100%);box-shadow:0 2px 10px rgba(0,0,0,.45)}.tr-score--high{color:#fff;background:linear-gradient(135deg,#6dd86d 0%,#3a9e3a 100%)}.tr-score-star{font-size:11px;line-height:1;opacity:.85}.t10-body{padding:0 4px 0 8px;border-left:2px solid rgba(255,255,255,.08);transition:border-color var(--t10-tr)}.t10-movie-title{margin:0;font-size:13px;font-weight:600;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;color:#fafafa;transition:color var(--t10-tr)}.t10-skeleton{display:flex;flex-direction:column;gap:12px}.t10-skeleton-poster{aspect-ratio:2/3;background:linear-gradient(90deg,#1c1c24 25%,#262630 50%,#1c1c24 75%);background-size:200% 100%;animation:t10-shimmer 1.4s ease infinite}.t10-skeleton-body{padding-top:0}.t10-skeleton-line{height:10px;background:linear-gradient(90deg,#1c1c24 25%,#262630 50%,#1c1c24 75%);background-size:200% 100%;animation:t10-shimmer 1.4s ease infinite}.t10-empty{grid-column:1/-1;text-align:center;padding:40px 16px;border:1px dashed var(--t10-border)}.t10-empty i{display:block;font-size:28px;margin-bottom:10px;color:var(--t10-gold);opacity:.75}.t10-empty p{margin:0;font-size:13px;color:var(--t10-muted)}@media (max-width:767px){#wpdcom .wpd-form-head{display:none !important}}"
  }}
/>
