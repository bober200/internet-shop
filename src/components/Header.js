import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';


const showOrders = (props) => {
    return (<div>
        {props.orders.map(el=>(
            <Order onDelete={props.onDelete} key={el.id} item={el}/>
        ))}
    </div>)
}
 const showNothing = () =>{
    return(
        <div className='empty'>
            <h2>Товаров нет</h2>
        </div>
    )
 }

export default function Header(props) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
          <span className='logo'>logo</span>
          <ul className='nav'>
              <li>
                  Про нас
              </li>
              <li> Каталог</li>
          </ul>
          <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop ${cartOpen ? 'active' : ''}`}/>
          {cartOpen && (
              <div className='shop-cart'>
                  {props.orders.length>0 ?
                  showOrders(props): showNothing()}
              </div>
          )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}
