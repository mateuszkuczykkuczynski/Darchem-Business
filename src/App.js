import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import AboutUs from './components/AboutUs';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <AboutUs />
        </div>
    );
}

export default App;
