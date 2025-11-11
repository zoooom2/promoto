import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	cacheComponents: true,
	/* config options here */
};

export default withBundleAnalyzer(nextConfig);
