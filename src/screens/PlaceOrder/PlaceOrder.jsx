import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import UserContext from '../../context/UserContext'
import { db } from '../../firebase'

const PlaceOrder = () => {

    const [order, setOrder] = useState('')

    const {id} = useParams() // history.location.pathname.split('/')[2]
    const {user} = useContext(UserContext)

    console.log('este es el Id', id)

    useEffect(() => {

       /*  const getMP = (products) => {
            return
        } */

        const getOrder = async() => {
            try {

                if (user.active) {
                    const dbOrder = await db
                    .collection('users')
                    .doc(user.email)
                    .collection('orders')
                    .doc(id)
                    .get()

                    console.log('dborder', dbOrder.data())

                    setOrder({
                        id: dbOrder.id,
                        ...dbOrder.data()
                    }
                    )
                }

            } catch(error) {

            }
        }

        getOrder()

    }, [id, user.active, user.email])

    console.log('hola', order)

    return (
        <div className='container mt-3 container-placeorder'>
            <div className='row d-flex'>

                <div className='col-md-8'>
                    <div className='card p-3 mt-3 bg-ligth'>
                        <h5 className='card-title text-capitalize mb-3'>
                            Datos de envio
                        </h5>
                        <div>
                            <p className='mb-1 fw-bold'>
                                Nombre: 
                                <span className='fw-normal ms-1'>
                                    {order.name}
                                </span>
                            </p>
                            <p className='mb-1 fw-bold'>
                                Domicilio: 
                                <span className='fw-normal ms-1'>
                                    {order.direction}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className='card p-3 mt-3 bg-light'>
                        <h5 className='card-title text-capitalize mb-3'>
                            Medio de pago
                        </h5>
                        <p className='mb-1'>
                            Metodo: 
                            <span className='text-uppercase ms-1'>
                                Mercado Pago
                            </span>
                        </p>
                        <p className='mb-1 fw-bold'>
                            Estado:
                            <span className='fw-bold text-uppercase ms-1'>
                                {order.status}
                            </span>
                        </p>
                    </div>
                    
                    <div className='card p-3 mt-3 bg-light'>
                        <h5 className='card-title text-capitalize mb-3'>
                            Detalles de la orden
                        </h5>
                        <div>
                            { 
                                order?.cart?.map((item, index) => (
                                    <div 
                                        className='d-flex justify-content-between align-items-center flex-wrap mt-1'
                                        key={index}>
                                            <img src={item.image} alt={item.title} height={50} />
                                            <span>{item.name}</span>
                                            <span>{item.title}</span>
                                            <span>Cantidad: {item.qty}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>


                <div className='col-md-4'>
                    <div className='card mt-3 bg-light p-3'>
                        <div className='d-flex justify-content-between'>
                            <span className='fw-bold ms-1'>Subtotal</span>
                            <span>$ {order.totalPrice}</span>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <span className='fw-bold ms-1'>Descuento</span>
                            <span>
                                {
                                    order.totalPrice > 10000 ?
                                        `$ ${parseInt(order.totalPrice * 0.05)}`
                                    :
                                    `No se aplican descuentos`
                                }
                            </span>
                        </div>
                        <hr/>
                        <div className='d-flex justify-content-between'>
                            <span className='fw-bold ms-1'>Total</span>
                            <span>
                                {
                                    order.totalPrice > 2000 ?
                                        `$ ${order.totalPrice - parseInt(order.totalPrice * 0.05)}` 
                                    :
                                    `$ ${order.totalPrice}`
                                }
                            </span>
                        </div>
                        {
                            order.status === 'Not Paid' &&
                            (
                                <div className="">
                                    <a className='btn btn-info w-100 mt-4'>Pagar con Mercado Pago</a>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>

            
        </div>
    )
}

export default PlaceOrder
