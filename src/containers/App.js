import React, {Component} from 'react';
import CardList from '../components/CardList';
import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';

class App extends Component{

    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onsearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const { robots, searchfield} = this.state;

        const filteredAvengers = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        
        return(
        <div className='tc'>
            <h1>Avengers Inc.</h1>
            <SearchBox searchChange={this.onsearchChange}/>
            <Scroll>
                <CardList robots = {filteredAvengers}></CardList>
            </Scroll>
        </div>
        )
    }
}


export default App;