import { BoxHero } from "./BoxHero"


export const Hero = () => {
    return (
        <section className="hero contenedor" id="hero">
            <div className="content-hero">
                
              <BoxHero
                imagen='/img/descuentos.svg'
                discount="25%  de Descuentos"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero id ea molestias soluta facilis aut numquam voluptas iusto? Voluptates?"
              />
              <BoxHero
                imagen='/img/garantia.svg'
                discount="+12 Meses de Garantia"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero id ea molestias soluta facilis aut numquam voluptas iusto? Voluptates?"
              />
              <BoxHero
                imagen='/img/promociones.svg'
                discount="24hrs de Promociones"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae libero id ea molestias soluta facilis aut numquam voluptas iusto? Voluptates?"
              />
            </div>
        </section>
    )
}
