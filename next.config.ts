import createMdx from '@next/mdx';
import bundleAnalyzer from '@next/bundle-analyzer';

const withMDX = createMdx({ extension: /\.(md|mdx)$/ });

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// cacheComponents: true,
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
	},
	/* config options here */
};

export default withBundleAnalyzer(withMDX(nextConfig));
