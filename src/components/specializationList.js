import React from 'react';
import PropTypes from 'prop-types';

const SpecializationList = (props) => {
  const { specializations } = props;
  // eslint-disable-next-line react/jsx-key,react/no-array-index-key
  const list = specializations.map((item, id) => <li key={`spec${id}`} className="px-2 py-1 m-1 rounded-full  bg-clrPrime text-white"><span>{item}</span></li>);
  return (
    <ul className="flex items-center justify-start flex-wrap">
      {list}
    </ul>
  );
};

SpecializationList.propTypes = {
  specializations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default SpecializationList;
