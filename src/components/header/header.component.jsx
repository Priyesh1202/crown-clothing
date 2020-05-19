import React from 'react';
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
// import { ReactComponent as Logo } from '../../assests/crown.svg';

import { ReactComponent as Logo } from './../../assets/crown.svg';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from './../../redux/cart/cart.selectors';
import { selectCurrentUser } from './../../redux/user/user.selectors';
import { toggleCartHidden } from './../../redux/cart/cart.actions';

import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils';
import SearchBox from "../search-box/search-box.component";
import CartIcon from '../cart-icon/cart-icon.component';  
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden, handleChange, dispatch }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <SearchBox placeholder='Search Products' handleChange={handleChange}/>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser?
            ( hidden ?
            <div className='option' onClick={() => {
                    auth.signOut();
                }}>SIGN OUT
            </div>
            :
            <div className='option' onClick={() => {
                auth.signOut();
                dispatch(toggleCartHidden())
            }}>SIGN OUT
            </div>
            )
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
