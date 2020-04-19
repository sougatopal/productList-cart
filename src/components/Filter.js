import React from 'react';


class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    rangeFilter(e){
        this.setState({value:e.target.value});
    }
    applySubmit(e){
        this.props.itemFilter(this.state.value);
    }
    applyReset(e){
        this.props.itemResetFilter(this.state.value);
    }

    render(){
        return(
            <div className="filter">
                <h4>Filter</h4>
                <label htmlFor="priceRange" className="pull-left">0</label>
                <label htmlFor="priceRange" className="pull-right">90000</label>
                <input type="range" name="priceRange" id="priceRange" min='0' max='90000' onChange={(e)=>{this.rangeFilter(e)}}/>
                <br />
                {this.state.value}
                <br/>
                <button type="button" onClick={(e)=>{this.applySubmit(e)}}>Apply</button>
                <button type="button" onClick={(e)=>{this.applyReset(e)}} className="reset">Remove</button>
            </div>
        )
    }
}

export default Filter;