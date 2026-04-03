import "../styles/home.css";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import { useState } from "react";

function Home(){
    const [cart,setCart]=useState([]);

const momos=[{id:1,name: " Veg Momos",price:80},
    {id:2,name: " Chicken Momos",price:100},
    {id:3,name: " Paneer Momos",price:90}
];
}
const addToCart = (item) => {
  setCart([...cart, item]);
};

const total = cart.reduce((sum, item) => sum + item.price, 0);
 return (
        <div>
            <Hero/>
            <Menu items={momos} onAdd={addToCart}/>
            <h2>Your Order</h2>
            <ul>
            {cart.map((item, index) => (
                <li key={index}>{item.name} - ${item.price}</li>

            ))}    
            </ul>
            <h3>Total: ${total}</h3>
        </div>
    );

export default Home;