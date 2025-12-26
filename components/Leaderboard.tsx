import React, { useState } from 'react';
import Icon from './Icon';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';

interface LeaderboardProps {
  onAgentClick?: () => void;
}

// Mock Data for Chart
const chartData = [
  { name: '00:00', sniper: 50, arbitrage: 45 },
  { name: '04:00', sniper: 65, arbitrage: 52 },
  { name: '08:00', sniper: 85, arbitrage: 58 },
  { name: '12:00', sniper: 92, arbitrage: 60 },
  { name: '16:00', sniper: 110, arbitrage: 58 },
  { name: '20:00', sniper: 125, arbitrage: 70 },
  { name: '23:59', sniper: 142, arbitrage: 89 },
];

const Leaderboard: React.FC<LeaderboardProps> = ({ onAgentClick }) => {
  const [timeRange, setTimeRange] = useState('30D');
  const [sortFilter, setSortFilter] = useState('performance');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedRisk, setSelectedRisk] = useState('All');

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-background-dark animate-in fade-in slide-in-from-right-4 duration-300 transition-colors">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-50/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-border px-4 py-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-w-7xl mx-auto w-full">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white font-display tracking-tight">Leaderboard</h1>
            <p className="text-gray-500 dark:text-text-subtle text-sm mt-1">Top performing DeFAI agents & strategies</p>
          </div>

          <div className="flex items-center gap-3">
             {/* Time Range Toggle */}
            <div className="flex bg-white dark:bg-background-card rounded-xl p-1 border border-gray-200 dark:border-border">
              {['24H', '7D', '30D', 'All'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    timeRange === range 
                    ? 'bg-primary text-black shadow-lg shadow-primary/20' 
                    : 'text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            
            <button className="size-10 flex items-center justify-center rounded-xl bg-white dark:bg-background-card border border-gray-200 dark:border-border text-gray-500 dark:text-text-subtle hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group">
              <Icon name="filter_list" size={18} className="group-hover:text-gray-900 dark:group-hover:text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">

          {/* Top Section: Leader & Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Rank #1 Card */}
            <div 
                onClick={onAgentClick}
                className="lg:col-span-1 bg-white dark:bg-background-card border border-gray-200 dark:border-border hover:border-primary/30 rounded-3xl p-6 relative overflow-hidden group cursor-pointer transition-all duration-300 shadow-sm dark:shadow-none"
            >
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[60px] pointer-events-none -mr-10 -mt-10"></div>
                
                <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-yellow-100 dark:bg-accent-yellow/10 border border-yellow-200 dark:border-accent-yellow/20 flex items-center justify-center text-yellow-700 dark:text-accent-yellow font-bold text-sm">
                            #1
                        </div>
                        <span className="px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary-dark dark:text-primary uppercase tracking-wider">
                            KING OF THE HILL
                        </span>
                    </div>
                    <div className="size-8 rounded-full bg-gray-50 dark:bg-background-dark flex items-center justify-center text-gray-400 dark:text-text-subtle group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        <Icon name="arrow_outward" size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                    </div>
                </div>

                <div className="flex flex-col items-center text-center mb-8 relative z-10">
                    <div className="size-24 rounded-2xl p-0.5 bg-gradient-to-br from-primary to-blue-500 mb-4 shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-500">
                        <img 
                            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=200&h=200&fit=crop" 
                            alt="Sniper Bot" 
                            className="w-full h-full rounded-[14px] object-cover bg-gray-100 dark:bg-background-dark" 
                        />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white font-display">Sniper Bot Elite</h2>
                    <p className="text-xs text-gray-500 dark:text-text-subtle mt-1 font-medium">High-frequency BTC/USDT scalper</p>
                </div>

                <div className="grid grid-cols-2 gap-3 relative z-10">
                    <div className="bg-gray-50 dark:bg-background-dark/50 p-4 rounded-2xl border border-gray-100 dark:border-border/50 group-hover:border-primary/20 transition-colors">
                        <p className="text-[10px] uppercase font-bold text-gray-500 dark:text-text-subtle mb-1 tracking-wide">ROI (30d)</p>
                        <p className="text-xl font-bold text-primary-dark dark:text-primary font-display">+142.5%</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-background-dark/50 p-4 rounded-2xl border border-gray-100 dark:border-border/50 group-hover:border-primary/20 transition-colors">
                        <p className="text-[10px] uppercase font-bold text-gray-500 dark:text-text-subtle mb-1 tracking-wide">Confidence</p>
                        <p className="text-xl font-bold text-gray-900 dark:text-white font-display">98.2%</p>
                    </div>
                </div>
            </div>

            {/* Comparison Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-background-card border border-gray-200 dark:border-border rounded-3xl p-6 md:p-8 flex flex-col relative overflow-hidden shadow-sm dark:shadow-none">
                <div className="flex justify-between items-start mb-6 z-10 relative">
                    <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white font-display">Performance Comparison</h3>
                        <p className="text-xs text-gray-500 dark:text-text-subtle mt-1">ROI Growth over time</p>
                    </div>
                    
                    {/* Legend */}
                    <div className="flex items-center gap-4 bg-gray-50 dark:bg-background-dark px-3 py-1.5 rounded-lg border border-gray-200 dark:border-border">
                         <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-primary shadow-[0_0_8px_rgba(53,224,160,0.6)]"></span>
                            <span className="text-xs font-medium text-gray-900 dark:text-white">Sniper Bot</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-purple-500"></span>
                            <span className="text-xs font-medium text-gray-500 dark:text-text-subtle">Arbitrage X</span>
                         </div>
                    </div>
                </div>

                <div className="flex-1 w-full min-h-[220px] relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="colorSniper" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#35E0A0" stopOpacity={0.1}/>
                                    <stop offset="95%" stopColor="#35E0A0" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" strokeOpacity={0.2} />
                            <XAxis hide />
                            <YAxis 
                                orientation="left" 
                                tick={{ fill: '#888888', fontSize: 10 }} 
                                axisLine={false}
                                tickLine={false}
                                domain={[0, 150]}
                                ticks={[0, 50, 100, 150]}
                                tickFormatter={(value) => `${value}%`}
                            />
                            <Tooltip 
                                contentStyle={{ backgroundColor: 'var(--background-card)', borderColor: 'var(--border)', borderRadius: '12px', color: 'var(--text-main)' }}
                                itemStyle={{ color: 'var(--text-main)' }}
                            />
                            {/* Comparison Line (Dashed) */}
                            <Area 
                                type="monotone" 
                                dataKey="arbitrage" 
                                stroke="#A855F7" 
                                strokeWidth={2} 
                                strokeDasharray="5 5"
                                fill="transparent" 
                            />
                            {/* Main Line (Solid + Glow) */}
                            <Area 
                                type="monotone" 
                                dataKey="sniper" 
                                stroke="#35E0A0" 
                                strokeWidth={3} 
                                fill="url(#colorSniper)" 
                                style={{ filter: 'drop-shadow(0 0 6px rgba(53,224,160,0.4))' }}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>

          </div>

          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0 hide-scrollbar">
                {/* Agent Type Filter */}
                <div className="relative group shrink-0">
                    <select 
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                        className="appearance-none bg-white dark:bg-background-card border border-gray-200 dark:border-border hover:border-gray-400 dark:hover:border-text-subtle/50 text-xs font-bold rounded-xl py-2.5 pl-4 pr-10 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer shadow-sm dark:shadow-none"
                    >
                        <option value="All">Agent Type: All</option>
                        <option value="Scalping">Scalping</option>
                        <option value="Arbitrage">Arbitrage</option>
                        <option value="Swing">Swing</option>
                    </select>
                    <Icon name="expand_more" size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-text-subtle pointer-events-none group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                </div>

                {/* Risk Level Filter */}
                <div className="relative group shrink-0">
                    <select 
                        value={selectedRisk}
                        onChange={(e) => setSelectedRisk(e.target.value)}
                        className="appearance-none bg-white dark:bg-background-card border border-gray-200 dark:border-border hover:border-gray-400 dark:hover:border-text-subtle/50 text-xs font-bold rounded-xl py-2.5 pl-4 pr-10 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all cursor-pointer shadow-sm dark:shadow-none"
                    >
                        <option value="All">Risk Level: All</option>
                        <option value="Low">Low Risk</option>
                        <option value="Medium">Medium Risk</option>
                        <option value="High">High Risk</option>
                    </select>
                    <Icon name="expand_more" size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-text-subtle pointer-events-none group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
                </div>
                
                <div className="w-px h-6 bg-gray-300 dark:bg-border mx-1 hidden sm:block"></div>

                {/* Quick Sort Pills */}
                <div className="flex gap-2">
                    <button 
                        onClick={() => setSortFilter('performance')}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${
                            sortFilter === 'performance' 
                            ? 'bg-primary text-black shadow-lg shadow-primary/20' 
                            : 'bg-white dark:bg-background-card text-gray-500 dark:text-text-subtle border border-gray-200 dark:border-border hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                        Best performance
                    </button>
                    <button 
                        onClick={() => setSortFilter('risk')}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${
                            sortFilter === 'risk' 
                            ? 'bg-primary text-black shadow-lg shadow-primary/20' 
                            : 'bg-white dark:bg-background-card text-gray-500 dark:text-text-subtle border border-gray-200 dark:border-border hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                        Lowest risk
                    </button>
                    <button 
                        onClick={() => setSortFilter('consistency')}
                        className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold transition-all ${
                            sortFilter === 'consistency' 
                            ? 'bg-primary text-black shadow-lg shadow-primary/20' 
                            : 'bg-white dark:bg-background-card text-gray-500 dark:text-text-subtle border border-gray-200 dark:border-border hover:text-gray-900 dark:hover:text-white'
                        }`}
                    >
                        Consistency
                    </button>
                </div>
            </div>

            <button className="text-xs text-primary-dark dark:text-primary font-bold hover:text-primary transition-colors flex items-center gap-1 shrink-0 ml-auto sm:ml-0">
                Show All <Icon name="arrow_forward" size={14} className="text-primary-dark dark:text-primary" />
            </button>
          </div>

          {/* Leaderboard Grid/Table */}
          <div className="flex flex-col gap-3 pb-12">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 px-6 py-2 text-[10px] font-bold text-gray-500 dark:text-text-subtle uppercase tracking-wider opacity-70">
                <div className="col-span-1">Rank</div>
                <div className="col-span-4 md:col-span-3">Agent</div>
                <div className="col-span-2 hidden md:block">Type</div>
                <div className="col-span-2 text-right">ROI (30d)</div>
                <div className="col-span-2 hidden md:block text-center">Risk</div>
                <div className="col-span-3 md:col-span-2 text-right">Status</div>
            </div>

            {/* Filtered rows would ideally be dynamic */}
            <LeaderboardRow 
                rank="01"
                name="Sniper Bot"
                pair="BTC/USDT"
                type="Scalping"
                roi={142.5}
                risk="Med"
                riskValue={75}
                status="Active"
                image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=100&fit=crop"
                onClick={onAgentClick}
            />

             <LeaderboardRow 
                rank="02"
                name="Arbitrage X"
                pair="ETH/USDT"
                type="Arbitrage"
                roi={89.2}
                risk="Low"
                riskValue={25}
                status="Active"
                image="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=100&h=100&fit=crop"
                onClick={onAgentClick}
            />

            <LeaderboardRow 
                rank="03"
                name="Market Maker"
                pair="SOL/USDT"
                type="Liquidity"
                roi={45.8}
                risk="Med"
                riskValue={50}
                status="Paused"
                image="https://images.unsplash.com/photo-1620321023374-d1a68fdd720d?w=100&h=100&fit=crop"
                onClick={onAgentClick}
            />

            <LeaderboardRow 
                rank="04"
                name="Yolo Degen"
                pair="PEPE/USDT"
                type="Meme"
                roi={-12.4}
                risk="High"
                riskValue={100}
                status="Inactive"
                image="https://images.unsplash.com/photo-1622630998477-20aa696fa405?w=100&h=100&fit=crop"
                onClick={onAgentClick}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Sub-components ---

const LeaderboardRow = ({ rank, name, pair, type, roi, risk, riskValue, status, image, onClick }: any) => {
    // Risk Bar Color Logic
    let riskColor = 'bg-primary';
    if (risk === 'Med') riskColor = 'bg-yellow-500 dark:bg-accent-yellow';
    if (risk === 'High') riskColor = 'bg-red-500 dark:bg-accent-red';

    // Status Logic
    const isActive = status === 'Active';
    const isPaused = status === 'Paused';

    return (
        <div 
            onClick={onClick}
            className={`group grid grid-cols-12 gap-4 items-center bg-white dark:bg-background-card p-3 rounded-2xl border border-gray-200 dark:border-border hover:border-primary/40 hover:bg-gray-50 dark:hover:bg-white/[0.02] transition-all cursor-pointer ${!isActive && !isPaused ? 'opacity-60 hover:opacity-100' : ''}`}
        >
            <div className="col-span-1 font-bold text-lg text-gray-500 dark:text-text-subtle group-hover:text-gray-900 dark:group-hover:text-white transition-colors font-display pl-2">{rank}</div>
            
            <div className="col-span-4 md:col-span-3 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-gray-100 dark:bg-background-dark p-0.5 border border-gray-200 dark:border-border overflow-hidden">
                    <img src={image} alt={name} className="w-full h-full rounded-[10px] object-cover" />
                </div>
                <div>
                    <h4 className="font-bold text-sm text-gray-900 dark:text-white group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">{name}</h4>
                    <span className="text-[10px] font-medium text-gray-500 dark:text-text-subtle">{pair}</span>
                </div>
            </div>

            <div className="col-span-2 hidden md:block">
                <span className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-background-dark text-[10px] font-semibold text-gray-500 dark:text-text-subtle border border-gray-200 dark:border-border">
                    {type}
                </span>
            </div>

            <div className={`col-span-2 text-right font-bold font-display ${roi >= 0 ? 'text-primary-dark dark:text-primary' : 'text-red-600 dark:text-accent-red'}`}>
                {roi > 0 ? '+' : ''}{roi}%
            </div>

            <div className="col-span-2 hidden md:block text-center">
                <div className="w-16 h-1.5 bg-gray-100 dark:bg-background-dark rounded-full mx-auto overflow-hidden">
                    <div className={`h-full rounded-full ${riskColor}`} style={{ width: `${riskValue}%` }}></div>
                </div>
                <span className="text-[10px] text-gray-500 dark:text-text-subtle mt-1 block font-medium">{risk}</span>
            </div>

            <div className="col-span-3 md:col-span-2 text-right pr-2">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                    isActive ? 'bg-primary/10 text-primary-dark dark:text-primary border-primary/20' : 
                    isPaused ? 'bg-yellow-500/10 text-yellow-600 dark:text-accent-yellow border-yellow-500/20' :
                    'bg-gray-100 dark:bg-background-dark text-gray-500 dark:text-text-subtle border-gray-200 dark:border-border'
                }`}>
                    {isActive && <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>}
                    {isPaused && <span className="size-1.5 rounded-full bg-yellow-500 dark:bg-accent-yellow"></span>}
                    {status}
                </span>
            </div>
        </div>
    );
};

export default Leaderboard;