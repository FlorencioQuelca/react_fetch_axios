import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import ContryDetail from './components/ContryDetail'
// necesitamos 3 cosas (1) estado  (2)UseEffect  (hook)  (3)
function App() {
  const [country, setCountry] = useState() //(1)
   
  
  useEffect(() => {  //callback y un arreglo de dependencias recibe un usefect
     // const url='https://randomuser.me/api/'
      const url='https://restcountries.com/v3.1/name/bolivia'
                                       //axios.get(url).then().catch(err => console.log(err))
                                      //fecha se trabaja con enredado  siempre con 2 then y un catch
     // fetch(url).then( res=> res.json()).then(data=>setCountry(data))
     // .catch(err =>console.log(err))
       axios.get(url).then(res => {setCountry(res.data[0])}).catch(err=>console.log(err))    
   
   }, [])

  console.log(country);
   
  return (
    <div className="App">
    
      <ContryDetail   country={country} />
        
    </div>
  )
}

export default App
