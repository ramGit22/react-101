import './App.css'
import ProductList from './components/ProductList'

function App() {
  const products = [
    {
      name: 'Laptop',
      price: 999.99,
      description: 'A high-performance laptop for all your needs.',
    },
    {
      name: 'Smartphone',
      price: 599.99,
      description: 'A powerful smartphone with the latest features.',
    },
    {
      name: 'Headphones',
      price: 199.99,
      description: 'Noise-cancelling headphones for an immersive experience.',
    },
  ]
  return (
    <>
      <ProductList products={products} />
    </>
  )
}

export default App
