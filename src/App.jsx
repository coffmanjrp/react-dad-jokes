import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    generateJokes();
  }, []);

  const generateJokes = async () => {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    };

    const res = await fetch('https://icanhazdadjoke.com', config);
    const data = await res.json();

    setJoke(data);
  };

  return (
    <div className="App">
      <div className="container">
        <h3>Don't Laugh Challenge</h3>
        <div className="joke">{joke ? joke.joke : '# Joke Goes Here'}</div>
        <button type="button" className="btn" onClick={generateJokes}>
          Get Another Joke
        </button>
      </div>
    </div>
  );
}

export default App;
