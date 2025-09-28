import { Container } from "../../components/Container";
import styles from "./styles.module.css";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

export function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const done = searchParams.get("done") == "true";
  async function handleEdit() {
    const query = new URLSearchParams({
      id,
      name,
      done: done.toString(),
    }).toString();

    navigate(`/edit-task?${query}`);
  }

  async function handleDelete(event) {
    try {
      event.preventDefault();
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/tasks/${id}`
      );
      alert("Tarefa deletada com sucesso!\n", response.data);
      navigate(`/`);
    } catch (err) {
      alert("Não foi possivel criar a tarefa neste momento.");
    }
  }

  return (
    <>
      <Container>
        <section className={styles.anchor}>
          <div className={styles.content}>
            <h2>Detalhes da Tarefa</h2>
            <p>Nome: {name}</p>
            <p>
              Status:
              {done ? " ✅" : " ❌"}
            </p>
          </div>

          <div className={styles.buttons}>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Excluir</button>
            <button onClick={() => navigate("/")}>Home</button>
          </div>
        </section>
      </Container>
    </>
  );
}
