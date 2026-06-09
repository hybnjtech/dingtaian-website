import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const isProdExport = process.env.NEXT_OUTPUT_EXPORT === 'true';
const basePath = '/dingtaian-website';

const nextConfig: NextConfig = {
  output: isProdExport ? 'export' : undefined,
  basePath: isProdExport ? basePath : undefined,
  assetPrefix: isProdExport ? basePath : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);