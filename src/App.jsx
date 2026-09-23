import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';

const App = () => {
    return (
        <>
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
        </>
    );
};

export default App;
