import React from 'react';
import { Route } from 'react-router-dom';
const SomeThing = ({match}) => {
    console.log(match.params);
    return(
    <Route exact path={`${match.path}`}>
    <div>
        <h1>Hi</h1>
    </div>
    </Route>
)};

export default SomeThing;