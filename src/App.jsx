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
import { useEffect, useState } from 'react';

function App() {

  const [actualLocation, setActualLocation] = useState('')

  useEffect(() => {
    setActualLocation(window.location.pathname)
  }, [])

  return (
    
    <Router>

      {/* Van los componentes globales.*/}
      {
        actualLocation !== '/login' && <Navbar/>
      }
      
      <Switch>

        <Route path='/' exact component={(props) => <Home {...props} setActualLocation={setActualLocation}
        />}/>

        <Route path='/product/:id'>

          <ItemDetail/>

        </Route>

        <Route path='/login' component={(props) => <LoginContainer {...props} setActualLocation={setActualLocation}
        />}/>

        <Route path='/cart' component={CartContainer} />

      </Switch>

    </Router>

  );
}

export default App;
