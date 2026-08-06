import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";

export const HotkeyTooltip = ({ children, text, className = "hotkey-tooltip-fixed" }) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [tooltipText, setTooltipText] = useState("");
  const targetRef = useRef(null);

  const handleMouseEnter = () => {
    if (targetRef.current) {
      // 1. Tự động tìm attribute `data-tooltip-hotkey` từ thẻ con hoặc dùng prop `text` truyền vào
      const element = targetRef.current.querySelector("[data-tooltip-hotkey]") || targetRef.current;
      const extractedText = text || element.getAttribute("data-tooltip-hotkey");

      if (!extractedText) return;

      // 2. Đo vị trí của nút so với Viewport màn hình
      const rect = element.getBoundingClientRect();

      // 3. Tính toán vị trí Portal (nằm phía trên nút, căn giữa)
      setCoords({
        top: rect.top - 8, // Cách phía trên nút 8px
        left: rect.left + rect.width / 2, // Căn chính giữa nút
      });

      setTooltipText(extractedText);
      setVisible(true);
    }
  };

  return (
    <>
      {/* Wrapper bọc nút bấm */}
      <div
        ref={targetRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setVisible(false)}
        style={{ display: "inline-block" }}
      >
        {children}
      </div>

      {/* Render thẳng ra document.body qua React Portal */}
      {visible &&
        ReactDOM.createPortal(
          <div
            className={className}
            style={{
              top: `${coords.top}px`,
              left: `${coords.left}px`,
              // Căn giữa ngang (-50%) và nhích trồi hoàn toàn lên trên nút (-100%)
              transform: "translate(-50%, -100%)",
              opacity: 1,
            }}
          >
            {tooltipText}
          </div>,
          document.body
        )}
    </>
  );
};