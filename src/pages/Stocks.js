import stocks from "../data"
import { Link } from "react-router-dom"

export default function Stocks(){




    return(
        <>
            <ul>
                {stocks.map(stock => <li><Link to={`./${stock.symbol}`}>{stock.name}</Link></li>)}
            </ul>
        </>
    )
}