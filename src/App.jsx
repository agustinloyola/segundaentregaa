import MainRoutes from './routes/MainRouter';
import NavBarComponent from './components/NavBar/NavBarComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { CartProvider } from './context/CartContext';



function App() {

  

  return (
    <div>
      <CartProvider>
      <MainRoutes/> </CartProvider>
      
    </div>
  );
}

export default App;
