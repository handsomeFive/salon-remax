import React, { useCallback, useState } from 'react';
import {
  hideLoading,
  showLoading,
  View,
  Text,
  setNavigationBarTitle,
  Image,
  navigateTo,
} from '@remax/wechat';
import useDidMount from '../../hooks/useDidMount';
import { request } from '../../utils';
import List from '../../components/List';
import styles from './index.css';

const actions = [
  { data: '1', text: '查看记录', color: '#faad14' },
  // { data: '2', text: '删除', color: '#ff4d4f', type: 'warn' },
];
export default function (props) {
  const [data, setData] = useState([]);
  const renderFunction = useCallback(function (data) {
    const { nickName, balance, avatarUrl } = data;
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
            <Text className={styles.title}>{nickName}</Text>
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
      }
    },
    [data]
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
    </View>
  );
}
