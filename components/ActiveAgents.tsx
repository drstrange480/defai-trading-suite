import React from 'react';
import { Agent } from '../types';

interface ActiveAgentsProps {
    onAgentClick?: () => void;
}

const agents: Agent[] = [
  {
    id: '1',
    name: 'Sniper Bot',
    pair: 'BTC/USDT',
    status: 'Active',
    roi: -12,
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Arbitrage Bot',
    pair: 'ETH/USDT',
    status: 'Inactive',
    roi: 5,
    imageUrl: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Market Maker Bot',
    pair: 'LTC/USDT',
    status: 'Active',
    roi: 3,
    imageUrl: 'https://images.unsplash.com/photo-1620321023374-d1a68fdd720d?w=100&h=100&fit=crop'
  }
];

const ActiveAgents: React.FC<ActiveAgentsProps> = ({ onAgentClick }) => {
  return (
    <section className="flex flex-col gap-6 pb-8">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-gray-900 dark:text-white text-xl font-bold font-display">Active Agents</h3>
        <button className="text-primary-dark dark:text-primary text-sm font-medium hover:text-primary transition-colors">Show All</button>
      </div>
      
      <div className="flex flex-col gap-4">
        {agents.map((agent) => (
          <div 
            key={agent.id} 
            onClick={onAgentClick}
            className="p-4 rounded-3xl bg-white dark:bg-background-card border border-gray-200 dark:border-border hover:border-primary/50 transition-all flex items-center justify-between gap-4 group cursor-pointer hover:bg-gray-50 dark:hover:bg-white/[0.02] shadow-sm dark:shadow-none"
          >
            <div className="flex items-center gap-4">
              <div 
                className="size-14 rounded-2xl bg-gray-100 dark:bg-gray-800 bg-cover bg-center border border-gray-200 dark:border-border group-hover:border-primary/50 transition-colors"
                style={{ backgroundImage: `url('${agent.imageUrl}')` }}
              ></div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-gray-900 dark:text-white font-bold text-lg">{agent.name}</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-500 dark:text-text-subtle text-sm font-medium">{agent.pair}</span>
                  <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wide ${
                    agent.status === 'Active' 
                    ? 'border-accent-green/30 text-green-600 dark:text-accent-green bg-green-100 dark:bg-accent-green/5' 
                    : 'border-gray-300 dark:border-text-subtle/30 text-gray-500 dark:text-text-subtle'
                  }`}>
                    {agent.status}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="text-right pr-2">
              <p className={`font-bold text-xl font-display ${agent.roi >= 0 ? 'text-green-600 dark:text-accent-green' : 'text-red-600 dark:text-accent-red'}`}>
                {agent.roi > 0 ? '+' : ''}{agent.roi}%
              </p>
              <p className="text-gray-500 dark:text-text-subtle text-xs mt-1 font-medium">ROI (7d)</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActiveAgents;