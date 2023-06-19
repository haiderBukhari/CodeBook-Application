import './App.css';
import { Navbar } from './Components/Layouts/Navbar';
import { Footer } from './Components/Layouts/Footer';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <>
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </>
    );
}

export default App;
