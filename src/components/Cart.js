import React from 'react';

class Cart extends React.Component{
    constructor(props){
        super(props);
        this.remove = this.remove.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    increment(e,index){
        this.props.changeQyantity(index,'inc');

    }
    decrement(e,index){
        this.props.changeQyantity(index,'dec');


    }
    remove(e,index){
        this.props.removeItem(index);
    }
    cartSummarry(cartArr){
        let total=0,totalPricedisplay=0,totalDiscount=0;
        cartArr.forEach(element => {
            total = total + element.price.actual;
            totalPricedisplay = totalPricedisplay + element.price.display;
        });
        totalDiscount = totalPricedisplay - total;
        return(
            <>
            Price : {totalPricedisplay} 
                        <br/><br/>
                        Discount: {totalDiscount}
                        <br/><br/>

                        <p> Total Payable: {total}</p>
            </>
        )
    }

    render(){
        const carts = this.props.carts;
        return(
            <section>
                <div className="body-container cart-page">
                    <div className="cart-section">
                        {carts.map((cartItem,index)=>{
                            return( 
                            <div className= "product" key={index}>
                                    <img src={cartItem.image}/>
                            
                                    <div className="desc-contaner">
                                        <span>{cartItem.name}</span>
                                        <div className="price-row">
                                                <span>₹{cartItem.price.actual}</span>
                                                <span>₹{cartItem.price.display}</span>
                                                <span> {cartItem.discount}% off</span>
                                        </div>
                                    </div>
                            
                                    <div className="quantity-container">
                                        <div>
                                            <span onClick={(e)=>{this.increment(e,index)}} >
                                            <i className="fa fa-plus" aria-hidden="true"></i></span>
                                            <input value={cartItem.quantity} readOnly={true} />
                                            <span onClick={(e)=>{this.decrement(e,index)}}><i className="fa fa-minus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                    <div className="remove-container">
                                        <div>
                                            <button type='button' onClick={(e)=>{this.remove(e,index)}}> Remove </button>
                                        </div>
                                
                                    </div>
                                </div>
                            )
                        })}
                        
                    </div>
                    <div className="summary-section">
                        <h4>Price Details</h4>
                        {this.cartSummarry(carts)}
                        
                       

                    </div>
                </div>
            </section>
        )
    }
}

export default Cart;