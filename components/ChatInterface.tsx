import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon';

interface Message {
  id: string;
  role: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  context?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ isOpen, onClose, context }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      text: "Hello! I'm your DeFAI assistant. How can I help you analyze the market today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update context greeting when context changes
  useEffect(() => {
    if (context) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'ai',
          text: `I see you're interested in ${context}. Would you like a detailed analysis or a risk assessment?`,
          timestamp: new Date()
        }
      ]);
    }
  }, [context]);

  // Auto-scroll to bottom
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

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Based on the current order book depth, buying pressure is increasing significantly.",
        "I've analyzed the last 4 hours of volatility, and it suggests a potential breakout.",
        "Risk metrics are currently elevated. I recommend a tighter stop-loss for this position.",
        `The sentiment for ${context || 'this asset'} has flipped bullish in the last hour.`
      ];
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

      const newAiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: randomResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newAiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleClear = () => {
    if (window.confirm("Clear conversation history?")) {
        setMessages([{
            id: '1',
            role: 'ai',
            text: "Chat cleared. What's next?",
            timestamp: new Date()
        }]);
    }
  };

  return (
    <div 
      className={`fixed inset-y-0 right-0 w-full sm:w-[400px] bg-background-card border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] flex flex-col ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background-dark/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
            <Icon name="smart_toy" size={20} className="text-primary" fill />
          </div>
          <div>
            <h3 className="font-bold text-white font-display">DeFAI Assistant</h3>
            <p className="text-xs text-text-subtle flex items-center gap-1">
               <span className="size-1.5 rounded-full bg-accent-green animate-pulse"></span>
               Online • {context || 'General'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
            <button 
                onClick={handleClear}
                className="p-2 text-text-subtle hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                title="Clear Chat"
            >
                <Icon name="delete" size={18} />
            </button>
            <button 
                onClick={onClose}
                className="p-2 text-text-subtle hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
                <Icon name="close" size={20} />
            </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-background-card">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div className={`size-8 rounded-full flex items-center justify-center shrink-0 ${
              msg.role === 'ai' ? 'bg-primary/10 text-primary' : 'bg-background-dark border border-border text-white'
            }`}>
              {msg.role === 'ai' ? <Icon name="auto_awesome" size={14} fill /> : <Icon name="person" size={14} fill />}
            </div>
            <div className={`flex flex-col max-w-[80%] gap-1 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div 
                className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'ai' 
                  ? 'bg-background-dark border border-border text-gray-200 rounded-tl-none' 
                  : 'bg-primary text-black font-medium rounded-tr-none'
                }`}
              >
                {msg.text}
              </div>
              <span className="text-[10px] text-text-subtle opacity-70">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex gap-3">
             <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Icon name="auto_awesome" size={14} fill />
             </div>
             <div className="bg-background-dark border border-border p-4 rounded-2xl rounded-tl-none flex gap-1">
                <span className="size-2 rounded-full bg-text-subtle animate-bounce"></span>
                <span className="size-2 rounded-full bg-text-subtle animate-bounce delay-100"></span>
                <span className="size-2 rounded-full bg-text-subtle animate-bounce delay-200"></span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border bg-background-dark/50 backdrop-blur-md">
        {/* Quick Suggestions */}
        {!inputValue && (
            <div className="flex gap-2 overflow-x-auto pb-3 hide-scrollbar">
                {['Explain this signal', 'Risk Analysis', 'Latest News'].map(suggestion => (
                    <button 
                        key={suggestion}
                        onClick={() => setInputValue(suggestion)}
                        className="whitespace-nowrap px-3 py-1.5 rounded-full border border-border bg-background-card hover:border-primary/50 hover:bg-primary/5 text-xs text-text-subtle hover:text-primary transition-all"
                    >
                        {suggestion}
                    </button>
                ))}
            </div>
        )}
        
        <div className="relative flex items-center">
            <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about agents, signals, or market..."
                className="w-full bg-background-card border border-border rounded-xl pl-4 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-text-subtle"
            />
            <button 
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="absolute right-2 p-2 rounded-lg bg-primary text-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-light transition-colors"
            >
                <Icon name="send" size={16} fill />
            </button>
        </div>
        <p className="text-[10px] text-text-subtle text-center mt-3 flex items-center justify-center gap-1">
            <Icon name="info" size={10} />
            AI cannot execute trades directly.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;