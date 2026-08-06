// video-layout.jsx (Phần 1/5)
import { 
  Controls, 
  Gesture, 
  useMediaPlayer,
  PlayButton,
  MuteButton,
  CaptionButton,
  PIPButton,
  FullscreenButton,
  Tooltip,
  useMediaState,
  isTrackCaptionKind,
  Menu,
  useCaptionOptions,
  TimeSlider,
  VolumeSlider,
  Time,
  ChapterTitle
} from '@vidstack/react';
import {
  PlayIcon,
  PauseIcon,
  MuteIcon,
  VolumeLowIcon,
  VolumeHighIcon,
  ClosedCaptionsIcon,
  ClosedCaptionsOnIcon,
  PictureInPictureIcon,
  PictureInPictureExitIcon,
  FullscreenIcon,
  FullscreenExitIcon,
  SettingsIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  RadioButtonIcon,
  RadioButtonSelectedIcon
} from '@vidstack/react/icons';

// Các biến lớp CSS dùng chung cho nút bấm, Tooltip hướng dẫn và Menu popup cài đặt
const buttonClass = 'group ring-media-focus relative inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-md outline-none ring-inset hover:bg-white/20 data-[focus]:ring-4';
const tooltipClass = 'animate-out fade-out slide-out-to-bottom-2 data-[visible]:animate-in data-[visible]:fade-in data-[visible]:slide-in-from-bottom-4 z-10 rounded-sm bg-black/90 px-2 py-0.5 text-sm font-medium text-white parent-data-[open]:hidden';
const menuClass = 'animate-out fade-out slide-out-to-bottom-2 data-[open]:animate-in data-[open]:fade-in data-[open]:slide-in-from-bottom-4 flex h-[var(--menu-height)] max-h-[400px] min-w-[260px] flex-col overflow-y-auto overscroll-y-contain rounded-md border border-white/10 bg-black/95 p-2.5 font-sans text-[15px] font-medium outline-none backdrop-blur-sm transition-[height] duration-300 will-change-[height] data-[resizing]:overflow-hidden';
const submenuClass = 'hidden w-full flex-col items-start justify-center outline-none data-[keyboard]:mt-[3px] data-[open]:inline-block';
// video-layout.jsx (Phần 2/5)
export function VideoLayout({ thumbnails, titleMovie = "Tập 149 - Tiên Nghịch" }) {
  const player = useMediaPlayer();
  const isPaused = useMediaState('paused');
  const volume = useMediaState('volume');
  const isMuted = useMediaState('muted');
  const track = useMediaState('textTrack');
  const isCaptionOn = track && isTrackCaptionKind(track);
  const isPipActive = useMediaState('pictureInPicture');
  const isFullscreenActive = useMediaState('fullscreen');
  const captionOptions = useCaptionOptions();
  const captionHint = captionOptions.selectedTrack?.label ?? 'Off';

  return (
    <>
      {/* HỆ THỐNG CỬ CHỈ CHẠM / NHẤP CHUỘT TRÊN MÀN HÌNH */}
      <Gesture className="absolute inset-0 z-0 block h-full w-full" event="pointerup" action="toggle:paused" />
      <Gesture className="absolute inset-0 z-0 block h-full w-full" event="dblpointerup" action="toggle:fullscreen" />
      <Gesture className="absolute left-0 top-0 z-10 block h-full w-1/5" event="dblpointerup" action="seek:-10" />
      <Gesture className="absolute right-0 top-0 z-10 block h-full w-1/5" event="dblpointerup" action="seek:10" />

      {/* LỚP BỌC ĐIỀU KHIỂN CHÍNH (CONTROLS ROOT) */}
      <Controls.Root className="absolute inset-0 z-20 flex h-full w-full flex-col bg-gradient-to-t from-black/90 via-transparent to-black/60 opacity-0 data-[visible]:opacity-100 transition-opacity duration-300 pointer-events-none data-[visible]:pointer-events-auto font-sans">
        
        {/* THANH TRÊN ĐỈNH: HIỂN THỊ TIÊU ĐỀ PHIM & NÚT DANH SÁCH TẬP */}
        <div className="flex w-full items-center justify-between px-4 pt-4 text-white">
          <span className="text-base font-semibold drop-shadow-md select-none">{titleMovie}</span>
          <button className="flex items-center gap-1.5 bg-black/40 hover:bg-black/60 px-3 py-1.5 rounded-md text-xs font-medium border border-white/10 transition-colors pointer-events-auto cursor-pointer">
            <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Danh sách tập
          </button>
        </div>

        <div className="flex-1" />
// video-layout.jsx (Phần 3/5)
        {/* KHU VỰC THANH ĐIỀU KHIỂN ĐÁY (BOTTOM CONTROLS) */}
        <div className="w-full px-4 pb-4 flex flex-col gap-1">
          
          {/* HÀNG TRÊN: THANH TUA PHIM TRẢI DÀI ĐỘC LẬP */}
          <div className="w-full pointer-events-auto">
            <TimeSlider.Root className="time-slider group relative mx-[7.5px] inline-flex h-10 w-full cursor-pointer touch-none select-none items-center outline-none">
              <TimeSlider.Chapters className="relative flex h-full w-full items-center rounded-[1px]">
                {(cues, forwardRef) =>
                  cues.map((cue) => (
                    <div className="last-child:mr-0 relative mr-0.5 flex h-full w-full items-center rounded-[1px]" style={{ contain: 'layout style' }} key={cue.startTime} ref={forwardRef}>
                      <TimeSlider.Track className="relative z-0 h-[5px] w-full rounded-sm bg-white/30">
                        {/* Thanh đổ màu đỏ thương hiệu đã cấu hình qua Tailwind v4 */}
                        <TimeSlider.TrackFill className="bg-media-brand absolute h-full w-[var(--chapter-fill)] rounded-sm will-change-[width]" />
                        <TimeSlider.Progress className="absolute z-10 h-full w-[var(--chapter-progress)] rounded-sm bg-white/50 will-change-[width]" />
                      </TimeSlider.Track>
                    </div>
                  ))
                }
              </TimeSlider.Chapters>
              <TimeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[left]" />
              
              {/* Khung ảnh xem trước thu nhỏ và tiêu đề phân đoạn khi di chuột vào thanh tua */}
              <TimeSlider.Preview className="flex flex-col items-center opacity-0 transition-opacity duration-200 data-[visible]:opacity-100 pointer-events-none">
                {thumbnails && (
                  <TimeSlider.Thumbnail.Root src={thumbnails} className="block h-[var(--thumbnail-height)] max-h-[160px] min-h-[80px] w-[var(--thumbnail-width)] min-w-[120px] max-w-[180px] overflow-hidden border border-white bg-black">
                    <TimeSlider.Thumbnail.Img />
                  </TimeSlider.Thumbnail.Root>
                )}
                <TimeSlider.ChapterTitle className="mt-2 text-sm text-white" />
                <TimeSlider.Value className="text-[13px] text-white" />
              </TimeSlider.Preview>
            </TimeSlider.Root>
          </div>

          {/* MỞ ĐẦU HÀNG DƯỚI: NƠI CHỨA CÁC CỤM NÚT BẤM CHỨC NĂNG */}
          <div className="w-full flex items-center justify-between pointer-events-auto -mt-1">
// video-layout.jsx (Phần 4/5)
            {/* CỤM NÚT CHỨC NĂNG BÊN TRÁI */}
            <div className="flex items-center gap-2">
              {/* Nút Phát / Tạm dừng phim (Play / Pause) */}
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <PlayButton className={buttonClass}>
                    {isPaused ? <PlayIcon className="w-8 h-8" /> : <PauseIcon className="w-8 h-8" />}
                  </PlayButton>
                </Tooltip.Trigger>
                <Tooltip.Content className={tooltipClass} placement="top start">{isPaused ? 'Play' : 'Pause'}</Tooltip.Content>
              </Tooltip.Root>

              {/* Nút chức năng Tua lùi lại 5 giây thực tế */}
              <button onClick={() => player && (player.currentTime -= 5)} className="text-white opacity-80 hover:opacity-100 p-1 cursor-pointer transition-opacity" title="Lùi 5s">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.334 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                </svg>
              </button>

              {/* Nút chức năng Tua tiến lên 5 giây thực tế */}
              <button onClick={() => player && (player.currentTime += 5)} className="text-white opacity-80 hover:opacity-100 p-1 cursor-pointer transition-opacity" title="Tiến 5s">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 005 8v8a1 1 0 001.6.8l5.334-4zM19.934 12.8a1 1 0 000-1.6l-5.334-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.334-4z" />
                </svg>
              </button>

              {/* Nút Bật / Tắt âm thanh (Mute / Unmute) */}
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <MuteButton className={buttonClass}>
                    {isMuted || volume === 0 ? <MuteIcon className="w-8 h-8" /> : volume < 0.5 ? <VolumeLowIcon className="w-8 h-8" /> : <VolumeHighIcon className="w-8 h-8" />}
                  </MuteButton>
                </Tooltip.Trigger>
                <Tooltip.Content className={tooltipClass} placement="top">{isMuted ? 'Unmute' : 'Mute'}</Tooltip.Content>
              </Tooltip.Root>

              {/* Thanh điều trượt tăng giảm âm lượng (VolumeSlider) */}
              <VolumeSlider.Root className="volume-slider group relative mx-[7.5px] inline-flex h-10 w-full max-w-[80px] cursor-pointer touch-none select-none items-center outline-none aria-hidden:hidden">
                <VolumeSlider.Track className="relative z-0 h-[5px] w-full rounded-sm bg-white/30">
                  <VolumeSlider.TrackFill className="bg-media-brand absolute h-full w-[var(--slider-fill)] rounded-sm will-change-[width]" />
                </VolumeSlider.Track>
                <VolumeSlider.Preview className="flex flex-col items-center opacity-0 transition-opacity duration-200 data-[visible]:opacity-100 pointer-events-none" noClamp>
                  <VolumeSlider.Value className="rounded-sm bg-black px-2 py-px text-[13px] font-medium" />
                </VolumeSlider.Preview>
                <VolumeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 z-20 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#cacaca] bg-white opacity-0 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:ring-4 will-change-[left]" />
              </VolumeSlider.Root>

              {/* Bộ đếm hiển thị Thời gian thực / Tổng thời lượng phim */}
              <div className="ml-1.5 flex items-center text-sm font-medium text-white/90 select-none">
                <Time className="time" type="current" />
                <div className="mx-1 text-white/60">/</div>
                <Time className="time" type="duration" />
              </div>

              {/* Dòng text hiển thị tiêu đề của chương/phân đoạn phim đang chạy */}
              <span className="inline-block flex-1 overflow-hidden text-ellipsis whitespace-nowrap px-2 text-sm font-medium text-white/70 select-none">
                <span className="mr-1">|</span>
                <ChapterTitle />
              </span>
            </div>
// video-layout.jsx (Phần 5/5)
            {/* CỤM NÚT CHỨC NĂNG BÊN PHẢI */}
            <div className="flex items-center gap-2">
              {/* Nút Bật / Tắt Phụ đề (Captions Button) */}
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <CaptionButton className={buttonClass}>
                    {isCaptionOn ? <ClosedCaptionsOnIcon className="w-8 h-8" /> : <ClosedCaptionsIcon className="w-8 h-8" />}
                  </CaptionButton>
                </Tooltip.Trigger>
                <Tooltip.Content className={tooltipClass} placement="top">{isCaptionOn ? 'Captions Off' : 'Captions On'}</Tooltip.Content>
              </Tooltip.Root>

              {/* Menu popup Cài đặt (Settings Menu) chứa nhánh chọn Phụ đề */}
              <Menu.Root className="parent">
                <Tooltip.Root>
                  <Tooltip.Trigger asChild>
                    <Menu.Button className={buttonClass}>
                      <SettingsIcon className="h-8 w-8 transform transition-transform duration-200 ease-out group-data-[open]:rotate-90" />
                    </Menu.Button>
                  </Tooltip.Trigger>
                  <Tooltip.Content className={tooltipClass} placement="top">Settings</Tooltip.Content>
                </Tooltip.Root>
                <Menu.Content className={menuClass} placement="top end">
                  <Menu.Root>
                    <Menu.Button className="ring-media-focus parent left-0 z-10 flex w-full cursor-pointer select-none items-center justify-start rounded-sm bg-black/60 p-2.5 outline-none ring-inset data-[open]:sticky data-[open]:-top-2.5 data-[hocus]:bg-white/10 data-[focus]:ring-[3px] aria-disabled:hidden" disabled={captionOptions.disabled}>
                      <ChevronLeftIcon className="parent-data-[open]:block -ml-0.5 mr-1.5 hidden h-[18px] w-[18px]" />
                      <div className="contents parent-data-[open]:hidden"><ClosedCaptionsIcon className="w-5 h-5" /></div>
                      <span className="ml-1.5 parent-data-[open]:ml-0">Captions</span>
                      <span className="ml-auto text-sm text-white/50">{captionHint}</span>
                      <ChevronRightIcon className="parent-data-[open]:hidden ml-0.5 h-[18px] w-[18px] text-sm text-white/50" />
                    </Menu.Button>
                    <Menu.Content className={submenuClass}>
                      <Menu.RadioGroup className="w-full flex flex-col" value={captionOptions.selectedValue}>
                        {captionOptions.map(({ label, value, select }) => (
                          <Menu.Radio className="ring-media-focus group relative flex w-full cursor-pointer select-none items-center justify-start rounded-sm p-2.5 outline-none data-[hocus]:bg-white/10 data-[focus]:ring-[3px]" value={value} onSelect={select} key={value}>
                            <RadioButtonIcon className="h-4 w-4 text-white group-data-[checked]:hidden" />
                            <RadioButtonSelectedIcon className="text-media-brand hidden h-4 w-4 group-data-[checked]:block" />
                            <span className="ml-2">{label}</span>
                          </Menu.Radio>
                        ))}
                      </Menu.RadioGroup>
                    </Menu.Content>
                  </Menu.Root>
                </Menu.Content>
              </Menu.Root>

              {/* Nút Thu nhỏ màn hình góc (Picture-in-Picture Button) */}
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <PIPButton className={buttonClass}>
                    {isPipActive ? <PictureInPictureExitIcon className="w-8 h-8" /> : <PictureInPictureIcon className="w-8 h-8" />}
                  </PIPButton>
                </Tooltip.Trigger>
                <Tooltip.Content className={tooltipClass} placement="top">{isPipActive ? 'Exit PIP' : 'Enter PIP'}</Tooltip.Content>
              </Tooltip.Root>

              {/* Nút Bật / Thoát chế độ toàn màn hình (Fullscreen Button) */}
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <FullscreenButton className={buttonClass}>
                    {isFullscreenActive ? <FullscreenExitIcon className="w-8 h-8" /> : <FullscreenIcon className="w-8 h-8" />}
                  </FullscreenButton>
                </Tooltip.Trigger>
                <Tooltip.Content className={tooltipClass} placement="top end">{isFullscreenActive ? 'Exit Fullscreen' : 'Enter Fullscreen'}</Tooltip.Content>
              </Tooltip.Root>
            </div>

          </div>
        </div>

      </Controls.Root>
    </>
  );
}
