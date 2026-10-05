import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';


const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "app dark" : "app"}>
            <button className='theme-toggle'
            onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Sun /> : <Moon />}
            </button>
            <Header />

            <main>
                <Hero />

                <About />

                <Skills />

                <Projects />

                <Contact />
            </main>

            <footer>
                <p>© 2026 Kyrylo Shvetsov</p>
            </footer>
        </div>
    );
};

export default App;
