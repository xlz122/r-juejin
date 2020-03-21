import React from 'react';
import './index.less';

function List(props) {
  const { adEntryList, columnEntryList } = props.entryList;
  const { adEntryItemClick, columnEntryItemClick, likeCountClick, commentsCountClick } = props;
  console.log(adEntryList)
  return (
    <div className="entry-list">
      <ul className="ad-entry-list">
        {
          adEntryList &&
          adEntryList.map((item, index) => {
            return (
              <li
                className="li-item"
                key={index + item}
                onClick={adEntryItemClick}
              >
                <div className="item-link">
                  <div className="info-box">
                    <ul className="meta-row">
                      <li className="item tag">
                        广告
                      </li>
                      <li className="item">
                        {item.username}
                      </li>
                      <li className="item last-item">
                        {item.time}
                      </li>
                    </ul>
                    <div className="info-row">
                      <div className="title">{item.title}</div>
                      <div className="description">{item.bstract}</div>
                    </div>
                  </div>
                  <div className="info-img">
                    <img className="img" src={item.imageUrl} alt="tag" />
                  </div>
                </div>
          </li>
            )
          })
        }
      </ul>
      <ul className="column-entry-list">
        {
          columnEntryList &&
          columnEntryList.map((item, index) => {
            return (
              <li
                className="li-item"
                key={index + item}
                onClick={columnEntryItemClick}
              >
                <div className="item-link">
                  <div className="info-box">
                  <ul className="meta-row">
                      <li className="item column">
                        专栏
                      </li>
                      <li className="item">
                        {item.username}
                      </li>
                      <li className="item">
                        {item.time}
                      </li>
                      <li className="item last-item">
                        {item.name}
                      </li>
                    </ul>
                    <div className="info-row">
                      <div className="title link">{item.title}</div>
                    </div>
                    <ul className="action-row">
                      <li className="item first-item">
                        <div className="item-link" onClick={likeCountClick}>
                          <img className="img" src="https://b-gold-cdn.xitu.io/v3/static/img/zan.e9d7698.svg" alt="action" />
                          <span className="count">{item.likeCount}</span>
                        </div>
                      </li>
                      <li className="item">
                        <div className="item-link" onClick={commentsCountClick}>
                          <img className="img" src="https://b-gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg" alt="action" />
                          <span className="count">{item.commentsCount}</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="info-img">
                    {
                      item.imageUrl &&
                      <img className="img" src={item.imageUrl} alt="column" />
                    }
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List;