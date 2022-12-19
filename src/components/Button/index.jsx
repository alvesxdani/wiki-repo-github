import { ButtonContainer } from "./style";
import { BiSearch } from 'react-icons/bi'

function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
      <BiSearch size={20} style={{marginRight: '0.4rem'}} /> Buscar
    </ButtonContainer>
  )
}

export default Button;
