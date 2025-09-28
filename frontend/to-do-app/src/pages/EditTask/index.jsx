import { Container } from "../../components/Container";
import { useSearchParams, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";

export function EditTask() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const done = searchParams.get("done") === "true";
  const [title, setTitle] = useState(name);
  const [taskDone, setTaskDone] = useState(done);
  async function updateTask(event) {
    try {
      event.preventDefault();
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/tasks/${id}`,
        {
          titulo: title,
          concluida: taskDone,
        }
      );
      alert("Tarefa atualizada com sucesso!\n", response.data);

      const query = new URLSearchParams({
        id,
        name: title,
        done: taskDone.toString(),
      }).toString();
      navigate(`/task-details?${query}`);
    } catch (err) {
      alert("Não foi possivel criar a tarefa neste momento.");
    }
  }
  return (
    <>
      <Container>
        <section className={styles.anchor}>
          <form action="">
            <h3>Editar Tarefa {id}</h3>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
            <label className={styles.checkboxLabel}>
              Concluida:
              <input
                checked={taskDone}
                type="checkbox"
                onChange={(e) => setTaskDone(e.target.checked)}
              />
            </label>
            <div className={styles.buttons}>
              <button onClick={updateTask} className={styles.button}>
                Editar
              </button>
              <button onClick={() => navigate("/")} className={styles.button}>
                Home
              </button>
            </div>
          </form>
        </section>
      </Container>
    </>
  );
}
