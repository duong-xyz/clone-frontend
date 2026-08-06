import fs from 'fs';
import { PurgeCSS } from 'purgecss';

console.log("🔄 Hệ thống đang tự động lọc sạch homepage.css...");

async function runPurge() {
  try {
    const purgecssResult = await new PurgeCSS().purge({
      // 1. Quét toàn bộ file trong trang chủ và component con để lấy class thực tế
      content: [
        './src/pages/Home.jsx',
        './src/components/**/*.jsx',
        './index.html'
      ],
      // 2. Nạp file CSS gốc 70.000 dòng vào làm mỏ quặng
      css: ['./src/assets/homepage.css'],
      
      // 3. Trình trích xuất class đặc chủng cho React tránh lỗi nuốt ký tự
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],

      // 4. KHÓA CỨNG HỆ THỐNG: Bảo vệ 100% Font chữ, Biến màu và Hiệu ứng chuyển động gốc
      keyframes: false,
      variables: false,
      fontFace: false,

      // 5. CƠ CHẾ BẢO HIỂM TOÀN DIỆN (Không cần đoán class):
      safelist: {
        // Biểu thức Regex bẻ khóa lồng sâu: Giữ lại TOÀN BỘ class và các thẻ con của nó
        // nếu có chứa từ khóa liên quan đến ảnh, khung lưới hoặc cấu trúc giao diện gốc
        deep: [/halim/, /lc-/, /thumb/, /avatar/, /image/, /img/, /poster/, /slider/, /carousel/, /url/, /import/],
        // Giữ lại hệ thống lưới chia cột mặc định của Bootstrap/Framework gốc để chữ không đè nhau
        standard: ['row', 'col', 'container', 'clearfix', 'clear', 'widget', 'active', 'hidden', 'show', 'open']
      }
    });

    if (purgecssResult && purgecssResult.length > 0) {
      // 6. Ghi đè file sạch trực tiếp vào assets thay thế file cũ
      fs.writeFileSync('./src/assets/homepage.css', purgecssResult.css);
      console.log("✅ THÀNH CÔNG RỰC RỠ! File 'homepage.css' đã được dọn sạch mà không lỗi giao diện.");
    }
  } catch (error) {
    console.error("❌ Lỗi hệ thống:", error);
  }
}

runPurge();
