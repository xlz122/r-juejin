import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Result } from 'antd';
import './not-found.less';

function NotFound(): React.ReactElement {
  const history = useHistory();

  const goHome = (): void => {
    history.push('/xlz/home');
  };

  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，您访问的页面不存在。"
      extra={
        <Button type="primary" onClick={goHome}>
          返回首页
        </Button>
      }
    />
  );
}

export default NotFound;
