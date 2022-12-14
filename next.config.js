const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
});

// /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   reactStrictMode: true,
// //   swcMinify: true,
// // }

// // module.exports = nextConfig

// const withPWA = require('next-pwa')

// module.exports = withPWA({
//   reactStrictMode: true,
//   pwa:{
//     dest:"public",
//     register:true,
//     skipWaiting:true,
//     disable:process.env.NODE_ENV === 'development'
//   }
// });