// import { useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <header className="page__header">
            <nav className="navbar__menu">
                <ul id="navbar__list">
                    <li>
                        <Link
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="menu__link"
                        >
                        Section 1
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="menu__link"
                        >
                        Section 2
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="menu__link"
                        >
                        Section 3
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="menu__link"
                        >
                        Section 4
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
