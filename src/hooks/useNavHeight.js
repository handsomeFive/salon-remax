import { useState } from 'react';
import {
  getSystemInfoSync,
  getMenuButtonBoundingClientRect,
} from 'remax/wechat';
import { useNativeEffect } from 'remax';

const useNavHeight = () => {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);

  //   获取状态栏跟导航栏的高度
  useNativeEffect(() => {
    const systemInfo = getSystemInfoSync();
    const menuButtonInfo = getMenuButtonBoundingClientRect();

    const navHeight =
      (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 +
      menuButtonInfo.height;

    const model = systemInfo.model;
    const rate = Math.ceil((750 / systemInfo.safeArea.width) * 100) / 100;
    switch (model) {
      case 'iPhone 5':
        const statusHeight =
          systemInfo.statusBarHeight -
          (menuButtonInfo.top - systemInfo.statusBarHeight);
        setStatusBarHeight(statusHeight * 3);
        setNavHeight(navHeight * 2.4);
        break;
      default:
        setStatusBarHeight(systemInfo.statusBarHeight * rate);
        setNavHeight(navHeight * rate);
        break;
    }
  }, []);

  return [statusBarHeight, navHeight];
};

export default useNavHeight;
