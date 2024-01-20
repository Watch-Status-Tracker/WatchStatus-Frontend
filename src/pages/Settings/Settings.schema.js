import * as yup from 'yup';

/* Personal data */
export const personalValidationSchema = yup.object({
  username: yup.string().notRequired(),
  email: yup.string().notRequired(),
});

export const personalInitialValues = {
  username: null,
  email: null,
};

/* Additional data */

export const additionalValidationSchema = yup.object({
  title: yup.string().notRequired(),
  favouriteGenre: yup.string().notRequired(),
});

export const additionalInitialValues = {
  title: null,
  favouriteGenre: null,
};

/* Password data */

export const passwordValidationSchema = yup.object({
  newPassword: yup.string().notRequired(),
  confirmNewPassword: yup.string().notRequired(),
});

export const passwordInitialValues = {
  newPassword: null,
  confirmNewPassword: null,
};
