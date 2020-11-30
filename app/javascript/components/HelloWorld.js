import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <h1>React Component</h1>
        </div>
        Greeting: {this.props.greeting}
        <br/>
        Name: {this.props.name}
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string
};
export default HelloWorld
