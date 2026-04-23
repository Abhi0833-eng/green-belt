const POLL_CONTRACT = "CDE7XDJ7E6CDSZGT37K7FHE3EA4MRKMQJNMM34UYGNNAZHAXUDQC7KTQ";
const REWARD_CONTRACT = "CAXZHPXTDHYDIGKOMNDP4FCJQF7HWSOEIC7SRWCSOIAP3EGVSMBXBQVO";

export default function ContractInfo() {
  return (
    <div className="mt-4 bg-white/5 rounded-xl p-4 text-xs">
      <h3 className="text-white font-semibold mb-2">📋 Contract Info</h3>
      <div className="space-y-1">
        <p className="text-gray-400">Poll Contract:</p>
        <p className="text-purple-300 font-mono break-all">{POLL_CONTRACT}</p>
        <p className="text-gray-400 mt-2">Reward Token:</p>
        <p className="text-blue-300 font-mono break-all">{REWARD_CONTRACT}</p>
      </div>
    </div>
  );
}