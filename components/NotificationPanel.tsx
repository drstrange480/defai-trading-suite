import React, { useState } from 'react';
import Icon from './Icon';

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const NotificationPanel: React.FC<NotificationPanelProps> = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'success', title: 'Take Profit Hit', desc: 'Sniper Bot sold BTC/USDT at $67,500', time: '2m ago', read: false },
    { id: 2, type: 'warning', title: 'High Volatility', desc: 'Abnormal volume detected on ETH pairs', time: '15m ago', read: false },
    { id: 3, type: 'info', title: 'Weekly Report', desc: 'Your portfolio grew by 3.2% this week', time: '1h ago', read: true },
    { id: 4, type: 'error', title: 'Stop Loss Triggered', desc: 'Defensive exit on SOL/USDT', time: '3h ago', read: true },
  ]);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  return (
    <>
        {/* Backdrop */}
        {isOpen && (
            <div 
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[55] transition-opacity" 
                onClick={onClose}
            />
        )}
        
        {/* Panel */}
        <div 
            className={`fixed inset-y-0 right-0 w-full sm:w-[360px] bg-background-card border-l border-border shadow-2xl transform transition-transform duration-300 ease-out z-[60] flex flex-col ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="flex items-center justify-between px-6 py-5 border-b border-border bg-background-dark">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Icon name="notifications" size={20} className="text-white" fill />
                        {notifications.some(n => !n.read) && (
                            <span className="absolute -top-1 -right-1 size-2.5 bg-accent-red rounded-full border-2 border-background-dark"></span>
                        )}
                    </div>
                    <h2 className="font-bold text-lg text-white font-display">Notifications</h2>
                </div>
                <div className="flex items-center gap-2">
                    <button 
                        onClick={markAllRead}
                        className="p-2 text-text-subtle hover:text-primary rounded-lg transition-colors text-xs font-bold"
                        title="Mark all as read"
                    >
                        Mark Read
                    </button>
                    <button onClick={onClose} className="p-2 text-text-subtle hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        <Icon name="close" size={20} />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {notifications.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-text-subtle">
                        <Icon name="notifications" size={48} className="opacity-20 mb-4" />
                        <p>No new notifications</p>
                    </div>
                ) : (
                    notifications.map((item) => (
                        <div 
                            key={item.id}
                            className={`p-4 rounded-xl border transition-all hover:bg-white/[0.02] cursor-pointer group ${
                                item.read ? 'bg-transparent border-transparent opacity-70' : 'bg-background-dark border-border shadow-sm'
                            }`}
                        >
                            <div className="flex gap-4">
                                <div className={`mt-1 size-10 rounded-full flex items-center justify-center shrink-0 border ${
                                    item.type === 'success' ? 'bg-accent-green/10 border-accent-green/20 text-accent-green' :
                                    item.type === 'warning' ? 'bg-accent-yellow/10 border-accent-yellow/20 text-accent-yellow' :
                                    item.type === 'error' ? 'bg-accent-red/10 border-accent-red/20 text-accent-red' :
                                    'bg-blue-500/10 border-blue-500/20 text-blue-500'
                                }`}>
                                    {item.type === 'success' && <Icon name="trending_up" size={18} fill />}
                                    {item.type === 'warning' && <Icon name="warning" size={18} fill />}
                                    {item.type === 'error' && <Icon name="gpp_bad" size={18} fill />}
                                    {item.type === 'info' && <Icon name="info" size={18} fill />}
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className={`font-bold text-sm ${item.read ? 'text-text-subtle' : 'text-white'}`}>
                                            {item.title}
                                        </h4>
                                        <span className="text-[10px] text-text-subtle font-medium">{item.time}</span>
                                    </div>
                                    <p className="text-xs text-text-subtle leading-relaxed">{item.desc}</p>
                                </div>
                                {!item.read && (
                                    <div className="size-2 rounded-full bg-primary mt-2 shrink-0"></div>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {notifications.length > 0 && (
                <div className="p-4 border-t border-border bg-background-dark">
                    <button 
                        onClick={clearAll}
                        className="w-full py-3 rounded-xl border border-border text-text-subtle text-sm font-bold hover:bg-white/5 hover:text-white transition-colors"
                    >
                        Clear All
                    </button>
                </div>
            )}
        </div>
    </>
  );
};

export default NotificationPanel;