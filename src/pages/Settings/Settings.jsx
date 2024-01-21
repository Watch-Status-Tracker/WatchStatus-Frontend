import Form from '@components/Form/Form';
import Input from '@components/Input/Input';
import {
  changeAdditionalData,
  changePasswordData,
  changePersonalData,
} from '@config/api/backendAPI';
import {
  additionalInitialValues,
  additionalValidationSchema,
  passwordInitialValues,
  passwordValidationSchema,
  personalInitialValues,
  personalValidationSchema,
} from '@pages/Settings/Settings.schema';
import { Header, HeadingWrapper, Wrapper } from '@pages/Settings/Settings.styles';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import styled from 'styled-components';

const Settings = () => {
  const { mutate: personalDataMutate } = useMutation((data) => changePersonalData(data), {
    onSuccess: () => {
      toast.success('Personal data updated successfully');
    },
    onError: (error) => {
      toast.error('Something went wrong', error);
    },
    refetchOnWindowFocus: false,
  });

  const { mutate: additionalMutate } = useMutation((data) => changeAdditionalData(data), {
    onSuccess: () => {
      toast.success('Additional data updated successfully');
    },
    onError: (error) => {
      toast.error('Something went wrong', error);
    },
    refetchOnWindowFocus: false,
  });

  const { mutate: passwordMutate } = useMutation((data) => changePasswordData(data), {
    onSuccess: () => {
      toast.success('Password updated successfully');
    },
    onError: (error) => {
      toast.error('Something went wrong', error);
    },
    refetchOnWindowFocus: false,
  });

  const personalDataHandleSubmit = (values) => {
    personalDataMutate(values);
  };

  const additionalDataHandleSubmit = (values) => {
    additionalMutate(values);
  };

  const passwordDataHandleSubmit = (values) => {
    const password = { newPassword: values.newPassword };

    passwordMutate(password);
  };

  return (
    <Wrapper>
      <HeadingWrapper>
        <Header>User settings</Header>
      </HeadingWrapper>
      <SettingsContainer>
        <Section>
          <Form
            initialValues={personalInitialValues}
            validationSchema={personalValidationSchema}
            onFormSubmit={personalDataHandleSubmit}
          >
            <SectionHeader>Personal data</SectionHeader>
            <Input
              test={'settings_username_input'}
              name={'username'}
              label="Username"
              placeholder="Enter new username"
            />
            <Input
              test={'settings_email_input'}
              name={'email'}
              label="Email"
              placeholder="Enter new email"
            />
            <SumbitButton data-test={'settings_personal_data_submit'} type="submit">
              Update personal data
            </SumbitButton>
          </Form>
        </Section>
        <Section>
          <Form
            initialValues={additionalInitialValues}
            validationSchema={additionalValidationSchema}
            onFormSubmit={additionalDataHandleSubmit}
          >
            <SectionHeader>Additional data</SectionHeader>
            <Input
              test={'settings_title_input'}
              name={'title'}
              label="Title"
              type={'text'}
              placeholder="Enter your title"
            />
            <Input
              test={'settings_favourite_genre_input'}
              name={'favouriteGenre'}
              label="Favourite genre"
              type={'text'}
              placeholder="Enter your favourite genre"
            />
            <SumbitButton data-test={'settings_additional_data_submit'} type="submit">
              Update additional data
            </SumbitButton>
          </Form>
        </Section>
        <Section>
          <Form
            initialValues={passwordInitialValues}
            validationSchema={passwordValidationSchema}
            onFormSubmit={passwordDataHandleSubmit}
          >
            <SectionHeader>Password</SectionHeader>
            <Input
              test={'settings_new_password_input'}
              name={'newPassword'}
              label="New password"
              type={'password'}
              placeholder="Enter new password"
            />
            <Input
              test={'settings_confirm_new_password_input'}
              name={'confirmNewPassword'}
              label="Confirm password"
              type={'password'}
              placeholder="Confirm new password"
            />
            <SumbitButton data-test={'settings_password_submit'} type="submit">
              Update password
            </SumbitButton>
          </Form>
        </Section>
      </SettingsContainer>
    </Wrapper>
  );
};

export default Settings;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing[10]};
`;

export const Section = styled.div`
  & form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing[4]};
  }
`;

export const SectionHeader = styled.h2`
  font-size: ${({ theme }) => theme.typography.size.heading[5]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  color: ${({ theme }) => theme.color.primary[900]};
`;

export const SumbitButton = styled.button`
  background: ${({ theme }) => theme.color.primary[500]};
  color: ${({ theme }) => theme.color.base.white};
  font-size: ${({ theme }) => theme.typography.size.small[2]};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  padding: ${({ theme }) => `${theme.spacing[3]} 0`};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 200px;
  align-self: flex-end;

  &:hover {
    background: ${({ theme }) => theme.color.primary[700]};
  }
`;
