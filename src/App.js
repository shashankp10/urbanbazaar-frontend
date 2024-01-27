import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import DynamicSlider from './Components/DynamicSlider';
import Body from './Components/Body';
function App() {
  return (
    <div className='main-class'>
      <NavBar/>
      <DynamicSlider/>
      <Body/>
      <Footer/>
    </div>
  );
}
export default App;
