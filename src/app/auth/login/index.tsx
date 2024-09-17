'use client';

export enum E_ACTIVE_SECTION {
  EMAIL,
  SEND_VERIFICATION,
}

export interface ILoginSectionProps {
  setActiveSection: (newSection: E_ACTIVE_SECTION) => void;
}

function LoginPage() {
  // const params = useSearchParams();
  // const router = useRouter();
  // const email = params.get('email');
  // const [isSend, setIsSend] = useState<boolean>(false);
  // const [mutateValidateEmail] = useAuthValidationEmailMutationMutation();
  // const [activeSection, setActiveSection] = useState<E_ACTIVE_SECTION>(
  //   email && emailRegex.test(email)
  //     ? E_ACTIVE_SECTION.SEND_VERIFICATION
  //     : E_ACTIVE_SECTION.EMAIL,
  // );

  // useEffect(() => {
  //   if (isSend) return;

  //   setIsSend(true);

  //   if (!email || !emailRegex.test(email)) {
  //     router.push(NAVIGATION.LOGIN);
  //     return;
  //   }

  //   mutateValidateEmail({
  //     variables: {
  //       email,
  //     },
  //     onError(error) {
  //       apolloOnError(error);
  //       setActiveSection(E_ACTIVE_SECTION.EMAIL);
  //     },
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSend, email]);

  // switch (activeSection) {
  //   default:
  //   case E_ACTIVE_SECTION.EMAIL:
  //      return <LoginEmailSection setActiveSection={setActiveSection} />;
  //     return null;
  // }
  return null;
}

export default LoginPage;
