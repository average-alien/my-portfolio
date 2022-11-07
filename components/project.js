import Image from "next/image"

export default function Project({ project }) {
    return (
        <div className="col col-12 col-lg-6 mx-auto my-3">
            <div className="card border bg-black text-white">
                <img className="card-img-top" src={project.image} alt={project.alt} />
                <div className="card-body">
                    <h3 className="card-title">{project.name}</h3>
                    <p className="card-text">{project.description}</p>
                </div>
                <div className="card-footer">
                    <a className="btn btn-primary m-3" href={project.github} target="_blank" rel="noreferrer">View on GitHub</a>
                </div>
            </div>
        </div>
    )
}