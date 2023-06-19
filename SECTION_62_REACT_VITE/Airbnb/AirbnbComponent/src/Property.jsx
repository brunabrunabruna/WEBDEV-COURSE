const Property = ({ id, name, price, rating }) => {
  return (
    <>
      <div key={id}>
        <h2>{name}</h2>
        <h3>${price} per night</h3>
        <h4>{rating}⭐</h4>
      </div>
    </>
  );
};

export default Property;
