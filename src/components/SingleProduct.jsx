const SingleProduct = ({productName, brand, quantity, price}) => {
  return (
    <>
      <>
        <tr className="flex justify-self-start gap-10 text-left">
          <td className="w-80">{productName}</td>
          <td className="w-20">{brand}</td>
          <td className="w-20">{quantity}</td>
          <td className="w-20">{price}</td>
        </tr>
      </>
    </>
  );
};

export default SingleProduct;
