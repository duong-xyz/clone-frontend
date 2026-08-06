import React, { useState, useMemo } from 'react';

const MovieWatchPanel = () => {
  // 1. Dữ liệu giả lập các phần phim (Có thể chuyển thành props)
  const parts = [
    { id: 1, name: 'Phần 1', url: 'https://hoathinh3d.st/tram-than-tram-than-chi-pham-tran-than-vuc', active: false },
    { id: 2, name: 'Phần 2', url: 'https://hoathinh3d.st/tram-than-pham-tran-than-vuc-phan-2', active: true },
  ];

  // 2. Dữ liệu danh sách tập phim gốc (Mặc định xếp từ mới đến cũ giống web gốc)
  const initialEpisodes = [
    { id: 6, slug: 'tap-6', title: '6', url: 'https://hoathinh3d.st/xem-phim-tram-than-pham-tran-than-vuc-phan-2/tap-6-sv1.html' },
    { id: 5, slug: 'tap-5', title: '5', url: 'https://hoathinh3d.st/xem-phim-tram-than-pham-tran-than-vuc-phan-2/tap-5-sv1.html' },
    { id: 4, slug: 'tap-4', title: '4', url: 'https://hoathinh3d.st/xem-phim-tram-than-pham-tran-than-vuc-phan-2/tap-4-sv1.html' },
    { id: 3, slug: 'tap-3', title: '3', url: 'https://hoathinh3d.st/xem-phim-tram-than-pham-tran-than-vuc-phan-2/tap-3-sv1.html' },
    { id: 2, slug: 'tap-2', title: '2', url: 'https://hoathinh3d.st/xem-phim-tram-than-pham-tran-than-vuc-phan-2/tap-2-sv1.html' },
    { id: 1, slug: 'tap-1', title: '1', url: 'https://hoathinh3d.st/xem-phim-tram-than-pham-tran-than-vuc-phan-2/tap-1-sv1.html' },
  ];

  // 3. Quản lý trạng thái logic tương tác
  const [currentServer, setCurrentServer] = useState(1); // Mặc định chọn Server VIP 1
  const [currentEpisode, setCurrentEpisode] = useState('tap-1'); // Tập phim đang xem hoạt động
  const [isAscending, setIsAscending] = useState(false); // Trạng thái đảo thứ tự tập (Mặc định false: Mới nhất lên đầu)
  const [searchQuery, setSearchQuery] = useState(''); // Ô tìm kiếm số tập phim

  // 4. Xử lý tính toán Bộ lọc tìm kiếm & Đảo thứ tự tập mượt mà bằng useMemo
  const filteredAndSortedEpisodes = useMemo(() => {
    // Tiến hành lọc danh sách theo chuỗi số tập người dùng gõ
    let result = initialEpisodes.filter((ep) =>
      ep.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

    // Tiến hành đảo ngược mảng nếu nút Sort được kích hoạt sang chế độ tăng dần (asc)
    if (isAscending) {
      result = [...result].reverse();
    }

    return result;
  }, [searchQuery, isAscending]);

  return (
    <div className="watch-movie-v2 info-movie-v2 info-movie-v2--watch">
      <div className="watch-v2-body info-v2-body ah-frame-bg">
        
        {/* Khung điều hướng chọn phần phim */}
        <nav className="info-parts" aria-label="Các phần phim">
          <ul id="list-movies-part" class="list-movies-part">
            {parts.map((part) => (
              <li key={part.id} className="movies-part">
                <a 
                  href={part.url} 
                  className={part.active ? 'active' : ''} 
                  title={part.name}
                  onClick={(e) => {
                    // Chặn load lại trang nếu bạn muốn quản lý phần phim bằng State React thay vì link cứng
                    // e.preventDefault(); 
                  }}
                >
                  {part.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Thông tin lịch phát sóng */}
        <p className="info-schedule">
          <i className="hl-calendar"></i> Lịch chiếu vào trưa
          <a href="/lich-chieu/">Thứ 5</a>, chiếu sớm lúc <strong>18:10</strong> Thứ 4
        </p>

        {/* Vùng chọn tập phim chính */}
        <section className="info-block info-block--eps">
          <div className="info-block__head">
            <span className="info-block__title">
              <i className="hl-search"></i> Chọn tập
            </span>
            
            <div className="info-block__actions">
              {/* NÚT ĐẢO THỨ TỰ TẬP (SORT) */}
              <button 
                type="button" 
                className={`info-ep-sort-btn ${isAscending && "is-asc"}`} 
                id="info-ep-sort" 
                aria-pressed={isAscending} 
                aria-label="Đảo thứ tự danh sách tập" 
                title="Đảo thứ tự tập"
                onClick={() => setIsAscending(!isAscending)} // Đảo trạng thái true/false
              >
                {/* SVG icon hiển thị luân phiên tùy theo trạng thái sắp xếp */}
                {!isAscending ? (
                  <svg className="info-ep-sort-icon info-ep-sort-icon--desc" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M6.808 9.467a.5.5 0 0 1-.16-.107l-.288-.298-.86-.889V17a.5.5 0 0 1-1 0V8.173l-.86.89-.286.296a.504.504 0 0 1-.71-.715l1.995-1.996a.5.5 0 0 1 .162-.102l.01-.004a.5.5 0 0 1 .38 0l.008.004a.5.5 0 0 1 .162.102l1.996 1.996.001.001a.5.5 0 0 1 0 .71l-.003.003a.5.5 0 0 1-.547.11M21 7.5H11a.5.5 0 0 1 0-1h10a.5.5 0 1 1 0 1m-10 9h10a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1m0-5h10a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1"></path></svg>
                ) : (
                  <svg className="info-ep-sort-icon info-ep-sort-icon--asc" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="m6.36 14.938.286-.297a.503.503 0 0 1 .71.715l-1.995 1.996a.5.5 0 0 1-.162.102l-.01.004-.01.005a.44.44 0 0 1-.357 0l-.01-.005-.011-.004a.5.5 0 0 1-.162-.102l-1.995-1.996a.504.504 0 0 1 .71-.715l.287.297.86.889V7a.5.5 0 1 1 1 0v8.827zM21 7.5H11a.5.5 0 0 1 0-1h10a.5.5 0 1 1 0 1m-10 4h10a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1m0 5h10a.5.5 0 0 1 0 1H11a.5.5 0 0 1 0-1"></path></svg>
                )}
              </button>

              {/* Ô TÌM KIẾM NHANH TẬP PHIM */}
              <div className="info-block__search">
                <i className="hl-search" aria-hidden="true"></i>
                <input 
                  id="keyword-ep" 
                  autocomplete="off" 
                  placeholder="Nhập số tập" 
                  type="text" 
                  name="q"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)} // Gán text tìm kiếm vào State
                />
              </div>
            </div>
          </div>

          {/* HIỂN THỊ CẢNH BÁO NẾU TÌM KIẾM KHÔNG RA KẾT QUẢ */}
          {filteredAndSortedEpisodes.length === 0 && (
            <p className="info-eps-empty" id="info-eps-empty" style={{ display: 'block' }}>
              Không tìm thấy tập phù hợp.
            </p>
          )}

          {/* VÙNG DANH SÁCH HỆ THỐNG SERVER VÀ TẬP PHIM */}
          <div className="info-eps-panel collapse in" id="collapseEps">
            <div id="ajax-episode" class="info-eps-content">
              
              {/* CHỌN LỰA TẬP SERVER (VIP 1, VIP 2, HX) */}
              <div className="text-center halim-ajax-list-server">
                <div id="halim-ajax-list-server">
                  <span 
                    id="server-item-1" 
                    className={`get-eps play-listsv box-shadow ${currentServer === 1 ? 'active' : ''}`}
                    onClick={() => setCurrentServer(1)}
                  >
                    VIP 1
                  </span>
                  <span 
                    id="server-item-2" 
                    className={`get-eps play-listsv box-shadow ${currentServer === 2 ? 'active' : ''}`}
                    onClick={() => setCurrentServer(2)}
                  >
                    VIP 2
                  </span>
                  <span 
                    id="server-item-3" 
                    className={`get-eps play-listsv box-shadow ${currentServer === 3 ? 'active' : ''}`}
                    onClick={() => setCurrentServer(3)}
                  >
                    HX
                  </span>
                </div>
              </div>

              {/* KHU VỰC IN DANH SÁCH CÁC TẬP PHIM RA MÀN HÌNH */}
              <div id="halim-list-server" className="list-eps-ajax">
                <div className="halim-server show_all_eps">
                  <span className="halim-server-name">
                    <span className="hl-server"></span> Việt Sub
                  </span>
                  
                  <ul id="listsv-1" className="halim-list-eps">
                    {filteredAndSortedEpisodes.map((ep) => (
                      <li 
                        key={ep.id} 
                        className={`halim-episode halim-episode-1-${ep.slug} ${currentEpisode === ep.slug ? 'active' : ''}`}
                      >
                        <a 
                          href={ep.url} 
                          title={ep.title}
                          onClick={(e) => {
                            e.preventDefault(); // Chặn tải lại trang cứng
                            setCurrentEpisode(ep.slug); // Đổi trạng thái tập đang xem thời gian thực
                            console.log(`Đang phát Server ${currentServer} - Tập ${ep.title}`);
                          }}
                        >
                          <span className={`box-shadow halim-btn ${currentEpisode === ep.slug ? 'active' : ''}`}>
                            {ep.title}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="clearfix"></div>
                </div>
                <div id="pagination-1"></div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default MovieWatchPanel;
