import {combineReducers, createStore} from 'redux';
import userEventsReducer from './user-events';

const rootReducer = combineReducers({
    userEvents: userEventsReducer
});

export type RootState = ReturnType<typeof rootReducer>; //There are two ways to get type of rootState one is to create interface and export it and import every reducer and user there interfaces and there state type or do as i did. 

const store = createStore(rootReducer);

export default store;