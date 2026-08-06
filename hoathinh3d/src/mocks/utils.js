/**
* HÀM XỬ LÝ VOTE MOCK DATA
* @param {string} selectedReaction - Icon người dùng chọn: 'like', 'love', 'haha', 'wow', 'sad', 'angry'
* @param {string} commentId - ID của comment (VD: "1938808")
*/
export const handleAddVotes = (selectedReaction, commentId, setComments) => {
    console.log("id:", commentId);
    
    // 1. Tắt popup ngay lập tức
    //setIsReaction(false);

    if (!commentId) return;

    // 2. Cập nhật trực tiếp State
    setComments((prevComments) =>
        prevComments.map((comment) => {
            if (comment.id === commentId) {
                const currentReaction = comment.reactionType || null; // Lấy reaction hiện tại (nếu chưa có thì null)

                // 🔴 TRƯỜNG HỢP 1: Bấm lại đúng icon cũ -> HỦY VOTE (Bỏ thích)
                if (currentReaction === selectedReaction) {
                    return {
                        ...comment,
                        reactionType: null, // Bỏ reaction
                        votes: Math.max(0, (comment.votes || 0) - 1), // Trừ 1 vote
                    };
                }

                // 🟢 TRƯỜNG HỢP 2: Bấm icon mới (Khi chưa từng vote)
                if (!currentReaction) {
                    return {
                        ...comment,
                        reactionType: selectedReaction, // Lưu icon mới
                        votes: (comment.votes || 0) + 1, // Cộng 1 vote
                    };
                }

                // 🟡 TRƯỜNG HỢP 3: Đang vote 'like' mà đổi sang 'love' (Chỉ đổi icon, số votes giữ nguyên)
                return {
                    ...comment,
                    reactionType: selectedReaction, // Đổi sang icon mới
                    // votes giữ nguyên không đổi
                };
            }

            return comment;
        })
    );
};

/**
 * Pure function: Tính toán trạng thái reaction mới cho một comment/reply
 * @param {Object} item - Comment hoặc Reply hiện tại
 * @param {string} selectedReaction - Reaction người dùng chọn
 * @returns {Object} Item với reactionType và votes đã được cập nhật
 */
const updateItemReaction = (item, selectedReaction) => {
    const currentReaction = item.reactionType || null;
    const currentVotes = item.votes || 0;

    // TRƯỜNG HỢP 1: Bấm lại đúng icon cũ -> HỦY VOTE
    if (currentReaction === selectedReaction) {
        return {
            ...item,
            reactionType: null,
            votes: Math.max(0, currentVotes - 1),
        };
    }

    // TRƯỜNG HỢP 2: Bấm icon mới khi chưa từng vote -> THÊM VOTE
    if (!currentReaction) {
        return {
            ...item,
            reactionType: selectedReaction,
            votes: currentVotes + 1,
        };
    }

    // TRƯỜNG HỢP 3: Đổi sang reaction khác -> ĐỔI ICON (Giữ nguyên tổng votes)
    return {
        ...item,
        reactionType: selectedReaction,
    };
};

/**
 * Hàm đệ quy duyệt cây comments để tìm và cập nhật comment/reply theo ID
 * @param {Array} comments - Danh sách comments
 * @param {string} targetId - ID của comment/reply cần update
 * @param {string} selectedReaction - Reaction người dùng chọn
 * @returns {Array} Mảng comments mới
 */
const updateCommentTree = (comments, targetId, selectedReaction) => {
    if (!Array.isArray(comments) || comments.length === 0) return [];

    return comments.map((comment) => {
        // 1. Nếu tìm thấy đúng ID -> Cập nhật comment này
        if (comment.id === targetId) {
            return updateItemReaction(comment, selectedReaction);
        }

        // 2. Nếu comment có danh sách replies -> Đệ quy duyệt xuống cấp dưới
        if (Array.isArray(comment.replies) && comment.replies.length > 0) {
            return {
                ...comment,
                replies: updateCommentTree(comment.replies, targetId, selectedReaction),
            };
        }

        // 3. Không trùng ID và không có replies phù hợp -> Giữ nguyên
        return comment;
    });
};

/**
 * HÀM XỬ LÝ VOTE COMMENTS & REPLIES
 * @param {string} selectedReaction - Icon chọn ('like', 'love', 'haha', 'wow', 'sad', 'angry')
 * @param {string} commentId - ID của comment/reply
 * @param {Function} setComments - State setter từ React
 */
export const handleAddVotes1 = (selectedReaction, commentId, setComments) => {
    if (!commentId || !selectedReaction) return;

    setComments((prevComments) => updateCommentTree(prevComments, commentId, selectedReaction));
};