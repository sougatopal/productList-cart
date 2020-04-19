import React from 'react';
import List from './List';
import listJson from './listJson';
import Filter from './Filter';
import DesktopSort from './DesktopSort';
import Modal from './Modal';
import Msort from './MSort';

class ProductListing extends React.Component{
    constructor(props){
        super(props);  
        this.state={
            items:[],
            filtershow: false,
            sortshow:false
        }
        this.itemSort =   this.itemSort.bind(this);
        this.itemFilter =   this.itemFilter.bind(this);
        this.itemResetFilter =   this.itemResetFilter.bind(this);
        this.closeSortModal = this.closeSortModal.bind(this);
        
        
    }
    componentDidMount(){
        this.setState({items:listJson.items});
    }
    itemSort(sortTag){
        let items= this.state.items;
        items.sort((a,b)=>{
            if(sortTag === 'dI')
            return a.discount - b.discount;
            if(sortTag === 'pL')
            return a.price.actual - b.price.actual;
            if(sortTag === 'pH')
            return b.price.actual - a.price.actual;
        });
        this.setState({items:items});
        if(this.state.sortshow){
            this.closeSortModal();

        }
    }
    itemFilter(priceRange){
        let originalItems= this.state.items;
        let filteredItems = originalItems.filter((item,index) =>{
            return item.price.actual < priceRange;
        });
        originalItems=null;
        this.setState({items:filteredItems});
        if(this.state.filtershow){
            this.setState({filtershow:false});
        }

    }
    itemResetFilter(){
        this.setState({items:listJson.items});
        if(this.state.filtershow){
            this.setState({filtershow:false});
        }
    }
    showModal(e,type){
        if(type === 'filter')
        this.setState({ filtershow: true });

        if(type === 'sort')
        this.setState({ sortshow: true });
      }
    closeSortModal(){
        this.setState({ sortshow: false });

    }

    render(){
        return (
        <section>
        <div className="body-container">
        <div className="filter-container">
        <Filter itemFilter={this.itemFilter} itemResetFilter={this.itemResetFilter}/>
        </div>
            
            <div className="list-container">
                <div className="m-filter-sort">
                    <div className="mSort alc" onClick={(e)=>{this.showModal(e ,'sort')}}>
                        <i className="fa fa-sort"></i>
                        <p>Sort</p>
                    </div>
                    <div className="mFilter alc" onClick={(e)=>{this.showModal(e,'filter')}}>
                        <i className="fa fa-filter"></i>
                        <p>Filter</p>
                    </div>
                </div>
                <Modal show={this.state.filtershow} >
                    <Filter itemFilter={this.itemFilter} itemResetFilter={this.itemResetFilter}/>
                </Modal>
                <Modal show={this.state.sortshow} >
                    <Msort itemSort = {this.itemSort} closeSortModal={this.closeSortModal} />
                </Modal>
                <DesktopSort itemSort = {this.itemSort}/>
                <List items={this.state.items} addToCart={this.props.addToCart}/>
            </div>
        </div>
    </section>
        );
    }

}

export default ProductListing;