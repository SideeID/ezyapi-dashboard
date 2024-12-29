export const HeaderSection = () => {
  return (
    <div>
      <h1 className='text-3xl font-extrabold tracking-tight text-primary'>
        Dashboard
      </h1>
      <p className='text-muted-foreground mt-2'>
        Layanan Rest API{' '}
        <span className='bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-transform transform hover:scale-105'>
          gratis
        </span>{' '}
        untuk semua suku dan ras{' '}
        <span className='text-xs italic text-gray-500'>
          (yang hitam juga boleh)
        </span>
      </p>
      <p className='text-muted-foreground mt-1 flex items-center gap-2'>
        <span className='inline-flex items-center bg-gradient-to-r from-blue-400 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-transform transform hover:scale-105'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 w-4 mr-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 5l7 7-7 7'
            />
          </svg>
          Limit API: 100
        </span>
        Requests per menit
      </p>
    </div>
  );
}