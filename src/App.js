
import './App.css';
import { useEffect, useState } from 'react';


const URL = "https://random.dog/woof.json";

const getRandomDog = async () => { 
  const response = await fetch(URL); 
  const body = await response.json(); 
  return body.url; 
}


export const App = () => { 
  const [url, setUrl] = useState(null);

  const onClickHandler = async () => {
    const url = await getRandomDog();
    
    setUrl(url);
  };

  useEffect(() => {
    onClickHandler();
  }, []);


  return (
    <div>
      <button onClick={onClickHandler}>Click for an new dog picture</button>
      <span>{url}</span>
      <img src={url} alt='description of img' />
    </div>
  );
}

export default App;
