import React from 'react';
import Icon from './Icon';

interface CreateAgentStep1Props {
  onBack: () => void;
  onNext: () => void;
}

const CreateAgentStep1: React.FC<CreateAgentStep1Props> = ({ onBack, onNext }) => {
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
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-text-subtle">Step 1 of 5</span>
                </div>
            </div>
        </div>
        {/* Progress Bar */}
        <div className="w-full h-[2px] bg-gray-200 dark:bg-border/50">
            <div className="h-full bg-primary shadow-[0_0_10px_rgba(53,224,160,0.5)] transition-all duration-500 ease-out w-[20%]"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[640px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-8 pb-24">
        <div className="space-y-2 mt-4">
            <h1 className="text-3xl sm:text-[32px] font-bold font-display tracking-tight text-gray-900 dark:text-white leading-tight">Agent Basics</h1>
            <p className="text-gray-500 dark:text-text-subtle text-base font-normal">Name your agent and define its core personality to get started.</p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            {/* Name Input */}
            <div className="space-y-2">
                <label htmlFor="agentName" className="text-sm font-medium text-gray-700 dark:text-gray-200">Agent Name</label>
                <div className="relative">
                    <input 
                        type="text" 
                        id="agentName"
                        placeholder="e.g. Alpha Sentinel" 
                        className="w-full h-14 px-4 rounded-xl bg-white dark:bg-background-card border border-gray-200 dark:border-border text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-text-subtle/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all shadow-sm dark:shadow-none"
                    />
                </div>
                <p className="text-xs text-gray-500 dark:text-text-subtle">Unique name for your trading bot.</p>
            </div>

            {/* Type Select */}
            <div className="space-y-2">
                <label htmlFor="agentType" className="text-sm font-medium text-gray-700 dark:text-gray-200">Agent Type</label>
                <div className="relative">
                    <select 
                        id="agentType"
                        className="w-full h-14 px-4 pr-10 rounded-xl bg-white dark:bg-background-card border border-gray-200 dark:border-border text-gray-900 dark:text-white appearance-none focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all cursor-pointer shadow-sm dark:shadow-none"
                        defaultValue=""
                    >
                        <option value="" disabled>Select an agent type...</option>
                        <option value="social">Social Sentiment</option>
                        <option value="whale">Whale Watcher</option>
                        <option value="liquidation">Liquidation Hunter</option>
                        <option value="copy">Copy Trading</option>
                        <option value="custom">Custom Strategy</option>
                    </select>
                    <Icon name="expand_more" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-text-subtle pointer-events-none" size={20} />
                </div>
            </div>

            {/* Trading Style */}
            <div className="space-y-3">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Trading Style</span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Conservative */}
                    <label className="cursor-pointer group relative">
                        <input type="radio" name="style" value="conservative" className="peer sr-only" />
                        <div className="h-full flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-background-card border border-gray-200 dark:border-border hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all shadow-sm dark:shadow-none">
                            <div className="p-2 rounded-full bg-gray-100 dark:bg-background-dark text-gray-500 dark:text-text-subtle peer-checked:bg-primary peer-checked:text-black group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                <Icon name="security" size={20} />
                            </div>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Conservative</span>
                            <span className="text-xs text-center text-gray-500 dark:text-text-subtle">Low risk, stable returns</span>
                        </div>
                    </label>

                    {/* Balanced */}
                    <label className="cursor-pointer group relative">
                        <input type="radio" name="style" value="balanced" className="peer sr-only" defaultChecked />
                        <div className="h-full flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-background-card border border-gray-200 dark:border-border hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all shadow-sm dark:shadow-none">
                            <div className="p-2 rounded-full bg-gray-100 dark:bg-background-dark text-gray-500 dark:text-text-subtle peer-checked:bg-primary peer-checked:text-black group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                <Icon name="gavel" size={20} />
                            </div>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Balanced</span>
                            <span className="text-xs text-center text-gray-500 dark:text-text-subtle">Moderate risk & growth</span>
                        </div>
                    </label>

                    {/* Aggressive */}
                    <label className="cursor-pointer group relative">
                        <input type="radio" name="style" value="aggressive" className="peer sr-only" />
                        <div className="h-full flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white dark:bg-background-card border border-gray-200 dark:border-border hover:border-primary/50 peer-checked:border-primary peer-checked:bg-primary/5 transition-all shadow-sm dark:shadow-none">
                            <div className="p-2 rounded-full bg-gray-100 dark:bg-background-dark text-gray-500 dark:text-text-subtle peer-checked:bg-primary peer-checked:text-black group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                <Icon name="rocket_launch" size={20} />
                            </div>
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">Aggressive</span>
                            <span className="text-xs text-center text-gray-500 dark:text-text-subtle">High risk, high reward</span>
                        </div>
                    </label>
                </div>
            </div>

            <div className="h-px w-full bg-gray-200 dark:bg-border my-2"></div>

            {/* Footer Buttons */}
            <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 pb-8">
                <button 
                    type="button"
                    onClick={onBack}
                    className="w-full sm:w-auto px-6 h-12 rounded-xl font-bold text-gray-500 dark:text-text-subtle hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                    Cancel
                </button>
                <button 
                    type="submit"
                    className="w-full sm:w-auto px-8 h-12 rounded-xl bg-primary hover:bg-primary-dark text-black font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    <span>Continue</span>
                    <Icon name="arrow_forward" size={20} />
                </button>
            </div>
        </form>
      </main>
    </div>
  );
};

export default CreateAgentStep1;