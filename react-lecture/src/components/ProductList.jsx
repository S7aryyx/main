function ProductList({products})
{
    return (
        <ul>
            {
            products.map(product => (
            <ul key={product.id}>
                 <p>{product.title}</p> 
                 <p>{product.price}</p>
            </ul>))    
            }
        </ul>
    )
}

export default ProductList;