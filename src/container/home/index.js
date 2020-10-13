import React from 'react';
import { connect } from 'react-redux';

import { getCloseditems, getListTotal, getOpenedItems } from '../../store/reducers/list';
import NewList from './NewList';
import List from './List';
import './Home.css';

const Home = (props) => (
    <div className="home-container">
        <NewList />
        {props.list.items.length > 0 && 
        <List 
            list={props.list.list} 
            total={props.total}
            openedItems={props.openedItems}
            closedItems={props.closedItems}
        />}
    </div>
)

const mapStateToProps = state => ({
    list: state.list,
    total: getListTotal(state),
    openedItems: getOpenedItems(state),
    closedItems: getCloseditems(state)
});

export default connect(mapStateToProps, null)(Home);