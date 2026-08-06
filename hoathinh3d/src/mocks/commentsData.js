// commentsData.js
export const initialComments = [
  {
    id: "1938808",
    author: "Văn Ma Tử",
    username: "@vanmatu",
    avatar: "/stickers/avatar_1.jpeg",
    realm: "Toái Niết《Trung Kỳ》",
    clanBadge: "/stickers/thuy-than.gif",
    clanName: "Lôi Tộc",
    appellation: "/stickers/dai-gia-moi-noi.webp",
    trueLove: "/stickers/thanh-moc-nguyen-than.png",
    flags: [
      { name: "Tử Diễm Hư Không (Cờ Tông Cấp 6)", src: "/stickers/co-7.webp", width: 35 }
    ],
    sect: "Khuy Niết Kiếm Khí",
    sectRole: "Ngoại Môn",
    swords: [
      { name: "Sát Lục Kiếm", src: "https://hoathinh3d.st/wp-content/uploads/2026/02/kiem-tien-ly-bach-1.webp", flip: true },
      { name: "Thái Cổ Thanh Long", src: "/stickers/thai-co-thanh-long.webp", flip: true },
      { name: "Thái Cổ Thanh Long", src: "/stickers/thai-co-thanh-long.webp", flip: true },
      { name: "Thái Cổ Thanh Long", src: "/stickers/thai-co-thanh-long.webp", flip: true },
      { name: "Thái Cổ Thanh Long", src: "/stickers/thai-co-thanh-long.webp", flip: true },
      { name: "Thái Cổ Thanh Long", src: "/stickers/thai-co-thanh-long.webp", flip: true },
      { name: "Thái Cổ Thanh Long", src: "/stickers/thai-co-thanh-long.webp", flip: true },
      { name: "Thái Cổ Thanh Long", src: "/stickers/thai-co-thanh-long.webp", flip: true },
    ],
    date: "1 giờ trước",
    fullDate: "14/07/2026 19:20",
    text: '[sticker id="1056"]Mần thịt huyết tổ',
    votes: 12,

    // --- KHỚP 100% THEO ĐOẠN CSS TOÁI NIẾT MỚI GỬI ---
    blogStyle: "toai_niet_trung",    // Kích hoạt class cha: wpd-blog-toai_niet_trung
    nameColorClass: "comment-author1",              // Không cần gán class màu lẻ vì class cha đã quản lý tên tác giả
    sectColorClass: "bang-hoi-mau-tu-linh-quang",
    avatarFrameClass: "khung_vip_2",
    isReply: false,
    // --- MẢNG REPLIES (MOCK DATA CHO BÌNH LUẬN CẤP 2) ---
    replies: [
      {
        id: "1943693",
        author: "Dương Hoàng1",
        username: "@duonghoang1",
        avatar: "/stickers/avatar_1.jpeg",
        realm: "Phàm Nhân",
        clanBadge: "",
        clanName: "",
        flags: [],
        sect: "",
        sectRole: "",
        swords: [],
        date: "3 giây trước",
        fullDate: "22/07/2026 17:35",
        text: '[sticker id="1042"]',
        votes: 0,
        blogStyle: "user",
        nameColorClass: "",
        sectColorClass: "",
        avatarFrameClass: "top_1_dua_top_tm",
        isReply: false,

        // Thông tin người được trả lời
        replyTo: {
          id: "1938808",
          author: "Văn Ma Tử",
          clanBadge: "/stickers/thuy-than.gif",
          clanName: "Lôi Tộc",
          flags: [
            { name: "Lục Hồn Thánh Kỳ (Cờ Tông Cấp 3)", src: "/stickers/co-7.webp", width: 30 },
            { name: "Liệt Diệm Thánh Kỳ (Cờ Tông Cấp 4)", src: "/stickers/co-7.webp", width: 30 },
            { name: "Băng Hoa Linh Vũ (Cờ Tông Cấp 5)", src: "/stickers/co-7.webp", width: 40 },
            { name: "Tử Diễm Hư Không (Cờ Tông Cấp 6)", src: "/stickers/co-7.webp", width: 35 }
          ],
          sect: "Khuy Niết Kiếm Khí",
          sectRole: "Ngoại Môn",
          sectUrl: "/tong-mon/504156",
          isReply: false
        },
        replies: [
          {
            id: "1943694",
            author: "Dương Hoàng2",
            username: "@duonghoang2",
            avatar: "/stickers/avatar_1.jpeg",
            realm: "Phàm Nhân",
            clanBadge: "",
            clanName: "",
            flags: [],
            sect: "",
            sectRole: "",
            swords: [],
            date: "3 giây trước",
            fullDate: "22/07/2026 17:35",
            text: '[sticker id="1042"]',
            votes: 0,
            blogStyle: "user",
            nameColorClass: "",
            sectColorClass: "",
            avatarFrameClass: "khung_vip_2",
            isReply: false,

            // Thông tin người được trả lời
            replyTo: {
              id: "1938808",
              author: "Dương Hoàng1",
              clanBadge: "/stickers/thuy-than.gif",
              clanName: "Lôi Tộc",
              flags: [
                { name: "Lục Hồn Thánh Kỳ (Cờ Tông Cấp 3)", src: "/stickers/co-7.webp", width: 30 },
                { name: "Liệt Diệm Thánh Kỳ (Cờ Tông Cấp 4)", src: "/stickers/co-7.webp", width: 30 },
                { name: "Băng Hoa Linh Vũ (Cờ Tông Cấp 5)", src: "/stickers/co-7.webp", width: 40 },
                { name: "Tử Diễm Hư Không (Cờ Tông Cấp 6)", src: "/stickers/co-7.webp", width: 35 }
              ],
              sect: "Khuy Niết Kiếm Khí",
              sectRole: "Ngoại Môn",
              sectUrl: "/tong-mon/504156",
              isReply: false
            }
          }
        ]
      }
    ]
  }
];

export const REACTION_TYPES = [
  { id: 'like', label: 'Thích', icon: '/stickers/like.svg' },
  { id: 'love', label: 'Yêu thích', icon: '/stickers/love.svg' },
  { id: 'haha', label: 'Haha', icon: '/stickers/haha.svg' },
  { id: 'wow', label: 'Bái phục', icon: '/stickers/wow.svg' },
  { id: 'sad', label: 'U sầu', icon: '/stickers/sad.svg' },
  { id: 'wrath', label: 'Phẫn nộ', icon: '/stickers/wrath.svg' },
  { id: 'lovelove', label: 'Thương thương', icon: '/stickers/lovelove.svg' },
];


export const initialComments1 = [
  {
    id: "1947220",
    userId: "156392",
    author: "ღDương Kon𓆤",
    username: "@DuongKon",
    avatar: "/stickers/avatar_1.jpeg",
    avatarFrameClass: "khung_vip_2",
    blogStyle: "thai_at", // Sẽ tạo class wpd-blog-thai_at
    levelClass: "wpd_comment_level-1",
    vipWrapClass: "wrap-vip-24-month",
    realm: "Thái Ất《Sơ Kỳ》",
    vipBgUrl: "url(/stickers/70781.webp)",

    // Pháp tướng
    phapTuong: {
      name: "Phượng Cửu Thiên",
      src: "/stickers/thanh-moc-nguyen-than.png",
      rankClass: "phap-tuong-rank-s",
      cmtClass: "phap-tuong-46-cmt",
      width: "70px"
    },

    // Danh hiệu
    appellation: {
      name: "Đại Gia Mới Nổi",
      src: "/stickers/dai-gia-moi-noi.webp",
      cmtClass: "danh-hieu-5-cmt",
      mobileClass: "danh-hieu-5-mobile",
      width: "100px"
    },

    // Nhẫn & Hồng Nhan
    ring: {
      name: "Vĩnh Dạ Minh Châu",
      src: "/stickers/vinh-da-minh-chau.png",
      ringW: "50px"
    },
    hongNhan: {
      name: "Điệp Linh Giới",
      src: "/stickers/diep-linh-gioi.webp",
      ringW: "50px"
    },
    tinhLu: [{ name:"Tình Lữ 013", src:"/stickers/cp-tt-013.webp"}, { name:"Tình Lữ Tử Hà", src:"/stickers/tien-nu-tu-ha-limited.webp"}],

    // Chủng tộc & Tông môn
    clanBadge: "/stickers/nhan-toc.gif",
    clanName: "Nhân Tộc",
    isVerified: true,
    sect: {
      name: "PHÀM NHÂN",
      id: "643208",
      role: "Ngoại Môn",
      customColorId: "643208",
      flagImg: "/stickers/co-7.webp",
      flagTooltip: "Tông Cấp 7"
    },

    // Badges lồng nhau (Composed Badges)
    badges: [
      {
        id: "badge-1",
        label: "Tư Đồ Nam Xích Thố (Tết 2026)",
        mainImg: "/stickers/tu-do-nam.webp",
        layers: [
          {
            src: "/stickers/linh-tran-cap-4.gif",
            width: "24px", height: "24px", left: "calc(50% + 19px - 12px)", top: "calc(50% + -7px - 12px)",
            transform: "rotate(0deg) scale(0.56)", zIndex: 110,
            previewWidth: "75px", previewHeight: "75px", previewLeft: "calc(50% + 61px - 37px)", previewTop: "calc(50% + -21px - 37px)"
          },
          {
            src: "/stickers/xich-tho-ma.webp",
            width: "24px", height: "24px", left: "calc(50% - 3px - 12px)", top: "calc(50% + 17px - 12px)",
            transform: "rotate(0deg) scale(1.33)", zIndex: 110,
            previewWidth: "75px", previewHeight: "75px", previewLeft: "calc(50% + -37px - 37px)", previewTop: "calc(50% + 61px - 37px)"
          }
        ]
      },
      {
        id: "badge-3",
        label: "Tư Đồ Nam & Linh Hồ",
        mainImg: "/stickers/tu-do-nam.webp",
        layers: [
          {
            src: "/stickers/linh-tran-cap-4.gif",
            width: "24px", height: "24px", left: "calc(50% + 19px - 12px)", top: "calc(50% + -7px - 12px)",
            transform: "rotate(0deg) scale(0.56)", zIndex: 110,
            previewWidth: "75px", previewHeight: "75px", previewLeft: "calc(50% + 61px - 37px)", previewTop: "calc(50% + -21px - 37px)"
          },
          {
            src: "/stickers/thanh-diem-linh-ho.webp",
            width: "24px", height: "24px", left: "calc(50% + 19px - 12px)", top: "calc(50% + -7px - 12px)",
            transform: "rotate(20deg) scale(-1.99, 1.99)", zIndex: 110,
            previewWidth: "75px", previewHeight: "75px", previewLeft: "calc(50% + 61px - 37px)", previewTop: "calc(50% + 21px - 37px)"
          }
        ]
      },
      {
        id: "badge-4",
        label: "Tư Đồ Name Thần Kiếm (Tết 2026)",
        mainImg: "/stickers/tu-do-nam.webp",
        layers: [
          {
            src: "/stickers/chan-long-than-kiem.webp",
            width: "24px", height: "24px", left: "calc(50% + 21px - 12px)", top: "calc(50% + 0px - 12px)",
            transform: "rotate(163deg) scale(0.83)", zIndex: 110,
            previewWidth: "75px", previewHeight: "75px", previewLeft: "calc(50% + 68px - 37px)", previewTop: "calc(50% + 0px - 37px)"
          }
        ]
      },
      {
        id: "badge-5",
        label: "Tư Đồ Name Linh Trần (Tết 2026)",
        mainImg: "/stickers/tu-do-nam.webp",
        layers: [
          {
            src: "/stickers/linh-tran-cap-4.gif",
            width: "24px", height: "24px", left: "calc(50% + 19px - 12px)", top: "calc(50% + -7px - 12px)",
            transform: "rotate(0deg) scale(0.56)", zIndex: 110,
            previewWidth: "75px", previewHeight: "75px", previewLeft: "calc(50% + 61px - 37px)", previewTop: "calc(50% + -21px - 37px)"
          }
        ]
      },
      {
        id: "badge-2",
        label: "Ngộ Không : Đấu Chiến Thắng Phật (Limited)",
        mainImg: "/stickers/ngo-khong-dau-chien-thang-phat.webp",
        layers: [
          {
            src: "/stickers/than-tang-co-kinh.webp",
            width: "24px", height: "24px", left: "calc(50% + 0px - 12px)", top: "calc(50% + -22px - 12px)",
            transform: "rotate(181deg) scale(0.99)", zIndex: 110,
            previewWidth: "75px", previewHeight: "75px", previewLeft: "calc(50% + 0px - 37px)", previewTop: "calc(50% + -69px - 37px)"
          }
        ]
      },
      {
        id: "badge-6",
        label: "Băng Phách Thần Quang Kiếm (Limited)",
        mainImg: "/stickers/bang-phach-than-quang-kiem.webp",
        style: {height: "84px"}
      }
    ],

    date: "23 giờ trước",
    fullDate: "29/07/2026 12:03",
    text: '[sticker id="1057"] Hellllloo',
    votes: 0,
    replies: [
      {
        id: "1943693",
        author: "Dương Hoàng1",
        username: "@duonghoang1",
        avatar: "/stickers/avatar_1.jpeg",
        realm: "Phàm Nhân",
        clanBadge: "",
        clanName: "",
        flags: [],
        sect: "",
        sectRole: "",
        swords: [],
        date: "3 giây trước",
        fullDate: "22/07/2026 17:35",
        text: '[sticker id="1042"]',
        votes: 0,
        blogStyle: "user",
        nameColorClass: "",
        sectColorClass: "",
        avatarFrameClass: "top_1_dua_top_tm",
        isReply: false,

        // Thông tin người được trả lời
        replyTo: {
          id: "1938808",
          author: "Văn Ma Tử",
          clanBadge: "/stickers/thuy-than.gif",
          clanName: "Lôi Tộc",
          flags: [
            { name: "Lục Hồn Thánh Kỳ (Cờ Tông Cấp 3)", src: "/stickers/co-7.webp", width: 30 },
            { name: "Liệt Diệm Thánh Kỳ (Cờ Tông Cấp 4)", src: "/stickers/co-7.webp", width: 30 },
            { name: "Băng Hoa Linh Vũ (Cờ Tông Cấp 5)", src: "/stickers/co-7.webp", width: 40 },
            { name: "Tử Diễm Hư Không (Cờ Tông Cấp 6)", src: "/stickers/co-7.webp", width: 35 }
          ],
          sect: "Khuy Niết Kiếm Khí",
          sectRole: "Ngoại Môn",
          sectUrl: "/tong-mon/504156",
          isReply: false
        },
        replies: [
          {
            id: "1943694",
            author: "Dương Hoàng2",
            username: "@duonghoang2",
            avatar: "/stickers/avatar_1.jpeg",
            realm: "Phàm Nhân",
            clanBadge: "",
            clanName: "",
            flags: [],
            sect: "",
            sectRole: "",
            swords: [],
            date: "3 giây trước",
            fullDate: "22/07/2026 17:35",
            text: '[sticker id="1042"]',
            votes: 0,
            blogStyle: "user",
            nameColorClass: "",
            sectColorClass: "",
            avatarFrameClass: "khung_vip_2",
            isReply: false,

            // Thông tin người được trả lời
            replyTo: {
              id: "1938808",
              author: "Dương Hoàng1",
              clanBadge: "/stickers/thuy-than.gif",
              clanName: "Lôi Tộc",
              flags: [
                { name: "Lục Hồn Thánh Kỳ (Cờ Tông Cấp 3)", src: "/stickers/co-7.webp", width: 30 },
                { name: "Liệt Diệm Thánh Kỳ (Cờ Tông Cấp 4)", src: "/stickers/co-7.webp", width: 30 },
                { name: "Băng Hoa Linh Vũ (Cờ Tông Cấp 5)", src: "/stickers/co-7.webp", width: 40 },
                { name: "Tử Diễm Hư Không (Cờ Tông Cấp 6)", src: "/stickers/co-7.webp", width: 35 }
              ],
              sect: "Khuy Niết Kiếm Khí",
              sectRole: "Ngoại Môn",
              sectUrl: "/tong-mon/504156",
              isReply: false
            }
          }
        ]
      }
    ]
  }
];
