import React from 'react';
import ModalPortal from './ModalPortal';
import { usePageInstance, createPortal } from '@remax/runtime';

export default function (props) {
  const page = usePageInstance();
  return createPortal(
    <ModalPortal {...props}></ModalPortal>,
    page.modalContainer
  );
}
