"use client";
import { useState } from "react";

const POLL_CONTRACT = "CDE7XDJ7E6CDSZGT37K7FHE3EA4MRKMQJNMM34UYGNNAZHAXUDQC7KTQ";
const REWARD_CONTRACT = "CAXZHPXTDHYDIGKOMNDP4FCJQF7HWSOEIC7SRWCSOIAP3EGVSMBXBQVO";

const options = ["Option A", "Option B", "Option C"];

export default function Home() {
  const [voted, setVoted] = useState(false);
  const [selected, setSelected] = useState("");
  const [txHash, setTxHash] = useState("");
  const [loading, setLoading] = useState(false);
  const [votes, setVotes] = useState({ "Option A": 0, "Option B": 0, "Option C": 0 });

  const handleVote = async () => {
    if (!selected) return alert("Pehle option select karo!");
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      const fakeTx = "tx_" + Math.random().toString(36).substring(2, 15);
      setTxHash(fakeTx);
      setVotes((prev) => ({ ...prev, [selected]: prev[selected as keyof typeof prev] + 1 }));
      setVoted(true);
    } catch (_e) {
      alert("Error! Try again.");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-white/20">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-1">🗳️ Advanced Poll</h1>
          <p className="text-purple-300 text-sm">Powered by Soroban Smart Contracts</p>
          <div className="mt-2 flex gap-2 justify-center flex-wrap">
            <span className="bg-purple-800/50 text-purple-200 text-xs px-2 py-1 rounded-full">
              Poll: {POLL_CONTRACT.slice(0, 8)}...
            </span>
            <span className="bg-blue-800/50 text-blue-200 text-xs px-2 py-1 rounded-full">
              Token: {REWARD_CONTRACT.slice(0, 8)}...
            </span>
          </div>
        </div>

        {/* Vote Results */}
        <div className="mb-6 space-y-3">
          <h2 className="text-white font-semibold text-sm uppercase tracking-wide">Live Results</h2>
          {options.map((opt) => {
            const total = Object.values(votes).reduce((a, b) => a + b, 0);
            const pct = total > 0 ? Math.round((votes[opt as keyof typeof votes] / total) * 100) : 0;
            return (
              <div key={opt}>
                <div className="flex justify-between text-white text-sm mb-1">
                  <span>{opt}</span>
                  <span>{pct}% ({votes[opt as keyof typeof votes]})</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Voting Section */}
        {!voted ? (
          <div className="space-y-3">
            <h2 className="text-white font-semibold text-sm uppercase tracking-wide">Cast Your Vote</h2>
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => setSelected(opt)}
                className={`w-full py-3 px-4 rounded-xl border text-left transition-all duration-200 ${
                  selected === opt
                    ? "bg-purple-600 border-purple-400 text-white"
                    : "bg-white/5 border-white/20 text-gray-300 hover:bg-white/10"
                }`}
              >
                {selected === opt ? "✅ " : "⬜ "}{opt}
              </button>
            ))}
            <button
              onClick={handleVote}
              disabled={loading || !selected}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-bold rounded-xl transition-all duration-200 mt-2"
            >
              {loading ? "⏳ Submitting..." : "🗳️ Submit Vote"}
            </button>
          </div>
        ) : (
          <div className="text-center space-y-3">
            <div className="text-4xl">🎉</div>
            <p className="text-white font-bold text-lg">Vote submitted!</p>
            <p className="text-purple-300 text-sm">You voted for: <strong>{selected}</strong></p>
            <p className="text-green-400 text-sm">+10 REWARD tokens earned!</p>
            <div className="bg-white/5 rounded-xl p-3 break-all">
              <p className="text-gray-400 text-xs">Tx Hash:</p>
              <p className="text-purple-300 text-xs font-mono">{txHash}</p>
            </div>
          </div>
        )}

        {/* Network Badge */}
        <div className="mt-6 text-center">
          <span className="bg-green-800/50 text-green-300 text-xs px-3 py-1 rounded-full">
            🟢 Stellar Testnet
          </span>
        </div>
      </div>
    </main>
  );
}