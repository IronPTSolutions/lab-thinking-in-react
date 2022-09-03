import { useEffect, useState } from 'react';
import data from '../data.json';
import ProductRow from './ProductRow';

function ProductTable({ search, filterInStock }) {
  const [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProductsToShow(data);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (productsToShow.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productsToShow
            .filter((p) => p.name.includes(search))
            .filter((p) => (filterInStock ? p.inStock : true))
            .map((product) => (
              <ProductRow key={product.id} {...product} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
