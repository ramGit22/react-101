const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>
        )
      })}
    </div>
  )
}
export default ProductList
