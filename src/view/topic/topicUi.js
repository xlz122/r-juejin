import React from 'react';
import { connect } from 'react-redux';
import './index.less';

function topicUi(props) {
  // 数据
  const { listData } = props;
  // 事件
  const { titleClick, followClick } = props;

  return (
    <div className="topic">
      <div className="topic-container">
        {
          props.userInfo.token &&
          <div className="topic-list">
            <div className="title">全部话题</div>
            <ul className="list">
              {
                listData &&
                listData.map((item, index) => {
                  return (
                    <li
                      className="item"
                      key={index + item}
                    >
                      <img className="img" src={item.imgUrl} alt="topic" />
                      <div className="content">
                        <div
                          className="title-text"
                          title={item.tooltip}
                          onClick={() => {
                            titleClick(item.title);
                          }}
                        >
                          {item.title}
                        </div>
                        <div className="count">
                          {`${item.followCount} 关注 · ${item.boilingPointCount} 沸点`}
                        </div>
                        <div className="subscribe" onClick={followClick}>+ 关注</div>
                      </div>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => { 
  return {
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps, () => ({}))(topicUi);
