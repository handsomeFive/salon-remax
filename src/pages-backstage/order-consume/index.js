import React, { useCallback, useState } from 'react';
import {
  hideLoading,
  showLoading,
  View,
  Text,
  setNavigationBarTitle,
} from '@remax/wechat';
import useDidMount from '../../hooks/useDidMount';
import { request } from '../../utils';
import List from '../../components/List';
import styles from './index.css';
import dayjs from 'dayjs';

export default function (props) {
  const [data, setData] = useState([]);
  const renderFunction = useCallback(function (data) {
    const { type, info, date, user } = data;
    const front =
      type === 1
        ? `¥${info.payment}${info.presenter ? `(赠送¥${info.presenter})` : ''}`
        : `${info.product.name}`;
    const end =
      type === 1 ? (
        <View className={styles.add}>+¥{info.payment}</View>
      ) : (
        <View className={styles.del}>-¥{info.cost}</View>
      );
    return (
      <View className={styles.item} key={data._id}>
        <View className={styles.content}>
          <View>
            <Text className={styles.title}>
              {type === 1 ? `${user}充值` : `${user}消费`}
            </Text>
            <View className={styles.dec}>{front}</View>
          </View>
          <View>
            {end}
            <Text className={styles.dec}>
              {dayjs(date).format('YYYY-MM-DD HH:mm:ss')}
            </Text>
          </View>
        </View>
      </View>
    );
  }, []);

  useDidMount(function () {
    showLoading();
    setNavigationBarTitle({ title: '消费记录' });
    request('/order/list', { type: 2 })
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
      <List data={data} render={renderFunction} />
    </View>
  );
}
