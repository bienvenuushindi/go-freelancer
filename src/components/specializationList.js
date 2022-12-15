import React from 'react';
import PropTypes from 'prop-types';

const SpecializationList = (props) => {
  const { specializations } = props;
  // eslint-disable-next-line react/jsx-key,react/no-array-index-key
  const list = specializations.map((item, id) => <li key={`spec${id}`} className="px-4 py-1 mr-1 rounded-full bg-gray-100"><span>{item}</span></li>);
  return (
    <ul className="flex gap-1">
      {list}
    </ul>
  );
};

SpecializationList.propTypes = {
  specializations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default SpecializationList;
