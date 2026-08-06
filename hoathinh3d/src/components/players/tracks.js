// tracks.js
export const textTracks = [
  // Subtitles (Danh sách tệp phụ đề hiển thị khi xem phim)
  {
    src: 'https://files.vidstack.io/sprite-fight/subs/english.vtt',
    label: 'English',
    language: 'en-US',
    kind: 'subtitles',
    default: true,
  },
  {
    src: 'https://files.vidstack.io/sprite-fight/subs/spanish.vtt',
    label: 'Spanish',
    language: 'es-ES',
    kind: 'subtitles',
  },
  // Chapters (Danh sách phân đoạn tập phim - chia nhỏ thanh trượt thời gian)
  // {
  //   src: 'https://files.vidstack.io/sprite-fight/chapters.vtt',
  //   kind: 'chapters',
  //   language: 'en-US',
  //   default: true,
  // },
];
