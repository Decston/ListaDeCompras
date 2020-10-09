import React from 'react';

const ListFooter = (props) => (
    <div className="list-footer">
        <p>06/10/2020</p>
        <p>R$ {props.total}</p>
    </div>
);

export default ListFooter;