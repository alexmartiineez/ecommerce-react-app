import React, { useContext, useEffect } from 'react'
import Carousel from '../../components/Carousel/Carousel'
import ItemList from '../../components/ItemList/ItemList'
import UserContext from '../../context/UserContext'

const Home = (props) => {

    const { user } = useContext(UserContext)

    useEffect(() => {
        props.setActualLocation(window.location.pathname)
    }, [props])

    return (
        <div>
            
            {/* Carousel */}
            <Carousel/>

            <div className='container '>

                {
                    user.active && <h6 className='mt-4 text-muted'>Hola {user.name}</h6>
                }

                <h2 className='text-center text-muted display-6 mt-4 mb-3'>¿Que estas buscando?</h2>

                {/* Lista de productos */}
                <ItemList/>

            </div>

           {/*  Que estas buscando */}

        </div>
    )
}

export default Home
