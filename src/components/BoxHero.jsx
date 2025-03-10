

export const BoxHero = ({imagen, discount, text}) => {
    return (
      <div className="box">
        <img src={imagen} alt="decuentos" />
        <p className="box-titulo">{discount}</p>
        <p className="box-texto">{text}</p>
      </div>
    )
  }