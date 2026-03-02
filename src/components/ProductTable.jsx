import SingleProduct from "./SingleProduct";
import Buttons from "./commons/Buttons";
import { Link } from "react-router";

export default function ProductTable({ state }) {
  return (
    <div>
      <table>
        <thead>
          <tr className="flex justify-self-start gap-10 text-left">
            <th className="w-5">SN</th>
            <th className="w-80">Product Name</th>
            <th className="w-20">Brand</th>
            <th className="w-20">Stock</th>
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
      <Link to={"/AllProduct"}>
        <Buttons>View all</Buttons>
      </Link>
    </div>
  );
}
