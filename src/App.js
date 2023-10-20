import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import AboutUs from './components/AboutUs';
import OurCustomers from './components/OurCustomers'
import ContactForm from './components/ContactForm'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <AboutUs />
            <OurCustomers />
            <ContactForm />
        </div>
    );
}

export default App;
