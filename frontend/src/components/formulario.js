import Axios from "axios";
import React, { useState } from "react";
import Swal from 'sweetalert2'
import {Navbar} from "./common/Navbar";
import './formulario.css';
export default function Formulario() {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [cedula, setCedula] = useState('')
  const [correo, setCorreo] = useState('')
  const [edad, setEdad] = useState('')
  const [clave, setClave] = useState('')
  const [telefono, setTelefono] = useState('')

  const registrar=async(e)=>{
    e.preventDefault()
    const nuevoUsuario={nombre,apellido,cedula,correo,edad,clave,telefono}
    const respuesta=await Axios.post('http://localhost:4000/api',nuevoUsuario)
    console.log(respuesta)
    const mensaje=respuesta.data.mensaje
    Swal.fire({
      icon: 'success',
      title: mensaje,
      
    })
  }

  return (
    <div>
      <Navbar/>
    <div className="container-form">
      
      <form onSubmit={registrar}>
        <div className="mb-3">
        <input
            type="text"
            className="form-control"
            required placeholder="Nombre"
            onChange={e=>setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <input
            type="text"
            className="form-control"
            required placeholder="Apellido"
            onChange={e=>setApellido(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <input
            type="text"
            className="form-control"
            required placeholder="Cedula"
            onChange={e=>setCedula(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required placeholder="Correo"
            onChange={e=>setCorreo(e.target.value)}
          />

        </div>
        <div className="mb-3">
        <input
            type="text"
            className="form-control"
            required placeholder="Edad"
            onChange={e=>setEdad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            required placeholder="Contraseña"
            onChange={e=>setClave(e.target.value)}
          />
        </div>
        <div className="mb-3">
        <input
            type="text"
            className="form-control"
            required placeholder="Telefono"
            onChange={e=>setTelefono(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
      </form>
    </div>
    </div>
  );
}
