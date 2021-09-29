import React,{useContext} from 'react'
import ThemeContext from '../../ThemeContext/ThemeContext';
import './Header.css';

const Header = () => {
    
    const{darkMode,setTheme}=useContext(ThemeContext)

    
    return (
        <header className="contenedor-header">
            <div className="contenedor-titulo">
                <h1>Social Media DashBoard</h1>
                <p >Total Followers 23,004</p>
            </div>

            <div className="contenedor-dark">
                <p>Dark Mode</p>
                <div className="contenedor-icono-dark" onClick={()=>{
                    setTheme();
                }}>
                    <div className={darkMode ? "icono-dark" : 'icono-dark ligth'}></div>
                   
                </div>
            </div>
        </header>
    )
}

export default Header;
