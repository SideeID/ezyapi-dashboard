import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Activity, Users, Network } from 'lucide-react';
import { StatsCardProps } from '@/types/index';

const StatsCard = ({ title, value, description, icon }: StatsCardProps) => (
  <Card>
    <CardHeader className='flex flex-row items-center justify-between pb-2'>
      <CardTitle className='text-sm font-medium'>{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className='text-2xl font-bold'>{value}</div>
      <p className='text-xs text-muted-foreground'>{description}</p>
    </CardContent>
  </Card>
);

export const DashboardStats = () => {
  const stats = [
    {
      title: 'Total Endpoints',
      value: '5',
      description: 'All available API endpoints',
      icon: <Network className='h-4 w-4 text-muted-foreground' />,
    },
    {
      title: 'Active Endpoints',
      value: '4',
      description: 'Currently working endpoints',
      icon: <Activity className='h-4 w-4 text-muted-foreground' />,
    },
    {
      title: 'Total Visitors',
      value: '216',
      description: '+20.1% from last month',
      icon: <Users className='h-4 w-4 text-muted-foreground' />,
    },
    {
      title: 'API Requests',
      value: '1,764',
      description: 'Total API calls made',
      icon: <BarChart3 className='h-4 w-4 text-muted-foreground' />,
    },
  ];

  return (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};
