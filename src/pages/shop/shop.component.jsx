import React from 'react';
import { Route,Switch } from 'react-router-dom';
import Product from '../../components/product/product.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import SomeThing from '../../components/nothing/nothing.component';

class ShopPage extends React.Component{
  render(){
    const {match} = this.props;
    return(
      <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    <Route path={`${match.path}/:collectionId/:anyId`} component={Product} />
  </div>
    )
  }
}

export default ShopPage;
