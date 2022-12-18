import { BsGithub } from 'react-icons/bs'
import { Container } from './styles'
import Input from '../components/input'

function App() {
  return (
    <Container>
      <BsGithub size={72} alt="Github logo"/>
      <Input />
    </Container>
  )
}

export default App
