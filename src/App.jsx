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

function App() {
  return (
    
    <Router>

      {/* Van los componentes globales.*/}
      <Navbar/>

      <Switch>

        <Route path='/' exact>

          <Home/>

        </Route>
        <Route path='/product/:id'>

          <ItemDetail/>

        </Route>

        <Route path='/cart' component={CartContainer} />

      </Switch>

    </Router>

  );
}

export default App;
