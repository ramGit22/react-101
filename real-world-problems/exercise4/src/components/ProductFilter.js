import React, { useState, useEffect } from 'react'

const ProductFilter = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('')

  console.log('products', products)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  const categories = products.map((product) => product.category)
  const uniqueCatogory = new Set(categories)
  const uniqueCatogoryArray = [...uniqueCatogory]

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products

  if (loading) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <select value={category} onChange={handleCategoryChange}>
        {uniqueCatogoryArray.map((category) => {
          return <option>{category}</option>
        })}
      </select>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductFilter
