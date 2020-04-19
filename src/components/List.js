import React from 'react';


class List extends React.Component{
    constructor(props){
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(e,item){
        this.props.addToCart(item);
    }
    render(){
        const {items} = this.props;

        return(
            <div className="list-box">
                        {items.map((item,index)=>{
                            return (<div className="productBox" key= {index}>
                                <img src={item.image} alt=""/>
                                <p>{item.name}</p>
                                <div className="price-row">
                                    <span>₹{item.price.actual}</span>
                                    <span>₹{item.price.display}</span>
                                    <span>{item.discount}% off</span>
                                </div>
                                <div className="button-row">
                                    <button type="button" onClick={(e)=>{this.addToCart(e,item)}}>Add to cart</button>
                                </div>
                            </div>)
                        })}
                    </div>
        );
    }
}

export default List;