import PropTypes from "prop-types";

const InputField = ({ label, error, type = "text", placeholder }) => {
  return (
    <div className="w-full mb-6 md:mb-0">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-first-name"
      >
        {label}
      </label>
      <input
        className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
          error && "border-red-500"
        }`}
        id="grid-first-name"
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  error: PropTypes.any,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
