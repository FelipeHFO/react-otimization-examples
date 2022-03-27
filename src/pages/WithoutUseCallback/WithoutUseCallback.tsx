import { useState } from "react"
import { Item } from "../../components/CustomItem/CustomItem";

export default function WhitoutUseCallback(){
  const [items, setItems] = useState<string[]>([]);

  function addItemToList() {
    setItems([...items, `Item ${items.length}`])
  }

  function addItemToFavoriteList(item: number) {
    console.log(item);
  }

  return (
    <div>
      <button onClick={addItemToList}>Adicionar Item</button>
      <ul>
        {
          items.map((item, index) => {
            return <Item
                      key={item}
                      title={item}
                      index={index}
                      addItemToFavoriteList={addItemToFavoriteList}
                    />
          })
        }
      </ul>
    </div>
  )
}