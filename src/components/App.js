import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
    constructor(){
        super();


        this.addFish = this.addFish.bind(this);

        this.state = {
            fishes: {},
            order: {}
        };
    }
    addFish(fish){
        const fishes = {...this.state.fishes};

        const timeStamp = Date.now();
        fishes[`fish-${timeStamp}`] = fish;
        this.setState({fishes})
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                </div>
                <Order />
                <Inventory />   
            </div>
        )
    }
}

export default App;