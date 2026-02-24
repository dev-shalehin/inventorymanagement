import SingleProduct from "../components/SingleProduct";

const SeeAllProduct = ({ state }) => {
  return (
    <div>
      <h2>All Products</h2>
      <table>
        <thead>
          <tr className="flex justify-self-start gap-10 text-left">
            <th className="w-5">SN</th>
            <th className="w-80">Product Name</th>
            <th className="w-20">Brand</th>
            <th className="w-20">Quantity</th>
            <th className="w-20">Sell Price</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((product, index) => (
            <SingleProduct
              key={product.id}
              sn={index + 1}
              product
              {...product}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeeAllProduct;
