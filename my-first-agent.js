import OmniMemory from './src/core/OmniMemory.js';

async function startAgent() {
    // Khởi tạo bộ não OmniMemory cho Agent tên là "Jarvis"
    const jarvisMemory = new OmniMemory("Jarvis");

    console.log("🤖 Jarvis: Xin chào! Tôi là AI Agent có bộ nhớ vĩnh cửu trên 0G.");

    try {
        // 1. AI học thông tin mới
        await jarvisMemory.remember("user_name", "Xuan Canh");
        await jarvisMemory.remember("user_hobby", "Săn giải thưởng 0G Hackathon");

        console.log("\n--- AI đang suy nghĩ... ---\n");

        // 2. AI truy xuất thông tin đã học
        const name = await jarvisMemory.recall("user_name");
        const hobby = await jarvisMemory.recall("user_hobby");

        console.log(`\n🤖 Jarvis: Tôi nhớ rồi! Bạn là ${name.value} và bạn thích ${hobby.value}. Rất vui được đồng hành cùng bạn!`);

    } catch (error) {
        console.error("❌ Agent gặp sự cố:", error.message);
    }
}

startAgent();