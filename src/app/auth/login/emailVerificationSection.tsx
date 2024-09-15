import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

import { Button, Input, Typography } from '@/components';
import { apolloOnError } from '@/configs/apolloProvider';
import request from '@/configs/axios';
import { useAuthValidationEmailMutationMutation } from '@/gql/generated';
import { useForm } from '@/hooks';

import { E_ACTIVE_SECTION, ILoginSectionProps } from '.';

function EmailVerificationSection({ setActiveSection }: ILoginSectionProps) {
  const { handleSubmit, register } = useForm({
    initialValues: {
      code: {
        type: 'number',
        min: 6,
        max: 6,
        minMessage: 'code is not valid!',
      },
    },
    async onSubmit(values) {
      const response = await request.get(
        `/login?email=${email}&verificationCode=${values.code}`,
      );

      console.log(response);
      if (response.data.message !== 'success') {
        toast(response.data.message, { type: 'error' });
        return;
      }
    },
  });
  const [mutateValidateEmail, emailValidationData] =
    useAuthValidationEmailMutationMutation();
  const params = useSearchParams();
  const email = params.get('email');

  const resendEmailVerificationCode = () => {
    if (emailValidationData.loading || !email) return;

    mutateValidateEmail({
      variables: {
        email,
      },
      onCompleted() {
        toast('New verification code has been sent', { type: 'success' });
      },
      onError: apolloOnError,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="sm" align="center">
        Enter the 6-digit verification code we have sent you at{' '}
        <Typography className="font-bold" component="span" variant="sm">
          {email}
        </Typography>{' '}
        <Typography
          component="span"
          variant="sm"
          className="text-gray-400 cursor-pointer hover:text-gray-500"
          onClick={() => {
            setActiveSection(E_ACTIVE_SECTION.EMAIL);
          }}
        >
          (change email)
        </Typography>
      </Typography>

      <Input
        {...register('code')}
        className="mt-5"
        inputClassName="input-hide-arrows text-center"
      />

      <Typography
        variant="sm"
        className="text-gray-500 inline-block hover:text-gray-700 cursor-pointer mt-2"
        onClick={resendEmailVerificationCode}
      >
        Resend code
      </Typography>

      <Button fullWidth className="mt-8" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default EmailVerificationSection;
