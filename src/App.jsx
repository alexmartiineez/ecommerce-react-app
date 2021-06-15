import './App.css';
import {
  BrowserRouter as Router, //Envuelve toda la aplicación, dando las propiedades al codigo.
  Route,
  Switch //Van las cosas cambiantes.
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './screens/Home/Home';
import ItemDetail from './screens/ItemDetail/ItemDetail';
import CartContainer from './screens/CartContainer/CartContainer';
import LoginContainer from './screens/LoginContainer/LoginContainer';
import { useContext, useEffect, useState } from 'react';
import UserContext from './context/UserContext';
import ShippingContainer from './screens/ShippingContainer/ShippingContainer';
import PlaceOrder from './screens/PlaceOrder/PlaceOrder';

function App() {

  const [actualLocation, setActualLocation] = useState('')
  
  const { user } = useContext(UserContext)

  useEffect(() => {
    setActualLocation(window.location.pathname)
  }, [])

  if (user.active !== null) {

    return (
      
      <Router>

        {/* Van los componentes globales.*/}
        {
          actualLocation !== '/login' && <Navbar/>
        }
        
        <Switch>

          <Route path='/' exact component={(props) =>
            <Home {...props} setActualLocation={setActualLocation}/>
          }/>

          <Route path='/product/:id'>

            <ItemDetail/>

          </Route>

          <Route path='/login' component={(props) =>
            <LoginContainer {...props} setActualLocation={setActualLocation} />
          }/>

          <Route path='/cart' component={CartContainer} />

          <Route path='/shipping' component={(props) =>
            <ShippingContainer {...props} setActualLocation={setActualLocation} />
          }/>

          <Route path='/placeorder/:id?' component= {PlaceOrder} />

        </Switch>

      </Router>

    );
  } else {
    return (
      <div className="fa-3x text-center d-flex flex-column justify-content-center align-items-center" style={{height: '100vh'}}>
                <i className="fas fa-spinner fa-pulse text-primary mb-3"></i>
                <h4>Cargando...</h4>
      </div>
    )
    
  }
}

export default App;
