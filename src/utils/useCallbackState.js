import { useRef, useState, useEffect } from 'react';

function useCallbackState(od) {
  const cbRef = useRef();
  const [data, setData] = useState(od);

  useEffect(() => {
    cbRef.current && cbRef.current(data);
  }, [data]);

  return [data, function(d, callback) {
    cbRef.current = callback;
    setData(d);
  }];
}

export default useCallbackState;
