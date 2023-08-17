import { useParams } from "react-router-dom"
import data from '../data'
import { useEffect, useState } from "react"


export default function Stock(){
    const param = useParams()
    const urlStock = param.item

    const [stock, setStock] = useState(0)

    // const getStock = () => {
        
    //     return item
    // }

    useEffect(() => {
        let item = data.filter(stock => stock = stock.symbol === urlStock)
        console.log(item);
        let stockObject = item[0]
        setStock(stockObject)
    },[])


    console.log(stock);

    return(
        <>

        {stock == 0 ? <h1>Loading Stock</h1>: <><h1>{stock.name}</h1> <h2>${stock.lastPrice}</h2> </>}
             
        </>
    )
}