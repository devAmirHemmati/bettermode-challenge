import { IInput } from '@/hooks/useForm';

interface IValidation {
  errorMessage?: string;
  successMessage?: string;
  error?: boolean;
  success?: boolean;
}

export const initializeValidation: IValidation = {
  errorMessage: '',
  successMessage: '',
  error: false,
  success: false,
};

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getValidationObj(input: IInput): IValidation {
  if (input.min && input.value.length < input.min) {
    return {
      errorMessage: input.minMessage,
      error: true,
    };
  }

  if (input.max && input.value.length > input.max) {
    return {
      errorMessage: input.maxMessage,
      error: true,
    };
  }

  if (
    (input.validation?.type === 'not-empty' && input.value.trim() === '') ||
    (input.validation?.type === 'email' &&
      !emailRegex.test(input.value.trim())) ||
    (input.validation?.type === 'password' && input.value.trim().length >= 8)
  ) {
    return {
      errorMessage: input.validation.errorMessage,
      error: true,
    };
  }

  return {};
}

export default getValidationObj;
