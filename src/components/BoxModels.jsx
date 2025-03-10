export const BoxModels = ({className, title, price}) => {
    return (
        <div className={className}>
            <h3>{title}</h3>
            <span className="precio">{price}</span>
        </div>
    )
}