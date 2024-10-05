
import { useState } from 'react';
import './App.css'
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';

function App () {  

function showMenssage() {
  console.log("Evento do compomente Pai!");
}

const [message, setMessage] = useState("");

const handleMessage = (msg) => {
  setMessage(msg);
};

  return (
    <div className='App'>
     
     <ExecuteFunction myFunction={showMenssage}/>
      
      {/*State lift*/}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage}/>

    </div>
  )
}

export default App
