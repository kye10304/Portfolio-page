import {FaGithub} from "react-icons/fa"
import { Mail } from "lucide-react";

function Hero() {
    return (
        <section className="hero">
            <p className="hero-greeting">Hi, I'm</p>

            <h1>Shvetsov Kyrylo</h1>

            <h2>Junior Backend Developer</h2>

            <p className="hero-description">
                I build REST APIs with Node.js, Express and NestJS.
            </p>

            <div className="hero-buttons">
                <a href="https://github.com/kye10304">
                    <FaGithub />
                    GitHub
                </a>

                <a href="#contact">
                    <Mail />
                    Contact me
                    </a>
            </div>
        </section>
    );
}

export default Hero;
