import storageClient from './src/memory/storageClient.js';

async function runTest() {
    console.log("--- BẮT ĐẦU KIỂM TRA KẾT NỐI 0G STORAGE ---");
    
    try {
        // Dữ liệu giả lập mà AI sẽ lưu vào bộ nhớ
        const memoryData = "Chào 0G! Tôi là AI Agent đang thử nghiệm bộ nhớ vĩnh cửu. Hôm nay là ngày khởi đầu của dự án OmniMemory.";
        
        console.log("📝 Đang thử upload dữ liệu...");
        const result = await storageClient.uploadMemory(memoryData);
        
        console.log("\n✅ THÀNH CÔNG RỰC RỠ!");
        console.log("------------------------------------------");
        console.log("Root Hash:", result.rootHash);
        console.log("Transaction Hash:", result.txHash);
        console.log("------------------------------------------");
        console.log("Dữ liệu của bạn đã chính thức nằm trên Blockchain 0G!");
        
    } catch (error) {
        console.error("\n❌ THẤT BẠI RỒI!");
        console.error("Lý do lỗi:", error.message);
        console.log("\n💡 Gợi ý: Hãy kiểm tra lại PRIVATE_KEY trong file .env và đảm bảo ví có token Testnet.");
    }
}

runTest();