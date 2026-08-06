//import '@vidstack/react/player/styles/default/theme.css';
//import '@vidstack/react/player/styles/default/layouts/video.css';
// Base styles for media player and provider (~400B).
import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/plyr/theme.css';

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';

// Bộ icon custom của bạn (Chuyển sang cú pháp JavaScript thuần)
const customIcons = {
    ...plyrLayoutIcons, // Kế thừa các icon mặc định
    // Bạn có thể đè SVG của riêng bạn vào đây nếu muốn thay đổi hình dáng nút:
    // Play: MyPlaySVG,
    // Pause: MyPauseSVG,
};

export default function HH3DPlayer({ src, poster }) {
    // Đặt Object này ở ngoài Component (ngang hàng với customIcons)
    // ĐỔI LẠI CÁC TỪ KHÓA CHUẨN ĐỂ VIỆT HÓA TOÀN DIỆN MENU POPUP
const plyrTranslations = {
  settings: 'Cài đặt',
  play: 'Phát',
  pause: 'Tạm dừng',
  mute: 'Tắt tiếng',
  unmute: 'Bật tiếng',
  
  // SỬA ĐỔI CHÍNH XÁC CÁC PHẦN TỬ TRONG MENU CÀI ĐẶT:
  speed: 'Tốc độ phát',    // Việt hóa chữ Speed ngoài menu tổng
  normal: 'Bình thường',  // Việt hóa chữ Normal hiển thị ở tùy chọn tốc độ gốc
  quality: 'Chất lượng',  // Việt hóa chữ Quality chọn luồng phim m3u8
  auto: 'Tự động',        // Việt hóa chữ Auto trong danh sách chất lượng
  
  loop: 'Lặp lại',
  captions: 'Phụ đề',
  disabled: 'Tắt',
  enabled: 'Bật',
  
  enterFullscreen: 'Toàn màn hình',
  exitFullscreen: 'Thoát toàn màn hình',
  pip: 'Ảnh trong ảnh',
  rewind: 'Lùi 5s',
  fastForward: 'Tiến 5s'
};



    return (
        <MediaPlayer
            title="Tập 149 - Tiên Nghịch"
            poster="https://q1.itc.cn/images01/20250301/a179ff3de16d41148bed74947b1d3d66.jpeg"
            aspectRatio="16/9"
            playsInline
            crossOrigin="anonymous"
            src="https://v7.kkphimplayer7.com/20260614/WjJ76ZEe/index.m3u8"
            // BẮT BUỘC: Lắng nghe phím tắt trên toàn bộ trang web kể cả khi click ra ngoài
            keyTarget="document"
            keyShortcuts={{
                togglePaused: 'k Space',     // Bấm phím 'k' hoặc phím 'Space' (Cá ngựa) để Play/Pause giống YouTube
                toggleMuted: 'm',            // Bấm phím 'm' để Bật/Tắt tiếng
                toggleFullscreen: 'f',       // Bấm phím 'f' để Bật/Thoát toàn màn hình
                seekBackward: 'ArrowLeft',   // Bấm mũi tên Trái để Tua lùi lại 5 giây
                seekForward: 'ArrowRight',   // Bấm mũi tên Phải để Tua tiến lên 5 giây
                volumeUp: 'ArrowUp',         // Bấm mũi tên Lên để Tăng 5% âm lượng
                volumeDown: 'ArrowDown',     // Bấm mũi tên Xuống để Giảm 5% âm lượng
            }}
        >
            <MediaProvider />
            <PlyrLayout
                clickToPlay={true}
                seekTime={5}
                thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
                icons={customIcons}
                translations={plyrTranslations}
                />
                 
        </MediaPlayer>
    );
}
