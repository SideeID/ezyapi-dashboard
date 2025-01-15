'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Server, CloudDownload, CloudUpload, Cpu, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ServicesInfo = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Artificial Intelligence',
      description: 'Akses beragam macam model AI secara gratis!',
      icon: <Cpu className='h-6 w-6 text-green-500' />,
      href: '/ai-service',
      locked: false,
      color: 'from-green-400 to-blue-500',
    },
    {
      title: 'Downloader Universal',
      description: 'Download media dari banyak platform dengan mudah!',
      icon: <CloudDownload className='h-6 w-6 text-blue-500' />,
      href: '#',
      locked: true,
      color: 'from-blue-400 to-purple-500',
    },
    {
      title: 'Media Uploader',
      description: 'Upload dan simpan media dengan efisien!',
      icon: <CloudUpload className='h-6 w-6 text-purple-500' />,
      href: '#',
      locked: true,
      color: 'from-purple-400 to-pink-500',
    },
  ];

  return (
    <div className='flex flex-col gap-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className='border-0 rounded-xl shadow-xl bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg'>
          <CardHeader>
            <CardTitle className='text-xl font-bold text-white flex items-center gap-2'>
              <Server className='h-6 w-6 text-blue-400' />
              Base API
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex items-center gap-4'>
              <Select defaultValue='main'>
                <SelectTrigger className='w-full border-0 rounded-md p-2 bg-white bg-opacity-20 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'>
                  <SelectValue placeholder='Pilih server' />
                </SelectTrigger>
                <SelectContent className='border-0 rounded-md shadow-xl bg-gray-800 text-white'>
                  <SelectItem value='main' className='p-2 hover:bg-gray-700'>
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
      </motion.div>

      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Link
              href={service.locked ? '#' : service.href}
              className={
                service.locked ? 'cursor-not-allowed' : 'cursor-pointer'
              }
            >
              <Card
                className={`border-0 rounded-xl shadow-xl h-full overflow-hidden group transition-all duration-300 ${
                  service.locked
                    ? 'bg-gray-800 bg-opacity-50'
                    : 'bg-white bg-opacity-10'
                } backdrop-filter backdrop-blur-lg hover:shadow-2xl hover:scale-105`}
              >
                <CardHeader className='flex items-center gap-2 relative p-6'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  {service.icon}
                  <CardTitle className='text-lg font-bold text-white'>
                    {service.title}
                  </CardTitle>
                  {service.locked && (
                    <div className='absolute top-2 right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-3'>
                      Coming Soon
                    </div>
                  )}
                </CardHeader>
                <CardContent className='relative z-10 p-6'>
                  <p className='text-sm text-gray-300'>{service.description}</p>
                  {service.locked && (
                    <div className='mt-4 flex items-center justify-center'>
                      <Lock className='h-5 w-5 text-gray-400' />
                    </div>
                  )}
                </CardContent>
                <AnimatePresence>
                  {hoveredIndex === index && !service.locked && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent'
                    >
                      <p className='text-white text-sm font-medium'>
                        Click to explore
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
