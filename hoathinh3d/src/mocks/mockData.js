// mockData.js

export const initialTrendingMovies = [
  { id: 1, title: 'Tiên Nghịch', originalTitle: 'Xian Ni', url: 'https://hoathinh3d.st', thumb: '/stickers/tien-nghich-6.jpg', score: '4.6', episode: 'Tập 149', isHot: true, loading: 'eager', fetchpriority: 'high', sizes: '(max-width: 480px) 180px, (max-width: 768px) 220px, 224px' },
  { id: 2, title: 'Đấu Phá Thương Khung Phần 5', originalTitle: 'Fights Break Sphere 5', url: 'https://hoathinh3d.st', thumb: 'https://hoathinh3d.st/wp-content/uploads/2022/06/dau-pha-thuong-khung.webp', score: '3.8', episode: 'Tập 91', isHot: true, loading: 'lazy', fetchpriority: 'low', sizes: 'auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px' },
  { id: 3, title: 'Mục Thần Ký', originalTitle: 'Mu Shen Ji', url: 'https://hoathinh3d.st', thumb: 'https://hoathinh3d.st/wp-content/uploads/2026/07/muc-than-ky-thumb.webp', score: '4.6', episode: 'Tập 91', isHot: true, loading: 'lazy', fetchpriority: 'low', sizes: 'auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px' },
  { id: 4, title: 'Quang Âm Chi Ngoại', originalTitle: "Beyond Time's Gaze", url: 'https://hoathinh3d.st', thumb: 'https://hoathinh3d.st/wp-content/uploads/2026/06/quang-am-chi-ngoai-thumb.jpg', score: '4.6', episode: 'Tập 52', isHot: true, loading: 'lazy', fetchpriority: 'low', sizes: 'auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px' },
  { id: 5, title: 'Phàm Nhân Tu Tiên Phần 3', originalTitle: "A Mortal's Journey to Immortality 3", url: 'https://hoathinh3d.st', thumb: 'https://hoathinh3d.st/wp-content/uploads/2026/06/pham-nhan-tu-tien-phan-3-thumb.jpg', score: '4.7', episode: 'Tập 108', isHot: true, loading: 'lazy', fetchpriority: 'low', sizes: 'auto, (max-width: 480px) 180px, (max-width: 768px) 220px, 224px' }
];

export const extendedTrendingMovies = [
  { id: 6, title: 'Thế Giới Hoàn Mỹ', originalTitle: 'Perfect World', url: '#', thumb: 'https://hoathinh3d.st/wp-content/uploads/2026/06/the-gioi-hoan-my-thumb.jpg', score: '4.5', episode: 'Tập 170', isHot: false, loading: 'lazy', fetchpriority: 'low', sizes: 'auto' },
  { id: 7, title: 'Già Thiên', originalTitle: 'Shrouding the Heavens', url: '#', thumb: 'https://hoathinh3d.st/wp-content/uploads/2026/06/thon-phe-tinh-khong-thumb.jpg', score: '4.4', episode: 'Tập 65', isHot: false, loading: 'lazy', fetchpriority: 'low', sizes: 'auto' },
  { id: 8, title: 'Đại Thần Điêu Kính', originalTitle: 'Grandmaster', url: '#', thumb: 'https://hoathinh3d.st/wp-content/uploads/2026/06/dau-la-dai-luc-2-tuyet-the-duong-mon-thumb.jpg', score: '4.2', episode: 'Tập 12', isHot: false, loading: 'lazy', fetchpriority: 'low', sizes: 'auto' },
  { id: 9, title: 'Thần Ấn Vương Tọa', originalTitle: 'Throne of Seal', url: '#', thumb: 'https://hoathinh3d.st/wp-content/uploads/2026/04/tuong-da-1.webp', score: '4.6', episode: 'Tập 112', isHot: false, loading: 'lazy', fetchpriority: 'low', sizes: 'auto' },
  { id: 10, title: 'Tây Du', originalTitle: 'The Westward', url: '#', thumb: 'https://hoathinh3d.st/wp-content/uploads/2023/05/dai-chua-te-200x300.webp', score: '4.1', episode: 'Tập 45', isHot: false, loading: 'lazy', fetchpriority: 'low', sizes: 'auto' }
];

export const initialComments = [
  { id: 101, author: 'Tiêu Viêm', text: 'Tập này đánh nhau với Vân Sơn cuốn quá anh em ơi!', movieTitle: 'Đấu Phá Thương Khung Phần 5', time: '5 phút trước', avatar: '/stickers/avatar_1.jpeg', isVip: true,vipFrame:"khung_vip_197" , isActivity: false, hasPoster: true, posterThumb: '/stickers/pham-nhan-tu-tien-phan-3-thumb.jpg' },
  { id: 102, author: 'Lâm Động', text: 'phim này hay ko các đạo hữu?', movieTitle: 'Vũ Động Càn Khôn', time: '12 phút trước', avatar: '/stickers/avatar_1.jpeg', isVip: true, vipFrame:"khung_phuc_loi_mua_5", isActivity: true, hasPoster: true, posterThumb: '/stickers/pham-nhan-tu-tien-phan-3-thumb.jpg' },
  { id: 103, author: 'Hàn Lập', text: 'Đạo hữu nào cho hỏi Tiên Nghịch bao giờ ra tập mới?', movieTitle: 'Tiên Nghịch', time: '25 phút trước', avatar: 'https://hoathinh3d.st/wp-content/uploads/ultimatemember/22248/profile_photo-150x150.jpg?t=1774339770', isVip: true, vipFrame: "khung_vip_dc_305", isActivity: false, hasPoster: true, posterThumb: '/stickers/pham-nhan-tu-tien-phan-3-thumb.jpg' },
  { id: 104, author: 'Thạch Hạo', text: 'Vừa cày xong 100 tập phê không tả được.', movieTitle: 'Thế Giới Hoàn Mỹ', time: '1 giờ trước', avatar: '/stickers/avatar_1.jpeg', isVip: true, vipFrame:"khung_phuc_loi_mua_5", isActivity: false, hasPoster: true, posterThumb: '/stickers/pham-nhan-tu-tien-phan-3-thumb.jpg' }
];

export const extendedComments = [
  { id: 105, author: 'Diệp Phàm', text: 'Giao diện darkmode tối ưu nhìn đỡ mỏi mắt hẳn.', movieTitle: 'Già Thiên', time: '2 giờ trước', avatar: '/stickers/avatar_1.jpeg', isVip: true,vipFrame:"khung_vip_198", isActivity: false, hasPoster: true, posterThumb: '/stickers/pham-nhan-tu-tien-phan-3-thumb.jpg' },
  { id: 106, author: 'Mục Thần', text: 'Bình luận hệ thống mượt quá.', movieTitle: 'Mục Thần Ký', time: '3 giờ trước', avatar: 'https://hoathinh3d.st/wp-content/uploads/ultimatemember/22248/profile_photo-150x150.jpg?t=1774339770', isVip: false, isActivity: false, hasPoster: true, posterThumb: 'https://hoathinh3d.st/wp-content/uploads/2026/06/thon-phe-tinh-khong-thumb.jpg' }
];





// movieData.js
export const movieDetails = {
  id: "20224",
  title: "Tiên Nghịch",
  originalTitle: "Xian Ni",
  thumb: "https://hoathinh3d.st",
  rating: "4.63",
  votes: "50520",
  year: "2023",
  totalEpisodes: "180 Tập",
  currentEpisode: "Tập 149",
  tags: ["CN Animation", "Cổ Trang", "Huyền Huyễn", "Tiên Hiệp"],
  commentsCount: "104.3k",
  watchHistory: {
    episodeName: "Tập 148",
    progress: 75, // Phần trăm tiến độ (75%)
    timeText: "15 phút / 20 phút"
  },
  parts: [
    { name: "Phần 1", url: "#", active: true },
    { name: "Phần 2", url: "#", active: false }
  ],
  servers: [
    {
      id: "sv1",
      name: "Server #1",
      isVip: false,
      episodes: [
        { name: "1", slug: "1", isWatched: true },
        { name: "2", slug: "2", isWatched: true },
        { name: "148", slug: "148", isWatched: true },
        { name: "149", slug: "149", isWatched: false }
      ]
    },
    {
      id: "sv-vip",
      name: "Server VIP",
      isVip: true,
      episodes: [
        { name: "148", slug: "148-vip", isWatched: false },
        { name: "149", slug: "149-vip", isWatched: false }
      ]
    }
  ]
};




// mockComments.js
export const initialComments1 = [
  {
    id: "1938672",
    uniqueId: "0_0",
    wrapClass: "wpd-blog-user wpd-blog-van_dinh_so",
    author: {
      name: "Ngọc Nguyễn4",
      avatar: "https://hoathinh3d.st",
      rankTitle: "Vấn Đỉnh《Sơ Kỳ》"
    },
    meta: {
      timeText: "4 giờ trước",
      timestamp: "14/07/2026 13:09",
      commentLink: "https://hoathinh3d.st"
    },
    content: "Hay quá 🥰🥰",
    votes: 0
  }
];
