/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      { source: '/mfe-01', destination: 'http://localhost:3001/mfe-01' },
      {
        source: '/mfe-01/:path*',
        destination: 'http://localhost:3001/mfe-01/:path*',
      },
      {
        source: '/mfe-01/_next/:path*',
        destination: 'http://localhost:3001/mfe-01/_next/:path*',
      },
      {
        source: '/mfe-01-static/:path*',
        destination: 'http://localhost:3001/mfe-01-static/:path*',
      },
      {
        source: '/mfe-01/api/:path*',
        destination: 'http://localhost:3001/mfe-01/api/:path*',
      },

      { source: '/mfe-02', destination: 'http://localhost:3002/mfe-02' },
      {
        source: '/mfe-02/:path*',
        destination: 'http://localhost:3002/mfe-02/:path*',
      },
      {
        source: '/mfe-02/_next/:path*',
        destination: 'http://localhost:3002/mfe-02/_next/:path*',
      },
      {
        source: '/mfe-02-static/:path*',
        destination: 'http://localhost:3002/mfe-02-static/:path*',
      },
      {
        source: '/mfe-02/api/:path*',
        destination: 'http://localhost:3002/mfe-02/api/:path*',
      },
    ];
  },
};
