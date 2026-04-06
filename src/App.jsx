import React from 'react';
import Home from './pages/Home/Home';
import MenuPage from './pages/Menu/MenuPage';
import About from './pages/About/About';
import Offers from './pages/Offers/Offers';
const App =() =>{
    return(
        <div className='app' > 
           <Home/>
            <MenuPage/>
            <About/>
            <Offers/>

        </div>
    )
}

export default App;