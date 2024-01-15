import Form from '@components/Form/Form';
import Input from '@components/Input/Input';
import { login } from '@config/api/backendAPI';
import { useAuth } from '@hooks/useAuth';
import { FormContent, FormSubmitButton, SignUp } from '@pages/Auth/Login/Login.styles';
import { registerPath } from '@routing/Paths';
import AuthTemplate from '@templates/AuthTemplate/AuthTemplate';
import { useMutation } from 'react-query';
import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string(),
  password: yup.string(),
});

const initialValues = {
  username: '',
  password: '',
};

const Login = () => {
  const { setToken } = useAuth();
  const { mutate } = useMutation((data) => login(data), {
    onError: (error) => {
      console.console.error();
      'Error:', error;
    },
    onSuccess: async (data) => {
      const user = data.data;
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
    <AuthTemplate header={'Login'}>
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
          <Input
            label="Password"
            placeholder={'Enter your password'}
            type="password"
            name={'password'}
          />
          <FormSubmitButton type="submit">Submit</FormSubmitButton>
          <SignUp to={registerPath}>or create your account</SignUp>
        </FormContent>
      </Form>
    </AuthTemplate>
  );
};

export default Login;
