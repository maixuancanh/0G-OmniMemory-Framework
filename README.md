# 0G-OmniMemory Framework 🧠🚀

**0G-OmniMemory** is a modular agent framework designed for the 0G decentralized AI operating system (dAIOS). It provides a robust infrastructure for building autonomous agents with **persistent long-term memory** and **self-evolving reflection loops** powered by 0G Storage and 0G Compute.

## 🌟 Key Innovations

- **Persistent On-Chain Memory:** Leverages 0G Storage to create a "Decentralized Brain" for agents, ensuring that knowledge is never lost across sessions.
- **Reflection Primitive:** Implements a `reflect()` mechanism allowing agents to analyze past failures, extract lessons, and store them as evolved intelligence on-chain.
- **Modular Architecture:** A clean separation between the `Memory Layer` (0G SDK integration) and the `Core Logic Layer` (Agent brain), allowing developers to easily swap memory strategies.
- **Zero-Config Deployment:** Designed for rapid prototyping of on-chain AI agents.

## 🏗️ Architecture

The framework consists of three primary layers:
1. **Storage Layer (`src/memory`):** Interfaces with the 0G Storage SDK to handle data chunking, Merkle tree generation, and on-chain uploading/downloading.
2. **Core Layer (`src/core`):** Manages the `OmniMemory` class, handling the indexing of Root Hashes and the logic for remembering/recalling and reflecting.
3. **Agent Layer (`evolving-agent.js`):** The implementation layer where developers build specific agent behaviors using the framework primitives.

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- 0G Testnet Private Key (stored in `.env`)

### Installation
~~~bash
npm install
~~~

### Running the Demo
To see the agent evolve in real-time:
~~~bash
node evolving-agent.js
~~~

## 🛠️ Technical Stack
- **Blockchain:** 0G Chain (Testnet)
- **Storage:** 0G Storage (Turbo Indexer)
- **Language:** JavaScript (Node.js)
- **SDKs:** `@0gfoundation/0g-ts-sdk`, `ethers.js`

## 🔮 Future Roadmap
- [ ] Integration with 0G Compute for verifiable reflection inference.
- [ ] Multi-agent memory sharing via shared 0G Storage streams.
- [ ] iNFT integration for agent identity and memory ownership.

---
Built with ❤️ for the 0G Hackathon.