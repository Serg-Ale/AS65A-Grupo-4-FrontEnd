import PropTypes from "prop-types";

const ReusableForm = ({ title, formConfig, formData, handleInputChange, handleSubmit, className }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {formConfig.map(({ label, name, type, placeholder, required }) => (
        <div key={name}>
          <label htmlFor={name}>{label}</label>
          <input
            id={name}
            name={name}
            type={type}
            className={type !== "checkbox" ? className : ""}
            placeholder={type !== "checkbox" ? placeholder : undefined}
            value={type === "checkbox" ? undefined : formData[name] || ""}
            checked={type === "checkbox" ? formData[name] : undefined}
            onChange={(e) => {
              handleInputChange({
                target: {
                  name: e.target.name,
                  value: type === "checkbox" ? e.target.checked : e.target.value,
                },
              });
            }}
            required={required}
          />
        </div>
      ))}
      <button type="submit"><img src="/images/favicon-white.png" alt="" /></button>
    </form>
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
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ReusableForm;
