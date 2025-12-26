import React, { useState } from 'react';
import Icon from './Icon';

const Wallet: React.FC = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleConnect = () => {
    setIsConnecting(true);
    setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
    }, 2000);
  };

  const handleDisconnect = () => {
    if (window.confirm("Disconnect your wallet?")) {
        setIsConnected(false);
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-background-dark animate-in fade-in slide-in-from-right-4 duration-300 transition-colors">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-50/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-border px-4 py-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-7xl mx-auto w-full">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-display tracking-tight">Wallet</h1>
            <p className="text-gray-500 dark:text-text-subtle text-sm mt-1">Manage your funds & connections</p>
          </div>

          <div className="flex items-center gap-3">
             <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${
               isConnected 
                 ? 'bg-primary/10 border-primary/20' 
                 : 'bg-white dark:bg-background-card border-gray-200 dark:border-border'
             }`}>
                <div className={`size-2 rounded-full ${isConnected ? 'bg-primary shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-gray-400 dark:bg-text-subtle'}`}></div>
                <span className={`text-xs font-bold ${isConnected ? 'text-primary-dark dark:text-accent-green' : 'text-gray-500 dark:text-text-subtle'}`}>
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
             </div>
          </div>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">

          {/* Top Section: Balance & Wallet Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Balance Card - Green Gradient */}
            <div className="lg:col-span-2 relative overflow-hidden rounded-3xl p-6 md:p-8 border border-[#065f46] shadow-2xl shadow-emerald-900/20 bg-gradient-to-b from-[#064e3b] to-[#050505]">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-emerald-100/70 text-sm font-medium mb-1 flex items-center gap-2">
                                Total Balance
                            </p>
                            <div className="flex items-center gap-3">
                                <h2 className="text-4xl md:text-5xl font-bold text-white font-display tracking-tight">
                                    {isConnected ? "$546,765" : "$0.00"}
                                </h2>
                                {isConnected && <Icon name="visibility" size={24} className="text-emerald-400/50 cursor-pointer hover:text-emerald-400 transition-colors" fill />}
                            </div>
                            {isConnected && (
                                <div className="flex items-center mt-3 text-accent-green text-sm font-bold bg-emerald-900/40 w-fit px-3 py-1.5 rounded-lg border border-emerald-500/20">
                                    <span className="flex items-center gap-1">
                                        <Icon name="arrow_outward" size={16} className="text-accent-green" />
                                        +$456.65 (3.2%)
                                    </span>
                                    <span className="text-emerald-200/40 ml-2 border-l border-emerald-200/20 pl-2 text-xs font-normal">24h p&l</span>
                                </div>
                            )}
                        </div>
                        <button className="size-10 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 flex items-center justify-center transition-colors border border-emerald-500/30 text-emerald-300">
                            <Icon name="arrow_outward" size={20} />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        <div className="bg-black/20 p-4 rounded-2xl backdrop-blur-md border border-white/5 hover:bg-black/30 transition-colors">
                            <p className="text-emerald-100/60 text-xs font-medium uppercase tracking-wider mb-1">Available to Trade</p>
                            <p className="text-xl font-bold text-white font-display">{isConnected ? "$124,500" : "$0.00"}</p>
                        </div>
                        <div className="bg-black/20 p-4 rounded-2xl backdrop-blur-md border border-white/5 hover:bg-black/30 transition-colors">
                            <p className="text-emerald-100/60 text-xs font-medium uppercase tracking-wider mb-1">Locked in Agents</p>
                            <p className="text-xl font-bold text-white font-display">{isConnected ? "$422,265" : "$0.00"}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wallet Connection Card */}
            <div className="bg-white dark:bg-background-card rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-border flex flex-col justify-between shadow-sm dark:shadow-none">
                {isConnected ? (
                    <>
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="size-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-0.5 shadow-lg shadow-blue-900/20">
                                    <div className="w-full h-full bg-white dark:bg-background-card rounded-[14px] flex items-center justify-center">
                                        <Icon name="account_balance_wallet" size={28} className="text-gray-900 dark:text-white" fill />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900 dark:text-white font-display">MetaMask</h3>
                                    <p className="text-xs text-gray-500 dark:text-text-subtle font-mono mt-1 bg-gray-100 dark:bg-background-dark px-2 py-0.5 rounded border border-gray-200 dark:border-border w-fit">0x8a...4b29</p>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-border">
                                    <span className="text-sm text-gray-500 dark:text-text-subtle font-medium">Network</span>
                                    <span className="text-sm font-bold text-gray-900 dark:text-white flex items-center gap-2">
                                        <span className="size-2 rounded-full bg-primary shadow-[0_0_6px_rgba(74,222,128,0.6)]"></span>
                                        Ethereum
                                    </span>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-border">
                                    <span className="text-sm text-gray-500 dark:text-text-subtle font-medium">Status</span>
                                    <span className="text-sm font-bold text-primary-dark dark:text-accent-green">Active</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-8">
                            <button 
                                onClick={handleCopy}
                                className="flex-1 py-3 px-4 rounded-xl border border-gray-200 dark:border-border bg-gray-50 dark:bg-background-dark hover:bg-gray-100 dark:hover:bg-border/50 text-gray-600 dark:text-text-subtle hover:text-black dark:hover:text-white transition-colors text-sm font-bold flex items-center justify-center gap-2 group"
                            >
                                {copied ? <Icon name="check_circle" size={16} className="text-green-500" fill /> : <Icon name="content_copy" size={16} className="text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white" />} 
                                {copied ? 'Copied' : 'Copy'}
                            </button>
                            <button 
                                onClick={handleDisconnect}
                                className="flex-1 py-3 px-4 rounded-xl border border-red-200 dark:border-accent-red/20 text-red-600 dark:text-accent-red hover:bg-red-50 dark:hover:bg-accent-red/10 transition-colors text-sm font-bold flex items-center justify-center gap-2"
                            >
                                <Icon name="logout" size={16} /> 
                                Disconnect
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-center py-8">
                        <div className="size-16 rounded-full bg-gray-100 dark:bg-background-dark border border-gray-200 dark:border-border flex items-center justify-center mb-4">
                            <Icon name="account_balance_wallet" size={32} className="text-gray-400 dark:text-text-subtle" />
                        </div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">Connect Wallet</h3>
                        <p className="text-sm text-gray-500 dark:text-text-subtle mb-6">Connect to view your balance and manage agent allocations.</p>
                        
                        <button 
                            onClick={handleConnect}
                            disabled={isConnecting}
                            className="w-full py-3 px-4 rounded-xl bg-primary text-black font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                        >
                            {isConnecting ? (
                                <>
                                    <Icon name="refresh" size={18} className="animate-spin" />
                                    Connecting...
                                </>
                            ) : (
                                "Connect MetaMask"
                            )}
                        </button>
                    </div>
                )}
            </div>

          </div>

          {/* Transaction History */}
          {isConnected && (
            <div className="pb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white font-display">Transaction History</h2>
                    <button className="text-primary-dark dark:text-primary text-sm font-bold hover:text-primary transition-colors">View All</button>
                </div>

                <div className="bg-white dark:bg-background-card rounded-3xl border border-gray-200 dark:border-border overflow-hidden shadow-sm dark:shadow-none">
                    {/* Transaction 1: Deposit */}
                    <div className="p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer border-b border-gray-100 dark:border-border">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary-dark dark:text-accent-green">
                                <Icon name="download" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-base">Deposit USDT</h4>
                                <p className="text-xs text-gray-500 dark:text-text-subtle mt-0.5 font-medium">Today, 10:23 AM</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-primary-dark dark:text-accent-green text-lg font-display">+5,000.00</p>
                            <p className="text-xs text-gray-500 dark:text-text-subtle font-medium mt-0.5">Completed</p>
                        </div>
                    </div>

                    {/* Transaction 2: Allocation */}
                    <div className="p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer border-b border-gray-100 dark:border-border">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-2xl bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                <Icon name="memory" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-base">Allocation: Sniper Bot</h4>
                                <p className="text-xs text-gray-500 dark:text-text-subtle mt-0.5 font-medium">Yesterday, 4:15 PM</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-900 dark:text-white text-lg font-display">-2,500.00</p>
                            <p className="text-xs text-gray-500 dark:text-text-subtle font-medium mt-0.5">Locked</p>
                        </div>
                    </div>

                    {/* Transaction 3: Swap */}
                    <div className="p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer border-b border-gray-100 dark:border-border">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-2xl bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <Icon name="swap_vert" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-base">Swap ETH to USDT</h4>
                                <p className="text-xs text-gray-500 dark:text-text-subtle mt-0.5 font-medium">Oct 24, 2:30 PM</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-900 dark:text-white text-lg font-display">0.45 ETH</p>
                            <p className="text-xs text-primary-dark dark:text-accent-green font-medium mt-0.5">Success</p>
                        </div>
                    </div>

                    {/* Transaction 4: Withdrawal */}
                    <div className="p-5 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-2xl bg-red-100 dark:bg-accent-red/10 border border-red-200 dark:border-accent-red/20 flex items-center justify-center text-red-600 dark:text-accent-red">
                                <Icon name="upload" size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 dark:text-white text-base">Withdrawal</h4>
                                <p className="text-xs text-gray-500 dark:text-text-subtle mt-0.5 font-medium">Oct 22, 9:00 AM</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-900 dark:text-white text-lg font-display">-1,200.00</p>
                            <p className="text-xs text-gray-500 dark:text-text-subtle font-medium mt-0.5">Completed</p>
                        </div>
                    </div>
                </div>
            </div>
          )}

          {/* Safety Note */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-blue-50 dark:bg-blue-500/5 border border-blue-100 dark:border-blue-500/20 text-blue-800 dark:text-blue-200/80 mb-8">
            <Icon name="info" size={20} className="shrink-0 mt-0.5 text-blue-600 dark:text-blue-400" />
            <div className="text-sm leading-relaxed">
                <strong className="text-blue-600 dark:text-blue-400">Safety Note:</strong> Your funds are held in a non-custodial smart contract. You maintain full control of your private keys. Allocating funds to an agent locks them for the duration of the strategy.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Wallet;