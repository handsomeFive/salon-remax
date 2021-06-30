import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  navigateTo,
  makePhoneCall,
  hideLoading,
  showLoading,
  getStorageSync,
} from 'remax/wechat';
import { request } from '../../utils';
import styles from './index.css';
import useNavHeight from '../../hooks/useNavHeight';
import useDidMount from '../../hooks/useDidMount';
import bg from './images/bg.png';
import { usePageEvent } from 'remax/macro';

const menu = [
  { title: '充值', type: 1 },
  { title: '消费', type: 2 },
  { title: '产品', type: 3 },
  { title: '用户', type: 4 },
  { title: '流水', type: 5 },
  { title: '记录', type: 6 },
];

export default () => {
  const [statusBarHeight, navHeight] = useNavHeight();
  const [info, setInfo] = useState();
  const [appointment, setAppointment] = useState([]);
  const handleTap = useCallback(
    function (type) {
      if (!info) {
        handleLogin();
      } else {
        switch (type) {
          case 1:
            navigateTo({ url: '/pages-backstage/consume/index?type=1' });
            break;
          case 2:
            navigateTo({ url: '/pages-backstage/consume/index?type=2' });
            break;
          case 3:
            navigateTo({ url: '/pages-backstage/product/index' });
            break;
          case 4:
            navigateTo({ url: '/pages-backstage/user/index' });
            break;
          case 5:
            navigateTo({ url: '/pages-backstage/order/index' });
            break;
          case 6:
            navigateTo({ url: '/pages-backstage/order-consume/index' });
            break;
        }
      }
    },
    [info]
  );
  const handleLogin = useCallback(
    function () {
      if (!info) {
        navigateTo({ url: '/pages-backstage/authorized/index' });
      }
    },
    [info]
  );

  useDidMount(function () {
    // getStorageInfoSync().then(() => {});
    showLoading();
    const info = getStorageSync('user_info');
    if (info) {
      setInfo(JSON.parse(info));
      hideLoading();
      // todo 获取今日预约数据
    } else {
      hideLoading();
    }
  });

  usePageEvent('onShow', function () {
    // getStorageInfoSync().then(() => {});
    showLoading();
    const info = getStorageSync('user_info');
    if (info) {
      setInfo(JSON.parse(info));
      hideLoading();
      // todo 获取今日预约数据
    } else {
      hideLoading();
    }
  });
  return (
    <View className={styles.app}>
      <View
        className={styles.nav}
        style={{
          height: navHeight + statusBarHeight + 'px',
          paddingTop: statusBarHeight + 'px',
        }}
      ></View>
      <View
        className={styles.navTitle}
        style={{
          height: navHeight + 'px',
          top: statusBarHeight + 'px',
          lineHeight: navHeight + 'px',
        }}
      >
        <Text>Welcome to Salon</Text>
      </View>
      <View className={styles.info}>
        <Image src={bg}></Image>
        <View className={styles.contentWrapper}>
          <View className={styles.content}>
            <View className={styles.userInfo} onTap={handleLogin}>
              <Text>{info ? `欢迎您，${info.name}` : '请先登录'}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className={styles.function}>
        <View className={styles.functionTitle}>功能</View>
        <View className={styles.items}>
          {menu.map((item) => {
            const { title, type } = item;
            return (
              <View
                key={type}
                onTap={handleTap.bind(null, type)}
                className={styles.item}
              >
                <Text>{title}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};
