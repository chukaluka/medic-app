import React from 'react';
import Search from './components/Search.jsx';
import axios from 'axios';

const App = () => {

  const onClick = () => {
    axios.get('https://api.infermedica.com/v3')
    .then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
}

  return (
    <div>
      <Search onClick={onClick}/>
    </div>
  )
}

export default App;