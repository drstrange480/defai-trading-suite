import React, { useState } from 'react';
import Icon from './Icon';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

interface AgentDetailProps {
  onBack: () => void;
  onChatClick?: () => void;
}

const initialPerformanceData = [
  { time: '00:00', value: 1000, compare: 1000 },
  { time: '04:00', value: 1025, compare: 1010 },
  { time: '08:00', value: 1015, compare: 1030 },
  { time: '12:00', value: 1060, compare: 1045 },
  { time: '16:00', value: 1090, compare: 1050 },
  { time: '20:00', value: 1124, compare: 1080 },
  { time: '23:59', value: 1115, compare: 1100 },
];

const AgentDetail: React.FC<AgentDetailProps> = ({ onBack, onChatClick }) => {
  const [timeRange, setTimeRange] = useState('1D');
  const [activeTab, setActiveTab] = useState<'decisions' | 'positions' | 'log'>('decisions');
  const [isPaused, setIsPaused] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-background-dark animate-in fade-in slide-in-from-right-4 duration-300 transition-colors">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-50/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-border px-4 py-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-4">
            <button 
              onClick={onBack}
              className="p-2 -ml-2 rounded-xl text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/5 transition-colors"
            >
              <Icon name="arrow_back" size={24} />
            </button>
            
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white font-display tracking-tight">Sniper Bot</h1>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide border ${
                  isPaused 
                    ? 'bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 border-yellow-200 dark:border-yellow-500/20' 
                    : 'bg-primary/10 text-primary-dark dark:text-primary border-primary/20 shadow-[0_0_10px_rgba(53,224,160,0.2)]'
                }`}>
                  {isPaused ? 'Paused' : 'Active'}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-text-subtle font-medium">
                  <span className="size-1.5 rounded-full bg-[#f7931a]"></span>
                  BTC/USDT
                </span>
                <span className="text-gray-300 dark:text-text-subtle/30">•</span>
                <span className="text-xs text-gray-500 dark:text-text-subtle">High Frequency</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
             <button 
                onClick={onChatClick}
                className="hidden sm:flex px-4 py-2 rounded-lg text-sm font-medium border border-indigo-200 dark:border-indigo-500/30 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-all items-center gap-2"
            >
                <Icon name="auto_awesome" size={16} />
                Ask AI
            </button>
            <button 
              onClick={() => setIsPaused(!isPaused)}
              className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 dark:border-border bg-white dark:bg-background-card hover:bg-gray-50 dark:hover:bg-border/50 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all flex items-center gap-2"
            >
              {isPaused ? <Icon name="play_arrow" size={16} fill /> : <Icon name="pause" size={16} fill />}
              {isPaused ? 'Resume' : 'Pause'}
            </button>
            <button className="px-4 py-2 rounded-lg text-sm font-bold bg-white text-black hover:bg-gray-200 transition-colors flex items-center gap-2 border border-gray-200 dark:border-transparent">
              <Icon name="settings" size={16} />
              <span className="hidden sm:inline">Settings</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
          
          {/* Top Section: Chart & Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Chart Card */}
            <div className="lg:col-span-2 bg-white dark:bg-background-card border border-gray-200 dark:border-border rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col min-h-[400px] shadow-sm dark:shadow-none">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="flex flex-wrap items-center justify-between gap-4 mb-8 relative z-10">
                <div>
                  <h2 className="text-lg font-medium text-gray-500 dark:text-text-subtle">Performance</h2>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white font-display tracking-tight">+12.4%</span>
                    <span className="flex items-center gap-1 text-sm font-bold text-primary-dark dark:text-accent-green bg-primary/10 px-2 py-0.5 rounded-md border border-primary/20">
                      <Icon name="trending_up" size={14} fill />
                      24h
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                    {/* Comparison Toggle */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 dark:text-text-subtle">Compare:</span>
                        <button 
                            onClick={() => setShowComparison(!showComparison)}
                            className={`size-6 rounded-md border flex items-center justify-center transition-colors ${
                                showComparison 
                                ? 'bg-purple-100 dark:bg-purple-500/20 border-purple-500 text-purple-600 dark:text-purple-400' 
                                : 'border-gray-200 dark:border-border text-gray-400 dark:text-text-subtle hover:border-gray-400 dark:hover:border-text-subtle'
                            }`}
                        >
                            <span className="text-[10px] font-bold">vs</span>
                        </button>
                    </div>

                    <div className="flex bg-gray-100 dark:bg-background-dark p-1 rounded-xl border border-gray-200 dark:border-border">
                        {['1D', '1W', '1M', 'ALL'].map((range) => (
                            <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                timeRange === range 
                                ? 'bg-white dark:bg-background-card text-black dark:text-white shadow-sm border border-gray-200 dark:border-border' 
                                : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                            }`}
                            >
                            {range}
                            </button>
                        ))}
                    </div>
                </div>
              </div>

              <div className="flex-1 w-full min-h-[250px] relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={initialPerformanceData}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#35E0A0" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#35E0A0" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" strokeOpacity={0.2} />
                    <XAxis 
                      dataKey="time" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: '#ABABAB', fontSize: 12 }} 
                      dy={10}
                    />
                    <YAxis 
                      hide 
                      domain={['dataMin - 20', 'dataMax + 20']} 
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: 'var(--background-card)', borderColor: 'var(--border)', borderRadius: '12px', color: 'var(--text-main)' }}
                      itemStyle={{ color: 'var(--primary)' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#35E0A0" 
                      strokeWidth={3} 
                      fill="url(#colorValue)" 
                      animationDuration={1500}
                    />
                    {showComparison && (
                        <Area 
                            type="monotone" 
                            dataKey="compare" 
                            stroke="#A855F7" 
                            strokeWidth={2} 
                            strokeDasharray="5 5"
                            fill="transparent" 
                            animationDuration={1500}
                        />
                    )}
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-6">
              <MetricCard 
                label="Total ROI" 
                value="+34.2%" 
                trend="positive" 
                icon={<Icon name="trending_up" size={16} fill />}
                info="Total return on investment since inception"
              />
              <MetricCard 
                label="Win Rate" 
                value="68.5%" 
                trend="neutral" 
                icon={<Icon name="check_circle" size={16} fill />}
                info="Percentage of profitable trades"
              />
              <MetricCard 
                label="Max Drawdown" 
                value="-4.1%" 
                trend="negative" 
                icon={<Icon name="trending_down" size={16} fill />}
                info="Maximum observed loss from a peak to a trough"
              />
              <MetricCard 
                label="Confidence" 
                value="9.2" 
                trend="high" 
                icon={<Icon name="verified_user" size={16} fill />}
                subValue="High"
                info="AI confidence score based on current market conditions"
              />
            </div>
          </div>

          {/* Bottom Section: Activity & Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-8">
            
            {/* Activity Feed */}
            <div className="lg:col-span-2 bg-white dark:bg-background-card border border-gray-200 dark:border-border rounded-3xl overflow-hidden flex flex-col shadow-sm dark:shadow-none">
              {/* Tabs */}
              <div className="flex items-center border-b border-gray-200 dark:border-border px-6 pt-6">
                <button 
                  onClick={() => setActiveTab('decisions')}
                  className={`pb-4 px-4 text-sm font-bold border-b-2 transition-colors ${
                    activeTab === 'decisions' 
                    ? 'border-primary text-primary-dark dark:text-primary' 
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Decisions
                </button>
                <button 
                  onClick={() => setActiveTab('positions')}
                  className={`pb-4 px-4 text-sm font-bold border-b-2 transition-colors ${
                    activeTab === 'positions' 
                    ? 'border-primary text-primary-dark dark:text-primary' 
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Positions
                </button>
                <button 
                  onClick={() => setActiveTab('log')}
                  className={`pb-4 px-4 text-sm font-bold border-b-2 transition-colors ${
                    activeTab === 'log' 
                    ? 'border-primary text-primary-dark dark:text-primary' 
                    : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                >
                  Log
                </button>
              </div>

              <div className="p-6">
                {activeTab === 'decisions' && (
                  <div className="space-y-4">
                    <DecisionItem 
                      type="buy"
                      title="Buy Signal on BTC/USDT"
                      time="2 min ago"
                      desc="Detected bullish divergence on RSI(14) combined with volume spike. Probability of uptrend > 85%."
                      tags={['CONFIDENCE 92%', 'SCALPING']}
                      onClick={onChatClick}
                    />
                    <DecisionItem 
                      type="stop_loss"
                      title="Stop Loss Triggered"
                      time="4h ago"
                      desc="Price dropped below support level at 64,200. Executing defensive exit to preserve capital."
                    />
                    <DecisionItem 
                      type="scan"
                      title="Scanning Market"
                      time="6h ago"
                      desc="Analyzing top 10 pairs for volatility breakout patterns. No actionable signals found yet."
                    />
                  </div>
                )}
                
                {activeTab === 'positions' && (
                  <div className="flex flex-col gap-4 text-center py-10">
                     <div className="mx-auto size-16 bg-gray-100 dark:bg-background-dark rounded-full flex items-center justify-center border border-gray-200 dark:border-border text-gray-400 dark:text-gray-500">
                        <Icon name="search" size={24} />
                     </div>
                     <p className="text-gray-500 dark:text-gray-400">No open positions currently.</p>
                  </div>
                )}

                {activeTab === 'log' && (
                  <div className="space-y-2 font-mono text-xs text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-background-dark p-4 rounded-xl border border-gray-200 dark:border-border max-h-[300px] overflow-y-auto">
                    <p><span className="text-primary-dark dark:text-primary">[10:42:15]</span> Connected to Hyperliquid RPC.</p>
                    <p><span className="text-blue-600 dark:text-blue-400">[10:42:16]</span> Syncing orderbook...</p>
                    <p><span className="text-primary-dark dark:text-primary">[10:42:18]</span> Market data stream active.</p>
                    <p><span className="text-yellow-600 dark:text-yellow-400">[10:45:00]</span> Volatility spike detected (+2.4 sigma).</p>
                    <p><span className="text-primary-dark dark:text-primary">[10:45:01]</span> Analyzing entry conditions...</p>
                  </div>
                )}

                {activeTab === 'decisions' && (
                  <button className="w-full mt-6 py-3 rounded-xl border border-gray-200 dark:border-border text-sm text-primary-dark dark:text-primary font-bold hover:bg-primary/5 hover:border-primary/30 transition-all">
                    View Full History
                  </button>
                )}
              </div>
            </div>

            {/* Side Actions */}
            <div className="flex flex-col gap-4">
              
              {/* Copy Card */}
              <div className="relative overflow-hidden rounded-3xl p-6 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 group">
                <div className="relative z-10">
                  <div className="size-12 bg-white/40 dark:bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/20 dark:border-white/10">
                    <Icon name="content_copy" size={24} className="text-gray-900 dark:text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white font-display">Copy this Agent</h3>
                  <p className="text-sm text-gray-700 dark:text-white/80 mb-6 font-medium leading-relaxed">
                    Automatically replicate trades from Sniper Bot to your portfolio.
                  </p>
                  <button className="w-full bg-white text-black py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors shadow-lg shadow-black/5 dark:shadow-black/20">
                    Start Copying
                    <Icon name="arrow_forward" size={18} />
                  </button>
                </div>
                <div className="absolute -bottom-10 -right-10 size-40 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>

              {/* Inspiration Card */}
              <div className="bg-white dark:bg-background-card p-6 rounded-3xl border border-gray-200 dark:border-border shadow-sm dark:shadow-none">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 font-display">Inspired?</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">Create a new agent using this strategy as a baseline template.</p>
                <button className="w-full border border-gray-200 dark:border-border bg-gray-50 dark:bg-background-dark text-gray-900 dark:text-white py-3 rounded-xl font-bold hover:bg-gray-100 dark:hover:bg-border/50 transition-all text-sm">
                  Create Similar Agent
                </button>
              </div>

              {/* API Status */}
              <div className="bg-white dark:bg-background-card p-4 rounded-2xl border border-gray-200 dark:border-border flex items-center justify-between shadow-sm dark:shadow-none">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-2">
                    <Icon name="show_chart" size={14} fill />
                    API Latency
                </span>
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-accent-green rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
                  <span className="text-xs font-bold text-gray-900 dark:text-white font-mono">24ms</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Sub-components for cleaner code ---

const MetricCard = ({ label, value, trend, icon, subValue, info }: any) => {
  let valueColor = 'text-gray-900 dark:text-white';
  let shadowClass = '';
  
  if (trend === 'positive') {
      valueColor = 'text-green-600 dark:text-accent-green';
      shadowClass = 'dark:drop-shadow-[0_0_8px_rgba(74,222,128,0.3)]';
  } else if (trend === 'negative') {
      valueColor = 'text-red-600 dark:text-accent-red';
      shadowClass = 'dark:drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]';
  } else if (trend === 'high') {
      valueColor = 'text-primary-dark dark:text-primary';
  }

  return (
    <div className="bg-white dark:bg-background-card rounded-2xl p-5 border border-gray-200 dark:border-border hover:border-gray-300 dark:hover:border-border/80 transition-colors group relative overflow-hidden shadow-sm dark:shadow-none">
        <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{label}</span>
            <div className="group/info relative">
                 <Icon name="info" size={14} className="text-gray-400 dark:text-gray-500 cursor-help" />
            </div>
        </div>
        <div className="flex items-baseline gap-2">
            <p className={`text-2xl font-bold font-display ${valueColor} ${shadowClass}`}>{value}</p>
            {subValue && (
                <span className="text-xs font-bold bg-primary/10 text-primary-dark dark:text-primary border border-primary/20 px-2 py-0.5 rounded">
                    {subValue}
                </span>
            )}
        </div>
        <div className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-background-dark rounded-lg text-gray-400 dark:text-gray-500 opacity-50 group-hover:opacity-100 transition-opacity">
            {icon}
        </div>
    </div>
  );
};

const DecisionItem = ({ type, title, time, desc, tags, onClick }: any) => {
    let icon = <Icon name="show_chart" size={20} className="text-gray-500 dark:text-gray-400" />;
    let iconBg = 'bg-gray-100 dark:bg-background-dark border-gray-200 dark:border-border';

    if (type === 'buy') {
        icon = <Icon name="arrow_forward" size={20} className="text-green-600 dark:text-accent-green -rotate-45" fill />;
        iconBg = 'bg-green-100 dark:bg-accent-green/10 border-green-200 dark:border-accent-green/20';
    } else if (type === 'stop_loss') {
        icon = <Icon name="arrow_forward" size={20} className="text-red-600 dark:text-accent-red rotate-45" fill />;
        iconBg = 'bg-red-100 dark:bg-accent-red/10 border-red-200 dark:border-accent-red/20';
    } else if (type === 'scan') {
        icon = <Icon name="search" size={20} className="text-blue-600 dark:text-blue-400" fill />;
        iconBg = 'bg-blue-100 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/20';
    }

    return (
        <div 
            onClick={onClick}
            className="group flex items-start gap-4 p-4 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-border hover:bg-gray-50 dark:hover:bg-background-dark/50 transition-all cursor-pointer relative"
        >
            <div className={`mt-1 size-10 rounded-full ${iconBg} border flex items-center justify-center flex-shrink-0 transition-colors`}>
                {icon}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start gap-4">
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">{title}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium whitespace-nowrap flex items-center gap-1">
                        <Icon name="schedule" size={12} fill />
                        {time}
                    </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
                    {desc}
                </p>
                {tags && (
                    <div className="mt-3 flex items-center gap-2">
                        {tags.map((tag: string, i: number) => (
                            <span key={i} className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-100 dark:bg-background-dark text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-border">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            {/* Ask AI Trigger */}
            <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-1 text-[10px] text-primary-dark dark:text-primary font-bold bg-primary/10 px-2 py-1 rounded-md">
                    <Icon name="auto_awesome" size={10} fill />
                    Explain
                </div>
            </div>
        </div>
    );
};

export default AgentDetail;