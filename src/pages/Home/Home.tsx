import StandardButton from "../../components/StandardButton/StandardButton";
import style from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={style.title}>Exemplos de cada implementação</h1>
      <div className={style.buttonsContainer}>
        <StandardButton name="Memo" component="/memo" />
        <StandardButton name="UseMemo" component="/useMemo" />
        <StandardButton name="UseCallback" component="/useCallback" />
      </div>

      <h1 className={style.title}>Exemplo de como o React funciona sem essas funções</h1>
      <div className={style.buttonsContainer}>
        <StandardButton name="Exemplo sem memo" component="/withoutMemo" />
        <StandardButton name="Exemplo sem useCallback" component="/withoutUseCallback" />
      </div>

      <h1 className={style.title}>Alguns conceitos e explicações</h1>
      <div className={style.buttonsContainer}>
        <StandardButton name="Ver mais" component="/concepts" />
      </div>
    </div>
  )
}