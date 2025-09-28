import { useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";

export function CreateTask() {
  const [title, setTitle] = useState("");

  async function createTask(event) {
    console.log({ event });
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/tasks`, {
        titulo: title,
        concluida: 0,
      });
    } catch (err) {
      alert("Não foi possivel criar a tarefa neste momento.");
    }
  }

  return (
    <section className={styles.anchor}>
      <form action="" onSubmit={createTask}>
        <h3>Criar Tarefa</h3>
        <input
          type="text"
          placeholder="Digite o nome da tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <button className={styles.button}>Criar</button>
      </form>
    </section>
  );
}
