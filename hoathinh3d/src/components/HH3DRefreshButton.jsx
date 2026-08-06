import React, { useState } from 'react';

export default function HH3DRefreshButton({ onRefresh }) {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        if (isLoading) return;

        setIsLoading(true); // Bật hiệu ứng xoay

        if (onRefresh) {
            try {
                await onRefresh(); // Chờ hàm tải lại dữ liệu chạy xong
            } catch (error) {
                console.error("Refresh failed:", error);
            }
        }

        // Giả lập dừng xoay sau 1.5 giây (hoặc tắt ngay sau khi xong API)
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <button
            type="button"
            id="hh3d-latest-refresh"
            className={`hh3d-latest-refresh ${isLoading ? 'is-spinning': ''}`}
            aria-label="Làm mới danh sách"
            title="Làm mới danh sách"
            onClick={handleClick}
            disabled={isLoading} // Khóa nút khi đang xoay
        >
            <i className="fas fa-sync-alt"
                aria-hidden="true" />
            <span className="hh3d-latest-refresh-label">Làm mới</span>
        </button>
    );
}
