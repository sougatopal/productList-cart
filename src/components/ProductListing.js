import React from "react";
import List from "./List";
import Filter from "./Filter";
import DesktopSort from "./DesktopSort";
import Modal from "./Modal";
import Msort from "./MSort";
class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtershow: false,
      sortshow: false
    };
    this.closeSortModal = this.closeSortModal.bind(this);
    this.itemFilter = this.itemFilter.bind(this);
    this.itemSort = this.itemSort.bind(this);
    this.itemResetFilter = this.itemResetFilter.bind(this);
  }
  showModal(e, type) {
    if (type === "filter") this.setState({ filtershow: true });
    if (type === "sort") this.setState({ sortshow: true });
  }
  closeSortModal() {
    this.setState({ sortshow: false });
  }
  itemFilter(priceRange) {
    this.props.itemFilter(priceRange);
    if (this.state.filtershow) {
      this.setState({ filtershow: false });
    }
  }
  itemSort(sortTag) {
    this.props.itemSort(sortTag);
    if (this.state.sortshow) {
      this.closeSortModal();
    }
  }
  itemResetFilter() {
    this.props.itemResetFilter();
    if (this.state.filtershow) {
      this.setState({ filtershow: false });
    }
  }
  render() {
    return (
      <section>
        <div className="body-container">
          <div className="filter-container">
            <Filter
              itemFilter={this.props.itemFilter}
              itemResetFilter={this.props.itemResetFilter}
            />
          </div>
          <div className="list-container">
            <div className="m-filter-sort">
              <div
                className="mSort alc"
                onClick={e => {
                  this.showModal(e, "sort");
                }}
              >
                <i className="fa fa-sort" />
                <p>Sort</p>
              </div>
              <div
                className="mFilter alc"
                onClick={e => {
                  this.showModal(e, "filter");
                }}
              >
                <i className="fa fa-filter" />
                <p>Filter</p>
              </div>
            </div>
            <Modal show={this.state.filtershow}>
              <Filter
                itemFilter={this.itemFilter}
                itemResetFilter={this.itemResetFilter}
              />
            </Modal>
            <Modal show={this.state.sortshow}>
              <Msort
                itemSort={this.itemSort}
                closeSortModal={this.closeSortModal}
              />
            </Modal>
            <DesktopSort itemSort={this.props.itemSort} />
            <List items={this.props.items} addToCart={this.props.addToCart} />
          </div>
        </div>
      </section>
    );
  }
}
export default ProductListing;
