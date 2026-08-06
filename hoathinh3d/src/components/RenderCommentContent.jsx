import { MOCK_PACKS } from './Sticker'

// Regex để tìm các đoạn [sticker id="NUM"]
const STICKER_REGEX = /\[sticker\s+id="(\d+)"\]/g;

// Map chứa danh sách tất cả sticker để tìm kiếm nhanh
const STICKER_MAP = MOCK_PACKS.reduce((acc, pack) => {
    if (pack.stickers) {
        pack.stickers.forEach((sticker) => {
            acc[sticker.id] = sticker.url;
        });
    }
    return acc;
}, {});
// Kết quả STICKER_MAP = { 1056: "https://...", 1057: "https://...", ... }

const RenderCommentContent = ({ content }) => {
    // 1. Nếu không có nội dung, trả về null
    if (!content) return null;

    const elements = [];
    let lastIndex = 0;
    let match;

    // 2. Duyệt tìm các mã sticker trong chuỗi
    while ((match = STICKER_REGEX.exec(content)) !== null) {
        const stickerId = match[1]; // Lấy ID ra (vd: "1056")
        const matchIndex = match.index;

        // Nếu có đoạn text trước sticker, push text đó vào mảng
        if (matchIndex > lastIndex) {
            elements.push(content.substring(lastIndex, matchIndex));
        }

        // Lấy URL sticker từ STICKER_MAP
        const stickerUrl = STICKER_MAP[stickerId];

        if (stickerUrl) {
            // Nếu tìm thấy stickerUrl thì push JSX thẻ img tương ứng
            elements.push(
                <span key={`sticker-${matchIndex}`} className="wpd-sticker-wrapper">
                    <img
                        src={stickerUrl}
                        alt={`Sticker #${stickerId}`}
                        className="wpd-sticker"
                        loading="lazy"
                    />
                </span>
            );
        } else {
            // Nếu ID sticker bị xóa hoặc không tìm thấy, giữ nguyên mã [sticker id="..."]
            elements.push(match[0]);
        }

        lastIndex = STICKER_REGEX.lastIndex;
    }

    // Push đoạn text còn lại ở cuối (nếu có)
    if (lastIndex < content.length) {
        elements.push(content.substring(lastIndex));
    }

    // 3. Render ra cấu trúc HTML bạn yêu cầu
    return (
        <div className="wpd-comment-text">
            <p>{elements}</p>
        </div>
    );
};

export default RenderCommentContent;