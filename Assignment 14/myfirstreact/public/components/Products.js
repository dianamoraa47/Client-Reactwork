import React from 'react';
class Products extends React.Component{
    constructor (props){
        super(props)
        this.state = {
            products : []
        }
    }
    componentDidMount (){
       fetch("http://localhost:5000/products")
       .then(response =>response.json())
       .then(response => {
           this.setState({products:response})
       })
    }
    render (){
        return (
           this.state.products.map(products =>{
               return <li>{products.name}</li>
           } )
        )
    }
   }
export default Products;

