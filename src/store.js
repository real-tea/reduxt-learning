import { createsStore } from 'redux';

import rootReducer from './reducers/index';

const store = createsStore(rootReducer);

export default store;