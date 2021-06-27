import React, { useCallback, useState, useRef, useEffect } from 'react';
import {
  View,
  setNavigationBarTitle,
  showLoading,
  hideLoading,
  Text,
  Input,
} from '@remax/wechat';
import { Ling, Button } from 'annar';
import styles from './index.css';
import useDidMount from '../../hooks/useDidMount';
import { request } from '../../utils/index';
import List from '../../components/List';
import Modal from '../../components/Modal';

const actions = [
  { data: '1', text: '修改', color: '#faad14' },
  { data: '2', text: '删除', color: '#ff4d4f', type: 'warn' },
];

export default function () {
  const ling = useRef();
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(null);
  const [open, setOpen] = useState(false);
  const dataRef = useRef([]);
  const createCallback = useCallback(function (value) {
    const list = dataRef.current.slice();
    list.push(value);
    setData(list);
  }, []);
  const updateCallback = useCallback(function (value) {
    const list = dataRef.current.slice();
    const index = list.findIndex((item) => item._id === value._id);
    list[index] = value;
    setData(list);
  }, []);
  const handleShiftOpen = useCallback(function () {
    setOpen((value) => !value);
  }, []);
  const handleTapOption = useCallback(
    function (optionValue, { options, ...other }) {
      if (optionValue === '1') {
        handleShiftOpen();
        setCurrent(other);
      } else {
        showLoading();
        request('/product/delete', { id: other._id })
          .then(() => {
            const newData = data.slice();
            const index = newData.findIndex((value) => value._id === other._id);
            newData.splice(index, 1);
            setData(newData);
            ling.current.success('删除成功');
            hideLoading();
          })
          .catch(({ message }) => {
            ling.current.error(message);
            hideLoading();
          });
      }
    },
    [data]
  );
  const handleCreate = useCallback(function () {
    setCurrent(null);
    handleShiftOpen();
  }, []);
  const handleChangeInput = useCallback(
    function (type, event) {
      const result = { ...current, [type]: event.detail.value };
      setCurrent(result);
    },
    [current]
  );
  const handleOk = useCallback(
    function () {
      if (!current || !current.name || !current.price) {
        ling.current.warning('请完成输入');
      } else {
        const { _id, ...other } = current;
        const isCreate = !_id;
        const path = isCreate ? '/product/add' : '/product/update';
        const params = isCreate ? other : { id: _id, data: other };
        showLoading();
        request(path, params)
          .then(({ data }) => {
            ling.current.success(isCreate ? '创建成功' : '修改成功');
            handleShiftOpen();
            hideLoading();
            isCreate && createCallback(data);
            !isCreate && updateCallback(data);
          })
          .catch((error) => {
            ling.current.error(error.message || '操作失败');
            handleShiftOpen();
            hideLoading();
          });
      }
    },
    [current]
  );

  useDidMount(function () {
    setNavigationBarTitle({ title: '产品管理' });
    showLoading();
    request('/product/list')
      .then(({ list }) => {
        setData(list);
        hideLoading();
      })
      .catch(({ message }) => {
        hideLoading();
        ling.current.error(message);
      });
  });

  useEffect(
    function () {
      dataRef.current = data;
    },
    [data]
  );

  return (
    <View>
      <Ling ref={ling} />
      <List
        data={data.map((item) => ({ ...item, options: actions }))}
        onTapOption={handleTapOption}
        render={(data) => (
          <View className={styles.listItem} key={data._id}>
            <View className={styles.listItemPart}>
              <View>
                <Text>{data.name}</Text>
              </View>
            </View>
            <View>
              ¥<Text>{data.price}</Text>
            </View>
          </View>
        )}
      />
      <Button
        type="primary"
        shape="circle"
        icon="add"
        float
        size="superlarge"
        style={{ bottom: '100px', right: '40px', zIndex: 100 }}
        onTap={handleCreate}
      />
      <Modal open={open} archor="center" onClose={handleShiftOpen}>
        <View className={styles.form}>
          <View className={styles.item}>
            <Input
              type="text"
              placeholder="请输入服务项"
              value={current ? current.name : ''}
              onInput={handleChangeInput.bind(null, 'name')}
            />
          </View>
          <View className={styles.item}>
            <Input
              type="number"
              placeholder="请输入价格"
              value={current ? current.price : undefined}
              onInput={handleChangeInput.bind(null, 'price')}
            />
          </View>
          <View className={styles.footer}>
            <View
              className={styles.btn + ' ' + styles.cancel}
              onTap={handleShiftOpen}
            >
              取消
            </View>
            <View className={styles.btn + ' ' + styles.ok} onTap={handleOk}>
              确认
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
