import React, { Component } from 'react';
import './index.less';

let self = null;

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      time: 3000
    }
    // 改成全局方法，this被改变
    self = this;
    // 设置class
    this.setClass = this.setClass.bind(this);
    // 数据添加
    this.info = this.info.bind(this);
  }

  render() {
    const { listData } = this.state;
    return (
      <ul className="message-list">
        {
          listData &&
          listData.map((item, index) => {
            return (
              <li
                className={`message-item ${this.setClass(item.type)}`}
                key={index + item}
              >
                <span className="text">{item.title}</span>
              </li>
            )
          })
        }
      </ul>
    );
  }

  // 动态设置class
  setClass(type) {
    if (type === 0) {
      return 'message-info-item';
    } else if (type === 1) {
      return 'message-wraning-item';
    } else if (type === 2) {
      return 'message-success-item';
    } else if (type === 3) {
      return 'message-error-item';
    } else {
      return '';
    }
  }

  // 普通提示
  info(title) {
    self.handleData(0, title);
  }

  // 警告提示
  wraning(title) {
    self.handleData(1, title);
  }

  // 成功提示
  success(title) {
    self.handleData(2, title);
  }

  // 错误提示
  error(title) {
    self.handleData(3, title);
  }

  /**
   * @desc - 数据处理
   * @param { Number } type - 提示类型 0-info, 1-wraning, 2-success, 3-error
   * @param { String } title - 提示内容
   */
  handleData(type, title) {
    // 空消息过来
    if (!title) {
      return false;
    }
    // 处理来自axios重复请求消息
    if (title?.message) {
      title = title.message;
    }

    // 添加数据
    let { listData: list, time } = self.state;

    list.push({ type, title });
    self.setState({ listData: list });
    // 定时清除
    let timer = setTimeout(() => {
      list.splice(0, 1);
      self.setState({ listData: list });
      clearTimeout(timer);
    }, time);
  }
}

export default Message;
