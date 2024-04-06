
import { useState } from 'react'
import './App.css'
import ItemList from './Components/ItemList'

function App() {

  let [newItem,setNewItem] = useState("")
  let [fruitArray,setfruitArray] = useState(["Banana","Mango"])

  const handleClick = () => {

    setfruitArray(prevFruits => [...prevFruits, newItem])
    setNewItem("")
    
   
  }
  
  
  

  return (
    <>
      <div className='container'>
      <div className='card'>

        <h2>Items to sell:</h2>
        <ItemList itemArray={fruitArray}></ItemList>
        {/* <div className='quote'>Pramodh</div>  */}
        <input type='text' className='quote' onChange={(e)=>setNewItem(e.target.value)} value={newItem} ></input>
        <button onClick={handleClick} >Add Item</button>
        
      </div>
    </div>
    </>
  )
}

export default App
