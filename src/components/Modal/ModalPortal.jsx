import React, { useCallback } from 'react';
import styles from './index.css';
import { View } from 'remax/wechat';
import cn from 'classnames';

// export interface Props {
//   open: boolean
//   children: React.ReactNode
//   onClose(): void
//   tapMaskClose?: boolean
//   archor?: 'top' | 'bottom' | 'center'
//   contentClassNames?: string
// }

export default function (props) {
  const {
    archor = 'bottom',
    children,
    open,
    onClose,
    contentClassNames = '',
    tapMaskClose = true,
  } = props;
  const handleTapMask = useCallback(
    function () {
      if (onClose && tapMaskClose) {
        onClose();
      }
    },
    [onClose, tapMaskClose]
  );
  const content = (
    <View
      className={cn(styles.modalRoot, {
        [styles.archorTop]: archor === 'top',
        [styles.archorBottom]: archor === 'bottom',
        [styles.archorCenter]: archor === 'center',
        [styles.show]: open,
      })}
    >
      <View
        className={cn(styles.modalMask, open ? styles.openMask : '')}
        onTap={handleTapMask}
      ></View>
      <View
        className={cn(styles.modalContent, contentClassNames, {
          [styles.modalTopContent]: archor === 'top',
          [styles.modalBottomContent]: archor === 'bottom',
          [styles.modalCenterContent]: archor === 'center',
          [styles.showContent]: open && archor !== 'center',
          [styles.showCenterContent]: open && archor === 'center',
        })}
      >
        {children}
      </View>
    </View>
  );

  if (archor === 'center') {
    return open ? content : null;
  } else {
    return content;
  }
}
