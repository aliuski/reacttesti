import React from 'react';
import axios from "axios";

function App() {
  const [inni, setInni] = React.useState('');
  const [value, setValue] = React.useState('-');
  function handleClick(){
	axios.get('http://akispringboot.eu-north-1.elasticbeanstalk.com/greeting?name='+inni).then((response) => {
        setValue(response.data.content);
      });
  }
  return <div>
  <input value={inni} onChange={e=>setInni(e.target.value)} />
  <button onClick={handleClick}>Nappi</button><br/>{value}</div>;
}

export default App;
