import React, { useState } from 'react';
import Icon from './Icon';

interface CreateAgentStep3Props {
  onBack: () => void;
  onNext: () => void;
}

const CreateAgentStep3: React.FC<CreateAgentStep3Props> = ({ onBack, onNext }) => {
  const [allocation, setAllocation] = useState(25);
  const [leverage, setLeverage] = useState(10);
  const [lossLimit, setLossLimit] = useState('');

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
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-text-subtle">Step 3 of 5</span>
                </div>
            </div>
        </div>
        {/* Progress Bar - 60% */}
        <div className="w-full h-[2px] bg-gray-200 dark:bg-border/50">
            <div className="h-full bg-primary shadow-[0_0_10px_rgba(53,224,160,0.5)] transition-all duration-500 ease-out w-[60%]"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[720px] mx-auto p-4 sm:p-6 lg:p-8 flex flex-col gap-8 pb-24">
        
        <div className="space-y-2 mt-4">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-2xl sm:text-[28px] font-bold font-display tracking-tight text-gray-900 dark:text-white leading-tight">Risk Controls</h1>
                    <p className="text-gray-500 dark:text-text-subtle text-base font-normal mt-2">
                        Define strict financial boundaries for your agent.
                    </p>
                </div>
            </div>
        </div>

        <div className="flex flex-col gap-6">
            
            {/* Capital Allocation */}
            <div className="bg-white dark:bg-background-card rounded-2xl p-6 border border-gray-200 dark:border-border shadow-sm dark:shadow-none">
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-start">
                        <label className="text-gray-900 dark:text-white text-base font-semibold flex gap-2 items-center">
                            Capital Allocation per Trade
                            <Icon name="info" size={16} className="text-gray-400 dark:text-text-subtle cursor-help" />
                        </label>
                        <div className="px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary-dark dark:text-primary font-bold text-sm">
                            {allocation}%
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="relative flex-1 w-full h-12 flex items-center px-1">
                            {/* Custom Range Slider Visualization */}
                            <div className="w-full h-1.5 bg-gray-200 dark:bg-[#252525] rounded-full relative">
                                <div 
                                    className="absolute left-0 top-0 h-full bg-primary rounded-full z-10 transition-all duration-75" 
                                    style={{ width: `${allocation}%` }}
                                ></div>
                                {/* Thumb */}
                                <div 
                                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 size-5 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.3)] cursor-grab hover:scale-110 transition-transform border-[3px] border-white dark:border-background-card"
                                    style={{ left: `${allocation}%` }}
                                ></div>
                                {/* Ticks */}
                                <div className="absolute top-4 w-full flex justify-between text-[10px] font-medium text-gray-400 dark:text-text-subtle select-none">
                                    <span className="relative -left-1">0%</span>
                                    <span className="relative -left-1">25%</span>
                                    <span className="relative">50%</span>
                                    <span className="relative left-1">75%</span>
                                    <span className="relative left-1">100%</span>
                                </div>
                            </div>
                            {/* Actual Input (Invisible but functional) */}
                            <input 
                                type="range" 
                                min="0" 
                                max="100" 
                                value={allocation} 
                                onChange={(e) => setAllocation(Number(e.target.value))}
                                className="absolute inset-0 w-full opacity-0 cursor-pointer z-30"
                            />
                        </div>
                        <div className="w-full sm:w-28 relative shrink-0">
                            <input 
                                className="w-full bg-gray-100 dark:bg-background-dark border border-gray-200 dark:border-border rounded-xl h-11 px-3 text-gray-900 dark:text-white text-right focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-mono" 
                                type="number" 
                                value={allocation}
                                onChange={(e) => setAllocation(Math.min(100, Math.max(0, Number(e.target.value))))}
                            />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-text-subtle text-sm">%</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Leverage */}
            <div className="bg-white dark:bg-background-card rounded-2xl p-6 border border-gray-200 dark:border-border shadow-sm dark:shadow-none">
                <div className="flex flex-col gap-4">
                    <label className="text-gray-900 dark:text-white text-base font-semibold flex gap-2 items-center">
                        Leverage Multiplier
                        <Icon name="info" size={16} className="text-gray-400 dark:text-text-subtle cursor-help" />
                    </label>
                    <div className="grid grid-cols-5 gap-2 sm:gap-3">
                        {[1, 2, 5, 10, 20].map((val) => (
                            <button
                                key={val}
                                onClick={() => setLeverage(val)}
                                className={`flex items-center justify-center h-10 rounded-lg border transition-all font-semibold text-sm ${
                                    leverage === val 
                                    ? 'bg-primary border-primary text-black shadow-sm' 
                                    : 'bg-gray-100 dark:bg-background-dark border-gray-200 dark:border-border text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-border/80'
                                } ${val === 20 && leverage !== 20 ? 'hover:text-red-600 dark:hover:text-accent-red hover:border-red-200 dark:hover:border-accent-red/30 hover:bg-red-50 dark:hover:bg-accent-red/5' : ''}`}
                            >
                                {val}x
                            </button>
                        ))}
                    </div>
                    {leverage >= 10 && (
                        <div className="mt-2 flex gap-3 p-3.5 rounded-xl bg-yellow-50 dark:bg-accent-yellow/10 border border-yellow-200 dark:border-accent-yellow/20 items-start">
                            <Icon name="warning" size={18} className="text-yellow-600 dark:text-accent-yellow shrink-0 mt-0.5" />
                            <div className="flex flex-col gap-0.5">
                                <p className="text-yellow-700 dark:text-accent-yellow text-sm font-bold">Moderate Risk</p>
                                <p className="text-yellow-600 dark:text-accent-yellow/80 text-sm leading-snug">
                                    {leverage}x leverage increases liquidation risk. Ensure your Stop Loss is tight.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Limits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Max Daily Loss */}
                <div className="sm:col-span-2 bg-white dark:bg-background-card rounded-2xl p-6 border border-gray-200 dark:border-border shadow-sm dark:shadow-none">
                    <label className="block text-gray-900 dark:text-white text-base font-semibold mb-3">Max Daily Loss Limit</label>
                    <div className="relative group">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center size-6 rounded bg-gray-200 dark:bg-border text-gray-500 dark:text-text-subtle">
                            <Icon name="gpp_bad" size={16} />
                        </div>
                        <input 
                            className="w-full bg-gray-100 dark:bg-background-dark border border-gray-200 dark:border-border rounded-xl h-12 pl-12 pr-16 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-text-subtle/30 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-mono" 
                            placeholder="0.00" 
                            type="text"
                            value={lossLimit}
                            onChange={(e) => setLossLimit(e.target.value)}
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-text-subtle font-medium text-sm">USDT</span>
                    </div>
                    <p className="mt-2.5 text-gray-500 dark:text-text-subtle text-xs flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-gray-300 dark:bg-text-subtle/50 inline-block"></span>
                        Trading will halt for 24h if this loss is reached.
                    </p>
                </div>

                {/* Stop Loss */}
                <div className="bg-white dark:bg-background-card rounded-2xl p-6 border border-gray-200 dark:border-border shadow-sm dark:shadow-none">
                    <label className="block text-gray-900 dark:text-white text-base font-semibold mb-3">Stop Loss</label>
                    <div className="relative group">
                        <input 
                            className="w-full bg-gray-100 dark:bg-background-dark border border-gray-200 dark:border-border rounded-xl h-12 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-text-subtle/30 focus:ring-1 focus:ring-red-500 dark:focus:ring-accent-red focus:border-red-500 dark:focus:border-accent-red outline-none transition-all font-mono" 
                            type="number" 
                            defaultValue="5"
                        />
                        <div className="absolute right-0 top-0 h-full flex items-center pr-1">
                            <div className="h-8 w-[1px] bg-gray-200 dark:bg-border"></div>
                            <div className="relative">
                                <select className="bg-transparent text-gray-500 dark:text-text-subtle text-sm font-medium border-none focus:ring-0 cursor-pointer h-full py-0 pl-2 pr-6 outline-none appearance-none">
                                    <option>%</option>
                                    <option>$</option>
                                </select>
                                <Icon name="expand_more" size={14} className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 dark:text-text-subtle pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Take Profit */}
                <div className="bg-white dark:bg-background-card rounded-2xl p-6 border border-gray-200 dark:border-border shadow-sm dark:shadow-none">
                    <label className="block text-gray-900 dark:text-white text-base font-semibold mb-3">Take Profit</label>
                    <div className="relative group">
                        <input 
                            className="w-full bg-gray-100 dark:bg-background-dark border border-gray-200 dark:border-border rounded-xl h-12 px-4 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-text-subtle/30 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all font-mono" 
                            type="number" 
                            defaultValue="15"
                        />
                        <div className="absolute right-0 top-0 h-full flex items-center pr-1">
                            <div className="h-8 w-[1px] bg-gray-200 dark:bg-border"></div>
                            <div className="relative">
                                <select className="bg-transparent text-gray-500 dark:text-text-subtle text-sm font-medium border-none focus:ring-0 cursor-pointer h-full py-0 pl-2 pr-6 outline-none appearance-none">
                                    <option>%</option>
                                    <option>$</option>
                                </select>
                                <Icon name="expand_more" size={14} className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500 dark:text-text-subtle pointer-events-none" />
                            </div>
                        </div>
                    </div>
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
                onClick={onNext}
                className="px-8 py-3 rounded-xl bg-primary hover:bg-primary-dark text-black font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
                <span>Continue</span>
                <Icon name="arrow_forward" size={20} />
            </button>
        </div>
      </main>
    </div>
  );
};

export default CreateAgentStep3;