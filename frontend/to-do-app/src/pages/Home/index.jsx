import { Container } from "../../components/Container";
import { CreateTask } from "../../components/CreateTask";
import { ListTask } from "../../components/ListTask";
import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/tasks`
        );
        setTasks(response.data);
      } catch (err) {
        setError("Erro ao buscar tarefas");
      } finally {
        setLoading(false);
      }
    }

    loadTasks();
  }, []);

  return (
    <>
      <Container>
        <h3>Gerenciador de tarefas</h3>
      </Container>

      <Container>
        <CreateTask />
      </Container>

      <Container>
        {loading && <p>Carregando tarefas...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && <ListTask tasks={tasks} />}
      </Container>
    </>
  );
}
