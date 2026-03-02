import ProductsFeature from "../components/ProductsFeature";
import ProductTable from "../components/ProductTable";
import { useProduct } from "../hooks/useProduct";

export default function Home() {
  const { state, pushProduct } = useProduct();
  return (
    <>
      <div className="bg-white w-[95vw] h-screen mx-auto my-0 rounded-2xl p-5">
        <ProductsFeature pushProduct={pushProduct} />
        <ProductTable state={state} />
      </div>
    </>
  );
}
