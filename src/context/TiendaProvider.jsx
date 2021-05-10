import React, { createContext, useEffect, useState } from 'react'

export const TiendaContext = createContext() //Creas tu contexto. 

export const TiendaProvider = (props) => {

    const [cart, setCart] = useState(
        
        localStorage.getItem('cart') !== null ?
            JSON.parse(localStorage.getItem('cart')) 
            :
            []

    )

    useEffect (() => {

        //------------------------------
        //Para guardar en el Local Storage
        // 1- setItem para agregar elementos al LS.
        // 2- getItem para recuperar elementos del LS.
        // 3- JSON.Stringify (Objeto -> STRING) 
        // 4- JSON.Parse (STRING -> Objeto)
        //------------------------------

        localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])

    const aTCart = (product) => {

        //Verificar que el producto ya no este en el carrito.
        const existItem = cart.find(item => item.id === product.id)

        if(existItem) {
            
            const actualizedArray = cart.map(function(item){
                if(item.id === existItem.id) {
                    return product
                }
                else {
                    return item
                }
            })

            setCart(actualizedArray)

            /* cart.map(item => item.id === existItem.id ? product) */

        }
        else {
            setCart([
                ...cart, product
            ])
        }

    }

    const removeItem = (product) => {
        setCart(cart.filter(item => item.id !== product.id))

    }

    return (
        <TiendaContext.Provider value={{aTCart, cart, removeItem}}>
            {props.children}
        </TiendaContext.Provider>
    )
}