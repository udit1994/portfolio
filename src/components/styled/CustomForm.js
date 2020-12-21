import styled from "styled-components";

const button = `
  border-radius: 1rem;
  border: none;
  color: #ffffff;
  cursor: pointer;
  line-height: 1.3;
  margin-right: 0.5rem;
  min-height: 2rem;
  min-width: 5rem;
  outline: none;

  :disabled {
    background-color: #9a9a9a;
  }

  :hover {
    transform: translatey(-1px);
  }
`;

const inputFields = `
  background-color: #8a8a8a;
  border-radius: 1rem;
  border: none;
  color: #ffffff;
  font-family: "Arial", monospace;
  line-height: 1.5;
  outline: none;
  padding: 0.5rem;
  width: 100%;

  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;

  ::placeholder {
    color: #ffffff;
  }
`;

export const Cancel = styled.button`
  ${button}
  background-color: transparent;
  border: 1px solid #000000;
  color: #000000;
`;

export const Error = styled.p`
  position: absolute;
`;

export const InputText = styled.input`
  ${inputFields}
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
`;

export const Submit = styled.button`
  ${button}
  background-color: #0000aa;
`;

export const TextArea = styled.textarea`
  ${inputFields}
  height: 10rem;
  resize: none;
`;
