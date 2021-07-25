import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Picker,
  showLoading,
  hideLoading,
  Text,
  setNavigationBarTitle,
} from 'remax/wechat';
import styles from './index.css';
import dayjs from 'dayjs';
import { request } from '../../utils/';
import useStateCallback from '../../hooks/useStateCallback';
import List from '../../components/List';

const typeRange = ['充值', '消费'];
const modeRange = ['日', '月'];
const fields = ['day', 'month'];
const now = dayjs().format('YYYY-MM-DD');

export default function () {
  const [state, setState] = useStateCallback({ type: 0, mode: 0, date: now });
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const handleGetData = useCallback(function (params) {
    const { date, type, mode } = params;
    const result = { type: type + 1 };
    result.start = dayjs(date).startOf(fields[mode]).valueOf();
    result.end = dayjs(date).endOf(fields[mode]).valueOf();
    showLoading();
    request('/order/collect', result)
      .then(({ list, total }) => {
        setData(list.concat(list));
        setTotal(total);
        hideLoading();
      })
      .catch(() => {
        hideLoading();
      });
  }, []);
  const handleChangePicker = useCallback(
    function (key) {
      return function ({ detail }) {
        const result = { ...state };
        if (key === 'type') {
          result.type = Number(detail.value);
        } else if (key === 'mode') {
          const format = !Number(detail.value) ? 'YYYY-MM-DD' : 'YYYY-MM';
          result.mode = Number(detail.value);
          result.date = dayjs(state.date).format(format);
        } else {
          result.date = detail.value;
        }
        setState(result, (state) => handleGetData(state));
      };
    },
    [state, handleGetData]
  );
  useEffect(function () {
    setNavigationBarTitle({ title: '数据汇总' });
    handleGetData(state);
  }, []);
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
  return (
    <View className={styles.page}>
      <View className={styles.picker}>
        <Picker
          mode="selector"
          range={typeRange}
          value={state.type}
          className={styles.item}
          onChange={handleChangePicker('type')}
        >
          <View className={styles.label}>{typeRange[state.type]}</View>
        </Picker>
        <Picker
          mode="selector"
          range={modeRange}
          value={state.mode}
          className={styles.item}
          onChange={handleChangePicker('mode')}
        >
          <View className={styles.label}>{modeRange[state.mode]}</View>
        </Picker>
        <Picker
          mode={'date'}
          fields={fields[state.mode]}
          className={styles.item}
          onChange={handleChangePicker('date')}
        >
          <View className={styles.label}>{state.date}</View>
        </Picker>
      </View>
      <View className={styles.totalBar}>
        <Text>总计：</Text>
        {total}
      </View>
      <View className={styles.listContainer}>
        <List data={data} render={renderFunction} />
      </View>
    </View>
  );
}
