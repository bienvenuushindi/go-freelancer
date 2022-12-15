import PropTypes from 'prop-types';

const SpecializationOption = (props) => {
  const { specializations, updateSelected } = props;

  const handleOnChange = (e) => {
    updateSelected(e);
  };
  return (
    <ul className="toppings-list">
      {specializations.map(({ name, id }) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`specialization-${id}`}>
          <div>
            <input
              type="checkbox"
              id={`specialization-${id}`}
              name={name}
              value={id}
              // checked={checkedState[index]}
              onChange={(e) => handleOnChange(e)}
            />
            <label htmlFor={`specialization-${id}`}>{name}</label>
          </div>
        </li>
      ))}
    </ul>
  );
};
SpecializationOption.propTypes = {
  specializations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  updateSelected: PropTypes.func.isRequired,
};

export default SpecializationOption;
