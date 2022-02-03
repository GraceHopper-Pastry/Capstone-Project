import React, { Fragment} from "react";
import { connect } from "react-redux";
import Footer from "../logged_out/components/footer/Footer"

  function Home() {
    const { email } = props;


    return (
      <div>
         <Fragment>
           <h3>Welcome, {email}</h3>
          <Footer />
        </Fragment>
      </div>
    );
  }

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.auth.email,
  };
};

export default connect(mapState)(Home);
