import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { db } from '../../firebase'

const ItemDetail = () => {

    const [product, setProduct] = useState(null)

    const {id} = useParams()

    useEffect(() => {
        
        const getProducts = async() => {

            const data = await db.collection('products').doc(id).get()

                setProduct({
                    id: data.id,
                    ...data.data()
                })

        }

        getProducts()

    }, [id])

    return (
        <div className='pt-5 pb-5'>

            <div className="container">

                <div className="row">

                    <div className="col-md-6">

                        <div className="p-3">
                            <img src={product?.image} alt={product?.title} width='100%'/>
                        </div>

                    </div>
                    <div className="col-md-6">

                        <div className="p-4 w-100">

                            <div className="mt-4 mb-3">
                                <h5 className="text-uppercase h2">{product?.title}</h5>
                                <div className="d-flex align-items-center">
                                    <span>${product?.price}</span>
                                </div>
                                    <p>{product?.description}</p>
                            </div>

                        </div>

                    </div>

                </div>
                
            </div>
            
        </div>
    )
}

export default ItemDetail
