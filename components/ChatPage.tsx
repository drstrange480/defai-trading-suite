import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon';

interface Message {
  id: string;
  role: 'user' | 'ai';
  text?: string;
  timestamp: Date;
  type?: 'text' | 'rich';
  chartData?: boolean;
  actions?: string[];
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      text: "Hello! I'm monitoring social signals for top 50 assets. Currently, Bitcoin (BTC) is showing a 12% surge in positive sentiment on Twitter/X over the last 4 hours.\n\nWould you like a detailed analysis or a risk assessment?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      // Demo logic to show the chart if user asks
      if (inputValue.toLowerCase().includes('correlation') || inputValue.toLowerCase().includes('chart') || inputValue.toLowerCase().includes('yes')) {
         const newAiMsg: Message = {
            id: (Date.now() + 1).toString(),
            role: 'ai',
            type: 'rich',
            text: "Here is the correlation data. The spike seems driven by news regarding ETF inflows.",
            chartData: true,
            actions: ['Execute Long Scalp', 'View Whale Wallets'],
            timestamp: new Date()
          };
          setMessages(prev => [...prev, newAiMsg]);
      } else {
          // Default random response
          const aiResponses = [
            "I'm analyzing the order book depth now. Stand by.",
            "Risk metrics suggest a cautious approach for this asset.",
            "Sentiment is shifting neutral. Waiting for more volume confirmation."
          ];
          const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

          const newAiMsg: Message = {
            id: (Date.now() + 1).toString(),
            role: 'ai',
            text: randomResponse,
            timestamp: new Date()
          };
          setMessages(prev => [...prev, newAiMsg]);
      }
      setIsTyping(false);
    }, 1500);
  };

  const handleClear = () => {
    if (window.confirm("Clear conversation history?")) {
        setMessages([{
            id: Date.now().toString(),
            role: 'ai',
            text: "Chat cleared. Ready for your next command.",
            timestamp: new Date()
        }]);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#f3f4f6] dark:bg-background-dark animate-in fade-in duration-300">
        
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-border bg-white dark:bg-background-dark z-10 shrink-0">
         <div>
             <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-900 dark:text-white font-display">
                AI Chat
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary-dark dark:text-primary text-xs font-medium border border-primary/20">Beta</span>
             </h1>
             <p className="text-sm text-gray-500 dark:text-text-subtle mt-1">Ask AI for market insights and explanations</p>
         </div>
         <button 
            onClick={handleClear}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
         >
             <Icon name="delete" size={18} />
             Reset Chat
         </button>
      </header>

      {/* Context Bar */}
      <div className="px-6 py-4 bg-white dark:bg-background-dark shrink-0">
        <div className="flex flex-wrap gap-3 items-center">
            <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#161616] rounded-xl border border-gray-200 dark:border-border hover:border-primary dark:hover:border-primary transition-all text-sm font-medium text-gray-700 dark:text-gray-200">
                    <Icon name="sentiment_satisfied" size={18} className="text-primary-dark dark:text-primary" fill />
                    <span>Social Sentiment</span>
                    <Icon name="expand_more" size={16} className="text-gray-400" />
                </button>
            </div>
            <div className="relative">
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#161616] rounded-xl border border-gray-200 dark:border-border hover:border-primary dark:hover:border-primary transition-all text-sm font-medium text-gray-700 dark:text-gray-200">
                    <Icon name="memory" size={18} className="text-purple-500 dark:text-purple-400" fill />
                    <span>DeFAI Alpha-2</span>
                    <Icon name="expand_more" size={16} className="text-gray-400" />
                </button>
            </div>
            <div className="ml-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-500 text-xs font-semibold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online
            </div>
        </div>
        <div className="mt-3 text-xs text-gray-400 dark:text-text-subtle flex items-center gap-1.5">
            <Icon name="info" size={14} />
            You're chatting with <span className="text-gray-900 dark:text-white font-medium">Social Sentiment Agent</span> using <span className="text-gray-900 dark:text-white font-medium">DeFAI Alpha-2</span> context.
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 md:px-6 py-4 space-y-6 scroll-smooth bg-white dark:bg-background-dark">
          <div className="flex justify-center mb-6">
             <span className="text-xs text-gray-400 dark:text-text-subtle bg-gray-100 dark:bg-[#161616] px-3 py-1 rounded-full border border-gray-200 dark:border-border">
                Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
             </span>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {messages.map((msg) => (
            <div 
                key={msg.id} 
                className={`flex gap-4 max-w-3xl ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
                {/* Avatar */}
                <div className={`size-10 rounded-xl flex-shrink-0 flex items-center justify-center border ${
                    msg.role === 'ai' 
                    ? 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-600'
                    : 'bg-indigo-600 border-indigo-400'
                }`}>
                    {msg.role === 'ai' 
                        ? <Icon name="memory" size={20} className="text-primary-dark dark:text-primary" fill /> 
                        : <Icon name="person" size={20} className="text-white" fill />
                    }
                </div>

                {/* Content */}
                <div className={`flex flex-col gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'} max-w-full`}>
                    <span className="text-xs font-medium text-gray-400 dark:text-text-subtle mx-1">
                        {msg.role === 'ai' ? 'DeFAI Bot' : 'You'}
                    </span>
                    
                    <div className={`p-5 rounded-2xl shadow-sm text-sm leading-relaxed ${
                        msg.role === 'ai' 
                        ? 'bg-white dark:bg-[#161616] border border-gray-200 dark:border-border text-gray-800 dark:text-gray-200 rounded-tl-none' 
                        : 'bg-primary text-white font-medium rounded-tr-none shadow-md'
                    }`}>
                        {/* Text Content */}
                        {msg.text && (
                            <div className="whitespace-pre-wrap">
                                {msg.text.split(/(\*\*.*?\*\*)/g).map((part, i) => 
                                    part.startsWith('**') && part.endsWith('**') 
                                    ? <strong key={i} className="text-gray-900 dark:text-white">{part.slice(2, -2)}</strong> 
                                    : part
                                )}
                            </div>
                        )}

                        {/* Chart / Rich Content */}
                        {msg.chartData && (
                            <div className="mt-4">
                                <div className="bg-black/5 dark:bg-black/40 rounded-xl p-4 border border-gray-200 dark:border-gray-700 mb-4">
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <h4 className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-bold">BTC Sentiment vs Price</h4>
                                            <p className="text-lg font-bold text-gray-900 dark:text-white">0.85 <span className="text-xs font-normal text-green-500 ml-1">+5% correlation</span></p>
                                        </div>
                                        <Icon name="trending_up" className="text-gray-400" size={20} fill />
                                    </div>
                                    <div className="h-24 flex items-end gap-1">
                                        <div className="w-full bg-primary/20 rounded-t-sm h-[40%]"></div>
                                        <div className="w-full bg-primary/30 rounded-t-sm h-[50%]"></div>
                                        <div className="w-full bg-primary/40 rounded-t-sm h-[30%]"></div>
                                        <div className="w-full bg-primary/50 rounded-t-sm h-[60%]"></div>
                                        <div className="w-full bg-primary/60 rounded-t-sm h-[45%]"></div>
                                        <div className="w-full bg-primary/80 rounded-t-sm h-[75%]"></div>
                                        <div className="w-full bg-primary rounded-t-sm h-[90%]"></div>
                                        <div className="w-full bg-primary rounded-t-sm h-[85%]"></div>
                                    </div>
                                </div>
                                <p className="mb-4">Sentiment volume is highest among "Whale" accounts. Do you want to execute a long scalp based on this signal?</p>
                            </div>
                        )}

                        {/* Action Buttons */}
                        {msg.actions && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {msg.actions.map((action, i) => (
                                    <button key={i} className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                                        i === 0 
                                        ? 'bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary-dark dark:text-primary' 
                                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-border text-gray-600 dark:text-gray-300 font-medium'
                                    }`}>
                                        {action}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
            <div className="flex gap-4 max-w-3xl">
                <div className="size-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex-shrink-0 flex items-center justify-center border border-gray-600">
                    <Icon name="auto_awesome" size={20} className="text-primary-dark dark:text-primary" fill />
                </div>
                <div className="bg-white dark:bg-[#161616] border border-gray-200 dark:border-border p-5 rounded-2xl rounded-tl-none flex gap-1.5 items-center h-[54px]">
                    <span className="size-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce"></span>
                    <span className="size-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce delay-100"></span>
                    <span className="size-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce delay-200"></span>
                </div>
            </div>
            )}
            <div ref={messagesEndRef} />
          </div>
      </div>

      {/* Input Area */}
      <div className="p-4 md:p-6 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-border shrink-0">
         <div className="max-w-4xl mx-auto">
             <div className="relative">
                 <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask about market conditions, specific assets, or agent performance..." 
                    className="w-full bg-gray-100 dark:bg-[#161616] border border-gray-200 dark:border-border rounded-xl pl-5 pr-14 py-4 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-gray-500 dark:placeholder:text-gray-500 shadow-sm"
                 />
                 <button 
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-primary text-black rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-dark transition-colors"
                 >
                    <Icon name="send" size={20} fill />
                 </button>
             </div>
             <div className="flex justify-center mt-3 gap-6 text-xs text-gray-400 dark:text-text-subtle">
                 <span className="flex items-center gap-1">
                     <Icon name="check_circle" size={14} className="text-green-500" fill />
                     Real-time Data
                 </span>
                 <span className="flex items-center gap-1">
                     <Icon name="verified_user" size={14} />
                     Private & Secure
                 </span>
                 <span className="flex items-center gap-1">
                     <Icon name="history" size={14} />
                     History Saved
                 </span>
             </div>
         </div>
      </div>

    </div>
  );
};

export default ChatPage;