type StandardItemProps = {
  title: string;
}

export default function StandardItem(props: StandardItemProps){
  return <li>{props.title}</li>
}