import PropTypes from "prop-types";

const ReusableSelectForm = ({ formConfig, formData, handleInputChange, handleSubmit, title }) => {
  return (
    <div>
      <h2>{ title }</h2>
      <form onSubmit={ handleSubmit }>
        { formConfig.map(({ label, name, type, placeholder, options, required }) => (
          <div key={ name } className="input-group">
            <label htmlFor={ name }>{ label }</label>
            { type === "select" ? ( // Verifica se o tipo é "select"
              <select
                id={ name }
                name={ name }
                value={ formData[name] || "" }
                onChange={ handleInputChange }
                required={ required }
              >
                <option value="">{ placeholder }</option> {/* Placeholder como primeira opção */ }
                { options.map((option, index) => (
                  <option key={ index } value={ option }>
                    { option }
                  </option>
                )) }
              </select>
            ) : (
              <input
                  id={ name }
                  name={ name }
                  type={ type }
                  value={ formData[name] || "" }
                  onChange={ handleInputChange }
                  placeholder={ placeholder }
                  required={ required }
              />
            ) }
          </div>
        )) }
        <button type="submit"><img src="/public/images/favicon-white.png" alt="" /></button>
      </form>
    </div>
  );
};

ReusableSelectForm.propTypes = {
  formConfig: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
      options: PropTypes.arrayOf(PropTypes.string), // Adiciona suporte a opções para "select"
      required: PropTypes.bool,
    })
  ).isRequired,
  formData: PropTypes.object.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ReusableSelectForm;
