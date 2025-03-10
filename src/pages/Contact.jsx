import { Footer } from "../components/Footer"
import { Menu, Header } from "../components/Header"

export const Contact = () => {
  return (
    <>
      <Menu />
      <Header
        image={'/img/ultimo-samsung.png'}
        title="Samsung Galaxy S22"
      />

      <section className="contacto" id="contact">
        <h2 className="text-center degradado titulo-contacto">Contactame</h2>
        <div className="content-contacto contenedor">
          <div className="img-contact">
            <img src="../../public/img/contact.svg" alt="contact" />
          </div>
          <form action="">
            <div>
              <label htmlFor="email">Email:</label>
              <input className="form-imput" type="email" id="email" placeholder="Tu Email aquí..." />
            </div>

            <div>
              <label htmlFor="asunto">Asunto:</label>
              <input className="form-imput" type="text" id="asunto" placeholder="El Asunto aquí..." />
            </div>

            <div>
              <label htmlFor="dni">DNI:</label>
              <input className="form-imput" type="number" id="dni" placeholder="Tu numero DNI aquí..." />
            </div>

            <div>
              <label htmlFor="mensaje">Déjanos un Mensaje:</label>
              <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Escribe tu mensaje aquí..."></textarea>

            </div>
            <div className="btn-form">
              <button>Enviar</button>
              <input type="reset" value="Cancelar" />
            </div>

          </form>
        </div>
      </section>
      <Footer />


    </>
  )
}

