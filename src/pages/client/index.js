import React, { useCallback, useRef, useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  navigateTo,
  makePhoneCall,
  hideLoading,
  showLoading,
  createSelectorQuery,
  canvasToTempFilePath,
  Canvas,
  showToast,
  Input,
} from 'remax/wechat';
import { request } from '../../utils';
import styles from './index.css';
import useNavHeight from '../../hooks/useNavHeight';
import useDidMount from '../../hooks/useDidMount';
import yuyue from './images/yuyue.png';
import order from './images/order.png';
import chat from './images/chat.png';
import bg from './images/bg.png';
import DefaultIcon from './images/people.png';
import { Icon, Ling } from 'annar';
import Modal from '../../components/Modal';
import drawQrcode from 'weapp-qrcode-canvas-2d';

const menu = [
  { title: '预约', icon: yuyue, type: 1 },
  { title: '消费记录', icon: order, type: 2 },
  { title: '联系我们', icon: chat, type: 3 },
];

export default () => {
  const [statusBarHeight, navHeight] = useNavHeight();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState(null);
  const [tempFile, setTempFile] = useState('');
  const [vip, setVip] = useState('');
  const ling = useRef();
  const handleLogin = useCallback(() => {
    if (!info) {
      wx.getUserProfile({ desc: '用于完善您的信息' }).then(({ userInfo }) => {
        setInfo(userInfo);
        showLoading();
        request('/user/add', { ...userInfo, phoneNumber: '', balance: 0 })
          .then(({ data }) => {
            hideLoading();
            setInfo(data);
          })
          .catch(() => {
            hideLoading();
          });
      });
    }
  }, [info]);
  const handleTap = useCallback(
    function (type) {
      if (!info) {
        ling.current.error('请先登录');
        return;
      }
      switch (type) {
        case 1:
          showToast({ icon: 'error', title: '敬请期待' });
          // navigateTo({ url: '/pages-client/appointment/index' });
          break;
        case 2:
          navigateTo({
            url: `/pages-client/order/index?phoneNumber=${info.phoneNumber}`,
          });
          break;
        case 3:
          // todo 更新电话号码
          makePhoneCall({ phoneNumber: '13880041985' });
          break;
      }
    },
    [info]
  );
  const handleUpgrade = useCallback(
    function () {
      if (vip.match(/^1[0-9]{10}$/)) {
        showLoading();
        request('/user/register', { id: info._id, phoneNumber: vip })
          .then(() => {
            ling.current.success('开通成功');
            hideLoading();
            requestInfo();
            handleShiftOpen();
          })
          .catch((error) => {
            ling.current.error(error.message || '开通失败');
            hideLoading();
          });
      } else {
        ling.current.error('请输入正确的手机号码');
      }
    },
    [vip, info]
  );

  const handleShiftShow = useCallback(function () {
    setShow((value) => !value);
  }, []);
  const handleShiftOpen = useCallback(function () {
    setOpen((value) => !value);
  }, []);
  const handleCreateQrCode = useCallback(function () {
    handleShiftShow();
  }, []);
  const handleCloseUpdate = useCallback(function () {
    setVip('');
    handleShiftOpen();
  }, []);
  const handleGoBackstage = useCallback(function () {
    navigateTo({ url: '/pages/backstage/index' });
  }, []);
  const requestInfo = useCallback(function () {
    request('/user/info')
      .then(({ data }) => {
        hideLoading();
        setInfo(data);
        if (data.phoneNumber) {
          const query = createSelectorQuery();
          query
            .select('#qrCode')
            .fields({
              node: true,
              size: true,
            })
            .exec((res) => {
              const canvas = res[0].node;
              // 调用方法drawQrcode生成二维码
              drawQrcode({
                canvas: canvas,
                canvasId: 'qrCode',
                width: 200,
                padding: 30,
                background: '#ffffff',
                foreground: '#000000',
                text: JSON.stringify({ phoneNumber: data.phoneNumber }),
              });
              // 获取临时路径（得到之后，想干嘛就干嘛了）
              canvasToTempFilePath({
                canvasId: 'qrCode',
                canvas: canvas,
                x: 0,
                y: 0,
                width: 200,
                height: 200,
                destWidth: 200,
                destHeight: 200,
                success(res) {
                  setTempFile(res.tempFilePath);
                },
              });
            });
        }
      })
      .catch((error) => {
        ling.current.error(error.message || '获取失败');
        hideLoading();
      });
  }, []);

  useDidMount(function () {
    showLoading();
    requestInfo();
  });

  return (
    <View className={styles.app}>
      <Ling ref={ling} />
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
        onLongPress={handleGoBackstage}
      >
        <Text>Welcome to Yu Salon</Text>
      </View>
      <View className={styles.info}>
        <Image src={bg}></Image>
        <View className={styles.contentWrapper}>
          {info && !!info.phoneNumber && (
            <View className={styles.icon} onTap={handleCreateQrCode}>
              <Icon type="qrcode" size="32px"></Icon>
            </View>
          )}
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
              (!!info.phoneNumber ? (
                <View className={styles.subtitle}>
                  <Text className={styles.subtitleBlue}>
                    您的余额：¥
                    {info.balance || 0}
                  </Text>
                </View>
              ) : (
                <View className={styles.subtitle}>
                  <Text>您还没有开通会员</Text>
                  <Button
                    size="mini"
                    className={styles.subtitleBtn}
                    type="primary"
                    onTap={handleShiftOpen}
                  >
                    点击开通
                  </Button>
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
      <Canvas
        type="2d"
        style="width: 200px; height: 200px;position:absolute;z-index:-10;opacity:0;bottom:-100%;"
        id="qrCode"
      ></Canvas>
      <Modal open={show} archor="center" onClose={handleShiftShow}>
        <Image src={tempFile} style={{ width: '200px', height: '200px' }} />
      </Modal>
      <Modal open={open} archor="center" onClose={handleCloseUpdate}>
        <View className={styles.form}>
          <Text className={styles.formItem}>
            使用手机号开通会员，以便更好地服务您
          </Text>
          <Input
            className={styles.phone}
            type="number"
            placeholder="请正确输入您的手机号，开通会员"
            onInput={({ detail }) => setVip(detail.value)}
          ></Input>
          <View className={styles.footer}>
            <View
              className={styles.btn + ' ' + styles.cancel}
              onTap={handleCloseUpdate}
            >
              取消
            </View>
            <View
              className={styles.btn + ' ' + styles.ok}
              onTap={handleUpgrade}
            >
              确认
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
