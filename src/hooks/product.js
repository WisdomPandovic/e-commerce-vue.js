// hooks/products.js
export const fetchProducts = async () => {
    const response = await fetch('https://neophyte-garments-react-app-api.onrender.com/api/product')
    if (!response.ok) throw new Error('Failed to fetch products')
    const data = await response.json()
    return data.slice(2, 11)
  }
  
  export const fetchProductById = async (id) => {
    const response = await fetch(`https://neophyte-garments-react-app-api.onrender.com/api/product`)
    if (!response.ok) throw new Error('Failed to fetch product')
    const data = await response.json()
    return data.find(p => p._id === id)
  }
  