import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

export default function Content(props) {
  const { quote } = props;
  return (
    <div className='flex gap-x-2 w-11/12'>
      <div className='flex flex-col w-full gap-y-5'>
        <FaQuoteLeft className='w-7 h-7' />
        <p id='text' className='text-center font-bold text-4xl'>
          {quote?.quote}
        </p>
        <span className='flex self-end font-medium text-lg' id='author'>
          - {quote?.author}
        </span>
      </div>
    </div>
  );
}
