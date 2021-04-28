import React, { useContext } from 'react'
import { TiendaContext } from '../../context/TiendaProvider'

const CartContainer = () => {

    const {cart} = useContext(TiendaContext)

    return (
        <div className='container'>
            
        </div>
    )
}

export default CartContainer
