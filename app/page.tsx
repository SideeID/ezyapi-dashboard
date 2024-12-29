import { DashboardStats } from '@/components/dashboard/stats-cards';
import { ServicesInfo } from '@/components/dashboard/services-info';
import { HeaderSection } from '@/components/dashboard/header-section'; 

export default function Home() {
  return (
    <main className='p-8 md:p-10 mx-auto max-w-7xl'>
      <div className='flex flex-col gap-8'>
        <HeaderSection />
        <DashboardStats />
        <ServicesInfo />
      </div>
    </main>
  );
}
