import React, { Component } from 'react';
import { Skeleton } from 'antd';
import { getBrochureBooksList } from '@api/brochure';
import BooksList from '../books-list';
import Sidebar from '../sidebar';
import './index.less';

class BrochureAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // 骨架屏loading
      page: 1, // 列表页数
      pageSize: 15, // 列表条数
      listData: []
    }
    // 列表
    this.getBooksList = this.getBooksList.bind(this);
  }

  componentDidMount() {
    this.getBooksList();
  }

  render() { 
    return (
      <div className="brochure-all">
        <div className="content">
          <Skeleton active loading={this.state.loading} paragraph={{ rows: 2 }} style={{ background: 'red' }}>
            <BooksList
              listData={this.state.listData}
            />
          </Skeleton>
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    );
  }

  // 书籍列表数据
  getBooksList() {
    this.setState({ loading: true });
    getBrochureBooksList({
      page: this.state.page,
      pageSize: this.state.pageSize
    })
      .then(res => {
        this.setState({ listData: res.data });
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ listData: [] });
        this.setState({ loading: false });
      })
  }
}
 
export default BrochureAll;