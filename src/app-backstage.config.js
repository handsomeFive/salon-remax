module.exports = {
  pages: ['pages/backstage/index'],
  window: {
    navigationBarTitleText: 'backstage',
    navigationBarBackgroundColor: '#282c34',
  },
  subpackages: [
    {
      root: 'pages-backstage',
      pages: [
        'authorized/index',
        'consume/index',
        'product/index',
        'order/index',
      ],
    },
  ],
};
