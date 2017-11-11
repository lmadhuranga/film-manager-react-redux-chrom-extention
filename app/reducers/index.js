import {combineReducers} from 'redux';
import films from './films';
import authors from './authors';
import users from './users';

export default combineReducers({
    films,
    authors,
    users
});
