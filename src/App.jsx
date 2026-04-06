import React from 'react';
import Home from './pages/Home/Home';
import MenuPage from './pages/Menu/MenuPage';
import About from './pages/About/About';
const App =() =>{
    return(
        <div className='app' > 
           <Home/>
            <MenuPage/>
            <About/>

        </div>
    )
}

export default App;