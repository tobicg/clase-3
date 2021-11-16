import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import productos from '../../db/items'

const getItems = new Promise((res, rej) => {

    const condition = true 
    if (condition) {
        setTimeout(() => {
            res(productos)
        }, 2000)
    } else {
        rej('404 Not found')
    }
})

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getItems
                .then(res => setItems(res.filter(prod=> prod.estado === id)))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getItems
                .then(res => setItems(res))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    },[id])

    return (
        <div className='itemListContainer'>
            {loading ? <h2>Cargando...</h2> : <ItemList items={items}/>}
        </div>
    )
}

export default ItemListContainer
