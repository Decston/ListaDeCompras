import React from 'react';

import NewList from './NewList';
import List from './List';
import './Home.css';

const Home = () => (
    <div className="home-container">
        <NewList />
        <List />
    </div>
)

export default Home;