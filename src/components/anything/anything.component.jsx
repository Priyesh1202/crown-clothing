import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';

import { addItem } from '../../redux/cart/cart.actions';
import { selectCollection } from '../../redux/shop/shop.selectors';

const AnyThing = ({match,collection, addItem}) => {
    console.log(collection)
    const newcollection = collection.items;
    const filteredCollection = newcollection.filter(item=>
         item.id==match.params.anyId);
    console.log(filteredCollection);
    return(
    <div>
        <img src={filteredCollection[0].imageUrl} />
        <h1>{filteredCollection[0].name}</h1>
        <h3>Price : ${filteredCollection[0].price}</h3>
        <CustomButton onClick={() => addItem(filteredCollection[0])} inverted>
        Add to cart
      </CustomButton>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
  });

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
  });
  
  export default connect(mapStateToProps,mapDispatchToProps)(AnyThing);