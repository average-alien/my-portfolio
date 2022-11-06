export default function Skills () {
    const skills = ["HTML", "CSS", "JavaScript", "Python", "Node.js", "npm", "Express.js"]

    return (
        <>
            <h1>Skills</h1>
            
            <ul className="list-group list-group-horizontal flex-wrap text-center">
                {skills.map((skill, i) => {
                    return (
                        <li className="list-group-item flex-fill" key={`skill${i}`}>
                            {skill}
                        </li>
                    )
                })}
            </ul>
        </>
    )
}