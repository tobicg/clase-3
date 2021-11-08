import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Formulario.css'

export default function Formulario({title, children}) {
    return (
        <div className="formulario">
            <h2>{title}</h2>
            <ItemCount initial={0} stock= {5}/>
        </div>
    )
}
