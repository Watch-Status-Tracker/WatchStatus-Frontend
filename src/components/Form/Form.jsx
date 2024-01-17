import { useFormik } from 'formik';
import { PropTypes } from 'prop-types';
import { Children, cloneElement, isValidElement, memo } from 'react';

export let submitFormm;

const Form = memo(({ children, initialValues, validationSchema, setErrors, onFormSubmit }) => {
  const { handleChange, values, handleSubmit, validateForm, submitForm } = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      onFormSubmit(values);
    },
  });

  submitFormm = submitForm;

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

  const mapChildrenWithProps = (children) => {
    return Children.map(children, (child) => {
      if (!isValidElement(child)) {
        return child;
      }

      let childProps = {};
      if (child.props.children) {
        childProps.children = mapChildrenWithProps(child.props.children);
      }

      childProps = {
        ...childProps,
        onChange: handleChange,
      };

      if (child.props.name) {
        childProps = {
          ...childProps,
          value: values[child.props.name],
        };
      }

      return cloneElement(child, childProps);
    });
  };

  const mappedChildren = mapChildrenWithProps(children);
  return <form onSubmit={handleFormSubmit}>{mappedChildren}</form>;
});

Form.propTypes = {
  children: PropTypes.node.isRequired,
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
