import PropTypes from "prop-types";

const ReusableForm = ({formConfig,formData,handleInputChange,handleSubmit,title}) => {
  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        {formConfig.map(({label,name,type,placeholder,required}) => (
          <div key={name} className="input-group">
            <label htmlFor={name}>{label}</label>
            <input
              id={name}
              name={name}
              type={type}
              value={formData[name] || ""}
              onChange={handleInputChange}
              placeholder={placeholder}
              required={required}
            />
          </div>
        ))}
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

ReusableForm.propTypes = {
  formConfig: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      required: PropTypes.bool,
    })
  ).isRequired,
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ReusableForm;
