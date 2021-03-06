import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <Route {...rest}
            component={ (props) => (
                (isAuthenticated)
                ? <Redirect to="/app" />
                : (<Component {...props} />)
            )
            }
        />
    )
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}

export default PublicRoute

