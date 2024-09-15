import { useRouter } from 'next/navigation';

import { Button, Input } from '@/components';
import { apolloOnError } from '@/configs/apolloProvider';
import NAVIGATION from '@/data/routes';
import { useAuthValidationEmailMutationMutation } from '@/gql/generated';
import { useForm } from '@/hooks';

import { E_ACTIVE_SECTION, ILoginSectionProps } from '.';

function LoginEmailSection({ setActiveSection }: ILoginSectionProps) {
  const [mutateValidateEmail, emailValidationData] =
    useAuthValidationEmailMutationMutation();
  const router = useRouter();
  const { handleSubmit, register } = useForm({
    initialValues: {
      email: {
        label: 'Email',
        hint: 'We’ll email you a magic code for a password-free sign in.',
        validation: {
          type: 'email',
          errorMessage: 'You should type a valid email',
        },
      },
    },
    onSubmit(values) {
      mutateValidateEmail({
        variables: {
          email: values.email.toString(),
        },
        onCompleted() {
          router.push(`${NAVIGATION.LOGIN}?email=${values.email}`);
          setActiveSection(E_ACTIVE_SECTION.SEND_VERIFICATION);
        },
        onError: apolloOnError,
      });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input {...register('email')} />

      <Button
        fullWidth
        className="mt-10"
        type="submit"
        loading={emailValidationData.loading}
      >
        Submit
      </Button>
    </form>
  );
}

export default LoginEmailSection;
