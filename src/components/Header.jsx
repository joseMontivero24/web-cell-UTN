import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = ({ image = "/img/popular_1.png", title='Celulares del momento' }) => {
    return (
        <>
            <Menu />
            <header className="cabecera" id="home">
                <div className="contenedor caja-header">
                    <div className="logo">
                        <img width="400px" height="400px" src={image} alt="imagen-celu" />
                    </div>

                    <div className="cabecera-info">
                        <h2>{title}</h2>
                        <h1 className="cabecera-titulo degradado">Cell House</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, molestiae!</p>

                        <button className="btn">Ver Más</button>
                    </div>
                </div>
            </header>
        </>
    );
}

export const Menu = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`content-menu ${isScrolled ? 'scrolled' : ''}`}>
            <div className="logo">
                <span>CH</span>
            </div>

            <i className="fa-solid fa-bars nav" onClick={toggleMenu}></i>

            <nav className={`menu-links ${isMenuOpen ? 'active' : ''}`}>
                <div className="content-links">
                    <Link to="/" onClick={toggleMenu}>Inicio</Link>
                    <Link to="/catalogo" onClick={toggleMenu}>Catálogo</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contacto</Link>
                </div>
            </nav>
        </div>
    );
};