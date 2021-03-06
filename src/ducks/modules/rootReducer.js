import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import network from './network';
import page from './page';
import participant from './participant';
import protocol from './protocol';

export default combineReducers({
    form: formReducer,
    network,
    page,
    participant,
    protocol
})
