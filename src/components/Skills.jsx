import { FaJs, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';

import {
    SiExpress,
    SiNestjs,
    SiPostgresql,
    SiMongodb,
    SiJest,
    SiSwagger,
} from 'react-icons/si';

import { SiTypescript } from 'react-icons/si';

function Skills() {
    const skills = [
        {
            name: 'JavaScript',
            icon: FaJs,
        },
        {
            name: 'TypeScript',
            icon: SiTypescript,
        },
        {
            name: 'Node.js',
            icon: FaNodeJs,
        },
        {
            name: 'Express.js',
            icon: SiExpress,
        },
        {
            name: 'NestJS',
            icon: SiNestjs,
        },
        {
            name: 'PostgreSQL',
            icon: SiPostgresql,
        },
        {
            name: 'MongoDB',
            icon: SiMongodb,
        },
        {
            name: 'Git',
            icon: FaGitAlt,
        },
        {
            name: 'Docker',
            icon: FaDocker,
        },
        {
            name: 'Jest',
            icon: SiJest,
        },
        {
            name: 'Swagger',
            icon: SiSwagger,
        },
    ];

    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>

            <div className="skills-container">
                {skills.map((skill) => {
                    const Icon = skill.icon;

                    return (
                        <div className="skill-card" key={skill.name}>
                            {Icon && <Icon />}
                            {skill.name}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills;
