export interface StatsCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
}

// export interface StatsSummary {
//   endpoints: {
//     total: number;
//     active: number;
//   };
//   visitors: {
//     total: number;
//   };
//   requests: {
//     total: number;
//   };
// }

export interface StatsSummary {
  totalEndpoints: number;
  activeEndpoints: number;
  availabilityRate: string;
  totalVisitors: number;
  uniqueVisitors: number;
  totalRequests: number;
  averageRequestDuration: number;
}
