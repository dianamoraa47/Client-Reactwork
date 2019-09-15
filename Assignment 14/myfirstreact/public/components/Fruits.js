import React from 'react';
class FruitsList extends React.Component{
constructor(props){
    super(props);
    this.state = {
        fruits: ['grapes','kiwi','bananas','mangoes','straberry','peach']

    }
}

componentDidMount(){
    fetch("http://localhost:5000/products/fruits")
.then(response =>response.json())
.then(response => {
    this.setState({Frts:response})
})
}
    render(){
        const fruits  = this.state.fruits.map (fruits=>{
            return <li>{fruits}</li>
})
    return fruits

}

}

export default FruitsList

