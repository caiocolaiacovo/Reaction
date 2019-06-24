import React from 'react';
import PropTypes from 'prop-types';

export default function PageButton(props) {
  const {
 key, texto, onClick, style 
} = props;

  return (
    <button key={key} type="button" onClick={onClick} style={style}>
      {texto}
    </button>
  );
}

PageButton.propTypes = {
  key: PropTypes.number,
  texto: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.object),
};

PageButton.defaultProps = {
  key: null,
  style: {},
};
