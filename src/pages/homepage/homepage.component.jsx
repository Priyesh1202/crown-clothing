import React from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = ({searchString}) => (
  <div className='homepage'>
    <Directory searchString={searchString}/>
  </div>
);

export default HomePage;
