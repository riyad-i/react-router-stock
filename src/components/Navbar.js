import { Link } from "react-router-dom"


export default function Navbar(){

    return(
        <>
            <ul className='Navbar'>

                <li><Link to={'/'}>iStocks</Link></li>
                <li><Link to={'/Stocks'}>Stocks</Link></li>
                <li><Link to={'/About'}>About</Link></li>

            </ul>               
        </>
    )
}