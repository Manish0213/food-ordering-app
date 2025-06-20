import React, {useEffect} from 'react';
import './ItemsByFinalOrderIdComponent.css';

const ItemsByFinalOrderIdComponent = (props) => {

    const orderItems = props.orderItemsList;

  return (
    <div className='container-modal-show-items'>     
        <div className='table-responsive-container'>
            <table id="table" className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Meal name</th>
                        <th>Meal type</th>
                        <th>Meal description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                
                <tbody>
                    {orderItems.map(
                        orderItem => <tr key={orderItem.mealId}>
                            <td className='td-content-img'>
                              <img className='mealPicModal' src={`${process.env.REACT_APP_API_BASE_URL}/${orderItem.mealImagePath}`} alt=''/> 
                            </td>
                            <td>{orderItem.mealName}</td>
                            <td>{orderItem.mealTypeName}</td>
                            <td>{orderItem.mealDescription}</td>
                            <td>{orderItem.mealPrice}.00 Rs</td>
                            <td>{orderItem.quantity}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            </div>
        </div>
  )
}

export default ItemsByFinalOrderIdComponent