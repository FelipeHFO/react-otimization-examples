import { useState } from "react"
import { Item } from "../../components/Item/Item";

export default function Memo() {
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
            return <Item key={item} title={item}/>
          })
        }
      </ul>
    </div>
  )
}