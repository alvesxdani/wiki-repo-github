import { InputContainer } from "./style";

function Input({value, onChange}) {
  return (
    <InputContainer>
      <input placeholder="Digite aqui" value={value} onChange={onChange}/>
    </InputContainer>
  )
}

export default Input;
