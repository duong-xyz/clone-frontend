// time-group.jsx
import { Time } from '@vidstack/react';

export function TimeGroup() {
  return (
    <div className="ml-1.5 flex items-center text-sm font-medium text-white/90">
      {/* Hiển thị thời gian đang chạy của phim */}
      <Time className="time" type="current" />
      
      <div className="mx-1 text-white/60">/</div>
      
      {/* Hiển thị tổng thời lượng tập phim */}
      <Time className="time" type="duration" />
    </div>
  );
}
