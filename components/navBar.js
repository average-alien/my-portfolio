// import built in link from next
import Link from "next/link"

export default function NavBar(props) {
    return (
        <nav id="navbar" className="navbar navbar-expand-md sticky-top bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Allen Tang</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-content"
                    aria-controls="navbar-content"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-content">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#about" onClick={() => props.scrollToTarget(props.about)}>About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#skills" onClick={() => props.scrollToTarget(props.skills)}>Skills</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#projects" onClick={() => props.scrollToTarget(props.projects)}>Projects</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#contact" onClick={() => props.scrollToTarget(props.contact)}>Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}