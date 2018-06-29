/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';

import Login from '../Components/Login';

export default () => (
        <Switch>
            <Route exact path='/' component={Login} />
        </Switch>
);
