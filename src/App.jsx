import { Fragment, useState } from 'react';
import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import ClipLoader from 'react-spinners/ClipLoader';

function App() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const getQuotes = () => {
    setIsLoading(true);
    fetch('https://dummyjson.com/quotes/random')
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setQuote(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen w-full bg-slate-600'>
      {isLoading ? (
        <ClipLoader color='#36d7b7' />
      ) : (
        <Fragment>
          <Header />
          <div
            className='w-11/12 sm:w-4/5 md:w-5/6 lg:w-5/12 h-full bg-zinc-100 mt-10'
            id='quote-box'>
            <div className='flex flex-col items-center justify-center px-5 py-10 gap-y-10'>
              <Content quote={quote} />
              <Footer nextQuote={getQuotes} />
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
