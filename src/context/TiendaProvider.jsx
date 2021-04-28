import React, { createContext, useState } from 'react'

export const TiendaContext = createContext() //Creas tu contexto. 

export const TiendaProvider = (props) => {

    const [cart, setCart] = useState([])

    const aTCart = (product) => {

        //Verificar que el producto ya no este en el carrito.
        const existItem = cart.find(item => item.id === product.id)

        if(existItem) {

        }
        else {
            setCart([
                ...cart, product
            ])
        }

    }

    return (
        <TiendaContext.Provider value={{aTCart}}>
            {props.children}
        </TiendaContext.Provider>
    )
}