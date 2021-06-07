import React from 'react';
import useCallbackState from '@utils/useCallbackState';

function Activity() {
  const [query, setQuery] = useCallbackState({});

  function submit() {
    const queryData = JSON.parse(JSON.stringify(query));
    queryData.msg = '消息';
    // 回调函数，获取最新的state
    setQuery(queryData, data => {
      console.log(data);
    });
  }

  return <button onClick={submit}>提交</button>;
}

export default Activity;
