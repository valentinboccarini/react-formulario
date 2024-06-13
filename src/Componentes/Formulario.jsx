import "./Formulario.css"
import { useState } from "react";

export function Formulario() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")


    return (
        <form className='formulario'>

            <h1>Formulario</h1>
            <label>Nombre</label>
            <input
                value={nombre}
                type="text"
                onChange={e => setNombre(e.target.value)}

            />
            <label>Apellido</label>
            <input
                value={apellido}
                type="text"
                onChange={e => setApellido(e.target.value)}

            />
            <label>Email</label>
            <input
                value={email}
                type="text"
                onChange={e => setEmail(e.target.value)}

            />
            <label>Telefono</label>
            <input
                className="inputs"
                value={telefono}
                type="text"
                onChange={e => setTelefono(e.target.value)}

            />
            <label>Password</label>
            <input
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}

            />
            <label>Confirmar password</label>
            <input
                type='password'
                value={confirm}
                onChange={e => setConfirm(e.target.value)}

            />
            <button>Grabar</button>
        </form>
    )
}
