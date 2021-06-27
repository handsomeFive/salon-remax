import React, { useCallback, useRef, useState } from 'react';
import sha1 from 'sha1';
import {
  View,
  Text,
  Input,
  Button,
  setStorageSync,
  redirectTo,
  navigateBack,
} from '@remax/wechat';
import { Ling } from 'annar';
import { request } from '../../utils/index';
import styles from './index.css';

export default function (props) {
  const {
    location: { query },
  } = props;
  const ref = useRef();
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const handleChange = useCallback(
    function (type, { detail: { value } }) {
      console.log(value);
      const set = type === 'name' ? setName : setPassword;
      set(value);
    },
    [name, password]
  );
  const handleLogin = useCallback(
    function () {
      const params = { name, password: sha1(password) };
      setLoading(true);
      request('/auth', params)
        .then(({ data }) => {
          setStorageSync('user_info', JSON.stringify(data));
          setLoading(false);
          if (query.redirect) {
            redirectTo({ url: query.redirect });
          } else {
            navigateBack();
          }
        })
        .catch(({ message }) => {
          ref.current && ref.current.error(message);
          setLoading(false);
        });
    },
    [name, password]
  );

  return (
    <View className={styles.body}>
      <Ling ref={ref} />
      <View className={styles.loginBox}>
        <View className={styles.title}>
          <Text>欢迎使用</Text>
        </View>
        <View className={styles.label}>
          <Text>用户名</Text>
        </View>
        <View className={styles.input}>
          <Input value={name} onInput={handleChange.bind(null, 'name')} />
        </View>
        <View className={styles.label}>
          <Text className={styles.label}>密码</Text>
        </View>
        <View className={styles.input}>
          <Input
            password
            value={password}
            onInput={handleChange.bind(null, 'password')}
          />
        </View>
        <Button
          loading={loading}
          disabled={!name || !password}
          className={styles.btn}
          type="primary"
          onTap={handleLogin}
        >
          登录
        </Button>
      </View>
    </View>
  );
}
