import { useState, useMemo } from "react"
import { Item } from "../../components/Item/Item";

export default function UseMemo(){
  const [items, setItems] = useState<string[]>([]);

  function addItemToList(){
    setItems([...items, `Item ${items.length}`])
  }

  const countItems = useMemo(() => {
    return items.length;
  }, [items]);

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
      Contagem: {countItems}
    </div>
  )
}