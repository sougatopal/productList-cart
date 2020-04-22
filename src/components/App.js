import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import ProductListing from "./ProductListing";
import Cart from "./Cart";
import listJson from "./listJson";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], items: [] };
    this.addToCart = this.addToCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeQyantity = this.changeQyantity.bind(this);
    this.itemSort = this.itemSort.bind(this);
    this.itemFilter = this.itemFilter.bind(this);
    this.itemResetFilter = this.itemResetFilter.bind(this);
    this.searchItem = this.searchItem.bind(this);
    this.showCount = this.showCount.bind(this);
  }
  addToCart(items) {
    let itemtobeAdded = { ...items };
    let cartList = this.state.cart;
    let itemPresent = cartList.find(({ name }) => name === itemtobeAdded.name);
    if (itemPresent) {
      itemPresent.quantity = itemPresent.quantity + 1;
      this.setState({ cart: cartList });
    } else {
      itemtobeAdded.quantity = 1;
      this.setState({ cart: this.state.cart.concat(itemtobeAdded) });
    }
  }
  removeItem(index) {
    let cartArray = [...this.state.cart];
    cartArray.splice(index, 1);
    this.setState({ cart: cartArray });
  }
  changeQyantity(index, type) {
    let cartArray = [...this.state.cart];
    if (type === "inc") {
      cartArray[index].quantity = cartArray[index].quantity + 1;
    }
    if (type === "dec" && cartArray[index].quantity !== 1) {
      cartArray[index].quantity = cartArray[index].quantity - 1;
    }
    this.setState({ cart: cartArray });
  }
  componentDidMount() {
    this.setState({ items: listJson.items });
  }
  itemSort(sortTag) {
    let items = this.state.items;
    items.sort((a, b) => {
      if (sortTag === "dI") return a.discount - b.discount;
      if (sortTag === "pL") return a.price.actual - b.price.actual;
      if (sortTag === "pH") return b.price.actual - a.price.actual;
    });
    this.setState({ items: items });
  }
  itemFilter(priceRange) {
    let originalItems = this.state.items;
    let filteredItems = originalItems.filter((item, index) => {
      return item.price.actual < priceRange;
    });
    originalItems = null;
    this.setState({ items: filteredItems });
  }
  itemResetFilter() {
    this.setState({ items: listJson.items });
  }
  searchItem(event) {
    let keyword = event.target.value.toLowerCase();
    let originalItems = listJson.items;
    let filteredItems = originalItems.filter((item, index) => {
      return item.name.toLowerCase().includes(keyword);
    });
    originalItems = null;
    this.setState({ items: filteredItems });
  }
  showCount() {
    let count = 0;
    let originalItems = this.state.cart;
    originalItems.forEach(elem => {
      count = count + elem.quantity;
    });
    return count;
  }
  render() {
    return (
      <>
        <Header showCount={this.showCount} searchItem={this.searchItem} />
        <Switch>
          <Route
            path="/"
            render={props => (
              <ProductListing
                {...props}
                addToCart={this.addToCart}
                cart={this.state.cart}
                items={this.state.items}
                itemSort={this.itemSort}
                itemFilter={this.itemFilter}
                itemResetFilter={this.itemResetFilter}
              />
            )}
            exact
          />
          <Route
            path="/cart"
            render={props => (
              <Cart
                {...props}
                carts={this.state.cart}
                removeItem={this.removeItem}
                changeQyantity={this.changeQyantity}
              />
            )}
          />
        </Switch>
      </>
    );
  }
}
export default App;
