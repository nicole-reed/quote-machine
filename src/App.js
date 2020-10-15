import React, { useEffect, useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


const App = () => {

  const [quote, setQuote] = useState({});


  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    try {
      const response = await fetch(`http://quotes.stormconsultancy.co.uk/random.json`)
      const data = await response.json();
      console.log(data)
      setQuote({ author: data.author, quote: data.quote })

    } catch (error) {
      console.log('error fetching quote:\n', error)

    }


  }

  return (
    <div>
      <h1 id='title'>Random Quotes</h1>
      <div id='quote-box'>
        <p id='text'>"{quote.quote}"</p>
        <p id='author'>-{quote.author}</p>
        <div id='clickables'>

          <a id='tweet-quote' href="twitter.com/intent/tweet">
            <FontAwesomeIcon icon={faTwitter} />
          share this wisdom on twitter</a>
          <button id='new-quote' onClick={getQuote}>Get A New Quote</button>
        </div>



      </div>
    </div>
  );
}

export default App;
