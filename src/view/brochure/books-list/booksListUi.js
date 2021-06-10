import React from 'react';
import './index.less';

function BooksListUi(props) {
  // 数据
  const { listData, children } = props;
  // 事件
  const { bookClick } = props;
  
  return (
    <div className="books">
      <ul className="books-list">
        {
          listData &&
          listData.map((item, index) => {
            return (
              <li
                className="item"
                key={index + item}
                onClick={bookClick}
              >
                <div className="poster">
                  <img className="img" src={item.imgUrl} alt="poster" />
                </div>
                <div className="info">
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.desc}</div>
                  <div className="author">
                    <div className="author-info">
                      <img className="hero" src={item.authorUrl} alt="interlace" />
                      <span className="username">{item.username}</span>
                      <img className="rank" src={item.gradeImgUrl} alt="" />
                    </div>
                    <div className="author-desc">{item.authorDesc}</div>
                  </div>
                  <div className="other">
                    <div className="price">￥{item.price}</div>
                    <ul className="messages">
                      <li className="message-item">
                        {item.chapter}小节
                      </li>
                      <li className="message-item">
                        阅读时长{item.read}
                      </li>
                      <li className="message-item message-last-item">
                        {item.purchaseCount}人已购买
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            )
          })
        }
        {children}
      </ul>
      <div className="register-info">
        <span className="text">©2020 掘金</span>
        <span> | </span>
        <span className="text">津ICP备15003202号-2</span>
        <span> | </span>
        <span className="text">京公网安备11010802026719号</span>
      </div>
    </div>
  )
}

export default BooksListUi;
