import * as yup from 'yup';

export const examResultValidationSchema = yup.object().shape({
  score: yup.number().integer().required(),
  user_id: yup.string().nullable(),
  exam_id: yup.string().nullable(),
});
