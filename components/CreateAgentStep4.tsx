import React, { useState } from 'react';
import Icon from './Icon';

interface CreateAgentStep4Props {
  onBack: () => void;
  onNext: () => void;
}

const CreateAgentStep4: React.FC<CreateAgentStep4Props> = ({ onBack, onNext }) => {
  const [selectedVenue, setSelectedVenue] = useState<'hyperliquid' | 'aster' | 'xyra'>('hyperliquid');

  return (
    <div className="h-full overflow-y-auto flex flex-col bg-gray-50 dark:bg-background-dark text-gray-900 dark:text-white font-sans selection:bg-primary/30 animate-in fade-in duration-300 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-gray-50/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-border transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center gap-4">
                    <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white transition-colors">
                        <Icon name="arrow_back" size={20} />
                    </button>
                    <h2 className="text-lg font-bold font-display tracking-tight hidden sm:block">Create Agent</h2>
                </div>
                <div className="sm:hidden text-base font-bold font-display">Create Agent</div>
                <div className="px-3 py-1 rounded-full bg-white dark:bg-background-card border border-gray-200 dark:border-border">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-text-subtle">Step 4 of 5</span>
                </div>
            </div>
        </div>
        {/* Progress Bar - 80% */}
        <div className="w-full h-[2px] bg-gray-200 dark:bg-border/50">
            <div className="h-full bg-primary shadow-[0_0_10px_rgba(53,224,160,0.5)] transition-all duration-500 ease-out w-[80%]"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[960px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-10 pb-24">
        
        <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-6 justify-between items-end">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-gray-900 dark:text-white leading-tight">Select Execution Venue</h1>
                    <p className="text-gray-500 dark:text-text-subtle text-lg font-normal leading-relaxed max-w-2xl mt-4">
                        Choose the decentralized exchange (DEX) your agent will use for trade execution. This choice impacts transaction speed, slippage, and gas fees.
                    </p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Hyperliquid Card */}
            <div 
                onClick={() => setSelectedVenue('hyperliquid')}
                className={`relative flex flex-col justify-between gap-6 rounded-2xl border-2 p-6 cursor-pointer group transition-all duration-300 shadow-sm dark:shadow-none ${
                    selectedVenue === 'hyperliquid' 
                    ? 'border-primary bg-white dark:bg-background-card dark:shadow-[0_0_30px_rgba(53,224,160,0.1)]' 
                    : 'border-gray-200 dark:border-border bg-white dark:bg-background-card hover:bg-gray-50 dark:hover:bg-border/30 hover:border-gray-300 dark:hover:border-text-subtle/30'
                }`}
            >
                {selectedVenue === 'hyperliquid' && (
                    <div className="absolute top-4 right-4">
                        <div className="size-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_10px_rgba(53,224,160,0.4)]">
                            <Icon name="check_circle" size={14} className="text-black" fill />
                        </div>
                    </div>
                )}
                
                <div className="flex flex-col gap-5">
                    <div className="size-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg ring-1 ring-white/10">
                        <Icon name="bolt" size={32} className="text-white" fill />
                    </div>
                    <div>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight mb-2 font-display">Hyperliquid</h3>
                        <p className="text-gray-500 dark:text-text-subtle text-sm font-normal leading-relaxed">High-performance order book for perpetuals.</p>
                    </div>
                </div>

                <div className="mt-2 pt-5 border-t border-gray-100 dark:border-border/50 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-gray-500 dark:text-text-subtle uppercase tracking-wider">Fees</span>
                        <span className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-1">
                            ~0.02%
                            <Icon name="trending_down" size={14} className="text-primary-dark dark:text-primary" />
                        </span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-gray-500 dark:text-text-subtle uppercase tracking-wider">Liquidity</span>
                        <div className="flex items-center gap-2">
                            <div className="size-2 rounded-full bg-primary shadow-[0_0_8px_rgba(53,224,160,0.6)]"></div>
                            <span className="text-base font-bold text-gray-900 dark:text-white">High</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aster Card */}
            <div 
                onClick={() => setSelectedVenue('aster')}
                className={`relative flex flex-col justify-between gap-6 rounded-2xl border p-6 cursor-pointer group transition-all duration-300 shadow-sm dark:shadow-none ${
                    selectedVenue === 'aster' 
                    ? 'border-primary bg-white dark:bg-background-card dark:shadow-[0_0_30px_rgba(53,224,160,0.1)] ring-1 ring-primary' 
                    : 'border-gray-200 dark:border-border bg-white dark:bg-background-card hover:bg-gray-50 dark:hover:bg-border/30 hover:border-gray-300 dark:hover:border-text-subtle/30'
                }`}
            >
                {selectedVenue === 'aster' && (
                    <div className="absolute top-4 right-4">
                        <div className="size-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_10px_rgba(53,224,160,0.4)]">
                            <Icon name="check_circle" size={14} className="text-black" fill />
                        </div>
                    </div>
                )}

                <div className="flex flex-col gap-5">
                    <div className="size-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-700 flex items-center justify-center shadow-lg ring-1 ring-white/10 group-hover:scale-105 transition-transform">
                        <Icon name="public" size={32} className="text-white" />
                    </div>
                    <div>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight mb-2 font-display">Aster</h3>
                        <p className="text-gray-500 dark:text-text-subtle text-sm font-normal leading-relaxed">Aggregated liquidity across multiple chains.</p>
                    </div>
                </div>

                <div className="mt-2 pt-5 border-t border-gray-100 dark:border-border/50 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-gray-500 dark:text-text-subtle uppercase tracking-wider">Fees</span>
                        <span className="text-base font-bold text-gray-900 dark:text-white">Variable</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-gray-500 dark:text-text-subtle uppercase tracking-wider">Liquidity</span>
                        <div className="flex items-center gap-2">
                            <div className="size-2 rounded-full bg-yellow-400 dark:bg-accent-yellow"></div>
                            <span className="text-base font-bold text-gray-900 dark:text-white">Medium</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Xyra Card */}
            <div 
                onClick={() => setSelectedVenue('xyra')}
                className={`relative flex flex-col justify-between gap-6 rounded-2xl border p-6 cursor-pointer group transition-all duration-300 shadow-sm dark:shadow-none ${
                    selectedVenue === 'xyra' 
                    ? 'border-primary bg-white dark:bg-background-card dark:shadow-[0_0_30px_rgba(53,224,160,0.1)] ring-1 ring-primary' 
                    : 'border-gray-200 dark:border-border bg-white dark:bg-background-card hover:bg-gray-50 dark:hover:bg-border/30 hover:border-gray-300 dark:hover:border-text-subtle/30'
                }`}
            >
                <div className="absolute top-4 right-4">
                    {!selectedVenue || selectedVenue !== 'xyra' ? (
                        <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-white/5 px-2.5 py-1 text-xs font-semibold text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-white/10 backdrop-blur-sm">Beta</span>
                    ) : (
                         <div className="size-6 rounded-full bg-primary flex items-center justify-center shadow-[0_0_10px_rgba(53,224,160,0.4)]">
                            <Icon name="check_circle" size={14} className="text-black" fill />
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-5">
                    <div className="size-14 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center shadow-lg ring-1 ring-white/10 group-hover:scale-105 transition-transform">
                        <Icon name="science" size={32} className="text-white" />
                    </div>
                    <div>
                        <h3 className="text-gray-900 dark:text-white text-xl font-bold leading-tight mb-2 font-display">Xyra</h3>
                        <p className="text-gray-500 dark:text-text-subtle text-sm font-normal leading-relaxed">Experimental leverage trading engine.</p>
                    </div>
                </div>

                <div className="mt-2 pt-5 border-t border-gray-100 dark:border-border/50 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-gray-500 dark:text-text-subtle uppercase tracking-wider">Fees</span>
                        <span className="text-base font-bold text-gray-900 dark:text-white">0%</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-semibold text-gray-500 dark:text-text-subtle uppercase tracking-wider">Liquidity</span>
                        <div className="flex items-center gap-2">
                            <div className="size-2 rounded-full bg-red-500 dark:bg-accent-red"></div>
                            <span className="text-base font-bold text-gray-900 dark:text-white">Low</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Recommendation */}
        <div className="flex gap-4 rounded-xl bg-white dark:bg-background-card border border-gray-200 dark:border-border p-5 items-start shadow-sm dark:shadow-none">
            <Icon name="info" size={20} className="text-primary-dark dark:text-primary mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
                <p className="text-gray-900 dark:text-white text-sm font-bold">Recommendation</p>
                <p className="text-gray-600 dark:text-text-subtle text-sm leading-relaxed">
                    Based on your strategy (High Frequency), we recommend <span className="text-gray-900 dark:text-white font-medium">Hyperliquid</span> for its superior order matching speed and low latency.
                </p>
            </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col-reverse sm:flex-row justify-between pt-6 border-t border-gray-200 dark:border-border mt-auto sm:mt-4 gap-4 pb-12">
            <button 
                onClick={onBack}
                className="px-6 py-3 rounded-xl font-medium text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
            >
                <Icon name="arrow_back" size={20} />
                Back
            </button>
            <button 
                onClick={onNext}
                className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-dark text-black font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
                <span>Next Step</span>
                <Icon name="arrow_forward" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </main>
    </div>
  );
};

export default CreateAgentStep4;