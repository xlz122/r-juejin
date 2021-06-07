import React, { Component } from 'react';
import { Skeleton } from 'antd';
import BooksListUi from './booksListUi';

class BooksList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    // 书籍列表点击
    this.bookClick = this.bookClick.bind(this);
  }

  render() {
    return (
      <Skeleton active loading={this.props.listLoading} paragraph={{ rows: 2 }}>
        <BooksListUi
          listData={this.props.listData}
          bookClick={this.bookClick}
        >
          <Skeleton active loading={this.props.pageLoading} paragraph={{ rows: 2 }}></Skeleton>
        </BooksListUi>
      </Skeleton>
    );
  }

  // 书籍列表点击
  bookClick() {
    React.Message.info('书籍');
  }
}

export default BooksList;
