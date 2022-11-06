import Project from '../components/project'

export default function Projects () {
    const projects = [
        {
            name: "Project name",
            description: "Project description",
            github: "https://github.com/average-alien/fictional-waffle",
            image: "/vercel.svg",
            alt: "alt description"
        },
    ]

    return (
        <>
            {projects.map((project, i) => {
                return (
                    <Project project={project} key={`project${i}`}/>
                )
            })}
        </>
    )
}