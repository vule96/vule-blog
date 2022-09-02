const path = require('path');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const config = require('./src/lib/config');

module.exports = (phase) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      BASE_URL:
        process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' &&
        process.env.NEXT_PUBLIC_VERCEL_URL !== undefined
          ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` // https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables
          : phase === PHASE_DEVELOPMENT_SERVER
          ? `http://localhost:${process.env.PORT || 3000}` // https://nextjs.org/docs/api-reference/cli#development
          : `https://${config.siteDomain}`, // fallback to production url
      // freeze build timestamp for when server-side pages need a "last updated" date:
      RELEASE_DATE: new Date().toISOString(),
      // check if we're running locally via `next dev`:
      IS_DEV_SERVER: phase === PHASE_DEVELOPMENT_SERVER ? 'true' : '',
    },
    sassOptions: {
      includePaths: [path.join(__dirname, 'src/styles')],
    },
    images: {
      deviceSizes: [640, 750, 828, 1080, 1200, 1920],
      formats: ['image/avif', 'image/webp'],
    },
    experimental: {
      legacyBrowsers: false,
      browsersListForSwc: true,
      // optimizeCss: true,
      images: {
        allowFutureImage: true, // https://github.com/vercel/next.js/pull/37927
      },
      newNextLinkBehavior: true, // https://github.com/vercel/next.js/pull/36436
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        issuer: { and: [/\.(js|ts)x?$/] },
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash:8][ext]',
        },
      });
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: { and: [/\.(js|ts)x?$/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
              typescript: true,
              svgProps: {
                'aria-hidden': true,
              },
            },
          },
        ],
        include: [
          // path.resolve(__dirname, 'node_modules/@primer/octicons/build/svg'),
          path.resolve(__dirname, 'node_modules/feather-icons/dist/icons'),
          // path.resolve(__dirname, 'node_modules/simple-icons/icons'),
        ],
      });

      return config;
    },
  };

  return nextConfig;
};
