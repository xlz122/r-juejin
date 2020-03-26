import React from 'react';
import './index.less';

function PinList() {
  return (
    <ul className="pin-list">
      <li className="item">
        <div className="item-header-row">
          <img className="user-popover-box" src="https://user-gold-cdn.xitu.io/2019/3/14/1697b388813878b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1" alt="user" />
          <div className="pin-header-content">
            <div className="title">删库跑路砖家</div>
            <div className="desc">删库跑路砖家 <span className="">·</span> 7小时前</div>
          </div>
          <div className="header-action">关注</div>
        </div>
        <div className="item-content-row">还在宿舍远程办公，请问还有谁！还有谁！</div>
        <div className="item-image-row">
          <img className="img" src="https://user-gold-cdn.xitu.io/2020/3/26/17117794947bcfb1?imageView2/1/w/460/h/404/q/85/format/jpg/interlace/1" alt="" />
          <img className="img" src="https://user-gold-cdn.xitu.io/2020/3/26/17117794947bcfb1?imageView2/1/w/460/h/404/q/85/format/jpg/interlace/1" alt="" />
          <img className="img" src="https://user-gold-cdn.xitu.io/2020/3/26/17117794947bcfb1?imageView2/1/w/460/h/404/q/85/format/jpg/interlace/1" alt="" />
        </div>
        <ul className="item-topic-row">
          <li className="item">上班摸鱼</li>
          <li className="item">上班摸鱼</li>
          <li className="item">上班摸鱼</li>
          <li className="item">上班摸鱼</li>
          <li className="item">上班摸鱼</li>
          <li className="item">上班摸鱼</li>
          <li className="item">上班摸鱼</li>
        </ul>
        <div className="item-action-row">
          <div className="like-action">
            <div class="action-title-box">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" class="icon like-icon">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h20v20H0z"></path>
                  <path stroke="#8A93A0" stroke-linejoin="round" d="M4.58 8.25V17h-1.4C2.53 17 2 16.382 2 15.624V9.735c0-.79.552-1.485 1.18-1.485h1.4zM11.322 2c1.011.019 1.614.833 1.823 1.235.382.735.392 1.946.13 2.724-.236.704-.785 1.629-.785 1.629h4.11c.434 0 .838.206 1.107.563.273.365.363.84.24 1.272l-1.86 6.513A1.425 1.425 0 0 1 14.724 17H6.645V7.898C8.502 7.51 9.643 4.59 9.852 3.249A1.47 1.47 0 0 1 11.322 2z"></path>
                </g>
              </svg>
              <span class="action-title">1</span>
            </div>
          </div>
          <div className="comment-action">
            <div class="action-title-box">
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" class="icon comment-icon">
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h20v20H0z"></path>
                  <path stroke="#8A93A0" stroke-linejoin="round" d="M10 17c-4.142 0-7.5-2.91-7.5-6.5S5.858 4 10 4c4.142 0 7.5 2.91 7.5 6.5 0 1.416-.522 2.726-1.41 3.794-.129.156.41 3.206.41 3.206l-3.265-1.134c-.998.369-2.077.634-3.235.634z"></path>
                </g>
              </svg>
              <span class="action-title">10</span>
            </div>
          </div>
          <div className="share-action">
          <div class="action-title-box">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" class="icon share-icon">
              <g fill="none" fill-rule="evenodd">
                <path d="M0 0h20v20H0z"></path>
                <g stroke="#8A93A0" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M10 2.5v10M13.5 7h2.001c.552 0 .999.437.999.96v8.621c0 1.919-1.447 1.919-1.999 1.919H5.5c-.552 0-1.999 0-1.999-1.919v-8.62c0-.53.443-.961.999-.961H6.5M7.519 4.538L10.019 2l2.5 2.513"></path>
                </g>
              </g>
            </svg>
            <span class="action-title">分享</span></div>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default PinList;