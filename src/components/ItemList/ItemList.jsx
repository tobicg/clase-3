import React from 'react'
import Item from '../Item/Item'
import { useState, useEffect } from 'react'
import ImgBurguers from '../Imgs/ImgBurguers'

const productos = [
    { id: 1, title: 'HAMBURGESA CHRISPY', txt: 'Una excelente combinación de 240g de carne, cebolla chrispy para agregarle ese crocante que te encanta, una salsa secreta especial de la casa y el infaltable queso cheddar.', img: ImgBurguers[0] },
    { id: 2, title: 'QUESO EXTRA POWER', txt: 'Si sos fan del queso como nosotros, esta hamburguesa es para vos. Son 360g de carne con una abrumadora capa de queso dambo derretida que vas a tener que comerla con guantes.', img: ImgBurguers[1] },
    { id: 3, title: 'POLLO CHRISPY', txt: 'Para los amantes del pollo, con un corte de 150g rebosado con pan rallado de la casa, frito en el punto exacto y con la infaltable salsa especial, ideal para innovar un poco.', img: ImgBurguers[2] },
    { id: 4, title: 'CARNE ARGENTINA', txt: 'Acá te traemos un corte de carne argentino que te va a volver loco. Son 260g de bondiola desmenusada acompañada de un buen queso cheddar derretido, una experiencia inolvidable que vas a querer pedir siempre.', img: ImgBurguers[3] },
    { id: 5, title: 'CLÁSICA BACONATOR', txt: 'No puede faltar la clásica hamburguesa, son 260g de carne de primera, con cheddar y el mejor bacon que vas a probar en tu vida. Si te gusta lo clásico, esta burger es para vos.', img: ImgBurguers[4] },
    { id: 6, title: 'VEGANASHE', txt: 'Para vos en especial armamos esta burger vegana, con un medallón hecho de garbanzos naturales, un buen queso vegano, lechuga y palta para darle ese color verde y sabor espectacular.', img: ImgBurguers[5] },
];

const callProducts = new Promise((resolve, reject) => {
    const condition = true
    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    } else {
        setTimeout(() => {
            reject('Error 404')
        }, 3000)
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
            .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {loading ? <h2> Cargando ...</h2> :
                carta.map(prod => <Item key={prod.id} img={prod.img} title={prod.title} txt={prod.txt} />)}
        </>
    )
}