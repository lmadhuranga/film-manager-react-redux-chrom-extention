import {combineReducers} from 'redux';
import films from './films';
import authors from './authors';

export default combineReducers({
    films,
    authors
});
