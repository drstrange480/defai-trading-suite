import React from 'react';
import Icon from './Icon';
import { Tab } from '../types';

interface SidebarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems: { name: Tab; icon: string }[] = [
    { name: 'Home', icon: 'home' },
    { name: 'Agents', icon: 'smart_toy' },
    { name: 'Wallet', icon: 'account_balance_wallet' },
    { name: 'Leaderboard', icon: 'emoji_events' },
    { name: 'Chat', icon: 'chat' },
  ];

  return (
    <aside className="hidden lg:flex w-72 flex-col border-r border-gray-200 dark:border-border bg-white dark:bg-background-sidebar p-4 flex-shrink-0 h-screen fixed left-0 top-0 z-50 transition-colors duration-300">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-3 px-2 mt-2">
          <div className="bg-black dark:bg-white rounded-full size-10 text-white dark:text-black flex items-center justify-center font-bold text-xl font-display transition-colors">
            H
          </div>
          <h1 className="text-gray-900 dark:text-white text-xl font-bold font-display tracking-tight transition-colors">DeFAI Terminal</h1>
        </div>
        
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                activeTab === item.name
                  ? 'bg-gray-100 dark:bg-border/50 text-gray-900 dark:text-white shadow-sm dark:shadow-inner'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-border/30 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Icon 
                name={item.icon}
                size={20}
                className={activeTab === item.name ? 'text-primary-dark dark:text-primary' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors'} 
              />
              <p className="text-sm font-medium leading-normal">{item.name}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;