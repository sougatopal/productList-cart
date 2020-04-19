import React from 'react';

class DesktopSort extends React.Component{
    constructor(props){
        super(props);
        this.state={
            selected:''
        }
    }
    sort(e,sortTag){
        this.setState({selected:sortTag});
        this.props.itemSort(sortTag);

    }

    render(){
        return (
            <div className="sortBar">
                    <h4>Sort By</h4>
                    <span className={(this.state.selected==='pH') ? 'selected' : ''} onClick={(e)=>{this.sort(e,'pH')}} >Price -- High Low</span>
                    <span className={(this.state.selected==='pL') ? 'selected' : ''} onClick={(e)=>{this.sort(e,'pL')}} >Price -- Low High</span>
                    <span className={(this.state.selected==='dI') ? 'selected' : ''} onClick={(e)=>{this.sort(e,'dI')}} >Discount</span>
                </div>
        )
    }

}

export default DesktopSort