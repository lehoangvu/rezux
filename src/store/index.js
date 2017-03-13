import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './..//reducers';
const promiseMiddleware = () => {
    return next => action => {
        const { promise, type, ...rest } = action;
        if (!promise) return next(action);

        const SUCCESS = type;
        const REQUEST = `${type}_REQUEST`;
        const FAILURE = `${type}_FAILURE`;
        next({ ...rest, type: REQUEST });

        return promise.then(res => {
            next({ ...rest, res, type: SUCCESS });
            return true;
        }).catch(error => {
            next({ ...rest, error, type: FAILURE });
            console.log(error);
            return false;
        });
    };
};

const middleWare = [thunk, promiseMiddleware];

const store = createStore(reducer, [], applyMiddleware(...middleWare));
export default store;
