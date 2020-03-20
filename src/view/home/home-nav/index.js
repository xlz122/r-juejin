import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { homeNavAction } from '@store/actionCreators';
import './index.less';

function HomeNavUi(props) {
  // 父组件传递
  const { homeNavData, homeNavMouseOver, homeNavMouseOut } =  props;
  // redux传递
  const { homeNavActionIndex, homeNavIndexChange } = props;
  return (
    <div className="home-nav">
      <ul className="home-nav-list">
        {
          homeNavData.map((item, index) => {
            return (
              <li
                className={`li-item ${index === parseInt(homeNavActionIndex) ? 'li-active-item ' : ''}`}
                key={index + item}
                onClick={() => { homeNavIndexChange(index) }}
                onMouseOver={() => { homeNavMouseOver(index) }}
                onMouseLeave={() => { homeNavMouseOut(index) }}
              >
                <Link className="item-link" to={item.link}>{item.title}</Link>
                <span className="auxiliary"></span>
                {
                  // 存在子项 && 是否显示 && 是否选中项
                  item.children && item.isShow && index !== parseInt(homeNavActionIndex) &&
                  <ul className="list-details">
                    {
                      item.children.map((i, ind) => {
                        // 去除第一项全部
                        if (ind === 0) {
                          return false;
                        }
                        return (
                          <li
                            className="details-item"
                            key={ind + i}
                          >
                            <Link className="details-link" to="" onClick={props.homeNavDetailsJump}>{i.title}</Link>
                            <span className="auxiliary"></span>
                          </li>
                        )
                      })
                    }
                  </ul>
                }
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    homeNavActionIndex: state.homeNavActionIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // 设置首页导航下标
    homeNavIndexChange(index) {
      sessionStorage.setItem('homeNavActionIndex', index);
      const action = homeNavAction(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavUi);