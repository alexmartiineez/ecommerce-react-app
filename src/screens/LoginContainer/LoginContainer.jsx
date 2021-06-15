import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import UserContext from '../../context/UserContext'
import './LoginContainer.css'

const LoginContainer = (props) => {

    const redirect = props.location.search ? props.location.search.split('=')[1] : '/'

    const {registerUser, loginUser, user, loadingUser} = useContext(UserContext)
    const [isUser, setIsUser] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    useEffect(() => {
        props.setActualLocation(window.location.pathname)

        if (user.active) {
            history.push(redirect)
        }

    }, [props, history, user.active, redirect])

    const registerMode = () => {
        setIsUser(!isUser)
    }

    const login = (e) => {
        e.preventDefault()

        setError('')

        if (email.trim() === '') {
            setError('El email es necesario')
            return false
        }

        if (password.trim() === '') {
            setError('La contraseña es necesaria')
            return false
        }

        loginUser(email, password)
        
    }

    const register = (e) => {
        e.preventDefault()

        // 
        //Pensar una manera para no hacer tanto condicional
        //

        /* const userInfo = [name, email, password]

        userInfo.map(dato => {
            if (dato === '') {
                setError(error )
            }
        }) */

        setError('')

        if (name.trim() === '') {
            setError('El nombre es necesario')
            return false
        }

        if (email.trim() === '') {
            setError('El email es necesario')
            return false
        }

        if (password.trim() === '') {
            setError('La contraseña es necesaria')
            return false
        }

        registerUser(email, password, name)

    }

    console.log(loadingUser)

    if(user.active === false && loadingUser !== true) {

        return (
            <div className="loginContainer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 ">
                            <div className="card cardLogin">
                                <form className="box" onSubmit={isUser ? login : register}>
                                    <h1 className="text-capitalize fw-bold">
                                        {
                                            isUser ? 'INGRESAR' : 'CREAR CUENTA'
                                        }
                                    </h1>
                                    <p className="text-muted">
                                        {
                                        isUser ? 'Ingresá con tu correo y contraseña' : 'Ingresa tus datos'
                                        }
                                    </p>
                                    
                                    {
                                        !isUser && 
                                        <input
                                            type='text'
                                            name='name'
                                            placeholder='Nombre y apellido'
                                            onChange={e => setName(e.target.value)}
                                            value={name} /> 
                                    }

                                    <input 
                                        type="email"
                                        name='name'
                                        placeholder='Ingrese su correo'
                                        onChange={e => setEmail(e.target.value)}
                                        value={email} />

                                    <input 
                                        type="password"
                                        name='password'
                                        placeholder='Ingrese su contraseña'
                                        onChange={e => setPassword(e.target.value)}
                                        value={password}/>

                                    <input 
                                        type="submit" 
                                        value={
                                        isUser ? 'INGRESAR' : 'CREAR CUENTA' 
                                        } />

                                    {
                                        error !== '' &&
                                        <span className='text-danger mb-3'>{error}</span>
                                    }

                                    <p className="text-muted mb-1">¿No tienes una cuenta?</p>

                                    <button 
                                        className="btn btn-outline-secondary mt-2"
                                        type='button'
                                        onClick={registerMode}>
                                            {
                                                isUser ? 'Crear cuenta' : 'Ingresar'
                                            }
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    } else {
        return (
            <div className="fa-3x text-center d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
            <i className="fas fa-spinner fa-pulse text-primary mb-3"></i>
            <h4>Cargando...</h4>
        </div>
        )
    }
}

export default LoginContainer
