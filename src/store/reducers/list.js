import { getDefaultNormalizer } from '@testing-library/react';
import { Types } from '../actions/list';

const INITIAL_STATE = {
    list: null,
    items: []
}

export default function list(state = INITIAL_STATE, action) {
    switch(action.type) {
        case Types.NEW_LIST:
            return {
                ...INITIAL_STATE, date: getDate()
            };
        case Types.ADD_PRODUCT:
            return { 
                ...state,
                list: action.list,
                items: [
                    ...state.items,
                    { ...action.product, total: getItemTotal(action.product), id: Math.random()*10, checked: false }
                ],
            };
        case Types.DELETE_PRODUCT:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.productId)
            };
        case Types.TOGGLE_PRODUCT:
            return {
                ...state,
                items: toggleItem(state.items, action.productId)
            };
        case Types.UPDATE_PRODUCT:
            return {
                ...state,
                list: action.list,
                items: updateProduct(state.items, action.product)
            }
        default:
            return state;
    }
}

function updateProduct(items, product) {
    const index = items.findIndex(item => item.id === product.id);
    return [
        ...items.slice(0, index),
        { ...product, total: getItemTotal(product) },
        ...items.slice(index + 1)
    ];
}

function toggleItem(items, productId) {
    const index = items.findIndex(item => item.id === productId);
    return [
        ...items.slice(0, index),
        { ...items[index], checked: !items[index].checked },
        ...items.slice(index + 1)
    ];
}

function getItemTotal(product) {
    return product.price * product.quantity
}

function getDate() {
    const date = new Date();
    const options = {year: 'numeric', month: '2-digit', day: '2-digit'};
    return date.toLocaleString('pt-BR', options);
}

export function getOpenedItems(state) {
    return state.list.items.filter(item => item.checked).length;
}

export function getCloseditems(state) {
    return state.list.items.filter(item => !item.checked).length;
}

export function getListTotal(state) {
    return state.list.items.reduce((total, item) => total + item.total, 0);
}