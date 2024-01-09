import Form from '@components/Form/Form';
import { useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

const predefinedValues = ['John', 'Doe', 'Jane'];

const validationSchema = yup.object({
  name: yup.string().oneOf(predefinedValues, 'Invalid value').required('Name is required'),
  password: yup
    .string()
    .typeError('Password should be a string')
    .required('Password is required')
    .strict()
    .min(6, 'Password must be at least 6 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

const initialValues = {
  name: '',
  password: '',
  email: '',
};

const handleSubmit = (values) => {
  alert('It works! Look at console');
  console.log(values);
};

const Playground = () => {
  const [errorMessages, setErrorMessages] = useState([]);
  return (
    <Placeholder>
      <div>
        <h2>Fields requirements</h2>
        <p>Name: {predefinedValues.join(', ')}</p>
        <p>Password: min 6 characters</p>
        <p>Email: valid email | example: test@mail.pl </p>
      </div>

      <ul>
        <h2>Errors</h2>
        {errorMessages.map((error, index) => (
          <li key={error + index}>{error}</li>
        ))}
      </ul>

      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        setErrors={setErrorMessages}
        onFormSubmit={handleSubmit}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" name={'name'} />
          <input type="password" name={'password'} />
          <input type="text" name={'email'} />
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Placeholder>
  );
};

export default Playground;

const Placeholder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 24px;

  li {
    color: red;
  }
`;
