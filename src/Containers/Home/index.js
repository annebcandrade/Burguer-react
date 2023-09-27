import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, H1, Image, ContainerItems, InputLabel, Input, Button} from './styles'
import People from '../../assets users/people.svg'
import Arrow from '../../assets users/arrow.svg'
import { useState, useRef} from 'react';
function App() {

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()
  const history = useHistory()

  async function addNewUser() {

     const { data: newUser } = await axios.post("http://localhost:3001/users", { 
    name: inputName.current.value, 
    age: inputAge.current.value, 
      });
     
   setUsers([...users,newUser])

      history.push('/usuarios')
  }




  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

      <Button  onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>


      </ContainerItems>
    </Container>
  );

}

export default App