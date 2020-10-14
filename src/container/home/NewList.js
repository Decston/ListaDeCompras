import React from 'react';
import CustomCard from '../../common/CustomCard';

const NewList = (props) => (
    <CustomCard action={props.newList} containerClass="new-list-container" link="/lista" >
        <div>
            <p className="title">Adicionar Novas Listas!</p>
        </div>
    </CustomCard>
);

export default NewList;