// import assets
import logo from '../assets/images/logo/logo.png';

export default function Header({ title = "Remote Jobs" }) {
    return (
        <>
            <header>
                <nav className="navbar bg-body-tertiary">
                    <div className="container">
                        <a className="text-decoration-none fw-bold h2 font-monospace" href="#">
                            <img src={logo} alt="Logo" className="d-inline-block align-text-center me-3" />
                            {title}
                        </a>
                    </div>
                </nav>
            </header>
        </>
    )
}
