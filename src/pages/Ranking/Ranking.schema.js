import * as yup from 'yup';

export const rankingValidationSchema = yup.object({
  with_genres: yup.string().notRequired(),
  year: yup.number().notRequired(),
  language: yup.string().notRequired(),
  sort_by: yup.string().notRequired(),
  runtime: yup.number().notRequired(),
});
