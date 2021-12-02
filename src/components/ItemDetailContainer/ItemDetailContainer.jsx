import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import getItem from './../utils/getItem';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {      
        getItem(id, setItem, setLoading)        
    }, [id])


    return (
        <div className="itemDetailContainer">

            {loading ? <h2>Cargando ...</h2> : <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer