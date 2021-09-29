import React, { useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeState = (props) => {
    const [darkMode, setdarkMode] = useState(true);

    const setTheme = () =>{
        if(darkMode){
            setdarkMode(false)
            document.body.classList.add('ligth-theme');
        }else{
            setdarkMode(true)
            document.body.classList.remove('ligth-theme');
        }
    }
   
   
    return (
        <ThemeContext.Provider value={{
            darkMode,
            setTheme,

        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeState
