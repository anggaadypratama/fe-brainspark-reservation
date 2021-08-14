import React from 'react';
import { InputFormAdmin } from '@components';
import PropTypes from 'prop-types';
import SearchEmailStyle from './style';

const SearchEmail = ({
  result, handleChange, value, Title,
}) => {
  const classes = SearchEmailStyle();

  return (
    <div className={classes.root}>
      <InputFormAdmin
        error={result === undefined}
        fullWidth
        helperText={result === undefined && 'Email tidak ditemukan'}
        value={value}
        onChange={handleChange}
        title={Title}
      />
    </div>
  );
};

SearchEmail.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.object),
    PropTypes.number,
    PropTypes.string]),
  value: PropTypes.string,
  handleChange: PropTypes.func,
  Title: PropTypes.node,

};

SearchEmail.defaultProps = {
  result: undefined,
  value: '',
  handleChange: () => {},
  Title: '',
};

export default SearchEmail;
