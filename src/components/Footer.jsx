
export const Footer = () => {
    return (
        <footer className="footer">
            <div className="content-footer contenedor">
                <div className="box-footer">
                    <h2>Opciones Menu</h2>
                    <a href="#">Inicio</a>
                    <a href="#">Nosotros</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact</a>
                </div>
                <div className="box-footer">
                    <h2>Otros enlaces</h2>
                    <a href="#">Personal</a>
                    <a href="#">Ubicacion</a>
                    <a href="#">Horario</a>
                    <a href="#">Otros</a>
                </div>
                <div className="box-footer">
                    <h2>Redes Sociales</h2>
                    <div className="icon">
                        <i className="fa-brands fa-twitter"><span>Twitter</span></i>
                        <i className="fa-brands fa-facebook"><span>Facebook</span></i>
                        <i className="fa-brands fa-linkedin"><span>Linkedin</span></i>
                        <i className="fa-brands fa-instagram"><span>Instagram</span></i>
                    </div>

                </div>

            </div>
            <div className="derechos">
                <p>&copy; Todos los derechos recervados</p>
                <span>Desarrollado por Jose Montivero</span>
            </div>

        </footer>
    )
}
