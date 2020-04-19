import React from 'react';
import {Route,Switch } from 'react-router-dom';
import Header from './Header';
import ProductListing from './ProductListing';
import Cart from './Cart';

 class App extends React.Component{
     constructor(props){
         super(props); 
         this.state={
             cart:[]
         }  
         this.addToCart =  this.addToCart.bind(this);
         this.removeItem =  this.removeItem.bind(this);
         this.changeQyantity =  this.changeQyantity.bind(this);
     }
     addToCart(items){
        let itemtobeAdded = {...items};
        itemtobeAdded.quantity = 1;
        this.setState({
            cart: this.state.cart.concat(itemtobeAdded)
        });
     }
     removeItem(index){
        let cartArray = [...this.state.cart];
        cartArray.splice(index,1);
        this.setState({
            cart: cartArray
        });

     }
     changeQyantity(index,type){
        let cartArray = [...this.state.cart];
        if(type == 'inc'){
            cartArray[index].quantity=cartArray[index].quantity + 1;
        }
        if(type == 'dec' && cartArray[index].quantity != 1){
            cartArray[index].quantity=cartArray[index].quantity - 1;
        }
        this.setState({
            cart: cartArray
        });
     }

     
    render(){
      
            return(
        
            <>
            <Header cart={this.state.cart}/>
            <Switch>
                <Route path='/' render={(props)=><ProductListing {...props} addToCart={this.addToCart} cart={this.state.cart}/>} exact />
                <Route path='/cart' render={(props)=><Cart {...props} carts={this.state.cart} removeItem={this.removeItem} changeQyantity={this.changeQyantity}/>} />
            </Switch>
            
            
            </>
            )
    }
}

export default App;
