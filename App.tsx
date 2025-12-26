import React, { useState, useEffect } from 'react';
import Icon from './components/Icon';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import PortfolioSection from './components/PortfolioSection';
import PerformanceChart from './components/PerformanceChart';
import ActionButtons from './components/ActionButtons';
import MarketSignals from './components/MarketSignals';
import ActiveAgents from './components/ActiveAgents';
import CreateAgentStep1 from './components/CreateAgentStep1';
import CreateAgentStep2 from './components/CreateAgentStep2';
import CreateAgentStep3 from './components/CreateAgentStep3';
import CreateAgentStep4 from './components/CreateAgentStep4';
import CreateAgentStep5 from './components/CreateAgentStep5';
import CreateAgentSuccess from './components/CreateAgentSuccess';
import AgentsList from './components/AgentsList';
import AgentDetail from './components/AgentDetail';
import Leaderboard from './components/Leaderboard';
import Wallet from './components/Wallet';
import ChatPage from './components/ChatPage';
import ChatInterface from './components/ChatInterface';
import NotificationPanel from './components/NotificationPanel';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Home');
  const [view, setView] = useState<'dashboard' | 'create-step-1' | 'create-step-2' | 'create-step-3' | 'create-step-4' | 'create-step-5' | 'create-success' | 'agent-detail'>('dashboard');
  
  // Global Interaction States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatContext, setChatContext] = useState<string | undefined>(undefined);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Theme Toggle Handler
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Chat Handler
  const openChat = (context?: string) => {
    setChatContext(context);
    setIsChatOpen(true);
  };

  // View Routing Handlers
  const handleAgentClick = () => setView('agent-detail');
  const handleCreateClick = () => setView('create-step-1');
  const handleDashboardClick = () => {
    setView('dashboard');
    setActiveTab('Home');
  };

  // Render logic for main content based on 'view' state
  const renderContent = () => {
    switch (view) {
      case 'create-step-1':
        return <CreateAgentStep1 onBack={handleDashboardClick} onNext={() => setView('create-step-2')} />;
      case 'create-step-2':
        return <CreateAgentStep2 onBack={() => setView('create-step-1')} onNext={() => setView('create-step-3')} />;
      case 'create-step-3':
        return <CreateAgentStep3 onBack={() => setView('create-step-2')} onNext={() => setView('create-step-4')} />;
      case 'create-step-4':
        return <CreateAgentStep4 onBack={() => setView('create-step-3')} onNext={() => setView('create-step-5')} />;
      case 'create-step-5':
        return <CreateAgentStep5 onBack={() => setView('create-step-4')} onDeploy={() => setView('create-success')} />;
      case 'create-success':
        return <CreateAgentSuccess onGoToDashboard={handleDashboardClick} onViewAgent={handleAgentClick} />;
      case 'agent-detail':
        return <AgentDetail onBack={() => setView('dashboard')} onChatClick={() => openChat('Sniper Bot')} />;
      default:
        // Main Dashboard Tabs
        if (activeTab === 'Agents') return <AgentsList onCreateClick={handleCreateClick} onAgentClick={handleAgentClick} />;
        if (activeTab === 'Wallet') return <Wallet />;
        if (activeTab === 'Leaderboard') return <Leaderboard onAgentClick={handleAgentClick} />;
        if (activeTab === 'Chat') return <ChatPage />;
        
        // Home Tab
        return (
           <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 space-y-8 scroll-smooth pb-24 lg:pb-8">
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 h-[320px] lg:h-auto">
                    <PortfolioSection />
                </div>
                <div className="lg:col-span-2 h-[320px] lg:h-[350px]">
                    <PerformanceChart />
                </div>
            </section>
            <section>
                <ActionButtons 
                    onCreateClick={handleCreateClick} 
                    onMyAgentsClick={() => setActiveTab('Agents')}
                    onLeaderboardClick={() => setActiveTab('Leaderboard')}
                />
            </section>
            <MarketSignals onSignalClick={(signal) => openChat(signal)} />
            <ActiveAgents onAgentClick={handleAgentClick} />
          </div>
        );
    }
  };

  return (
    <div className={`flex h-screen w-full font-sans selection:bg-primary/30 selection:text-white ${isDarkMode ? 'bg-background-dark text-text-main' : 'bg-gray-100 text-gray-900'}`}>
      
      {/* Global Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Layout */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative lg:ml-72 transition-colors duration-300">
        
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-border bg-white dark:bg-background-dark z-30 transition-colors duration-300">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-bold transition-colors">H</div>
            <span className="font-bold text-gray-900 dark:text-white font-display">DeFAI</span>
          </div>
          <div className="flex items-center gap-3">
             <button onClick={toggleTheme} className="text-gray-600 dark:text-gray-300 p-2">
               {isDarkMode ? <Icon name="light_mode" size={20} /> : <Icon name="dark_mode" size={20} />}
             </button>
             <button className="text-gray-900 dark:text-white p-2">
                <Icon name="menu" size={24} />
             </button>
          </div>
        </header>

        {/* Desktop Header */}
        <header className="hidden lg:flex items-center justify-between px-8 py-6 bg-transparent shrink-0 z-30 pointer-events-none">
          <h2 className="text-2xl font-bold leading-tight font-display pointer-events-auto dark:text-white text-gray-900 transition-colors">
            {view === 'dashboard' ? activeTab : 'Agent Detail'}
          </h2>
          
          <div className="flex items-center gap-4 pointer-events-auto">
             {/* Search Bar */}
             <div className="relative group">
                <Icon name="search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 group-hover:text-primary-dark dark:group-hover:text-primary transition-colors" />
                <input 
                    type="text" 
                    placeholder="Search agents, tokens..." 
                    className="bg-white dark:bg-background-card border border-gray-200 dark:border-border rounded-full py-2.5 pl-10 pr-4 w-64 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-text-subtle"
                />
             </div>

             {/* Theme Toggle */}
             <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-white dark:bg-background-card border border-gray-200 dark:border-border text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500 transition-all shadow-sm dark:shadow-none"
                title="Toggle Theme"
             >
                {isDarkMode ? <Icon name="light_mode" size={20} /> : <Icon name="dark_mode" size={20} />}
             </button>

             {/* Notifications */}
             <button 
                onClick={() => setIsNotificationsOpen(true)}
                className="relative p-2.5 rounded-full bg-white dark:bg-background-card border border-gray-200 dark:border-border text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500 transition-all shadow-sm dark:shadow-none"
             >
                <Icon name="notifications" size={20} />
                <span className="absolute top-2 right-2.5 size-2 bg-accent-red rounded-full border-2 border-white dark:border-background-dark"></span>
             </button>

             {/* Profile */}
             <div className="flex items-center gap-3 pl-4 border-l border-gray-200 dark:border-border h-8">
                <div 
                    className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-white dark:border-background-card cursor-pointer hover:border-primary transition-colors shadow-sm" 
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80")' }}
                />
             </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden relative flex flex-col">
             {renderContent()}
        </div>

        {/* Mobile Navigation */}
        <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>

      {/* Global Overlays */}
      <ChatInterface isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} context={chatContext} />
      <NotificationPanel isOpen={isNotificationsOpen} onClose={() => setIsNotificationsOpen(false)} />
      
    </div>
  );
};

export default App;