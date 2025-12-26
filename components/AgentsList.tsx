import React, { useState } from 'react';
import Icon from './Icon';

interface AgentsListProps {
  onCreateClick: () => void;
  onAgentClick?: () => void;
}

const AgentsList: React.FC<AgentsListProps> = ({ onCreateClick, onAgentClick }) => {
  const [activeTab, setActiveTab] = useState<'my-agents' | 'explore'>('my-agents');

  return (
    <div className="h-full overflow-y-auto bg-gray-50 dark:bg-background-dark transition-colors duration-300">
        <div className="flex flex-col gap-8 p-4 md:p-6 lg:p-8 pb-24 lg:pb-8 max-w-7xl mx-auto">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
            <h1 className="text-3xl font-bold font-display text-gray-900 dark:text-white tracking-tight">Agents</h1>
            <p className="text-gray-500 dark:text-text-subtle text-base mt-2">Manage your fleet or explore public strategies.</p>
            </div>
            
            <div className="flex items-center gap-3">
                {/* Tabs Pill */}
                <div className="flex p-1 bg-white dark:bg-background-card border border-gray-200 dark:border-border rounded-xl">
                    <button 
                        onClick={() => setActiveTab('my-agents')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                            activeTab === 'my-agents' 
                            ? 'bg-gray-100 dark:bg-background-dark text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-border/50' 
                            : 'text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                        My Agents
                    </button>
                    <button 
                        onClick={() => setActiveTab('explore')}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                            activeTab === 'explore' 
                            ? 'bg-gray-100 dark:bg-background-dark text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-border/50' 
                            : 'text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                        Explore
                    </button>
                </div>

                <button className="hidden md:flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-background-card border border-gray-200 dark:border-border rounded-xl text-sm font-medium text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
                    <Icon name="filter_list" size={18} />
                    <span>Filter</span>
                </button>
                <button 
                    onClick={onCreateClick}
                    className="flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-black rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95"
                >
                    <Icon name="add" size={20} />
                    <span className="hidden sm:inline">Create Agent</span>
                </button>
            </div>
        </div>

        {activeTab === 'my-agents' && (
            <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Create Banner */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/5 to-transparent border border-primary/20 p-8 dark:from-primary/10 dark:via-primary/5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="size-16 rounded-2xl bg-white text-black flex items-center justify-center shadow-xl shadow-white/10 transform rotate-3">
                                <Icon name="add" size={32} fill />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1.5 font-display">Create a New Agent</h2>
                                <p className="text-gray-600 dark:text-text-subtle max-w-md">Design a custom trading strategy with our AI-powered visual builder. No code required.</p>
                            </div>
                        </div>
                        <button 
                            onClick={onCreateClick}
                            className="group flex items-center gap-2 px-6 py-3.5 bg-primary text-black rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                        >
                            Start Building
                            <Icon name="arrow_forward" size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                {/* My Agents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AgentCard 
                        onClick={onAgentClick}
                        name="Sniper Bot"
                        pair="BTC/USDT"
                        status="Active"
                        roi={-12}
                        image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=100&fit=crop"
                    />
                    <AgentCard 
                        onClick={onAgentClick}
                        name="Arbitrage Bot"
                        pair="ETH/USDT"
                        status="Inactive"
                        roi={5}
                        image="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=100&h=100&fit=crop"
                    />
                    <AgentCard 
                        onClick={onAgentClick}
                        name="Market Maker"
                        pair="LTC/USDT"
                        status="Active"
                        roi={3}
                        image="https://images.unsplash.com/photo-1620321023374-d1a68fdd720d?w=100&h=100&fit=crop"
                    />
                </div>
            </div>
        )}

        {activeTab === 'explore' && (
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 font-display">
                        <Icon name="trending_up" className="text-primary" size={24} fill />
                        Trending Agents
                    </h3>
                    <div className="flex gap-1 bg-white dark:bg-background-card p-1 rounded-xl border border-gray-200 dark:border-border">
                        <button className="text-xs font-bold px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-background-dark text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-border/50">1D</button>
                        <button className="text-xs font-medium px-3 py-1.5 rounded-lg text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white transition-colors">7D</button>
                        <button className="text-xs font-medium px-3 py-1.5 rounded-lg text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white transition-colors">30D</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ExploreCard 
                        name="Deep Learning V2"
                        desc="Neural network based strategy for altcoins."
                        roi={24.5}
                        copiers={242}
                        type="Copy"
                        icon={<Icon name="group" size={24} fill />}
                        color="text-indigo-600 dark:text-indigo-400"
                        bg="bg-indigo-100 dark:bg-indigo-500/10"
                    />
                    <ExploreCard 
                        name="Flash Scalper"
                        desc="High frequency scalping on volatility."
                        roi={18.2}
                        copiers={89}
                        type="Scalp"
                        icon={<Icon name="flash_on" size={24} fill />}
                        color="text-orange-600 dark:text-orange-400"
                        bg="bg-orange-100 dark:bg-orange-500/10"
                    />
                    <ExploreCard 
                        name="Whale Watcher"
                        desc="Tracks large wallet movements."
                        roi={8.4}
                        copiers={156}
                        type="Liquidity"
                        icon={<Icon name="water_drop" size={24} fill />}
                        color="text-blue-600 dark:text-blue-400"
                        bg="bg-blue-100 dark:bg-blue-500/10"
                    />
                    <ExploreCard 
                        name="MACD Swing"
                        desc="Classic indicator based swing trades."
                        roi={-2.1}
                        copiers={45}
                        type="Swing"
                        icon={<Icon name="show_chart" size={24} fill />}
                        color="text-pink-600 dark:text-pink-400"
                        bg="bg-pink-100 dark:bg-pink-500/10"
                    />
                </div>
            </div>
        )}
        </div>
    </div>
  );
};

// Sub-components for better organization

const AgentCard = ({ name, pair, status, roi, image, onClick }: any) => (
    <div onClick={onClick} className="group bg-white dark:bg-background-card border border-gray-200 dark:border-border rounded-3xl p-6 hover:border-primary/50 transition-all cursor-pointer relative overflow-hidden shadow-sm dark:shadow-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-4">
                <div className="size-12 rounded-2xl bg-gray-100 dark:bg-background-dark border border-gray-200 dark:border-border p-0.5 flex items-center justify-center overflow-hidden">
                    <img alt={name} className="w-full h-full object-cover rounded-[14px] opacity-90" src={image} />
                </div>
                <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg leading-tight font-display">{name}</h4>
                    <span className="text-xs font-medium text-gray-500 dark:text-text-subtle">{pair}</span>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${
                    status === 'Active' 
                    ? 'bg-primary/10 text-primary-dark dark:text-primary border-primary/20' 
                    : 'bg-gray-100 dark:bg-background-dark text-gray-500 dark:text-text-subtle border-gray-200 dark:border-border'
                }`}>
                    {status}
                </span>
            </div>
        </div>

        {/* Simplified Chart Visual */}
        <div className="h-16 w-full mb-5 relative opacity-50">
             <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
                <defs>
                    <linearGradient id={`grad-${name.replace(/\s/g, '')}`} x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" stopColor={roi > 0 ? "#35E0A0" : "#ef4444"} stopOpacity="0.2" />
                        <stop offset="100%" stopColor={roi > 0 ? "#35E0A0" : "#ef4444"} stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d={roi > 0 ? "M0,35 Q10,30 20,32 T40,20 T60,25 T80,10 T100,5" : "M0,5 Q10,10 20,8 T40,20 T60,15 T80,30 T100,35"} 
                      fill={`url(#grad-${name.replace(/\s/g, '')})`} 
                      stroke="none"
                />
                <path d={roi > 0 ? "M0,35 Q10,30 20,32 T40,20 T60,25 T80,10 T100,5" : "M0,5 Q10,10 20,8 T40,20 T60,15 T80,30 T100,35"} 
                      fill="none" 
                      stroke={roi > 0 ? "#35E0A0" : "#ef4444"} 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      vectorEffect="non-scaling-stroke"
                />
            </svg>
        </div>

        <div className="flex items-end justify-between border-t border-gray-100 dark:border-border pt-5">
            <div>
                <p className="text-xs text-gray-500 dark:text-text-subtle font-semibold uppercase tracking-wider mb-1">ROI (7d)</p>
                <p className={`text-xl font-bold flex items-center gap-1 ${roi >= 0 ? 'text-primary-dark dark:text-primary' : 'text-red-600 dark:text-accent-red'}`}>
                    {roi > 0 ? '+' : ''}{roi}%
                    <Icon name="trending_up" size={18} className={roi < 0 ? 'rotate-180' : ''} fill />
                </p>
            </div>
            <div className="size-9 rounded-full bg-gray-100 dark:bg-background-dark text-gray-500 dark:text-text-subtle flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                <Icon name="arrow_outward" size={20} />
            </div>
        </div>
    </div>
);

const ExploreCard = ({ name, desc, roi, copiers, type, icon, color, bg }: any) => (
    <div className="bg-white dark:bg-background-card border border-gray-200 dark:border-border rounded-3xl p-5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer shadow-sm dark:shadow-none">
        <div className="flex justify-between items-start mb-4">
            <div className={`size-12 rounded-2xl ${bg} ${color} flex items-center justify-center`}>
                {icon}
            </div>
            <div className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-gray-100 dark:bg-background-dark text-gray-500 dark:text-text-subtle uppercase tracking-wide border border-gray-200 dark:border-border">
                {type}
            </div>
        </div>
        <h4 className="font-bold text-gray-900 dark:text-white mb-1.5 text-lg font-display">{name}</h4>
        <p className="text-xs text-gray-500 dark:text-text-subtle mb-5 leading-relaxed min-h-[40px]">{desc}</p>
        <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100 dark:border-border">
            <span className={`font-bold flex items-center gap-1 ${roi >= 0 ? 'text-primary-dark dark:text-primary' : 'text-red-600 dark:text-accent-red'}`}>
                {roi > 0 ? '+' : ''}{roi}%
            </span>
            <span className="text-gray-500 dark:text-text-subtle text-xs font-medium flex items-center gap-1">
                <Icon name="group" size={14} fill /> {copiers}
            </span>
        </div>
    </div>
);

export default AgentsList;