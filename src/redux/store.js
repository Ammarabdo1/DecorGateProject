import {createStore} from 'redux'


import toggle_theme_reducer from './reducers/colorReducer'

const store = createStore(toggle_theme_reducer)

export default store;