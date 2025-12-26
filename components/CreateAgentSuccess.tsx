import React, { useState, useEffect } from 'react';
import Icon from './Icon';

interface CreateAgentSuccessProps {
  onGoToDashboard: () => void;
  onViewAgent: () => void;
}

type DeployStatus = 'pending' | 'success' | 'failed';

const CreateAgentSuccess: React.FC<CreateAgentSuccessProps> = ({ onGoToDashboard, onViewAgent }) => {
  const [status, setStatus] = useState<DeployStatus>('pending');

  useEffect(() => {
    // Simulate deployment process
    const timer = setTimeout(() => {
      // In a real app, this would be determined by the API response
      // For demo purposes, we default to success
      setStatus('success');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleRetry = () => {
    setStatus('pending');
    setTimeout(() => setStatus('success'), 3000);
  };

  return (
    <div className="h-full overflow-y-auto flex flex-col bg-gray-50 dark:bg-background-dark text-gray-900 dark:text-white font-sans selection:bg-primary/30 animate-in fade-in duration-300 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-border bg-gray-50/90 dark:bg-background-dark/90 backdrop-blur-md px-6 py-4 lg:px-10 transition-colors">
        <div className="flex items-center gap-4">
            <div className="size-10 flex items-center justify-center rounded-xl bg-white dark:bg-background-card text-gray-900 dark:text-white border border-gray-200 dark:border-border">
                <Icon name="smart_toy" size={24} fill />
            </div>
            <h2 className="text-gray-900 dark:text-white text-xl font-bold leading-tight tracking-tight font-display">DeFAI</h2>
        </div>
        <button 
            onClick={onGoToDashboard}
            className="flex size-10 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-white dark:bg-background-card border border-gray-200 dark:border-border text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
        >
            <Icon name="close" size={20} />
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 justify-center items-center py-10 px-4 sm:px-6 lg:px-40 pb-24">
        <div className="flex flex-col items-center justify-center max-w-[560px] flex-1 w-full gap-8 mx-auto">
            
            {/* PENDING STATE */}
            {status === 'pending' && (
                <>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-50 animate-pulse"></div>
                        <div className="relative size-24 rounded-full bg-white dark:bg-background-card border-2 border-primary/50 flex items-center justify-center shadow-[0_0_30px_rgba(53,224,160,0.1)]">
                            <Icon name="refresh" size={48} className="text-primary-dark dark:text-primary animate-spin" />
                        </div>
                    </div>
                    <div className="text-center space-y-3">
                        <h1 className="text-gray-900 dark:text-white text-4xl font-bold tracking-tight font-display animate-pulse">Deploying Agent...</h1>
                        <p className="text-gray-500 dark:text-text-subtle text-lg leading-relaxed">
                            Initializing smart contracts and verifying risk parameters on the network.
                        </p>
                    </div>
                </>
            )}

            {/* FAILED STATE */}
            {status === 'failed' && (
                <>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-red-500/20 dark:bg-accent-red/20 rounded-full blur-xl opacity-50"></div>
                        <div className="relative size-24 rounded-full bg-white dark:bg-background-card border-2 border-red-500 dark:border-accent-red flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                            <Icon name="error" size={48} className="text-red-600 dark:text-accent-red" fill />
                        </div>
                    </div>
                    <div className="text-center space-y-3">
                        <h1 className="text-gray-900 dark:text-white text-4xl font-bold tracking-tight font-display">Deployment Failed</h1>
                        <p className="text-gray-500 dark:text-text-subtle text-lg leading-relaxed">
                            We encountered an issue while deploying your agent. Please check your connection and try again.
                        </p>
                    </div>
                    <div className="flex gap-4 w-full max-w-sm">
                        <button 
                            onClick={onGoToDashboard}
                            className="flex-1 h-12 rounded-xl bg-transparent border border-gray-200 dark:border-border text-gray-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleRetry}
                            className="flex-1 h-12 rounded-xl bg-red-500 dark:bg-accent-red hover:bg-red-600 dark:hover:bg-red-500 text-white font-bold shadow-lg shadow-red-500/20 transition-all flex items-center justify-center gap-2"
                        >
                            <Icon name="refresh" size={18} />
                            Retry
                        </button>
                    </div>
                </>
            )}

            {/* SUCCESS STATE */}
            {status === 'success' && (
                <>
                    <div className="relative group animate-in zoom-in duration-500">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/20 to-primary/20 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                        <div className="relative size-24 rounded-full bg-white dark:bg-background-card border-2 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(53,224,160,0.2)]">
                            <Icon name="check_circle" size={48} className="text-primary-dark dark:text-primary stroke-[3]" fill />
                        </div>
                    </div>
                    
                    <div className="text-center space-y-3 animate-in slide-in-from-bottom-4 duration-500 delay-100">
                        <h1 className="text-gray-900 dark:text-white text-4xl font-bold tracking-tight font-display">Agent Deployed</h1>
                        <p className="text-gray-500 dark:text-text-subtle text-lg leading-relaxed">
                            Your AI trading agent has been successfully configured and is now live on the network.
                        </p>
                    </div>

                    <div className="w-full bg-white dark:bg-background-card border border-gray-200 dark:border-border rounded-2xl overflow-hidden shadow-xl dark:shadow-2xl relative animate-in slide-in-from-bottom-8 duration-700 delay-200">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-primary"></div>
                        <div className="p-6 border-b border-gray-200 dark:border-border bg-gray-50 dark:bg-white/[0.02]">
                            <div className="flex items-start justify-between">
                                <div className="flex gap-4">
                                    <div className="size-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg ring-1 ring-white/10">
                                        <Icon name="smart_toy" size={24} className="text-white" fill />
                                    </div>
                                    <div>
                                        <h3 className="text-gray-900 dark:text-white text-lg font-bold font-display">Alpha Runner v1</h3>
                                        <p className="text-gray-500 dark:text-text-subtle text-xs font-medium uppercase tracking-wide mt-1">Draft Strategy</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-dark dark:bg-primary"></span>
                                    </span>
                                    <span className="text-primary-dark dark:text-primary text-xs font-bold uppercase tracking-wide">Active</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 grid grid-cols-2 gap-y-6 gap-x-4">
                            <div>
                                <p className="text-gray-500 dark:text-text-subtle text-xs font-semibold uppercase tracking-wider mb-1.5">Venue</p>
                                <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                                    <Icon name="bolt" size={16} className="text-primary-dark dark:text-primary" fill />
                                    Hyperliquid
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-text-subtle text-xs font-semibold uppercase tracking-wider mb-1.5">Target Pair</p>
                                <div className="flex items-center gap-2 text-gray-900 dark:text-white font-medium">
                                    <div className="flex -space-x-2">
                                        <div className="size-5 rounded-full bg-[#627EEA] ring-2 ring-white dark:ring-background-card flex items-center justify-center text-[8px] text-white font-bold">E</div>
                                        <div className="size-5 rounded-full bg-[#2775CA] ring-2 ring-white dark:ring-background-card flex items-center justify-center text-[8px] text-white font-bold">U</div>
                                    </div>
                                    ETH-USDC
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-text-subtle text-xs font-semibold uppercase tracking-wider mb-1.5">Max Allocation</p>
                                <div className="text-gray-900 dark:text-white font-medium">5,000 USDC</div>
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-text-subtle text-xs font-semibold uppercase tracking-wider mb-1.5">Risk Profile</p>
                                <div className="text-gray-900 dark:text-white font-medium">Moderate</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full animate-in slide-in-from-bottom-8 duration-700 delay-300">
                        <button 
                            onClick={onGoToDashboard}
                            className="flex-1 h-12 rounded-xl bg-transparent border border-gray-200 dark:border-border text-gray-900 dark:text-white font-bold hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
                        >
                            Go to Dashboard
                        </button>
                        <button 
                            onClick={onViewAgent}
                            className="group flex-1 h-12 rounded-xl bg-gradient-to-r from-emerald-500 to-primary text-black font-bold shadow-[0_0_20px_rgba(53,224,160,0.2)] hover:shadow-[0_0_30px_rgba(53,224,160,0.4)] hover:brightness-110 transition-all duration-200 flex items-center justify-center gap-2"
                        >
                            View Agent
                            <Icon name="arrow_forward" size={20} className="group-hover:translate-x-0.5 transition-transform" />
                        </button>
                    </div>
                </>
            )}

        </div>
      </div>
    </div>
  );
};

export default CreateAgentSuccess;