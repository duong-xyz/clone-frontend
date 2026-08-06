// video-layout.jsx
import captionStyles from './captions.module.css';
import styles from './video-layout.module.css';

import { Captions, Controls, Gesture } from '@vidstack/react';

// Nhập các mảnh ghép linh kiện từ các tệp JavaScript đã tạo trước đó
import * as Buttons from '../Buttons';         // Sửa lại đường dẫn tương ứng với cấu trúc thư mục của bạn
import * as Menus from '../Menus';             // (Ví dụ: nếu chung thư mục thì đổi thành './buttons', './menus')
import * as Sliders from '../Sliders';
import { TimeGroup } from '../TimeGroup';
import { Title } from '../Title';

export function VideoLayout({ thumbnails }) {
  return (
    <>
      {/* Kích hoạt hệ thống cử chỉ chuột / chạm cảm ứng */}
      <Gestures />

      {/* Khu vực hiển thị phụ đề phim */}
      <Captions
        className={`${captionStyles.captions} media-preview:opacity-0 media-controls:bottom-[85px] media-captions:opacity-100 absolute inset-0 bottom-2 z-10 select-none break-words opacity-0 transition-[opacity,bottom] duration-300`}
      />

      {/* Bọc bộ điều khiển Controls */}
      {/* Thay thế hoàn toàn thẻ Controls.Root cũ bằng dòng dưới đây */}
<Controls.Root
  className="absolute inset-0 z-20 flex h-full w-full flex-col bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 data-[visible]:opacity-100 transition-opacity duration-300 pointer-events-none data-[visible]:pointer-events-auto"
>

        <div className="flex-1" />
        
        {/* Hàng 1: Thanh trượt tiến trình phim (TimeSlider) */}
        <Controls.Group className="flex w-full items-center px-2">
          <Sliders.Time thumbnails={thumbnails} />
        </Controls.Group>
        
        {/* Hàng 2: Cụm nút chức năng bên dưới */}
        <Controls.Group className="-mt-0.5 flex w-full items-center px-2 pb-2">
          <Buttons.Play tooltipPlacement="top start" />
          <Buttons.Mute tooltipPlacement="top" />
          <Sliders.Volume />
          <TimeGroup />
          <Title />
          
          <div className="flex-1" /> {/* Khoảng trống đẩy cụm nút sau về bên phải */}
          
          <Buttons.Caption tooltipPlacement="top" />
          <Menus.Settings placement="top end" tooltipPlacement="top" />
          <Buttons.PIP tooltipPlacement="top" />
          <Buttons.Fullscreen tooltipPlacement="top end" />
        </Controls.Group>
      </Controls.Root>
    </>
  );
}

// Định nghĩa hệ thống Phím tắt / Cử chỉ trên màn hình phát phim
function Gestures() {
  return (
    <>
      {/* Click 1 lần vào màn hình: Phát / Tạm dừng phim */}
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="pointerup"
        action="toggle:paused"
      />
      {/* Nhấp đúp vào giữa màn hình: Bật / Tắt Toàn màn hình */}
      <Gesture
        className="absolute inset-0 z-0 block h-full w-full"
        event="dblpointerup"
        action="toggle:fullscreen"
      />
      {/* Nhấp đúp 1/5 màn hình bên trái: Tua lùi lại 10 giây */}
      <Gesture
        className="absolute left-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:-10"
      />
      {/* Nhấp đúp 1/5 màn hình bên phải: Tua tiến lên 10 giây */}
      <Gesture
        className="absolute right-0 top-0 z-10 block h-full w-1/5"
        event="dblpointerup"
        action="seek:10"
      />
    </>
  );
}
