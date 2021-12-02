import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from "./../ItemList/ItemList"
import getItems from '../utils/getItems'
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [items, setItems] = useState([])    
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams();

    useEffect(() => {              
        getItems(categoryId, setItems, setLoading  )
    }, [categoryId])  

    return (
        <div className='itemListContainer'>
            {loading ? <h2>Cargando...</h2> : <ItemList items={items}/>}
        </div>
    )
    
}

export default ItemListContainer
