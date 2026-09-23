function Skills() {

    const skills = [
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express.js",
        "NestJS",
        "PostgreSQL",
        "MongoDB",
        "Git",
        "Docker",
        "Jest"
    ];

    return (
        <section id="skills">
            <h2>Skills</h2>

            <ul>
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </section>
    )
}

export default Skills