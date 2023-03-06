/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      minify: true,
      topLevelImportPaths: ['styled-components'],
      meaninglessFileNames: ['index'],
      cssProp: true,
    }
  },
  reactStrictMode: true,
}

module.exports = nextConfig
