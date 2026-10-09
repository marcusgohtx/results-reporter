import nextVitals from 'eslint-config-next/core-web-vitals';
const config = [...nextVitals, { ignores: ['out/**', '.next/**', '.sites-checkout/**', '.sites-artifacts/**', 'next-env.d.ts'] }];
export default config;
