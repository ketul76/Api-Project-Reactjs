import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import AllData from './AllData';

function App() {
  const [apiData,setApiData] = useState([]);
  function data(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      setApiData(response.data);
    console.log("The Data is a " , apiData);
  })
  .catch(function (error) {
    console.log(error);
  })
  }

  useEffect(() => {
    data();
  },[])
  return (
    <>  
      <AllData  apiData={apiData}/>
    </>
  );
}

export default App;
