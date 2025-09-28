import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

export function Task({ id, name, concluida, index }) {
  const navigate = useNavigate();

  async function handleClick() {
    const query = new URLSearchParams({
      id,
      name,
      done: concluida.toString(),
    }).toString();

    navigate(`/task-details?${query}`);
  }

  return (
    <li className={styles.item} key={index} onClick={handleClick}>
      <p className={styles.title}>{name}</p>
      <label className={styles.checkboxLabel}>
        Concluida:
        <input type="checkbox" checked={concluida} readOnly />
      </label>
    </li>
  );
}
