export interface Signal {
  id: string;
  pair: string;
  type: 'Perpetual' | 'Spot';
  timeAgo: string;
  title: string;
  description: string;
  confidence: number;
  trend: 'bullish' | 'bearish' | 'neutral';
}

export interface Agent {
  id: string;
  name: string;
  pair: string;
  status: 'Active' | 'Inactive';
  roi: number;
  imageUrl: string;
}

export interface PortfolioData {
  value: number;
  change: number;
  percentChange: number;
  history: { name: string; value: number }[];
}

export type Tab = 'Home' | 'Agents' | 'Wallet' | 'Leaderboard' | 'Chat';