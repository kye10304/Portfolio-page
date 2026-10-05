import { FaGithub } from "react-icons/fa";

function Projects() {
    const projects = [
        {
            title: 'Web Store',
            description: 'REST API for an online store with authentication, products, orders and role-based access.',
            technologies: [
                'Node.js',
                'Express',
                'PostgreSQL',
                'Sequelize',
                'Joi',
                'Jest',
            ],
            github: 'https://github.com/kye10304/web-store-backend',
        },
        {
            title: 'Movie Review API',
            description: 'REST API for movie reviews with authentication, validation and MongoDB data storage.',
            technologies: ['NestJS', 'MongoDB', 'Mongoose', 'Jest'],
            github: 'https://github.com/kye10304/movie-review-API',
        },
    ];

    return (
    <section id="projects">
        <h2>Projects</h2>

        <div className="projects-container">
        {projects.map((project) => (
            <article className="project-card" key={project.title}>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                    {project.technologies.map((technology ) => (
                        <span key={technology}>{technology}</span>
                    ))}
                </div>

                <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                    Github
                </a>
            </article>
        ))}
        </div>
        
    </section>
)}

export default Projects
