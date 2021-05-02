import React, {useState}  from 'react';
import Quotes from './Components/Quotes.json'
// import Color from './Components/RamdomColor'



function App() {
  let [sentence, Setsentence] = useState(0);

  const ramdomPhrase = () => {
    sentence = Math.floor(Math.random()*102)
    Setsentence(sentence);
  } 

  return (
    <div className = "sentence" >
      <div className= 'title'>
        <h1>{Quotes.quotes[sentence].quote}</h1>
      </div>

      <h3>{Quotes.quotes[sentence].author}</h3>
      
      <div className = 'buttons'>
        <button>Twitter</button>
        <button type="button" onClick= {ramdomPhrase} >Next</button>
      </div>
    </div>
  );
}

export default App;
