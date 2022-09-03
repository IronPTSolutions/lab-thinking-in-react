import { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  const [search, setSearch] = useState('');
  const [filterInStock, setFilterInStock] = useState(false);

  return (
    <div>
      <h2>IronStore</h2>
      <SearchBar
        search={search}
        setSearch={setSearch}
        filterInStock={filterInStock}
        setFilterInStock={setFilterInStock}
      />
      <ProductTable search={search} filterInStock={filterInStock} />
    </div>
  );
}

export default ProductsPage;
