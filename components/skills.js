export default function Skills () {
    const skills = ["HTML", "CSS", "JavaScript", "Python", "Node.js", "npm", "Express.js", "React", "Next.js", "PostgreSQL", "MongoDB", "Git", "GitHub", "Bootstrap", "Tailwind", "EJS", "Mongoose", "Sequelize", "Tensorflow", "Tensorflow.js"]

    return (
        <div>
            <h1 className="text-center my-5">Skills</h1>
            
            <ul className="list-group list-group-horizontal flex-wrap text-center">
                {skills.map((skill, i) => {
                    return (
                        <li className="m-1 rounded list-group-item flex-fill bg-secondary text-white" key={`skill${i}`}>
                            {skill}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}