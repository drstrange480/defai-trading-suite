import React from 'react';
import { Signal } from '../types';
import Icon from './Icon';

const signals: Signal[] = [
  {
    id: '1',
    pair: 'BTC/USDT',
    type: 'Perpetual',
    timeAgo: '2m ago',
    title: 'Bullish Divergence',
    description: 'RSI showing higher lows while price shows lower lows on the 4h timeframe.',
    confidence: 85,
    trend: 'bullish'
  },
  {
    id: '2',
    pair: 'ETH/USDT',
    type: 'Spot',
    timeAgo: '15m ago',
    title: 'Volume Spike',
    description: 'Unusual buying volume detected across 3 major exchanges simultaneously.',
    confidence: 72,
    trend: 'bullish'
  },
  {
    id: '3',
    pair: 'SOL/USDT',
    type: 'Perpetual',
    timeAgo: '42m ago',
    title: 'Moving Avg Crossover',
    description: '50 EMA crossed below 200 EMA indicating potential bearish trend.',
    confidence: 65,
    trend: 'bearish'
  }
];

interface MarketSignalsProps {
    onSignalClick?: (context: string) => void;
}

const MarketSignals: React.FC<MarketSignalsProps> = ({ onSignalClick }) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-gray-900 dark:text-white text-xl font-bold font-display">Market Signals</h3>
        <button className="text-primary-dark dark:text-primary text-sm font-medium hover:text-primary transition-colors">View all</button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {signals.map((signal) => (
          <div 
            key={signal.id} 
            onClick={() => onSignalClick?.(`Signal: ${signal.title} on ${signal.pair}`)}
            className="flex flex-col p-6 rounded-3xl bg-white dark:bg-background-card border border-gray-200 dark:border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer hover:-translate-y-1 relative shadow-sm dark:shadow-none"
          >
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="p-2 rounded-full bg-gray-100 dark:bg-background-dark border border-gray-200 dark:border-border hover:bg-primary hover:text-black hover:border-primary transition-colors group/icon">
                    <Icon name="notification_add" size={16} className="text-gray-500 dark:text-gray-400 group-hover/icon:text-black" />
                </div>
            </div>

            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/5 font-display font-bold text-xs text-gray-900 dark:text-white">
                  {signal.pair.split('/')[0]}
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-bold text-base">{signal.pair}</p>
                  <p className="text-gray-500 dark:text-text-subtle text-xs">{signal.type}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500 dark:text-text-subtle font-medium bg-gray-100 dark:bg-background-dark px-2 py-1 rounded-md">{signal.timeAgo}</span>
            </div>
            
            <h4 className="text-gray-900 dark:text-white font-semibold mb-2 text-lg group-hover:text-primary-dark dark:group-hover:text-primary transition-colors">{signal.title}</h4>
            <p className="text-gray-600 dark:text-text-subtle text-sm mb-6 line-clamp-2 leading-relaxed">{signal.description}</p>
            
            <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100 dark:border-border/50">
              <span className="text-gray-500 dark:text-text-subtle text-xs uppercase tracking-wider font-bold">Confidence</span>
              <div className={`px-3 py-1 rounded-full border ${
                signal.trend === 'bullish' 
                ? 'bg-accent-green/10 border-accent-green/20 text-green-600 dark:text-accent-green' 
                : 'bg-accent-red/10 border-accent-red/20 text-red-600 dark:text-accent-red'
              }`}>
                <span className="text-xs font-bold">{signal.confidence}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketSignals;