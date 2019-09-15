import React from 'react';

class Vegetables extends React.Component{
    constructor(props){
        super(props)
        this.state={
            veggie:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:5000/products/vegetables")
    .then(response =>response.json())
    .then(response => {
        this.setState({veggie:response})
    })
    }
    render (){
        return (
           this.state.veggie.map(veggie =>{
               return <li>{veggie.name}</li>
           } )
        )
    }
}

export default Vegetables