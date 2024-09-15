import { NextRequest, NextResponse } from 'next/server';

import APP_DATA from '@/data/app';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const email = url.searchParams.get('email');
  const verificationCode = url.searchParams.get('verificationCode');

  if (!email || !verificationCode) {
    return NextResponse.json(
      { message: 'Missing email or verification code' },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(`${APP_DATA.API_URI}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        verificationCode,
      }),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const setCookieHeader = response.headers.get('set-cookie');

    return NextResponse.json({
      token: setCookieHeader,
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'An error occurred while processing your request.' },
      { status: 500 },
    );
  }
}
