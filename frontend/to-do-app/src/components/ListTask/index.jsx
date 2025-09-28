import styles from "./styles.module.css";
import { Task } from "../Task/index.jsx";

export function ListTask({ tasks }) {
  if (!tasks || tasks.length == 0) {
    return (
      <ul>
        <li> Nenhuma tarefa por enquanto!</li>
      </ul>
    );
  }
  return (
    <section className={styles.anchor}>
      <div className={styles.list}>
        <h3>Tarefas:</h3>
        <ul>
          {tasks.map((task, index) => {
            return (
              <span key={index}>
                <Task
                  concluida={task.concluida}
                  id={task.id}
                  name={task.titulo}
                />
              </span>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
