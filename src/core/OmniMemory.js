import storageClient from '../memory/storageClient.js';

class OmniMemory {
    constructor(agentName) {
        this.agentName = agentName;
        this.memoryIndex = {}; 
    }

    async remember(key, value) {
        try {
            console.log(`🧠 [${this.agentName}] Đang ghi nhớ: ${key}...`);
            const content = JSON.stringify({
                key: key,
                value: value,
                timestamp: new Date().toISOString()
            });
            const result = await storageClient.uploadMemory(content);
            this.memoryIndex[key] = result.rootHash;
            return result.rootHash;
        } catch (error) {
            console.error(`❌ Lỗi khi ghi nhớ ${key}:`, error.message);
            throw error;
        }
    }

    async recall(key) {
        try {
            const rootHash = this.memoryIndex[key];
            if (!rootHash) return null;

            const tempPath = `./temp_${key}.json`;
            await storageClient.downloadMemory(rootHash, tempPath);
            
            const fs = await import('fs/promises');
            const data = await fs.readFile(tempPath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            console.error(`❌ Lỗi khi truy xuất ${key}:`, error.message);
            return null;
        }
    }

    /**
     * TÍNH NĂNG NÂNG CAO: Phản tư (Reflection)
     * AI tự lưu lại bài học sau một hành động
     */
    async reflect(action, outcome, lesson) {
        try {
            const lessonKey = `lesson_${Date.now()}`;
            console.log(`🤔 [${this.agentName}] Đang phản tư về hành động: ${action}...`);
            
            const reflectionData = JSON.stringify({
                action: action,
                outcome: outcome,
                lesson: lesson,
                timestamp: new Date().toISOString()
            });

            const result = await this.remember(lessonKey, reflectionData);
            console.log(`💡 Đã lưu bài học quý giá vào 0G Storage! RootHash: ${result}`);
            return result;
        } catch (error) {
            console.error(`❌ Lỗi khi phản tư:`, error.message);
        }
    }
}

export default OmniMemory;