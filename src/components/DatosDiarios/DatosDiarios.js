import React from 'react'
import facebook from '../../assets/facebook.svg';
import twiter from '../../assets/twiter.svg';
import insta from '../../assets/insta.svg';
import youtube from '../../assets/youtube.svg';
import arrowUp from '../../assets/arrowUp.svg';
import arrowDown from '../../assets/arrowDown.svg';
import './DatosDiarios.css';

const datosDiarios = [
    {
        dato:'Page Views',
        icono:facebook,
        red:'facebook',
        pageViews:87,
        cambios:0.02,

    },
    {
        dato:'Likes',
        icono:facebook,
        red:'facebook',
        pageViews:52,
        cambios:0.02,
    },
    {
        dato:'Likes',
        icono:insta,
        red:'instagram',
        pageViews:5462,
        cambios:22.57,
    },
    {
        dato:'Profile Viwes',
        icono:insta,
        red:'instagram',
        pageViews:5462,
        cambios:13.75,
    },
    {
        dato:'Retweets',
        icono:twiter,
        red:'twiter',
        pageViews:117,
        cambios:3.03,
    },
    {
        dato:'Likes',
        icono:twiter,
        red:'twiter',
        pageViews:507,
        cambios:5.53,
    },
    {
        dato:'Likes',
        icono:youtube,
        red:'youtube',
        pageViews:107,
        cambios:-0.19,
    },
    {
        dato:'Likes',
        icono:twiter,
        red:'twiter',
        pageViews:507,
        cambios:-0.12,
    },
]
const DatosDiarios = () => {
    return (
        <div className="contenedor-diarios">
            <h1>Overview - Today</h1>
            <div className="contenedor-cards-diarios">
                {datosDiarios.map(card=>{
                    return(
                        <div className="card-diarios">
                            <div className="card-diarios-titulo">
                                <p>{card.dato}</p>
                                <img src={card.icono} alt="icono"/>
                            </div>
                            <div>
                                <h1>{card.pageViews}</h1>
                                <p className={(card.cambios>1) ? "cambios positivos" : 'cambios negativos'}>{card.cambios*100}%</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DatosDiarios;
