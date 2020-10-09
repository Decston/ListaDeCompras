import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import ListItemFooter from './ListItemFooter';
import CustomCard from '../../common/CustomCard';

const ListItem = (props) => (
    <CustomCard
        link="#"
        image="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG"
        containerClass="list-item"
        footer={<ListItemFooter total={props.item.total} />}
    >
        <div>
            <div className="list-item-header">
                <Typography variant="subtitle1" component="h2">{props.item.product}</Typography>
                <Checkbox />
            </div>
            <Typography component="p">{props.item.quantity} {props.item.unit}</Typography>
            <Typography component="p">R$ {props.item.price}</Typography>
        </div>
    </CustomCard>
);

export default ListItem;