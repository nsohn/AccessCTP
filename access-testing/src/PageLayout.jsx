import React from 'react';
import PropTypes from 'prop-types';

import './PageLayout.css';

export default function PageLayout(props) {
  const { content } = props;
  return (
    <div className="form-layout">
      <div className="content">{content}</div>
    </div>
  );
}
PageLayout.propTypes = {
  middle    : PropTypes.node.isRequired,
  topMiddle : PropTypes.node
};
PageLayout.defaultProps = {
  topMiddle : null
};
