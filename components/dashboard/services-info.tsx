import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Server, CloudDownload, CloudUpload, Cpu } from 'lucide-react';

export const ServicesInfo = () => {
  const services = [
    {
      title: 'Artificial Intelligence',
      description: 'Akses beragam macam model AI secara gratis!',
      icon: <Cpu className='h-6 w-6 text-green-500' />,
    },
    {
      title: 'Downloader Universal',
      description: 'Download media dari banyak platform dengan mudah!',
      icon: <CloudDownload className='h-6 w-6 text-blue-500' />,
    },
    {
      title: 'Media Uploader',
      description: 'Upload dan simpan media dengan efisien!',
      icon: <CloudUpload className='h-6 w-6 text-purple-500' />,
    },
  ];

  return (
    <div className='flex flex-col gap-8'>
      <Card className='border border-gray-200 rounded-md shadow-sm'>
        <CardHeader>
          <CardTitle className='text-lg font-medium text-gray-800 flex items-center gap-2'>
            <Server className='h-5 w-5 text-gray-600' />
            Base API
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex items-center gap-4'>
            <Select defaultValue='main'>
              <SelectTrigger className='w-full border border-gray-300 rounded-md p-2 hover:border-gray-400 transition-colors'>
                <SelectValue placeholder='Pilih server' />
              </SelectTrigger>
              <SelectContent className='border border-gray-200 rounded-md shadow-sm'>
                <SelectItem value='main' className='p-2 hover:bg-gray-100'>
                  https://api.sideid.tech - Main Server
                </SelectItem>
                <SelectItem
                  value='backup'
                  disabled
                  className='p-2 text-gray-400 cursor-not-allowed'
                >
                  https://backup.sideid.tech - Backup Server
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {services.map((service, index) => (
          <Card
            key={index}
            className='border border-gray-200 rounded-md shadow-sm hover:shadow-md transition-shadow'
          >
            <CardHeader className='flex items-center gap-2'>
              {service.icon}
              <CardTitle className='text-sm font-medium text-gray-800'>
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm text-gray-600'>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
