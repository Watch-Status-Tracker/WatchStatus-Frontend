import Form from '@components/Form/Form';
import Input from '@components/Input/Input';
import { register } from '@config/api/backendAPI';
import { useAuth } from '@hooks/useAuth';
import { FormContent, FormSubmitButton, SignIn } from '@pages/Auth/Register/Register.styles';
import { authPath } from '@routing/Paths';
import AuthTemplate from '@templates/AuthTemplate/AuthTemplate';
import { useMutation } from 'react-query';
import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string(),
  password: yup.string(),
  email: yup.string(),
});

const initialValues = {
  username: '',
  password: '',
  email: '',
};

const Register = () => {
  const { setToken } = useAuth();
  const { mutate } = useMutation((data) => register(data), {
    onError: (error) => {
      console.log('error', error);
    },
    onSuccess: async (data) => {
      const user = data.data;
      console.log(user);
      handleLoginSuccess(user);
      setToken(user);
    },
  });

  const handleSubmit = (values) => {
    console.log(values);
    mutate(values);
  };

  const handleLoginSuccess = (user) => {
    console.log(user);
  };

  return (
    <AuthTemplate header={'Register'}>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onFormSubmit={handleSubmit}
      >
        <FormContent>
          <Input
            label="Username"
            placeholder={'Enter your username'}
            type="text"
            name={'username'}
          />
          <Input label="Email" placeholder={'Enter your email'} type="password" name={'password'} />
          <Input
            label="Password"
            placeholder={'Enter your password'}
            type="password"
            name={'password'}
          />
          <FormSubmitButton type="submit">Submit</FormSubmitButton>
          <SignIn to={authPath}>Already have an account? Log in!</SignIn>
        </FormContent>
      </Form>
    </AuthTemplate>
  );
};

export default Register;
