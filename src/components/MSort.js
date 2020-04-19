import React from 'react';

class MSort extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sortValue:''
        }
        this.onHandleChange = this.onHandleChange.bind(this);

    }
    sort(e,sortTag){
        this.props.itemSort(this.state.sortValue);

    }
    onHandleChange(e){
        console.log("asdsad",e.target.value)
        this.setState({
            sortValue:e.target.value
        })
    }
    cancel(){
        this.props.closeSortModal();
    }
    render(){
        return (
            <div className="m-sort-container">
                <h4>Sort Options</h4>
                <div>
                    <input type="radio" id="pH" name="mpricesort" value="pH" onChange={this.onHandleChange}/>
                    <label htmlFor="pH">Price high-to-low</label>
                </div>
                <div>
                    <input type="radio" id="pL" name="mpricesort" value="pL" onChange={this.onHandleChange}/>
                    <label htmlFor="pL">Price low-to-high</label>
                </div>
                <div>
                    <input type="radio" id="dI" name="mpricesort" value="dI" onChange={this.onHandleChange}/>
                    <label htmlFor="dI">Discount</label>
                </div>
                <button type="button" onClick={(e)=>{this.cancel(e)}}>Cancel</button> 
                <button type="button" onClick={(e)=>{this.sort(e)}}>Apply</button> 
            </div>
             
        )
    }

}

export default MSort;