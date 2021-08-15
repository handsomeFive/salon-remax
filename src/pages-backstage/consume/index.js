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
  showLoading,
  hideLoading,
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
  const [custom, setCustom] = useState(); // 自定义金额
  const [current, setCurrent] = useState(); //
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSelectProduct = useCallback(function (event) {
    setCurrent(event.detail.value);
  }, []);
  const handleChangeInput = useCallback(function (type, event) {
    const value = event.detail.value;
    const handle = {
      number: setNumber,
      spend: setSpend,
      presenter: setPresenter,
      custom: setCustom,
    }[type];
    handle(value);
  }, []);
  const handleCreate = useCallback(
    function () {
      if (!number) {
        ling.current.error('请输入手机号');
        return;
      } else if (type === '1' && !spend) {
        ling.current.error('请输入充值金额');
        return;
      } else if (type === '1' && Number(spend) < 0) {
        ling.current.error('充值金额不能小于0');
        return;
      } else if (type === '2' && !current && !custom) {
        ling.current.error('请选择或输入价格');
        return;
      }
      let path = type === '1' ? '/order/recharge' : '/order/consume';
      const data = { phoneNumber: number };
      if (type === '1') {
        // 充值
        data.recharge = Number(spend) + (presenter ? Number(presenter) : 0);
        data.presenter = Number(presenter);
        data.payment = Number(spend);
      } else {
        // 消费
        data.cost = current ? Number(product[current].price) : Number(custom);
        data.product = current
          ? product[current]
          : { _id: 'custom', name: '自定义价格', price: custom };
      }
      showLoading();
      setLoading(true);
      request(path, data)
        .then(() => {
          hideLoading();
          setLoading(false);
          ling.current.success(type === '1' ? '充值成功' : '消费成功');
        })
        .catch((error) => {
          hideLoading();
          setLoading(false);
          ling.current.error(error.message || '操作失败');
        });
    },
    [type, number, spend, presenter, current, product, custom]
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
          <View className={styles.item}>
            <View className={styles.label}>自定义价格</View>
            <Input
              value={custom}
              type="number"
              onInput={handleChangeInput.bind(null, 'custom')}
              placeholder="请输入自定义价格"
            />
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
              placeholder="请输入会员号或编号或扫描"
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
      <Button
        type="primary"
        onTap={handleCreate}
        loading={loading}
        disabled={loading}
      >
        确认
      </Button>
    </View>
  );
}
