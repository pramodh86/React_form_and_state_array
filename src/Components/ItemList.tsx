
interface Props{
   
    itemArray:string[]

}

function ItemList({itemArray}:Props) {
  return (
    <ul>
      {(itemArray.length > 0) && itemArray.map((item,index) =>(
            <ul key={index}>{item}</ul>

      ))}

    </ul>
  )
}

export default ItemList