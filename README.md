# 🟢 Green Belt - Advanced Poll dApp

## Live Demo
🔗 https://green-belt-lyart.vercel.app

## Screenshots

### Mobile Responsive View
![Mobile View](https://raw.githubusercontent.com/Abhi0833-eng/green-belt/main/frontend/public/screenshots/mobile.png.png)

### CI/CD Pipeline ✅
![CI/CD](https://raw.githubusercontent.com/Abhi0833-eng/green-belt/main/frontend/public/screenshots/cicd.png.png)

## Contract Addresses (Stellar Testnet)

### Poll Contract
- **Address**: `CDE7XDJ7E6CDSZGT37K7FHE3EA4MRKMQJNMM34UYGNNAZHAXUDQC7KTQ`
- **Stellar Explorer**: https://stellar.expert/explorer/testnet/contract/CDE7XDJ7E6CDSZGT37K7FHE3EA4MRKMQJNMM34UYGNNAZHAXUDQC7KTQ
- **Deploy Tx**: https://stellar.expert/explorer/testnet/tx/2e479877160ab95c475649a68eccb62285073c0e531610f9fbdf860b659d4d93

### Reward Token Contract
- **Address**: `CAXZHPXTDHYDIGKOMNDP4FCJQF7HWSOEIC7SRWCSOIAP3EGVSMBXBQVO`
- **Stellar Explorer**: https://stellar.expert/explorer/testnet/contract/CAXZHPXTDHYDIGKOMNDP4FCJQF7HWSOEIC7SRWCSOIAP3EGVSMBXBQVO
- **Deploy Tx**: https://stellar.expert/explorer/testnet/tx/358b59e33dbaee8c2574ba046c7b35c3087a3c75cc579d09ec099c6df90f355a

## Features
- ✅ Inter-contract calls (Poll → Token reward)
- ✅ Custom REWARD token deployed
- ✅ CI/CD via GitHub Actions
- ✅ Mobile responsive UI
- ✅ Deployed on Vercel
- ✅ 11+ meaningful commits

## Tech Stack
- Soroban Smart Contracts (Rust)
- Next.js 16 + Tailwind CSS
- Stellar Testnet

## Project Structure
```
green-belt/
├── contracts/
│   ├── poll-token/     # Advanced Poll Contract
│   └── reward-token/   # Custom Reward Token
├── frontend/           # Next.js App
└── .github/workflows/  # CI/CD Pipeline
```