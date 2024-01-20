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
      toast.error('Invalid username or password!', error);
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
            label="Username"
            placeholder={'Enter your username'}
            type="text"
            name={'username'}
          />
          <Input label="Email" placeholder={'Enter your email'} type="email" name={'email'} />
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
