import React, { useCallback, useState } from 'react';
import {
  hideLoading,
  showLoading,
  View,
  Text,
  setNavigationBarTitle,
  Image,
  navigateTo,
  Input,
} from '@remax/wechat';
import useDidMount from '../../hooks/useDidMount';
import { request } from '../../utils';
import List from '../../components/List';
import Modal from '../../components/Modal';
import styles from './index.css';

const actions = [
  { data: '1', text: '查看记录', color: '#faad14' },
  { data: '2', text: '编号', color: '#ff4d4f', type: 'warn' },
];
export default function (props) {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [alternativeName, setAlternativeName] = useState();
  const [currentId, setCurrentId] = useState('');
  const renderFunction = useCallback(function (data) {
    const { nickName, alternativeName, balance, avatarUrl } = data;
    const end =
      balance > 100 ? (
        <View className={styles.add}>¥{balance}</View>
      ) : (
        <View className={styles.del}>¥{balance}</View>
      );
    return (
      <View className={styles.item} key={data._id}>
        <View className={styles.content}>
          <View className={styles.part}>
            <Image src={avatarUrl} className={styles.avatar} />
            <Text className={styles.title}>
              {alternativeName ? `${alternativeName}(${nickName})` : nickName}
            </Text>
          </View>
          <View className={styles.part}>
            <View className={styles.dec}>余额：</View>
            {end}
          </View>
        </View>
      </View>
    );
  }, []);
  const handleTapOption = useCallback(
    function (optionValue, item) {
      if (optionValue === '1') {
        navigateTo({
          url: `/pages-backstage/user-order/index?phoneNumber=${item.phoneNumber}&user=${item.nickName}`,
        });
      } else {
        const { alternativeName, _id } = item;
        alternativeName && setAlternativeName(alternativeName);
        setCurrentId(_id);
        setOpen(true);
      }
    },
    [data]
  );
  const handleCloseUpdate = useCallback(function () {
    setOpen(false);
    setCurrentId('');
    setAlternativeName('');
  }, []);
  const handleUpgrade = useCallback(
    function () {
      showLoading();
      request('/user/update', { _id: currentId, alternativeName })
        .then(({ data: result }) => {
          const copy = data.slice();
          const index = copy.findIndex((item) => item._id === currentId);
          if (index > -1) {
            copy[index] = result;
            setData(copy);
          }
          hideLoading();
          setCurrentId('');
          setAlternativeName('');
          setOpen(false);
        })
        .catch(() => {
          hideLoading();
        });
    },
    [data, currentId, alternativeName]
  );
  useDidMount(function () {
    showLoading();
    setNavigationBarTitle({ title: '用户管理' });
    request('/user/list')
      .then(({ list }) => {
        setData(list);
        hideLoading();
      })
      .catch(() => {
        hideLoading();
      });
  });

  return (
    <View>
      <List
        data={data.map((item) => ({ ...item, options: actions }))}
        onTapOption={handleTapOption}
        render={renderFunction}
      />
      <Modal open={open} archor="center" onClose={handleCloseUpdate}>
        <View className={styles.form}>
          <Text className={styles.formItem}>
            给用户一个特殊编号，方便查找及操作
          </Text>
          <Input
            value={alternativeName}
            className={styles.phone}
            type="text"
            placeholder="请输入编号"
            onInput={({ detail }) => setAlternativeName(detail.value)}
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
}
