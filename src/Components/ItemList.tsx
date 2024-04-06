
interface Props{
   
    itemArray:string[]
    status:() => string[]

}

function ItemList({itemArray,status}:Props) {

     const handleClick = () => {}


  return (
    <ul>
      {(itemArray.length > 0) && itemArray.map((item,index) =>(
            <ul key={index}>{item}<button className="delete-button" onClick={handleClick}>-</button></ul>

      ))}

    </ul>
  )
}

export default ItemList