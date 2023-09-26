import React from "react";
import axios from "axios";
import { Container, H1, Image, ContainerItems, InputLabel, Input, Button, User } from './styles'
import People from './assets users/people.svg'
import Arrow from './assets users/arrow.svg'
import Trash from './assets users/trash.png'
import { useState, useRef } from 'react';
function App() {

  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser() {

      const data = await axios.post("http://localhost:3001/users", { 
        name: inputName.current.value, 
        age: inputAge.current.value, 
      });

      console.log(data)

   // setUsers([...users,{ id: Math.random(), name: inputName.current.value, age: inputAge.current.value }])
  }

  function deleteUser(userId) {
    const newUsers = users.filter( user => user.id !== userId)
    setUsers(newUsers)
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

        <Button onClick={addNewUser}>Cadastrar <img alt="seta" src={Arrow} /></Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name} </p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lixeira" /></button>
            </User>
          ))}
        </ul>

      </ContainerItems>
    </Container>
  );

}

export default App