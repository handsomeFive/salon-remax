/**
 * 组件挂载时调用，且只会调用一次
 */

import { useEffect } from 'react';

const useDidMount = (callback) => {
  useEffect(callback, []);
};

export default useDidMount;
