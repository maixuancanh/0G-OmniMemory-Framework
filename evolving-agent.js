import OmniMemory from './src/core/OmniMemory.js';

async function startEvolvingAgent() {
    const agent = new OmniMemory("OmniBot");

    console.log("🤖 OmniBot: Tôi là AI có khả năng tự tiến hóa nhờ 0G Storage.");

    // Kịch bản: Agent thử làm một việc và thất bại
    const task = "Giải toán nâng cao";
    const action = "Sử dụng phương pháp A";
    const outcome = "Sai kết quả";
    const lesson = "Phương pháp A không phù hợp cho toán nâng cao, nên dùng phương pháp B";

    console.log(`\n📝 Nhiệm vụ: ${task}`);
    console.log(`🛠️ Hành động: ${action} -> Kết quả: ${outcome}`);

    // Agent thực hiện phản tư và lưu bài học vào Blockchain
    await agent.reflect(action, outcome, lesson);

    console.log("\n--- Một thời gian sau, khi gặp lại nhiệm vụ này... ---");

    // Giả sử Agent đọc lại các bài học (trong thực tế sẽ dùng loop để quét tất cả lesson)
    // Ở đây ta mô phỏng việc truy xuất bài học vừa lưu
    const lastLessonKey = Object.keys(agent.memoryIndex).find(k => k.startsWith('lesson_'));
    const memory = await agent.recall(lastLessonKey);

    if (memory) {
        const lessonContent = JSON.parse(memory.value);
        console.log(`🤖 OmniBot: Tôi nhớ ra rồi! Lần trước tôi đã làm ${lessonContent.action} và bị ${lessonContent.outcome}.`);
        console.log(`🚀 Bài học rút ra: ${lessonContent.lesson}. Lần này tôi sẽ làm đúng!`);
    }
}

startEvolvingAgent();