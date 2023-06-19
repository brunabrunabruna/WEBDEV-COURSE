import NewShoppingListItem from "./NewShoppingListItem";

const NewShoppingList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <NewShoppingListItem
            key={item.key}
            product={item.product}
            quantity={item.quantity}
            purchased={item.purchased}
          />
        ))}
      </ul>
    </div>
  );
};

export default NewShoppingList;
