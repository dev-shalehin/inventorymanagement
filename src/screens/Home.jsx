import ProductsFeature from "../components/ProductsFeature";
import ProductTable from "../components/ProductTable";
import { useProduct } from "../hooks/useProduct";

export default function Home() {
  const { state, pushProduct } = useProduct();
  return (
    <>
      <ProductsFeature pushProduct={pushProduct} />
      <ProductTable state={state} />
    </>
  );
}
