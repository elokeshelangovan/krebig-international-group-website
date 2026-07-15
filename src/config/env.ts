const requiredPublicEnv = {
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.krebig.com",
} as const;

export const env = {
  ...requiredPublicEnv,
  NODE_ENV: process.env.NODE_ENV ?? "development",
} as const;
