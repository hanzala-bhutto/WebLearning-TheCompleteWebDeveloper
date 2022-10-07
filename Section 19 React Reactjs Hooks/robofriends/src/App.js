import {robots} from './robots';
import CardList from './CardList';

const App =  () => {
    return (
        <div>
            <h1>RoboFriends</h1>
            <CardList robots={robots}/>
        </div>
    )
}

export default App;