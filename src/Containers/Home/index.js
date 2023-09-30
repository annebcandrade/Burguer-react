import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Container, H1, Image, ContainerItems, InputLabel, Input, Button} from './styles'
import Burguer from '../../assets users/burger 1.png'
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
      <Image alt="logo-imagem" src={Burguer} />
      <ContainerItems>
        <H1>Faça seu Pedido!</H1>

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome" />

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputAge} placeholder="Escolha seu Pedido" />

      <Button  onClick={addNewUser}>Novo Pedido</Button>


      </ContainerItems>
    </Container>
  );

}

export default App