import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export class Order extends Component {
    render(){
  return (
    <div className='item'>
         <img scr={"./img" + this.props.item.img}  alt=""/>
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}р.</b>
        <FaTrash className='delete' onClick={()=> this.props.onDelete(this.props.item.id)}/>
    </div>

  )
}
}
export default Order 