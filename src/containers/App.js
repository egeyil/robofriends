import react from "react";
import CardList  from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from "../components/Scroll.js"


class App extends react.Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: ''
                }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: users})
        });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }


    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        } )

        if (!robots.length) { //0 olacağı için false olacak ünlem işareti True'ya değiştiriyor
            return <h1>Loading</h1>
        } else {
            return (

                <div className="tc">
                  <h1 className="f1">RoboFriends</h1>
                  <SearchBox searchChange={this.onSearchChange}/>
                  <Scroll>
                    <CardList robots={filteredRobots}/>
                  </Scroll>
                </div>
        
            );
    
        }
    
    }
}

export default App;