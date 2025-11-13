import { useState } from 'react';
import reactLogo from './assets/react.svg';

import './App.css';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [fact, setFact] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 

  const handleGetFact = async (event) => {
    event.preventDefault();
    setError(null);
    setFact('');
    setLoading(true);

    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
    } catch (err) {
      setError(' Please try again!!');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
     
     
      <div className="card">
        <h2> Cat Fact Finder</h2>
        <form onSubmit={handleGetFact}>
          <button type="submit">Get Cat Fact</button>
        </form>
        {loading && <p>Loading...</p>}
        {fact && <p>{fact}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

     
    </>
  );
}

export default App;
