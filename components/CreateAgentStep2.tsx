import React, { useState } from 'react';
import Icon from './Icon';

interface CreateAgentStep2Props {
  onBack: () => void;
  onNext: () => void;
}

const CreateAgentStep2: React.FC<CreateAgentStep2Props> = ({ onBack, onNext }) => {
  const [direction, setDirection] = useState<'long' | 'short' | 'both'>('both');
  const [selectedSignals, setSelectedSignals] = useState<string[]>(['social', 'whale']);
  
  const toggleSignal = (id: string) => {
    setSelectedSignals(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

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
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-text-subtle">Step 2 of 5</span>
                </div>
            </div>
        </div>
        {/* Progress Bar - 40% */}
        <div className="w-full h-[2px] bg-gray-200 dark:bg-border/50">
            <div className="h-full bg-primary shadow-[0_0_10px_rgba(53,224,160,0.5)] transition-all duration-500 ease-out w-[40%]"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-8 pb-24">
        
        <div className="text-center space-y-2 mt-4">
            <h1 className="text-2xl sm:text-[28px] font-bold font-display tracking-tight text-gray-900 dark:text-white leading-tight">Strategy Configuration</h1>
            <p className="text-gray-500 dark:text-text-subtle text-base font-normal max-w-md mx-auto">
                Define how your AI agent should behave in the market by selecting assets and signals.
            </p>
        </div>

        <div className="flex flex-col gap-8">
            {/* Assets */}
            <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1">Assets</label>
                <div className="w-full rounded-xl bg-white dark:bg-background-card border border-gray-200 dark:border-border p-2 focus-within:border-primary focus-within:ring-1 focus:within:ring-primary transition-all shadow-sm dark:shadow-none">
                    <div className="flex flex-wrap gap-2 mb-2 px-1">
                        <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-dark dark:text-primary pl-2 pr-2 py-1 rounded-lg text-sm font-medium">
                            <div className="size-4 rounded-full bg-[#f7931a] flex items-center justify-center text-[8px] font-bold text-white">B</div>
                            <span>BTC</span>
                            <button className="hover:text-black dark:hover:text-white text-primary-dark/70 dark:text-primary/70 flex items-center transition-colors ml-1">
                                <Icon name="cancel" size={14} />
                            </button>
                        </div>
                        <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary-dark dark:text-primary pl-2 pr-2 py-1 rounded-lg text-sm font-medium">
                            <div className="size-4 rounded-full bg-[#627eea] flex items-center justify-center text-[8px] font-bold text-white">E</div>
                            <span>ETH</span>
                            <button className="hover:text-black dark:hover:text-white text-primary-dark/70 dark:text-primary/70 flex items-center transition-colors ml-1">
                                <Icon name="cancel" size={14} />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center px-1 pb-1">
                        <Icon name="search" size={18} className="text-gray-400 dark:text-text-subtle mr-2" />
                        <input 
                            type="text" 
                            className="bg-transparent border-none p-0 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-text-subtle/50 focus:ring-0 w-full text-sm h-6 outline-none" 
                            placeholder="Search crypto assets..." 
                        />
                    </div>
                </div>
            </div>

            {/* Direction */}
            <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1">Direction</label>
                <div className="grid grid-cols-3 gap-1 p-1 bg-white dark:bg-background-card rounded-xl border border-gray-200 dark:border-border shadow-sm dark:shadow-none">
                    <button 
                        onClick={() => setDirection('long')}
                        className={`py-2.5 text-sm font-medium rounded-lg transition-all ${direction === 'long' ? 'bg-primary text-black font-bold shadow-sm' : 'text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'}`}
                    >
                        Long only
                    </button>
                    <button 
                        onClick={() => setDirection('short')}
                        className={`py-2.5 text-sm font-medium rounded-lg transition-all ${direction === 'short' ? 'bg-primary text-black font-bold shadow-sm' : 'text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'}`}
                    >
                        Short only
                    </button>
                    <button 
                        onClick={() => setDirection('both')}
                        className={`py-2.5 text-sm font-medium rounded-lg transition-all ${direction === 'both' ? 'bg-primary text-black font-bold shadow-sm' : 'text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'}`}
                    >
                        Both
                    </button>
                </div>
            </div>

            {/* Signal Sources */}
            <div className="space-y-3">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-200 ml-1">Signal Sources</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                        { id: 'price', label: 'Price movement', sub: 'Technical indicators & patterns' },
                        { id: 'social', label: 'Social activity', sub: 'Sentiment analysis from X/Reddit' },
                        { id: 'whale', label: 'Whale movement', sub: 'Large wallet tracking' },
                        { id: 'liquidations', label: 'Liquidations', sub: 'Exchange liquidation data' }
                    ].map((signal) => {
                        const isSelected = selectedSignals.includes(signal.id);
                        return (
                            <div 
                                key={signal.id}
                                onClick={() => toggleSignal(signal.id)}
                                className={`cursor-pointer group relative flex items-start gap-3 p-4 rounded-xl border transition-all select-none shadow-sm dark:shadow-none ${
                                    isSelected 
                                    ? 'bg-white dark:bg-background-card border-primary shadow-[0_0_0_1px_rgba(53,224,160,0.2)] dark:shadow-[0_0_0_1px_rgba(53,224,160,0.2)]' 
                                    : 'bg-white dark:bg-background-card border-gray-200 dark:border-border hover:border-gray-400 dark:hover:border-text-subtle/50'
                                }`}
                            >
                                <div className={`mt-0.5 size-5 rounded border-2 flex items-center justify-center transition-colors ${
                                    isSelected ? 'bg-primary border-primary' : 'border-gray-300 dark:border-text-subtle'
                                }`}>
                                    {isSelected && <Icon name="check_circle" size={14} className="text-black" fill />}
                                </div>
                                <div className="flex flex-col">
                                    <span className={`text-sm font-medium transition-colors ${isSelected ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary'}`}>
                                        {signal.label}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-text-subtle mt-0.5">{signal.sub}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Live Preview */}
            <div className="mt-2 p-5 rounded-xl bg-primary/10 border border-primary/20 flex items-start gap-4">
                <div className="size-10 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    <Icon name="smart_toy" size={20} className="text-black" />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-primary-dark dark:text-primary uppercase tracking-wide">Live Preview</span>
                    <p className="text-gray-900 dark:text-white text-sm leading-relaxed">
                        This agent will trade <span className="font-bold border-b border-primary/50">BTC</span> and <span className="font-bold border-b border-primary/50">ETH</span> using <span className="font-bold">social sentiment</span> and <span className="font-bold">whale activity</span>.
                    </p>
                </div>
            </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col-reverse sm:flex-row justify-between pt-6 border-t border-gray-200 dark:border-border mt-auto sm:mt-4 gap-4">
            <button 
                onClick={onBack}
                className="px-6 py-3 rounded-xl font-medium text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
            >
                Back
            </button>
            <button 
                onClick={onNext}
                className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-dark text-black font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
                <span>Next Step</span>
                <Icon name="arrow_forward" size={20} />
            </button>
        </div>
      </main>
    </div>
  );
};

export default CreateAgentStep2;