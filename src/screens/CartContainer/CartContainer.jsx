import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { TiendaContext } from '../../context/TiendaProvider'

const CartContainer = () => {

    const {cart, removeItem} = useContext(TiendaContext)
    const history = useHistory()

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    const truncate = (string, n) => {
        return string.length > n ? string.substr(0, n-1) + '...': string
    }

    return (
        <div className='container my-5 cardContainer'>

            {/* {
                cart.map(item => (
                    <p>Compre {item.qty} {item.title} </p>
                ))
            } */}

            <div className="row d-flex justify-content-center">

                <div className="col-lg-7 mb-4 mx-3">

                    <div className="">
                        {
                            cart.map((item) => (
                                <div key={item.id} className='d-flex flex-column mb-5'>
                                    <div className='d-flex align-items-center justify-content-evenly p-1 mb-1'>
                                        <img src={item.image} alt={item.title} height='70'/>
                                        <h5 className='small'>{truncate(item.title, 15)}</h5>
                                        <h6 className="text-danger mx-1">{item.qty} x {item.price}</h6>
                                    </div>

                                    <button 
                                        className='btn btn-outline-primary w-100 mx-auto' 
                                        style={{maxWidth:'500px'}}
                                        onClick={() => removeItem(item)}>Eliminar</button>
                                </div>
                            ))
                        }
                    </div>

                </div>

                <div className="col-lg-4 mt-2">

                    <div className="card p-3 bg-light d-flex flex-column">

                        <div className="d-flex justify-content-center">
                            <h5 className="me-2 mb-0">Subtotal ({cart.reduce((initial, current) => initial+current.qty, 0)} items) :</h5>
                            <h5 className="text-primary mb-0"> $ {cart.reduce((i, c) => i+c.qty*c.price, 0)}</h5>
                        </div>

                        <button 
                            className="btn btn-success mx-0 mt-3 w-100" 
                            disabled={cart.length === 0}
                            onClick={checkoutHandler}>Realizar Compra</button>

                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default CartContainer
