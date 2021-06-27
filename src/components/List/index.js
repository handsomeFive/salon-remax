import React, { useCallback, useState } from 'react';
import { ScrollView, View, Text } from 'remax/wechat';
import Empty from '../Empty';
import styles from './index.css';
import { Loading } from 'annar';
import SlideView from 'weui-miniprogram/miniprogram_dist/slideview/slideview';
import 'weui-miniprogram/miniprogram_dist/weui-wxss/dist/style/weui.wxss';

export default function (props) {
  const {
    data,
    render,
    onTapOption,
    onTouchEnd,
    loading = false,
    more = false,
  } = props;
  const [current, setCurrent] = useState();

  const handleTapOption = useCallback(
    function (data, optionValue) {
      onTapOption && onTapOption(optionValue.detail.data, data);
    },
    [onTapOption]
  );
  const handleTouchEnd = useCallback(
    function () {
      onTouchEnd && onTouchEnd();
    },
    [onTouchEnd]
  );

  return (
    <ScrollView
      scrollY
      enhanced
      // pagingEnabled
      className={styles.enhanceList}
      onScrollToLower={handleTouchEnd}
    >
      {data.length ? (
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          {data.map((item) => {
            const { options = [] } = item;
            return (
              <SlideView
                id={item._id}
                key={item._id}
                buttons={options}
                disable={!options.length}
                show={current === item._id}
                bindshow={({ target }) => setCurrent(target.id)}
                bindbuttontap={handleTapOption.bind(null, item)}
              >
                {render(item)}
              </SlideView>
            );
          })}
          {loading && (
            <View className={styles.loading}>
              <Loading />
            </View>
          )}
          {!loading && !more && (
            <View className={styles.loading}>
              <Text>已加载全部</Text>
            </View>
          )}
        </View>
      ) : (
        <Empty />
      )}
    </ScrollView>
  );
}
