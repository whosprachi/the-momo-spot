function Menu({ items, onAdd }){
    return(
        <div>
            <h2>Our Menu</h2>
            {items.map((item)=>(
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <button onClick={() => onAdd(item)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
}

export default Menu;