import React from 'react';
import { Route } from 'react-router-dom';
import AnyThing from '../../components/anything/anything.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
  console.log(match)
  return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    <Route exact path={`${match.path}/:collectionId/:anyId`} component={AnyThing} />

  </div>
)};

export default ShopPage;
