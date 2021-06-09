import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  navigateTo,
  makePhoneCall,
  getStorage,
  hideLoading,
  showLoading,
} from 'remax/wechat';
import styles from './index.css';
import useNavHeight from '../../hooks/useNavHeight';
import useDidMount from '../../hooks/useDidMount';
import yuyue from './images/yuyue.png';
import order from './images/order.png';
import chat from './images/chat.png';
import bg from './images/bg.png';
import DefaultIcon from './images/people.png';
const menu = [
  { title: '预约', icon: yuyue, type: 1 },
  { title: '消费记录', icon: order, type: 2 },
  { title: '联系我们', icon: chat, type: 3 },
];

export default () => {
  const [statusBarHeight, navHeight] = useNavHeight();
  const [info, setInfo] = useState(null);
  const handleLogin = useCallback(() => {
    if (!info) {
      wx.getUserProfile({ desc: '用于完善您的信息' }).then(({ userInfo }) => {
        setInfo(userInfo);
      });
    }
  }, [info]);
  const handleTap = useCallback(function (type) {
    switch (type) {
      case 1:
        navigateTo({ url: '/pages-client/appointment/index' });
        break;
      case 2:
        navigateTo({ url: '/pages-client/order/index' });
        break;
      case 3:
        // todo 更新电话号码
        makePhoneCall({ phoneNumber: '13558982806' });
        break;
    }
  }, []);
  const handleUpgrade = useCallback(function () {
    // wx.g;
    console.log(this.triggerEvent);
  }, []);

  useDidMount(function () {
    showLoading();
    getStorage({ key: 'user_info' })
      .then(({ data }) => {
        hideLoading();
        data && setInfo(JSON.parse(data));
      })
      .catch(() => {
        hideLoading();
      });
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
            <View className={styles.avatarWrapper} onTap={handleLogin}>
              <Image
                className={styles.avatar}
                src={info ? info.avatarUrl : DefaultIcon}
              ></Image>
              <View className={styles.nameText}>
                <Text>{info ? info.nickName : '点击登录 / 注册'}</Text>
              </View>
            </View>
            {!!info &&
              (info.phoneNumber ? (
                <View className={styles.subtitle}>
                  您的余额：¥
                  <Text className={styles.subtitleBlue}>
                    {info.balance || 0}
                  </Text>
                </View>
              ) : (
                <View className={styles.subtitle}>
                  您还没有开通会员，
                  <Text className={styles.subtitleBlue} onTap={handleUpgrade}>
                    点击开通
                  </Text>
                </View>
              ))}
          </View>
        </View>
      </View>
      <View className={styles.function}>
        <View className={styles.functionTitle}>特色服务</View>
        <View className={styles.items}>
          {menu.map((item) => {
            const { icon, title, type } = item;
            return (
              <View
                className={styles.item}
                key={type}
                onTap={handleTap.bind(null, type)}
              >
                <Image src={icon} />
                <Text>{title}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <Button
        openType="getPhoneNumber"
        // onGetPhoneNumber={handleUpgrade}
      ></Button>
    </View>
  );
};
