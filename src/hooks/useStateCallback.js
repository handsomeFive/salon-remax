import { useCallback, useEffect, useRef, useState } from 'react';

export default function useStateCallback(initialState) {
  const callbackRef = useRef();
  const [state, setState] = useState(initialState);
  const stateCallback = useCallback(function (state, callback) {
    setState(state);
    callbackRef.current = callback;
  }, []);

  useEffect(
    function () {
      callbackRef.current && callbackRef.current(state);
    },
    [state]
  );

  return [state, stateCallback];
}
