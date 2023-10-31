import * as Yup from 'yup';

const professoresValidator = Yup.object().shape({
  nome: Yup.string()
    .min(2, 'valor muito curto')
    .max(50, 'valor muito grande')
    .required('campo obrigatorio'),
  cpf: Yup.string()
    .matches(/^\d{3}.\d{3}.\d{3}-\d{2}$/, 'formato inválido')
    .required('campo obrigatorio'),
  matricula: Yup.string()
    .length(6, 'deve ter 6 dígitos')
    .required('campo obrigatorio'),
  salario: Yup.number()
    .min(0, 'deve ser positivo')
    .required('campo obrigatorio'),
  email: Yup.string()
    .email('formato inválido')
    .required('campo obrigatorio')

});

  export default professoresValidator