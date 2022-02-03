import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
// import HeaderSection from './HeaderSection';
// import OfferSection from './OfferSection';
// import HowToSection from './HowToSection';

class Landing extends React.Component {

  render() {
    return (
      <Fragment>
      </Fragment>
    );

  }
}
/**
 * CONTAINER
 */

Home.PropTypes = {
  selectHome: PropTypes.func.isRequired
};


export default connect(mapState)(Landing);
