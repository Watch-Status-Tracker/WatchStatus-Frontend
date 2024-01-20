import Form from '@components/Form/Form';
import Input from '@components/Input/Input';
import { register } from '@config/api/backendAPI';
import { useAuth } from '@hooks/useAuth';
import { FormContent, FormSubmitButton, SignIn } from '@pages/Auth/Register/Register.styles';
import { authPath } from '@routing/Paths';
import AuthTemplate from '@templates/AuthTemplate/AuthTemplate';
import toast from 'react-hot-toast';
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
      toast.error(error.data.error);
    },
    onSuccess: async (data) => {
      const user = data.data;
      handleLoginSuccess();
      setToken(user);
    },
  });

  const handleSubmit = (values) => {
    mutate(values);
  };

  const handleLoginSuccess = () => {
    toast.success('Account created! Now you can log in!');
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
            test={'register_username_input'}
            label="Username"
            placeholder={'Enter your username'}
            type="text"
            name={'username'}
          />
          <Input
            test={'register_email'}
            label="Email"
            placeholder={'Enter your email'}
            type="email"
            name={'email'}
          />
          <Input
            test={'register_password'}
            label="Password"
            placeholder={'Enter your password'}
            type="password"
            name={'password'}
          />
          <FormSubmitButton data-test={'register_submit'} type="submit">
            Submit
          </FormSubmitButton>
          <SignIn data-test={'register_redirect_login'} to={authPath}>
            Already have an account? Log in!
          </SignIn>
        </FormContent>
      </Form>
    </AuthTemplate>
  );
};

export default Register;
