import React from 'react';
import Icon from './Icon';

interface ActionButtonsProps {
  onCreateClick?: () => void;
  onMyAgentsClick?: () => void;
  onLeaderboardClick?: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ onCreateClick, onMyAgentsClick, onLeaderboardClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={onMyAgentsClick}
          className="flex flex-col items-start justify-center gap-4 p-6 rounded-3xl bg-white dark:bg-background-card border border-gray-200 dark:border-border hover:bg-gray-50 dark:hover:bg-border/30 hover:border-primary/50 text-gray-900 dark:text-white transition-all duration-300 group h-full shadow-sm dark:shadow-none"
        >
          <div className="p-3 rounded-xl bg-gray-100 dark:bg-background-dark border border-gray-200 dark:border-border group-hover:border-primary/50 transition-colors">
             <Icon name="smart_toy" size={28} className="text-gray-600 dark:text-gray-400 group-hover:text-primary-dark dark:group-hover:text-primary transition-colors" />
          </div>
          <span className="text-lg font-medium">My Agents</span>
        </button>
        
        <button 
          onClick={onLeaderboardClick}
          className="flex flex-col items-start justify-center gap-4 p-6 rounded-3xl bg-white dark:bg-background-card border border-gray-200 dark:border-border hover:bg-gray-50 dark:hover:bg-border/30 hover:border-primary/50 text-gray-900 dark:text-white transition-all duration-300 group h-full shadow-sm dark:shadow-none"
        >
          <div className="p-3 rounded-xl bg-gray-100 dark:bg-background-dark border border-gray-200 dark:border-border group-hover:border-primary/50 transition-colors">
            <Icon name="emoji_events" size={28} className="text-gray-600 dark:text-gray-400 group-hover:text-primary-dark dark:group-hover:text-primary transition-colors" />
          </div>
          <span className="text-lg font-medium">Leaderboard</span>
        </button>
      </div>
      
      <div className="col-span-1">
        <button 
          onClick={onCreateClick}
          className="w-full h-full flex items-center justify-between p-8 rounded-3xl bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-300 text-black transition-all hover:brightness-110 shadow-lg shadow-emerald-500/10 group"
        >
          <div className="flex items-center gap-5">
            <div className="size-16 rounded-full bg-black text-white flex items-center justify-center shrink-0 shadow-xl group-hover:scale-110 transition-transform duration-300">
              <Icon name="add" size={28} />
            </div>
            <div className="text-left">
              <span className="block text-xl font-bold tracking-tight text-gray-900 font-display">Create an Agent</span>
              <span className="block text-sm text-gray-700 mt-1 font-medium">Customize your own trading strategy</span>
            </div>
          </div>
          <div className="bg-black/10 p-2 rounded-full group-hover:bg-black/20 transition-colors">
            <Icon name="arrow_outward" size={28} className="text-gray-900" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;