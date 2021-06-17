import './App.scss';
import Pizza from './components/Pizza/Pizza';
import Drinks from './components/Drinks/Drinks';
import Footer from './components/Footer/Footer';

const App = props => {
  return (
    <div className="app">
      <Pizza/>
      <Drinks/>
      <Footer/>
    </div>
  );
}



export default App;
