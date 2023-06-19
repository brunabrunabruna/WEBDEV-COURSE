const ShoppingList = ({ items }) => {
  return (
    <div>
      <h1>shopping list</h1>

      {items.map((i) => (
        <li
          key={i.id}
          style={{
            color: i.purchased ? "grey" : "black",
            textDecoration: i.purchased ? "line-through" : "none",
          }}
        >
          {i.product} - {i.quantity}
        </li>
      ))}
    </div>
  );
};

export default ShoppingList;
