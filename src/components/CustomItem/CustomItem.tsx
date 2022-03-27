import { memo } from 'react';
import styles from './CustomItem.module.css';

type ItemProps = {
  title: string;
  index: number;
  addItemToFavoriteList: (index: number) => void;
}

function ItemComponent(props: ItemProps){
  return (
    <li>
      {props.title}
      <button
        className={styles.button}
        onClick={() => props.addItemToFavoriteList(props.index)}
      >
          Add to favorite
      </button>
    </li>
  )
}

export const Item = memo(ItemComponent);