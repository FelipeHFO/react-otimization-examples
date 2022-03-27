import { useState } from "react"
import StandardItem from "../../components/StandardItem/StandardItem";

export default function WithoutMemo(){
  const [items, setItems] = useState<string[]>([]);

  function addItemToList(){
    setItems([...items, `Item ${items.length}`])
  }

  return (
    <div>
      <button onClick={addItemToList}>Adicionar Item</button>
      <ul>
        {
          items.map(item => {
            return <StandardItem key={item} title={item}/>
          })
        }
      </ul>
    </div>
  )
}