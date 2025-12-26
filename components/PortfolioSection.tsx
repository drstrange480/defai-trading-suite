import React from 'react';
import Icon from './Icon';

const PortfolioSection: React.FC = () => {
  return (
    <div className="flex flex-col relative overflow-hidden rounded-3xl p-8 h-full bg-gradient-to-br from-[#064e3b] to-[#022c22] border border-[#065f46] shadow-2xl shadow-emerald-900/20">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-green/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="flex justify-between items-start mb-2 relative z-10">
        <p className="text-gray-300 text-lg font-medium">Portfolio</p>
        <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer">
            <Icon name="arrow_outward" className="text-white" size={20} />
        </div>
      </div>
      
      <h3 className="text-white tracking-tight text-5xl font-bold font-display leading-tight mt-2 relative z-10 flex items-center gap-3">
        546,765 <Icon name="diamond" size={32} fill className="text-gray-400 opacity-50" />
      </h3>
      
      <div className="flex items-center gap-3 mt-auto pt-10 relative z-10">
        <span className="flex items-center gap-1 text-accent-green font-semibold bg-accent-green/10 px-3 py-1.5 rounded-lg border border-accent-green/20">
          <Icon name="trending_up" size={18} />
          <span>456.65 (3.2%)</span>
        </span>
        <span className="text-gray-400 text-sm font-medium">24h p&l</span>
      </div>
    </div>
  );
};

export default PortfolioSection;