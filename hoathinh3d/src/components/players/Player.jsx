// Player.jsx
import { useEffect, useRef, useState } from 'react';

// Nhập các tệp CSS hệ thống bắt buộc của Vidstack Default Layout
import '@vidstack/react/player/styles/base.css';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import '@vidstack/react/player/styles/default/layouts/audio.css';

import {
  isHLSProvider,
  MediaPlayer,
  MediaProvider,
  Poster,
  Track,
} from '@vidstack/react';
import {
  DefaultAudioLayout,
  defaultLayoutIcons,
  DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';

// Nhập mảng danh sách phụ đề/chapters của bộ phim Sprite Fight
//import { textTracks } from './tracks';

export function Player() {
  // SỬA ĐỔI: Loại bỏ hoàn toàn định nghĩa kiểu dữ liệu TypeScript <MediaPlayerInstance>
  const player = useRef(null);
  const [src, setSrc] = useState('');

  useEffect(() => {
    // Khởi tạo luồng phát mặc định ban đầu là luồng HLS m3u8
    changeSource('hls');

    if (!player.current) return;

    // Đăng ký theo dõi trạng thái hệ thống của Vidstack
    return player.current.subscribe(({ paused, viewType }) => {
      // console.log('Đang tạm dừng?', paused);
    });
  }, []);

  function onProviderChange(provider) {
    if (isHLSProvider(provider)) {
      // Tối ưu bộ nhớ đệm chống giật lag cho luồng m3u8 phim hoạt hình 3D
      provider.config = {
        maxBufferLength: 30,
        capLevelToPlayerSize: true,
      };
    }
  }

  function onCanPlay(detail) {
    // Luồng video đã sẵn sàng hoạt động
  }

  function changeSource(type) {
    switch (type) {
      case 'audio':
        setSrc('https://files.vidstack.io/sprite-fight/audio.mp3');
        break;
      case 'video':
        setSrc('https://files.vidstack.io/sprite-fight/720p.mp4');
        break;
      case 'hls':
        setSrc('https://v7.kkphimplayer7.com/20260614/WjJ76ZEe/index.m3u8');
        break;
      case 'youtube':
        setSrc('https://youtube.com');
        break;
      case 'vimeo':
        setSrc('https://vimeo.com');
        break;
      default:
        break;
    }
  }
  // <div className="w-full max-w-4xl mx-auto p-4 flex flex-col gap-4 font-sans text-white">
  //   </div>
  return (


    <>
      {/* 
        KHUNG MEDIA PLAYER CHÍNH TỐI ƯU HÓA BẰNG TAILWIND V4:
        - Thêm class 'group' để phục vụ hiệu ứng hover di chuột.
      */}

      <MediaPlayer
        className="player w-full aspect-video bg-slate-950 overflow-hidden rounded-lg ring-media-focus data-[focus]:ring-4 relative group"
        title="Sprite Fight"
        src={src}
        crossOrigin="anonymous"
        playsInline
        onProviderChange={onProviderChange}
        onCanPlay={onCanPlay}
        ref={player}
        // Tích hợp gán phím tắt: Bấm mũi tên Trái/Phải để tua lùi/tiến 5 giây toàn trang
        keyTarget="document"
        keyShortcuts={{
          seekBackward: 'ArrowLeft',
          seekForward: 'ArrowRight',
        }}
      >
        <MediaProvider>
          <Poster
            className="vds-poster absolute inset-0 block h-full w-full opacity-0 transition-opacity data-[visible]:opacity-100 object-cover pointer-events-none"
            src="https://files.vidstack.io/sprite-fight/poster.webp"
            alt="Sprite Fright Poster"
          />
          {textTracks && textTracks.map((track) => (
            <Track {...track} key={track.src} />
          ))}
        </MediaProvider>

        {/* 
          Hệ thống bố cục mặc định ăn liền của Vidstack:
          Tự động ẩn/hiện và chuyển đổi giao diện dựa trên định dạng nguồn phát (Audio hoặc Video)
        */}
        <DefaultAudioLayout icons={defaultLayoutIcons} />
        <DefaultVideoLayout
          icons={defaultLayoutIcons}
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
        />
      </MediaPlayer>

      {/* THANH ĐIỀU HƯỚNG CHUYỂN SERVER NGUỒN PHÁT (SERVER TẬP PHIM) */}
      <div className="flex flex-wrap gap-2 items-center justify-center bg-slate-900/60 p-3 rounded-lg border border-white/5">
        <span className="text-sm font-medium text-white/40 mr-2">Chọn Server:</span>
        <button onClick={() => changeSource('audio')} className={`px-4 py-2 text-xs font-semibold rounded-md border border-white/10 transition-colors cursor-pointer ${src.includes('audio') ? 'bg-red-600 text-white border-transparent' : 'bg-black/40 text-white/80 hover:bg-black/70'}`}>Audio MP3</button>
        <button onClick={() => changeSource('video')} className={`px-4 py-2 text-xs font-semibold rounded-md border border-white/10 transition-colors pointer-events-auto cursor-pointer ${src.includes('720p') ? 'bg-red-600 text-white border-transparent' : 'bg-black/40 text-white/80 hover:bg-black/70'}`}>Video MP4</button>
        <button onClick={() => changeSource('hls')} className={`px-4 py-2 text-xs font-semibold rounded-md border border-white/10 transition-colors pointer-events-auto cursor-pointer ${src.includes('hls') ? 'bg-red-600 text-white border-transparent' : 'bg-black/40 text-white/80 hover:bg-black/70'}`}>HLS (.m3u8)</button>
        <button onClick={() => changeSource('youtube')} className={`px-4 py-2 text-xs font-semibold rounded-md border border-white/10 transition-colors pointer-events-auto cursor-pointer ${src.includes('youtube') ? 'bg-red-600 text-white border-transparent' : 'bg-black/40 text-white/80 hover:bg-black/70'}`}>YouTube</button>
        <button onClick={() => changeSource('vimeo')} className={`px-4 py-2 text-xs font-semibold rounded-md border border-white/10 transition-colors pointer-events-auto cursor-pointer ${src.includes('vimeo') ? 'bg-red-600 text-white border-transparent' : 'bg-black/40 text-white/80 hover:bg-black/70'}`}>Vimeo</button>
      </div>
    </>
  );
}
