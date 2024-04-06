
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
  
  const handleClickCloseButton = (item:any) => {

    console.log(item)
    setfruitArray(fruitArray.filter((fruit) => fruit !== item))
  }
  
  

  return (
    <>
      <div className='container'>
      <div className='card'>

        <h2>Items to sell:</h2>
        {/* <ItemList itemArray={fruitArray} status={setfruitArray}></ItemList>  */}
        {/* <div className='quote'>Pramodh</div>  */}

        <ul>
          {(fruitArray.length > 0) && fruitArray.map((item,index) =>(
            <ul key={index}>{item}<button className="delete-button" onClick={()=>handleClickCloseButton(item)}>-</button></ul>

          ))}

        </ul>

        <input type='text' className='quote' onChange={(e)=>setNewItem(e.target.value)} value={newItem} ></input>
        <button onClick={handleClick} >Add Item</button>
        
      </div>
    </div>
    </>
  )
}

export default App
