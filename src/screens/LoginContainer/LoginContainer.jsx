import React, { useEffect, useState } from 'react'
import './LoginContainer.css'

const LoginContainer = (props) => {

    const [isUser, setIsUser] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        props.setActualLocation(window.location.pathname)
    }, [props])

    const registerMode = () => {
        setIsUser(!isUser)
    }

    return (
        <div className="loginContainer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 ">
                        <div className="card cardLogin">
                            <form className="box">
                                <h1 className="text-capitalize fw-bold">
                                    {
                                        isUser ? 'INGRESAR' : 'CREAR CUENTA'
                                    }
                                </h1>
                                <p className="text-muted">Ingresá con tu correo y contraseña</p>

                                <input 
                                    type="email"
                                    name='name'
                                    placeholder='Ingrese su correo'
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}/>

                                <input 
                                    type="password"
                                    name='password'
                                    placeholder='Ingrese su contraseña'
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}/>

                                <input 
                                    type="submit" 
                                    value="INGRESAR"/>

                                <p className="text-muted mb-1">¿No tienes una cuenta?</p>

                                <button 
                                    className="btn btn-outline-secondary mt-2"
                                    type='button'
                                    onClick={registerMode}>Crear cuenta</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer
