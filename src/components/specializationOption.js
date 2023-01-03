import PropTypes from 'prop-types';

const SpecializationOption = (props) => {
  const { specializations, updateSelected } = props;

  const handleOnChange = (e) => {
    updateSelected(e);
  };
  return (
    <ul className="grid lg:grid-cols-4 sm:grid-cols-2  gap-3">
      {specializations.map(({ name, id }) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={`specialization-${id}`}>
          <div>
            <input
              type="checkbox"
              id={`specialization-${id}`}
              name={name}
              value={id}
              onChange={(e) => handleOnChange(e)}
              className="w-4 h-4 text-green-600 bg-gray-100 rounded border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label htmlFor={`specialization-${id}`} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{name}</label>
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
