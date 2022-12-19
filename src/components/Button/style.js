import styled from "styled-components";

export const ButtonContainer = styled.button`
  border: 1px solid #eee;
  background: #eee;
  width: 50%;
  border-radius: 20px;
  margin: 20px 0 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  transition: .80s;
  cursor: pointer;
  font: 1.2rem 'Calibri';

  &:hover {
    background: #9d9d9d;
    color: #fff;
    border: 1px solid #1d1d1d;
  }
`