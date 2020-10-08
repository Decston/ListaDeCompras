import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

import './List.css'
import Form from './Form';
import CustomCard from '../../common/CustomCard';

const CreateList = () => (
    <div className="page-container">
        <Form />

        <div className="list-items-container">
            <CustomCard
                link="#"
                containerClass="list-item"
                footer={<ListItemFooter />}
            >
                <div>
                    <div className="list-item-header">
                        <Typography variant="subtitle1" component="h2">Café</Typography>
                        <Checkbox />
                    </div>
                    <Typography component="p">1 Unidade</Typography>
                    <Typography component="p">R$ 10,00</Typography>
                </div>
            </CustomCard>
        </div>

    </div>
);

const ListItemFooter = () => (
    <div className="list-card-footer">
        <div className="list-card-footer-actions">
            <FontAwesomeIcon
             icon={faPen}
             color="#00b0ff"
             size="sm"
            />
            <FontAwesomeIcon
             icon={faTrash}
             color="#e91e63"
             size="sm"
            />
        </div>
        <p>Total: R$ 50</p>
    </div>
)

export default CreateList;