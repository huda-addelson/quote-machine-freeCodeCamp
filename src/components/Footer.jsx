import React from 'react';
import { FaTwitter } from 'react-icons/fa';

export default function Footer(props) {
  const { nextQuote } = props;
  return (
    <div className='w-full justify-between items-center flex px-2 md:px-5'>
      <a
        href='https://twitter.com/intent/tweet'
        target='_blank'
        className='flex gap-x-2'
        id='tweet-quote'>
        <FaTwitter className='w-10 h-10 p-2 bg-zinc-200 rounded-md' />
      </a>
      <div id='new-quote'>
        <button
          onClick={() => nextQuote()}
          className='px-3 py-2 bg-zinc-400 text-white'>
          New Quote
        </button>
      </div>
    </div>
  );
}
