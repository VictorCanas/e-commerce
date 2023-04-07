import Item from "./Item";


const ItemList = ({ product }) => {
  return (
    <>
      <div className="productCard">
        {product.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            img={product.img}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
