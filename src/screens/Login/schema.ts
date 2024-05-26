import * as Yup from 'yup';

export const schema = Yup.object().shape({
  username: Yup.string().required('Username é obrigatório'),
});
