import React from 'react';
import './styles/cardUser.css'
const CardUser = ({user,deleteUser,setEditUser,setIsOpen}) => {
    const handleDelete = ()=>{
        deleteUser('/users',user.id)

    }
    const handleEdit =()=>{
    setEditUser(user)
    setIsOpen(true)
    }
  return (
<article className='card-contenedor'>
    <h3 className='card-user'>{user.first_name} {user.last_name}</h3>
    <ul className='card-ul'>
        <div className='card_lista'>
        <li className='card-list'><span><ion-icon name="mail-outline"></ion-icon> Correo: </span>{user.email}</li>
        <li className='card-list'><span><ion-icon name="balloon-outline"></ion-icon> Cumpleaños: </span>{user.birthday}</li>
        </div>
    </ul>
    <div className='card_button'>
    <button className='card-btn' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon> Eliminar</button>
    <button className='card-btn' onClick={handleEdit}><ion-icon name="construct-outline"></ion-icon> Editar</button>
    </div>
</article>  )
}

export default CardUser;