// import built in link from next
import Link from "next/link"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-md bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">My Portfolio</a>
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
                            <Link className="nav-item" href="/about">About</Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/skills">Skills</Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/projects">Projects</Link>
                        </li>

                        <li className="nav-item">
                            <Link href="/contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}