import React from 'react';
import Icon from './Icon';

interface CreateAgentStep5Props {
  onBack: () => void;
  onDeploy: () => void;
}

const CreateAgentStep5: React.FC<CreateAgentStep5Props> = ({ onBack, onDeploy }) => {
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
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-text-subtle">Step 5 of 5</span>
                </div>
            </div>
        </div>
        {/* Progress Bar - 100% */}
        <div className="w-full h-[2px] bg-gray-200 dark:bg-border/50">
            <div className="h-full bg-primary shadow-[0_0_10px_rgba(53,224,160,0.5)] transition-all duration-500 ease-out w-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[960px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-10 pb-24">
        
        <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-6 justify-between items-end">
                <div>
                    <h1 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-gray-900 dark:text-white leading-tight">Review & Deploy Agent</h1>
                    <p className="text-gray-500 dark:text-text-subtle text-lg font-normal leading-relaxed max-w-2xl mt-4">
                        Review your agent's configuration before final deployment. Once created, your agent will immediately begin monitoring the selected markets.
                    </p>
                </div>
            </div>
        </div>

        {/* Review Card */}
        <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 dark:border-border bg-white dark:bg-background-card p-6 md:p-8 shadow-sm dark:shadow-none">
            {/* Card Header */}
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between border-b border-gray-200 dark:border-border pb-6">
                <div className="flex gap-4 items-center">
                    <div className="size-16 rounded-2xl bg-gradient-to-br from-emerald-900/10 to-primary/20 border border-primary/20 flex items-center justify-center">
                        <Icon name="rocket_launch" size={32} className="text-primary-dark dark:text-primary" fill />
                    </div>
                    <div>
                        <h3 className="text-gray-900 dark:text-white text-2xl font-bold font-display">Alpha Hunter V1</h3>
                        <p className="text-gray-500 dark:text-text-subtle mt-1 text-sm">High-Frequency Momentum • Last edited just now</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-background-dark hover:bg-gray-200 dark:hover:bg-white/5 border border-gray-200 dark:border-border px-4 py-2 text-sm font-medium text-gray-600 dark:text-text-subtle transition-colors">
                        <Icon name="edit" size={16} />
                        Edit
                    </button>
                    <button className="flex items-center gap-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/20 px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 transition-colors">
                        <Icon name="memory" size={16} />
                        Ask AI to explain
                    </button>
                </div>
            </div>

            {/* Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-2">
                
                {/* Strategy Logic */}
                <div className="flex flex-col gap-6">
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 dark:text-text-subtle uppercase tracking-wider mb-3">Strategy Logic</h4>
                        <div className="rounded-xl bg-gray-50 dark:bg-background-dark/50 border border-gray-200 dark:border-border p-4">
                            <p className="text-gray-700 dark:text-white text-sm leading-relaxed">
                                Executes buy orders when <span className="text-primary-dark dark:text-primary font-medium">RSI &lt; 30</span> and volume spikes &gt; 200% on 15m timeframe.
                                Sells when profit reaches <span className="text-primary-dark dark:text-primary font-medium">+12%</span> or stop loss at <span className="text-red-600 dark:text-accent-red font-medium">-3%</span>.
                            </p>
                        </div>
                    </div>
                    
                    {/* Target Assets */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 dark:text-text-subtle uppercase tracking-wider mb-3">Target Assets</h4>
                        <div className="flex flex-wrap gap-2">
                            <div className="flex items-center gap-2 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-border px-3 py-2">
                                <div className="size-5 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">E</div>
                                <span className="text-gray-900 dark:text-white text-sm font-medium">ETH</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-border px-3 py-2">
                                <div className="size-5 rounded-full bg-purple-600 flex items-center justify-center text-[10px] text-white font-bold">S</div>
                                <span className="text-gray-900 dark:text-white text-sm font-medium">SOL</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-gray-50 dark:bg-background-dark border border-gray-200 dark:border-border px-3 py-2">
                                <div className="size-5 rounded-full bg-[#f7931a] flex items-center justify-center text-[10px] text-white font-bold">B</div>
                                <span className="text-gray-900 dark:text-white text-sm font-medium">BTC</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6">
                    {/* Risk Management */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 dark:text-text-subtle uppercase tracking-wider mb-3">Risk Management</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-3 rounded-lg border border-gray-200 dark:border-border bg-gray-50 dark:bg-background-dark/30">
                                <span className="block text-gray-500 dark:text-text-subtle text-xs mb-1">Max Position Size</span>
                                <span className="text-gray-900 dark:text-white font-medium text-sm">5.0 ETH</span>
                            </div>
                            <div className="p-3 rounded-lg border border-gray-200 dark:border-border bg-gray-50 dark:bg-background-dark/30">
                                <span className="block text-gray-500 dark:text-text-subtle text-xs mb-1">Daily Loss Limit</span>
                                <span className="text-gray-900 dark:text-white font-medium text-sm">20%</span>
                            </div>
                            <div className="p-3 rounded-lg border border-gray-200 dark:border-border bg-gray-50 dark:bg-background-dark/30">
                                <span className="block text-gray-500 dark:text-text-subtle text-xs mb-1">Leverage</span>
                                <span className="text-gray-900 dark:text-white font-medium text-sm">2x Isolated</span>
                            </div>
                            <div className="p-3 rounded-lg border border-gray-200 dark:border-border bg-gray-50 dark:bg-background-dark/30">
                                <span className="block text-gray-500 dark:text-text-subtle text-xs mb-1">Take Profit</span>
                                <span className="text-gray-900 dark:text-white font-medium text-sm">Dynamic</span>
                            </div>
                        </div>
                    </div>

                    {/* Execution Venue */}
                    <div>
                        <h4 className="text-xs font-bold text-gray-500 dark:text-text-subtle uppercase tracking-wider mb-3">Execution Venue</h4>
                        <div className="flex items-center justify-between rounded-xl bg-gray-50 dark:bg-background-dark/50 border border-gray-200 dark:border-border p-4">
                            <div className="flex items-center gap-3">
                                <div className="size-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-sm">
                                    <Icon name="bolt" size={20} className="text-white" fill />
                                </div>
                                <div>
                                    <p className="text-gray-900 dark:text-white font-bold text-sm">Hyperliquid</p>
                                    <p className="text-gray-500 dark:text-text-subtle text-xs">DEX • Low Latency</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-gray-500 dark:text-text-subtle text-xs">Est. Gas</p>
                                <p className="text-primary-dark dark:text-primary font-medium text-sm">~$0.45</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* Safety Check */}
        <div className="flex flex-col gap-3 rounded-xl bg-primary/5 border border-primary/20 p-5">
            <div className="flex gap-3">
                <Icon name="verified_user" size={24} className="text-primary-dark dark:text-primary mt-0.5" fill />
                <div className="flex flex-col gap-1">
                    <p className="text-gray-900 dark:text-white text-sm font-bold">Safety Check Passed</p>
                    <p className="text-gray-600 dark:text-text-subtle text-sm leading-relaxed">
                        Your agent configuration has passed all preliminary safety checks. The stop-loss settings are within recommended safe trading bounds for the selected volatility.
                    </p>
                </div>
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
                onClick={onDeploy}
                className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-dark text-black font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
                <span>Create Agent</span>
                <Icon name="rocket_launch" size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </main>
    </div>
  );
};

export default CreateAgentStep5;