import React from "react";
import axios from "axios";
import { Container, H1, Image, ContainerItems, Button, User } from './styles'
import Avatar from '../../assets users/avatar.svg'
import Arrow from '../../assets users/arrow.svg'
import Trash from '../../assets users/trash.png'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from 'react';
function Users() {

  const [users, setUsers] = useState([]);
  const history = useHistory()

 

  useEffect(() => {

    async function fetchUsers(){
      const { data: newUsers} = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
    }
    fetchUsers()
  }, [users])

 async  function deleteUser(userId) {
  await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter( user => user.id !== userId)
    setUsers(newUsers)
  }

  function goBackPage(){
    history.push('/');
  }


  return (
    <Container>
      <Image alt="logo-imagem" src={Avatar} />
      <ContainerItems>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p> {user.name} </p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}><img src={Trash} alt="lixeira" /></button>
            </User>
          ))}
        </ul>

        
        <Button onClick={goBackPage} > <img alt="seta" src={Arrow} /> Voltar </Button>


      </ContainerItems>
    </Container>
  );

}

export default Users;