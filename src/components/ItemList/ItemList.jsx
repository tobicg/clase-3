import React from 'react'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'

const productos = [
    { id: 1 ,title: 'HAMBURGESA CHRISPY' ,description: 'Lorem impsum' ,img:'url'},
    { id: 2 ,title: 'QUESO EXTRA POWER' ,description: 'Lorem impsum' ,img:'url'},
    { id: 3 ,title: 'POLLO CHRISPY' ,description: 'Lorem impsum' ,img:'url'},
    { id: 4 ,title: 'CARNE ARGENTINA' ,description: 'Lorem impsum' ,img:'url'},
    { id: 5 ,title: 'CLÁSICA BACONATOR' ,description: 'Lorem impsum' ,img:'url'},
    { id: 6 ,title: 'VEGANASHE' ,description: 'Lorem impsum' ,img:'url'},
];

const callProducts = new Promise ((resolve, reject)=>{
    const condition = true
    if (condition) {
        setTimeout(()=>{
            resolve(productos)
        },3000)
    } else {
        setTimeout(()=>{
            reject('Error 404')
        },3000)
    }
    }
)

export default function ItemList() {
    const [carta, setCarta] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        callProducts.then(res => {
            setCarta(res)
        })
        .finally(()=> setLoading(false))
    },[])

    return (
        <>
        { loading ? <h2> Cargando ...</h2> : 
            carta.map (prod => <Item key={prod.id}/>)}
        </>
    )
}