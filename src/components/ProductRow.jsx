function ProductRow({ name, inStock, price }) {
  return (
    <tr>
      <td style={{ color: inStock ? 'black' : 'red' }}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
