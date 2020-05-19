import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';

const AnyThing = ({match,collection}) => {
    const newcollection = collection.items;
    const filteredCollection = newcollection.filter(item=>
         item.id==match.params.anyId)
    return(
    <div>
        <img src={filteredCollection[0].imageUrl} />
        <h1>{filteredCollection[0].name}</h1>
        <h3>Price : {filteredCollection[0].price}</h3>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });
  
  export default connect(mapStateToProps)(AnyThing);