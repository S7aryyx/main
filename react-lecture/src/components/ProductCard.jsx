function ProductCard({title , price})
{
    return (
        <div className="product-card">
            <h2>Название : {title} </h2>
            <h3>Цена : {price}</h3>
        </div>
    )
}
export default ProductCard;