import React from 'react'
import { Provider } from 'react-redux'
import Routes  from '../routes/';

//Render Connected Canvas
export default class Root extends React.Component {
    render() {
        const { store } = this.props
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        )
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
}
