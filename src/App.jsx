import { useEffect, useState } from 'react';
import './App.css';
import useCrud from './hooks/useCrud';
import FormUsers from './components/FormUsers';
import CardUser from './components/CardUser';


function App() {
  const [editUser, setEditUser] = useState();
  const [isOpen, setIsOpen] = useState(false)
  const url = 'https://users-crud.academlo.tech/'
  const [users,getUsers,createUser,deleteUser,updateUser] = useCrud(url);
  useEffect(() => {
  getUsers('/users/');

  }, []);
 
 const handleOpen=()=>{
  setIsOpen(true)
 }
  return (
    <div>
      <h1 className='card-title'><ion-icon name="id-card-outline"></ion-icon> CRUD DE USUARIOS</h1>
      <button className='card-new' onClick={handleOpen}><ion-icon name="person-add-outline"></ion-icon> Crear Nuevo Usuario</button>
      <FormUsers
      createUser={createUser}
      editUser={editUser}
      updateUser= {updateUser}
      setEditUser= {setEditUser}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      />
      <div>
        {
          users?.map(user => (
            <CardUser
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setEditUser={setEditUser}
            setIsOpen={setIsOpen}/>
            
            ))
        }
      </div>
    </div>
  )
}

export default App
