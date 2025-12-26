import React from 'react';
import Icon from './Icon';
import { Tab } from '../types';

interface MobileNavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems: { name: Tab; icon: string }[] = [
    { name: 'Home', icon: 'home' },
    { name: 'Agents', icon: 'smart_toy' },
    { name: 'Wallet', icon: 'account_balance_wallet' },
    { name: 'Leaderboard', icon: 'emoji_events' },
    { name: 'Chat', icon: 'chat' },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-background-card border-t border-gray-200 dark:border-border pb-6 pt-3 px-6 flex justify-between items-center z-40 transition-colors">
      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => setActiveTab(item.name)}
          className={`flex flex-col items-center gap-1.5 p-1 rounded-xl transition-all ${
            activeTab === item.name
              ? 'text-primary-dark dark:text-primary'
              : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'
          }`}
        >
          <Icon 
            name={item.icon}
            size={24} 
            fill={activeTab === item.name}
            className="transition-transform active:scale-95"
          />
          <span className="text-[10px] font-medium tracking-wide">{item.name}</span>
        </button>
      ))}
    </nav>
  );
};

export default MobileNav;