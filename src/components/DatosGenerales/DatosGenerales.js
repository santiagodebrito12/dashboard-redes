import React from 'react'
import facebook from '../../assets/facebook.svg';
import twiter from '../../assets/twiter.svg';
import insta from '../../assets/insta.svg';
import youtube from '../../assets/youtube.svg';
import arrowUp from '../../assets/arrowUp.svg';
import arrowDown from '../../assets/arrowDown.svg';


import './DatosGenerales.css';

const generales = [
    {
        usuario:'@nathanf',
        redSocial:'facebook',
        icono:facebook,
        numeroUsuarios:1987,
        cambios:12,
        
    },
    {
        usuario:'@nathanf',
        redSocial:'twiter',
        icono:twiter,
        numeroUsuarios:1044,
        cambios:99,

    },
    {
        usuario:'@realnathanf',
        redSocial:'instagram',
        icono:insta,
        numeroUsuarios:11000,
        cambios:1099,
    },
    {
        usuario:'Nathan F.',
        redSocial:'youtube',
        icono:youtube,
        numeroUsuarios:8239,
        cambios:-144,
    },

]
const DatosGenerales = () => {
    return (
        <div className="contenedor-datos-generales">
            {generales.map(card=>{
                return(
                    <div className="card">
                        <div className="d-flex contenedor-logo">
                            <img src={card.icono} alt="icono"/>
                            <p>{card.usuario}</p>
                        </div>
                        <h1>{card.numeroUsuarios}</h1>
                        <p className="followers">FOLLOWERS</p>
                        <div className="contenedor-cambios">
                        <img src={(card.cambios>1) ? arrowUp : arrowDown} alt="arrow"/>
                        <p className={(card.cambios>1) ? "cambios positivos" : 'cambios negativos'}>{card.cambios} Today</p>
                        </div>
                       
                    </div>
                )
            })}
        </div>
    )
}

export default DatosGenerales;
