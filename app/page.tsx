import { DashboardStats } from '@/components/dashboard/stats-cards';
import { ServicesInfo } from '@/components/dashboard/services-info';
import { HeaderSection } from '@/components/dashboard/header-section';
import Script from 'next/script';

export default function Home() {
  return (
    <main className='p-6 md:p-10 mx-auto max-w-7xl'>
      <Script id='structured-data' type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'EZY API',
          alternateName: "Dimas Fajar Katon Prayogo's API Service",
          url: 'https://ezy.sideid.tech',
          description:
            'Free REST API service offering AI, media processing, and more endpoints.',
          author: {
            '@type': 'Person',
            name: 'Dimas Fajar Katon Prayogo',
            alternateName: 'SideID',
            url: 'https://sideid.tech',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://ezy.sideid.tech/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        })}
      </Script>
      <div className='flex flex-col gap-10'>
        <HeaderSection />
        <DashboardStats />
        <ServicesInfo />
      </div>
    </main>
  );
}
