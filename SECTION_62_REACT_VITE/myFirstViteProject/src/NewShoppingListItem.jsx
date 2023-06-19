const NewShoppingListItem = ({ product, quantity, purchased }) => {
  const styles = {
    color: purchased ? "grey" : "blue",
    textDecoration: purchased ? "line-through" : "none",
  };

  return (
    <>
      <li style={styles}>
        {product} - {quantity}
      </li>
    </>
  );
};

export default NewShoppingListItem;

// <li
// key={item.key}
// style={{
//   color: item.purchased ? "grey" : "blue",
//   textDecoration: item.purchased ? "line-through" : "none",
// }}
// >
// {item.product} - {item.quantity}
// </li>
