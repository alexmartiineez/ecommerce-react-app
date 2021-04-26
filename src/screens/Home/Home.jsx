import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import ItemList from '../../components/ItemList/ItemList'

const Home = () => {
    return (
        <div>
            
            {/* Carousel */}
            <Carousel/>

            <div className='container '>
                <h2 className='text-center text-muted display-6 mt-4 mb-3'>¿Que estas buscando?</h2>

                {/* Lista de productos */}
                <ItemList/>

            </div>

           {/*  Que estas buscando */}

        </div>
    )
}

export default Home
