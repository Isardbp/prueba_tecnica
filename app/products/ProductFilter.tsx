import React, { useState } from 'react';

interface Props {
  onFilterChange: (filter: string) => void;
}

const ProductFilter: React.FC<Props> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    onFilterChange(event.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={filter}
        onChange={handleChange}
        className="block w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default ProductFilter;