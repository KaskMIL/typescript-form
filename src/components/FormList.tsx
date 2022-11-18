import { useState } from "react";
import { Sub } from "../types";

interface FormStates {
  inputValues: Sub,
}

interface Props {
  onNewSub: (sub: Sub) => void,
}

const FormList = ({ onNewSub }: Props) => {
  const [inputValues, setInputValues] = useState<FormStates['inputValues']>({
    name: '',
    subscript: 0,
    avatar: '',
    description: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onNewSub(inputValues);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => (setInputValues({...inputValues, [e.target.name]: e.target.value}))} value={inputValues.name} type="text" name="name" placeholder="name" />
      <input onChange={handleChange} value={inputValues.subscript} type="number" name="subscript" placeholder="subscript" />
      <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar" />
      <textarea onChange={handleChange} value={inputValues.description} name="description" placeholder="description" />
      <button> Submit</button>
    </form>
  )
};

export default FormList;