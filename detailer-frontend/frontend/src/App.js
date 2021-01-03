import './App.css';
import { useState } from 'react';
import  path  from './config'
import axios from 'axios';

function App() {
  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  const handleChange = (event) => {
    const inputType = event.target.name;
    const value = event.target.value;
    if (inputType === 'email'){
      setEmail(value);
      console.log(email)
    } else if (inputType === 'password'){
      setPassword(value);
      console.log(password)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validation(email);
    if(!isValid){
      setResponse("Please enter valid email")
    }

    axios.post({
      method: 'post',
      url: path.concat(`/signin`),
      data: {
        email: email,
        password: password,
      }
    })
    .then(res => {
        console.log(res);
        setResponse(res.data);
      })
  }

  const validation = (emailToCheck) => {
    const emailVal = /\S+@\S*\.\S+/;
    return emailVal.test(emailToCheck);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" placeholder="enter email" onChange={handleChange}/>
      <input type="text" name="password" placeholder="enter password" onChange={handleChange} />
      <button type="submit">submit</button>
      <div>{response}</div>
    </form>
  );
}

export default App;
