module.exports = {
  pages: ['pages/backstage/index'],
  window: {
    navigationBarTitleText: 'backstage',
    navigationBarBackgroundColor: '#282c34',
  },
  subpackages: [
    {
      root: 'pages-client',
      pages: ['product/index'],
    },
  ],
};
