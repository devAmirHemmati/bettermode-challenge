import { ChangeEvent, FormEvent, useState } from 'react';

import { getValidationObj } from '@/utils';
import { initializeValidation } from '@/utils/validation';

interface IRegisterInput {
  type?: 'text' | 'number';
  label?: string;
  hint?: string;
  min?: number;
  minMessage?: string;
  max?: number;
  maxMessage?: string;
  validation?: {
    type: 'not-empty' | 'email' | 'password';
    errorMessage?: string;
  };
}

export interface IInput extends IRegisterInput {
  value: string;
  error: boolean;
  success: boolean;
}

interface IForm<T> {
  initialValues: T;
  onSubmit: (form: { [key in keyof T]: string | number }) => void;
  validationMode?: 'onSubmit' | 'onChange';
}

function useForm<T extends { [key: string]: IRegisterInput }>(data: IForm<T>) {
  const { initialValues, validationMode = 'onSubmit', onSubmit } = data;

  const mappedItems = Object.keys(initialValues).map((inputName) => {
    const input = initialValues[inputName];

    return [
      inputName,
      {
        ...input,
        name: inputName,
        type: input?.type || 'text',
        id: inputName,
        value: '',
        error: false,
        errorMessage: '',
        success: false,
        successMessage: '',
      },
    ];
  });

  const mappedObjItems = Object.fromEntries(mappedItems);
  const [form, setForm] = useState<{ [key in keyof T]: IInput }>(
    mappedObjItems as { [key in keyof T]: IInput },
  );

  const onChange = (
    inputName: keyof T,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const updatedForm = { ...form };

    updatedForm[inputName].value = event.currentTarget.value;
    updatedForm[inputName] = {
      ...updatedForm[inputName],
      ...initializeValidation,
    };

    if (validationMode === 'onChange') {
      updatedForm[inputName] = {
        ...updatedForm[inputName],
        ...getValidationObj(updatedForm[inputName]),
      };
    }

    setForm(updatedForm);
  };

  const register = (inputName: keyof T) => {
    const input = form[inputName];

    return {
      type: input.type,
      label: input.label,
      id: inputName,
      success: input.success,
      hint: input.hint,
      error: input.error,
      errorMessage: input.validation?.errorMessage,
      max: input.max,
      onChange: (event: any) => onChange(inputName, event),
    };
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (validationMode === 'onSubmit') {
      const updatedForm: any = { ...form };
      let isValid: boolean = true;

      Object.keys(form).forEach((inputName: any) => {
        const validationObj = getValidationObj(form[inputName]);

        if (validationObj.error) isValid = false;

        updatedForm[inputName] = {
          ...updatedForm[inputName],
          ...validationObj,
        };
      });

      setForm(updatedForm);

      if (!isValid) return;
    }

    const mappedForm: { [key in keyof T]: IInput } = {
      ...form,
    };

    //   Prepare it to send for backend :)
    for (const key in mappedForm) {
      mappedForm[key] = {
        ...mappedForm[key],
        value:
          mappedForm[key].type === 'text'
            ? mappedForm[key].value.trim()
            : parseInt(mappedForm[key].value.trim()),
      };
    }

    const getValues = Object.keys(mappedForm).map((key) => [
      key,
      mappedForm[key].value,
    ]);

    onSubmit(Object.fromEntries(getValues));
  };

  return {
    register,
    form,
    handleSubmit,
  };
}

export default useForm;
