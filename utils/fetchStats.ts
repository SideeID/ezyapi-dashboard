import { StatsSummary } from '../types';

export const fetchStatsSummary = async (): Promise<{ data: StatsSummary }> => {
  const response = await fetch('https://api.sideid.tech/v1/stats/summary');
  if (!response.ok) {
    throw new Error('Failed to fetch stats summary');
  }
  return response.json();
};