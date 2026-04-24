import { Indexer, MemData } from '@0gfoundation/0g-ts-sdk';
import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config();

class StorageClient {
    constructor() {
        this.RPC_URL = 'https://evmrpc-testnet.0g.ai';
        this.INDEXER_RPC = 'https://indexer-storage-testnet-turbo.0g.ai';
        this.provider = new ethers.JsonRpcProvider(this.RPC_URL);
        this.signer = new ethers.Wallet(process.env.PRIVATE_KEY, this.provider);
        this.indexer = new Indexer(this.INDEXER_RPC);
    }

    async uploadMemory(textData) {
        try {
            console.log("🚀 Đang mã hóa và tải bộ nhớ lên 0G Storage...");
            const data = new TextEncoder().encode(textData);
            const memData = new MemData(data);
            const [tree, treeErr] = await memData.merkleTree();
            if (treeErr !== null) throw new Error(`Merkle tree error: ${treeErr}`);
            console.log("✅ Root Hash tạo thành công:", tree.rootHash());
            const [tx, uploadErr] = await this.indexer.upload(memData, this.RPC_URL, this.signer);
            if (uploadErr !== null) throw new Error(`Upload error: ${uploadErr}`);
            console.log("🎉 Lưu bộ nhớ thành công! TX Hash:", tx.txHash);
            return { rootHash: tx.rootHash, txHash: tx.txHash };
        } catch (error) {
            console.error('❌ Lỗi khi lưu bộ nhớ:', error.message);
            throw error;
        }
    }

    async downloadMemory(rootHash, outputPath) {
        try {
            console.log(`🔍 Đang tải dữ liệu từ Root Hash: ${rootHash}...`);
            const err = await this.indexer.download(rootHash, outputPath, true);
            if (err !== null) throw new Error(`Download error: ${err}`);
            console.log("✅ Tải bộ nhớ thành công!");
            return true;
        } catch (error) {
            console.error('❌ Lỗi khi tải bộ nhớ:', error.message);
            throw error;
        }
    }
}

export default new StorageClient();