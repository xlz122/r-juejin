import React from 'react';
import './index.less';

function BooksList() {
  return (
    <ul className="books-list">
      <li className="item">
        <div className="poster">
          <img className="img" src="https://user-gold-cdn.xitu.io/2020/3/17/170e7beafa4229ba?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1" alt="poster" />
        </div>
        <div className="info">
          <div className="title">Uniapp 从入门到进阶</div>
          <div className="desc">从基础到实战，详细讲解跨平台应用开发的方方面面，包含 Uniapp 开发常用知识点，基础 api，前端交互、组件封装，后端 Nodejs 开发、前后端联调和调优部署，是一套非常全面的综合课程。</div>
          <div className="author">
            <div className="author-info">
              <img className="hero" src="https://user-gold-cdn.xitu.io/2019/10/15/16dcffa18bbe40c3?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt="interlace" />
              <span className="username">阿面</span>
              <img className="rank" src="https://b-gold-cdn.xitu.io/v3/static/img/lv-1.636691c.svg" alt="" />
            </div>
            <div className="author-desc">广州某电商公司资深前端</div>
          </div>
          <div className="other">
            <div className="price">￥29.9</div>
            <ul className="messages">
              <li className="message-item">
                30小节
              </li>
              <li className="message-item">
                阅读时长271分
              </li>
              <li className="message-item message-last-item">
                人已购买
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li className="item">
        <div className="poster">
          <img className="img" src="https://user-gold-cdn.xitu.io/2020/3/17/170e7beafa4229ba?imageView2/1/w/200/h/280/q/95/format/webp/interlace/1" alt="poster" />
        </div>
        <div className="info">
          <div className="title">Uniapp 从入门到进阶</div>
          <div className="desc">从基础到实战，详细讲解跨平台应用开发的方方面面，包含 Uniapp 开发常用知识点，基础 api，前端交互、组件封装，后端 Nodejs 开发、前后端联调和调优部署，是一套非常全面的综合课程。</div>
          <div className="author">
            <div className="author-info">
              <img className="hero" src="https://user-gold-cdn.xitu.io/2019/10/15/16dcffa18bbe40c3?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt="interlace" />
              <span className="username">阿面</span>
              <img className="rank" src="https://b-gold-cdn.xitu.io/v3/static/img/lv-1.636691c.svg" alt="" />
            </div>
            <div className="author-desc">广州某电商公司资深前端</div>
          </div>
          <div className="other">
            <div className="price">￥29.9</div>
            <ul className="messages">
              <li className="message-item">
                30小节
              </li>
              <li className="message-item">
                阅读时长271分
              </li>
              <li className="message-item message-last-item">
                人已购买
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default BooksList;