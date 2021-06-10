import React from 'react';
import { Skeleton } from 'antd';
import BooksListUi from './booksListUi';

function BooksList(props) {
  // 书籍列表点击
  const bookClick = () => {
    React.Message.info('书籍');
  }

  return (
    <Skeleton active loading={props.listLoading} paragraph={{ rows: 2 }}>
      <BooksListUi
        listData={props.listData}
        bookClick={bookClick}
      >
        <Skeleton active loading={props.pageLoading} paragraph={{ rows: 2 }}></Skeleton>
      </BooksListUi>
    </Skeleton>
  );
}

export default BooksList;
