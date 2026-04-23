# 🟢 Green Belt - Advanced Poll dApp

## Live Demo
🔗 https://green-belt-lyart.vercel.app

## Screenshots

### Mobile Responsive View
![Mobile View](https://raw.githubusercontent.com/Abhi0833-eng/green-belt/main/frontend/public/screenshots/mobile.png.png)

### CI/CD Pipeline ✅
![CI/CD](https://raw.githubusercontent.com/Abhi0833-eng/green-belt/main/frontend/public/screenshots/cicd.png.png)

## Contract Addresses (Stellar Testnet)
- **Poll Contract**: `CDE7XDJ7E6CDSZGT37K7FHE3EA4MRKMQJNMM34UYGNNAZHAXUDQC7KTQ`
  - Tx Hash: `2e479877160ab95c475649a68eccb62285073c0e531610f9fbdf860b659d4d93`
- **Reward Token**: `CAXZHPXTDHYDIGKOMNDP4FCJQF7HWSOEIC7SRWCSOIAP3EGVSMBXBQVO`
  - Tx Hash: `358b59e33dbaee8c2574ba046c7b35c3087a3c75cc579d09ec099c6df90f355a`

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