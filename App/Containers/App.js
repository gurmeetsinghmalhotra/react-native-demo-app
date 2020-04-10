import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import Reactotron from 'reactotron-react-native';

import RootContainer from './RootContainer';
import rootReducer from './../Redux/Reducers';
import rootSaga from './../Redux/Sagas';

// create our new saga monitor
const sagaMonitor = Reactotron.createSagaMonitor()

// create the saga middleware
const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

// mount it on the Store
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(rootSaga)

const App = () => {
    return (
        <Provider store={store}>
            <RootContainer />
        </Provider>
    )
}

export default App;