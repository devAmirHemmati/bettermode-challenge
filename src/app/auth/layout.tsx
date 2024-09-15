import { PropsWithChildren } from 'react';

import { Card, Typography } from '@/components';

function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-[500px]">
      <Typography component="h2" variant="titleLg" align="center">
        bettermode
      </Typography>
      <Typography align="center" className="text-gray-500 mb-5">
        Welcome Back!
      </Typography>

      <Card>{children}</Card>

      <Typography
        variant="xs"
        align="center"
        className="text-gray-500 mt-7 w-[70%] mx-auto"
      >
        Protected by Google’s reCAPTCHA. By signing in, you agree to
        Bettermode’s Terms & Privacy Policy
      </Typography>
    </div>
  );
}

export default AuthLayout;
