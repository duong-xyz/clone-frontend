import React, { useState } from 'react';

const PhapTuongIcon = () => {
    // Tạo state để lưu vị trí Top và Left động cho ảnh phóng to
    const [coords, setCoords] = useState({ top: 0, left: 0 });

    const handleMouseEnter = (e) => {
        // Đo chính xác vị trí của thẻ span chứa icon đối với màn hình (Viewport)
        const rect = e.currentTarget.getBoundingClientRect();

        // Tính toán điểm tâm (Center) của icon 70px
        const iconCenterX = rect.left + rect.width / 2;
        const iconCenterY = rect.top + rect.height / 2;

        // Cập nhật tọa độ vào state
        setCoords({
            top: iconCenterY,
            left: iconCenterX
        });
    };

    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "@media (max-width: 767px) {.phap-tuong-50-cmt {margin: 0px 0px 0px 5px;transform: scale(1.2);}}@media (min-width: 768px) {.phap-tuong-50-cmt {margin: -10px 0px 0px 5px;transform: scale(1.2);}}"
                }}
            />
            <span
                className="phap-tuong-image phap-tuong-animate phap-tuong-rank-s phap-tuong-53-cmt"
                data-name="Mặc Hương Thần Nữ"
                onMouseEnter={handleMouseEnter} // Kích hoạt tính toán khi hover
                style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    // Truyền đường dẫn ảnh nền vào biến CSS
                    '--phap-tuong-img': 'url(/stickers/cuu-u-tuyet-hau.webp)',
                    // Gán 2 biến vị trí động chạy theo Pixel thực tế
                    '--phap-tuong-top': `${coords.top}px`,
                    '--phap-tuong-left': `${coords.left}px`
                }}
            >
                <img
                    className="phap-tuong-img"
                    src="/stickers/cuu-u-tuyet-hau.webp"
                    alt="Mặc Hương Thần Nữ"
                    style={{ width: '70px' }}
                />
            </span>
        </>
    );
};

export default PhapTuongIcon;
