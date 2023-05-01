import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Content(props) {
  const { quote } = props;
  return (
    <div className='flex gap-x-2 w-full md:w-11/12'>
      <div className='flex flex-col w-full gap-y-5'>
        <FaQuoteLeft className='w-5 h-5 md:w-7 md:h-7' />
        <p
          id='text'
          className='text-center font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl -mt-5'>
          {quote?.quote}
        </p>
        <span
          className='flex self-end font-medium text-sm md:text-lg'
          id='author'>
          - {quote?.author}
        </span>
      </div>
    </div>
  );
}
