import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom';
import User  from '../src/user'
import CalculatorComponents from '../src/calculator'
import ImageUpload from '../src/ImageUpload'

export default () => {
    return(
        <Switch>
            <Route path='/user' exact component={User} />
            <Route path='/calculator' exact component={CalculatorComponents} />
            <Route path='/'  component={ImageUpload} />
            <Redirect from='/*' to='/pagenotfound' />
        </Switch>
    )
}
