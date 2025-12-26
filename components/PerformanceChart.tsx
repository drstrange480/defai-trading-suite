import React from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 6890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 5490 },
];

const PerformanceChart: React.FC = () => {
  return (
    <div className="rounded-3xl bg-white dark:bg-background-card border border-gray-200 dark:border-border p-8 flex flex-col justify-between h-full relative overflow-hidden transition-colors shadow-sm dark:shadow-none">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#888 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

      <div className="flex justify-between items-start mb-4 z-10">
        <div>
          <p className="text-gray-900 dark:text-white text-lg font-medium">Performance Trend</p>
          <p className="text-gray-500 dark:text-text-subtle text-sm mt-1">Last 7 Days</p>
        </div>
        <div className="flex gap-2 items-center bg-gray-100 dark:bg-background-dark/50 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-border/50">
          <span className="size-2.5 rounded-full bg-primary-dark dark:bg-primary animate-pulse"></span>
          <span className="text-xs text-gray-500 dark:text-text-subtle font-medium">Portfolio</span>
        </div>
      </div>
      
      <div className="w-full h-[180px] -mx-4 -mb-4 z-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#35E0A0" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#35E0A0" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
            <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#35E0A0" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorValue)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;