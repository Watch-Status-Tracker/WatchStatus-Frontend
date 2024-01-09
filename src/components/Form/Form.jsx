import { useFormik } from 'formik';
import { PropTypes } from 'prop-types';
import { Children, cloneElement, memo } from 'react';

const Form = memo(({ children, initialValues, validationSchema, setErrors, onFormSubmit }) => {
  const { handleChange, values, handleSubmit, validateForm } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      onFormSubmit(values);
    },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = await validateForm(values);
    if (Object.keys(errors).length > 0) {
      setErrors && setErrors(Object.values(errors));
    } else {
      handleSubmit(e);
      setErrors && setErrors([]);
    }
  };

  // Function  for later that checks if children are of type certain component (Icon.Bookmark in this case)
  // const checkType = Children.map(children, (child) => (child.type === Icon.Bookmark ? 'yes' : 'no'))

  const mappedChildren = Children.map(children, (child) => {
    const { name } = child.props;
    return cloneElement(child, {
      onChange: handleChange,
      value: values[name],
    });
  });

  return <form onSubmit={handleFormSubmit}>{mappedChildren}</form>;
});

Form.propTypes = {
  children: PropTypes.node.isRequired,
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
