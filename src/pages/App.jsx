import { BsGithub } from "react-icons/bs";
import { Container } from "./styles";
import Input from "../components/input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { useState } from "react";
import { api } from "../components/services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api
      .get(`repos/${currentRepo}`)
      .catch((error) => alert(`Erro: ${error}`));

    if(data.id) {
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return 
      }
    } alert('Não encontrado')
  };

  const handleRemoveRepo = (id) => {
    const remove = repos.filter((repo) => repo.id !== id);
    setRepos(remove);
    console.log('removi')
  }

  return (
    <Container>
      <BsGithub size={72} alt="Github logo" />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} key={repo.id} handleRemoveRepo={handleRemoveRepo}/>
      ))}
    </Container>
  );
}

export default App;
