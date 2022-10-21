import Home from './pages/home';
import TopBar from './pages/topBar';
import Header from './pages/header';
import Hero from './pages/hero';
import Main from './pages/main';
import Footer from './pages/footer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <Hero/>
      <Main/> 
      <Footer/>
    </div>
  );
}

export default App;
