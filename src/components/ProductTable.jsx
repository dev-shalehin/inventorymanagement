import SingleProduct from "./SingleProduct";
import { useProduct } from "../hooks/useProduct";

export default function ProductTable({ state }) {
  return (
    <div>
      <table>
        <thead>
          <tr className="flex justify-self-start gap-10 text-left">
            <th className="w-80">Product Name</th>
            <th className="w-20">Brand</th>
            <th className="w-20">Quantity</th>
            <th className="w-20">Sell Price</th>
          </tr>
        </thead>
        <tbody>
          {state.products.map((product) => (
            <SingleProduct key={product.id} product {...product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
