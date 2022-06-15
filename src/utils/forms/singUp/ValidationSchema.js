import * as yup from 'yup';
import ValidationMessages from '../../enums/validation-enums/validationMessage';

export const SignUpValidationScheme = yup.object().shape({
    email: yup.string()
    .email(ValidationMessages.EMAIL)
    .required(ValidationMessages.REQUIRED),
   password: yup.string().required(ValidationMessages.REQUIRED),
});