import { Link } from "react-router-dom";
import style from './StandardButton.module.css';

type StandardButtonProps = {
  component: string;
  name: string;
}

export default function StandardButton (props: StandardButtonProps) {
  return (
    <Link to={props.component} className={style.standardButton}>
      {props.name}
    </Link>
  )
}