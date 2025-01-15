'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Activity, Users, Network } from 'lucide-react';
import { fetchStatsSummary } from '@/utils/fetchStats';
import { recordVisitor } from '@/utils/recordVisitor';

const SkeletonCard = () => (
  <Card className='overflow-hidden'>
    <CardHeader className='flex flex-row items-center justify-between pb-2'>
      <div className='h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded animate-pulse'></div>
      <div className='h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse'></div>
    </CardHeader>
    <CardContent>
      <div className='h-8 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse'></div>
      <div className='h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mt-2 animate-pulse'></div>
    </CardContent>
  </Card>
);

const StatsCard = ({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string | number;
  description: string;
  icon: JSX.Element;
}) => (
  <Card className='overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-800 transform hover:-translate-y-1'>
    <CardHeader className='flex flex-row items-center justify-between pb-2'>
      <CardTitle className='text-sm font-medium'>{title}</CardTitle>
      <div className='p-2 bg-primary/10 rounded-full'>{icon}</div>
    </CardHeader>
    <CardContent>
      <div className='text-2xl font-bold'>{value}</div>
      <p className='text-xs text-muted-foreground mt-1'>{description}</p>
    </CardContent>
  </Card>
);

export const DashboardStats = () => {
  const [stats, setStats] = useState<{
    totalEndpoints: number;
    activeEndpoints: number;
    availabilityRate: string;
    totalVisitors: number;
    uniqueVisitors: number;
    totalRequests: number;
    averageRequestDuration: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchStatsSummary();
        await recordVisitor();
        setStats(response.data);
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to load stats');
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <p className='text-red-500 font-medium'>{error}</p>;
  }

  if (!stats) {
    return (
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <StatsCard
        title='Total Endpoints'
        value={stats.totalEndpoints}
        description='All available API endpoints'
        icon={<Network className='h-4 w-4 text-primary' />}
      />
      <StatsCard
        title='Total Visitors'
        value={stats.totalVisitors}
        description='All visitors recorded'
        icon={<Users className='h-4 w-4 text-primary' />}
      />
      <StatsCard
        title='Total Requests'
        value={stats.totalRequests}
        description='Total API calls made'
        icon={<BarChart3 className='h-4 w-4 text-primary' />}
      />
      <StatsCard
        title='Average Request Duration'
        value={`${stats.averageRequestDuration}ms`}
        description='Average time per request'
        icon={<Activity className='h-4 w-4 text-primary' />}
      />
    </div>
  );
};
