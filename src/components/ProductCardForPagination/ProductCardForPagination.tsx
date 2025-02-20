import "./productcard.css";
interface Product {
  title: string;
  thumbnail: string;
  price: number;
}
const ProductCardForPagination = ({ title, thumbnail, price }: Product) => {
  return (
    <>
      <div className="product">
        <h1 className="product__title">{title}</h1>
        <div className="product__image-container">
          <img src={thumbnail} alt="" className="product__image" />
        </div>
        <p className="product__price">{price}</p>
      </div>
    </>
  );
};

export default ProductCardForPagination;
