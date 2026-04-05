import MomoCard from "./MomoCard";

function Menu({ items, onAdd,filter }) {
  return (
    <div>
      <h2>Our Menu</h2>
      {items.map((item) => (
        <MomoCard
          key={item.id}
          name={item.name}
          price={item.price}
          onAdd={() => onAdd(item)}
        />
      ))}
    </div>
  );
}

export default Menu;