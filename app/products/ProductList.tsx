import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../../utils/api';
import ProductFilter from './ProductFilter';
import { Product } from '@/utils/types';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filter: string) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <ProductFilter onFilterChange={handleFilterChange} />
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Lista de Productos</h2>
        <ul className="divide-y divide-gray-200">
          {filteredProducts.map(product => (
            <li key={product.id} className="py-2">
              <div className="flex items-center justify-between">
                <strong className="text-lg">{product.name}</strong>
                <span className="text-gray-600">${product.price.toFixed(2)}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;