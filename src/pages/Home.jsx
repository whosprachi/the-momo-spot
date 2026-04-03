import "../styles/home.css";
import Hero from "../components/Hero";
import Menu from "../components/Menu";

function Home(){
    return (
        <div>
            <Hero/>
            <Menu items={momos}/>
        </div>
    )

const momos=[{id:1,name: " Veg Momos",price:80},
{id:2,name: " Chicken Momos",price:100},
{id:3,name: " Paneer Momos",price:90}];
}

export default Home;