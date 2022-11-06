import Image from "next/image"

export default function Project({ project }) {
    return (
        <div className="card">
            <img className="card-img-top" src={project.image} alt={project.alt} />
            <div className="card-body">
                <h3 className="card-title">{project.name}</h3>
                <p className="card-text">{project.description}</p>
                <a className="btn btn-primary" href={project.github} target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
        </div>
    )
}