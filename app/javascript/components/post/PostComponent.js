import React from "react"
import PropTypes from "prop-types"
class PostComponent extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting From Sub directory's Component: {this.props.greeting}
      </React.Fragment>
    );
  }
}

PostComponent.propTypes = {
  greeting: PropTypes.string
};
export default PostComponent
