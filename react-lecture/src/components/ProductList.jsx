function ProductList({products})
{
    return (
        <ul>
            {
            products.map(product => (
            <ul key={product.inStock}>
                 <p>{product.id}</p>
                 <p>{product.title}</p> 
                 <p>{product.price}</p>
                 <p>{product.category}</p>
                 <p>{product.inStock ? "В нал" : "Отсут"}</p>
            </ul>))    
            }
        </ul>
    )
}

export default ProductList;