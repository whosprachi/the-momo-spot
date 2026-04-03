function Momocard({name,price}){
    return(
        <div>
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <button>Add to Order</button>

        </div>
    );
}

export default Momocard;