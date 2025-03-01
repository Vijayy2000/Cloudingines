
import './App.css';
import CardList from './Pages/Cards/Cards';
import FooterPage from './Pages/FooterPage/FooterPage';
import CarouselPage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
    <CarouselPage />
    <CardList />

    {/* <HeaderPage />
    <HomePage /> */}
      <FooterPage/>
      
    </div>
  );
}
    
export default App;
