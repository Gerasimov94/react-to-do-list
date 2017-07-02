import React from 'react';
import PropTypes from 'prop-types';

export default class LinkComponent extends React.Component {

static propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired
};


onClickHandler = (e) => {
      e.preventDefault();
      this.props.setVisibilityFilter(this.props.filter)
    };

  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>;
    }

    return (
      <a
        href="#"
        onClick={this.onClickHandler}
      >
        {this.props.children}
      </a>
    );
  }

}
