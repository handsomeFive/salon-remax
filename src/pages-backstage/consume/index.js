import { useQuery } from 'remax';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  View,
  Input,
  Picker,
  Button,
  scanCode,
  Text,
  setNavigationBarTitle,
} from '@remax/wechat';
import { Ling, Icon } from 'annar';
import styles from './index.css';
import useDidMount from '../../hooks/useDidMount';
import { request } from '../../utils';

export default function () {
  const { type } = useQuery();
  const ling = useRef();
  const [number, setNumber] = useState(); // 会员号
  const [spend, setSpend] = useState(); // 充值金额
  const [presenter, setPresenter] = useState(); // 赠送金额
  const [current, setCurrent] = useState(); //
  const [product, setProduct] = useState([]);
  const handleSelectProduct = useCallback(function (event) {
    setCurrent(event.detail.value);
  }, []);
  const handleChangeInput = useCallback(function (type, event) {
    const value = event.detail.value;
    const handle = {
      number: setNumber,
      spend: setSpend,
      presenter: setPresenter,
    }[type];
    handle(value);
  }, []);
  const handleCreate = useCallback(
    function () {
      let path = type === '1' ? '/order/recharge' : '/order/consume';
      const data = { phoneNumber: number };
      if (type === '1') {
        // 充值
        data.recharge = Number(spend) + (presenter ? Number(presenter) : 0);
        data.presenter = Number(presenter);
        data.payment = Number(spend);
      } else {
        // 消费
        data.cost = Number(product[current].price);
        data.product = product[current];
      }
      request(path, data)
        .then(() => {
          ling.current.success(type === '1' ? '充值成功' : '消费成功');
        })
        .catch((error) => {
          ling.current.error(error.message || '操作失败');
        });
    },
    [type, number, spend, presenter, current, product]
  );
  const handleScan = useCallback(function () {
    scanCode({
      success(res) {
        const { phoneNumber } = JSON.parse(res.result || '{}');
        if (phoneNumber) {
          setNumber(phoneNumber + '');
        } else {
          ling.current.error('无效的二维码');
        }
      },
    });
  }, []);
  const consume = useMemo(
    function () {
      return (
        <>
          <View className={styles.item}>
            <View className={styles.label}>
              <Text>会员号</Text>
              <View className={styles.scan} onTap={handleScan}>
                <Icon type="scan" size="40px" />
              </View>
            </View>
            <Input
              value={number}
              type="number"
              onInput={handleChangeInput.bind(null, 'number')}
              placeholder="请输入会员号或扫描"
            />
          </View>
          <View className={styles.item}>
            <View className={styles.label}>产品</View>
            <Picker
              value={current}
              mode="selector"
              range={product}
              rangeKey="name"
              onChange={handleSelectProduct}
            >
              <Input
                value={
                  current
                    ? product[current].name + ' / ¥' + product[current].price
                    : ''
                }
                placeholder="请选择消费的产品"
                disabled
              ></Input>
            </Picker>
          </View>
        </>
      );
    },
    [current, product, number]
  );
  const recharge = useMemo(
    function () {
      return (
        <>
          <View className={styles.item}>
            <View className={styles.label}>
              <Text>会员号</Text>
              <View className={styles.scan} onTap={handleScan}>
                <Icon size="40px" type="scan" />
              </View>
            </View>
            <Input
              type="number"
              value={number}
              onInput={handleChangeInput.bind(null, 'number')}
              placeholder="请输入会员号或扫描"
            />
          </View>
          <View className={styles.item}>
            <View className={styles.label}>充值金额</View>
            <Input
              type="number"
              value={spend}
              onInput={handleChangeInput.bind(null, 'spend')}
              placeholder="请输入充值金额"
            />
          </View>
          <View className={styles.item}>
            <View className={styles.label}>赠送金额</View>
            <Input
              type="number"
              value={presenter}
              onInput={handleChangeInput.bind(null, 'presenter')}
              placeholder="请输入赠送金额"
            />
          </View>
        </>
      );
    },
    [number]
  );

  useDidMount(function () {
    setNavigationBarTitle({ title: type === '1' ? '充值中心' : '消费中心' });
    if (type === '2') {
      request('/product/list').then(({ list }) => {
        setProduct(list);
      });
    }
  });

  return (
    <View className={styles.body}>
      <Ling ref={ling}></Ling>
      {type === '1' ? recharge : consume}
      <Button type="primary" onTap={handleCreate}>
        确认
      </Button>
    </View>
  );
}
