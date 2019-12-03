import React from 'react';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

const App = () =>{
    return(
        <div className="tc">
            <h1>Robotix</h1>
            <SearchBox />
            <CardList robots={ robots }/>
        </div>

    );

}

export default App;
