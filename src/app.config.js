module.exports = {
  pages: ['pages/client/index', 'pages/backstage/index'],
  window: {
    navigationBarTitleText: '雨 Salon',
    navigationBarBackgroundColor: '#282c34',
  },
  subpackages: [
    {
      root: 'pages-client',
      pages: ['appointment/index', 'order/index'],
    },
    {
      root: 'pages-backstage',
      pages: [
        'authorized/index',
        'consume/index',
        'product/index',
        'order/index',
        'order-consume/index',
        'user/index',
        'user-order/index',
        'collect/index',
      ],
    },
  ],
};
