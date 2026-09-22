import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
        <>
            <Header />

            <main>
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
