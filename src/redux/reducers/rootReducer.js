import { combineReducers} from 'redux';
import ToDoListReducer from './ToDoListReducer';
import FacebookReducer from './FacebookReducer';
import {BurgerReducer} from './BurgerReducer';
import GameBauCuaReducer from './GameBauCuaReducer';
export const rootReducer = combineReducers  ({
    ToDoListReducer,
    FacebookReducer,
    BurgerReducer,
    GameBauCuaReducer
})