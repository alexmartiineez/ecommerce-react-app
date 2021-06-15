import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { TiendaContext } from '../../context/TiendaProvider'
import UserContext from '../../context/UserContext'
import { db } from '../../firebase'

const ShippingContainer = (props) => {

    const history = useHistory()

    const {user} = useContext(UserContext)
    const {cart} = useContext(TiendaContext)

    const [name, setName] = useState('')
    const [direction, setDirection] = useState('')
    const [cp, setCp] = useState('')
    const [error, setError] = useState('')
    const [orderLoading, setOrderLoading] = useState(false)

    useEffect(() => {
        props.setActualLocation(window.location.pathname)
    }, [props])

    const createOrder = async () => {

        try {

            const order = {
                email: user.email,
                name,
                direction,
                cp,
                cart,
                totalPrice: cart.reduce((initial, current) => initial + current.qty * current.price, 0 ),
                status: ('Not Paid')
            }

            setOrderLoading(true)

            const newOrder = await db.collection('users').doc(user.email).collection('orders').add(order)

            setOrderLoading(false)

            history.push(`/placeorder/${newOrder.id}`)            

        } catch {
            console.log(error)
            setOrderLoading(false)
        }

    }

    const handlerOrder = (e) => {
        e.preventDefault()

        setError('')

        if(name.trim() === '') {
            setError('name')
            return false
        }

        if(direction.trim() === '') {
            setError('direction')
            return false
        }

        if(cp.trim() === '') {
            setError('Codigo Postal')
            return false
        }

        createOrder()
    }

    return (
        <div className='container mt-4'>

        <div className='row d-flex justify-content-center'>
            <div className='col-md-8'>
                <form
                    className='d-flex flex-column align-items-center'
                    onSubmit={handlerOrder}>
                    <h4 className='text-muted'>DATOS DE ENVIO</h4>

                    <input
                        type='text'
                        placeholder='Nombre Completo'
                        onChange={e => setName(e.target.value)}
                        value={name}
                        style={
                            {borderColor: error === 'name' && 'red'}
                        }
                    /> {
                        error === 'name' && <span className='text-danger mb-1'>Ingrese un nombre correcto</span>
                    }

                    <input
                        type='text'
                        placeholder='Direccion de envio'
                        onChange={e => setDirection(e.target.value)}
                        value={direction}
                        style={
                            {borderColor: error === 'direction' && 'red'}
                        }
                    /> {
                        error === 'direction' && <span className='text-danger mb-1'>Ingrese una dirección correcta</span>
                    }

                    <input
                        type='text'
                        placeholder='Codigo Postal'
                        onChange={e => setCp(e.target.value)}
                        value={cp}
                        style={
                            {borderColor: error === 'Codigo Postal' && 'red'}
                        }
                    /> {
                        error === 'Codigo Postal' && <span className='text-danger mb-1'>Ingrese un codigo postal correcto</span>
                    }

                    {
                        orderLoading ?
                        (
                            <div className="fa-3x text-center my-2">
                                    <i className="fas fa-spinner fa-pulse text-primary"></i>
                            </div>
                        ) : (
                            <input 
                                type="submit" 
                                value='Continuar'/>
                        )
                        }

                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default ShippingContainer
