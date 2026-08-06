export default function VipOverlay({ hasVip = false }) {
    return (
        hasVip && (
            <div
                id="vip-requirement-overlay"
                style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 40, 0.95) 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 9999,
                    backdropFilter: "blur(5px)",
                    padding: "20px",
                    boxSizing: "border-box"
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        padding: "40px 30px",
                        maxWidth: "400px",
                        width: "100%",
                        boxSizing: "border-box"
                    }}
                >
                    <div style={{ fontSize: "48px", marginBottom: "20px" }}>🔒</div>
                    <div
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "rgb(212, 175, 55)",
                            marginBottom: "15px",
                            textShadow: "rgba(0, 0, 0, 0.5) 0px 2px 4px",
                            overflowWrap: "break-word"
                        }}
                    >
                        Yêu Cầu Thành Viên VIP
                    </div>
                    <div
                        style={{
                            background: "rgba(255, 200, 0, 0.1)",
                            borderLeft: "3px solid rgb(255, 200, 0)",
                            padding: "10px 15px",
                            borderRadius: "4px",
                            marginBottom: "20px",
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px"
                        }}
                    >
                        <span style={{ fontSize: "16px", flexShrink: 0, lineHeight: 1.2 }}>💡</span>
                        <span
                            style={{
                                fontSize: "13px",
                                color: "rgb(255, 214, 102)",
                                lineHeight: 1.4,
                                overflowWrap: "break-word",
                                flex: "1 1 0%"
                            }}
                        >
                            Video 4K tốn nhiều chi phí lưu trữ, cần VIP hỗ trợ. Màn hình nhỏ xem
                            Server miễn phí đã đủ nét.
                        </span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                            width: "100%",
                            marginBottom: "15px"
                        }}
                    >
                        <button
                            className="vip-unlock-btn"
                        >
                            🔓 Mở Khóa Tập Này (10 Xu)
                        </button>
                        <a
                            className="vip-unlock-btn"
                            href="/vip-hh3d"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                padding: "10px 30px",
                                background:
                                    "linear-gradient(135deg, rgb(212, 175, 55) 0%, rgb(244, 208, 63) 50%, rgb(200, 155, 60) 100%)",
                                color: "rgb(44, 36, 22)",
                                fontSize: "15px",
                                fontWeight: "bold",
                                textDecoration: "none",
                                borderRadius: "6px",
                                border: "2px solid rgb(184, 150, 46)",
                                boxShadow: "rgba(212, 175, 55, 0.4) 0px 4px 15px",
                                transition: "0.3s",
                                cursor: "pointer",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                                width: "100%",
                                boxSizing: "border-box",
                                transform: "translateY(0px)"
                            }}
                        >
                            💎 Nâng Cấp VIP (Không Giới Hạn)
                        </a>
                    </div>
                </div>
            </div>
        )
    );
}