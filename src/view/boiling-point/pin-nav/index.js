import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { boilingPointNavAction, boilingPointListAction } from '@store/actionCreators'; 
import { getBoilingPointPinList } from '@api/boiling-point';
import './index.less';

function PinNav(props) {
  // 数据
  const { navData, boilingPointActiveIndex } = props;
  // 事件
  const { navListChange } = props;
  return (
    <ul className="pin-nav-list">
      {
        navData &&
        navData.map((item, index) => {
          return (
            <li
              className={`li-item ${index === 0 ? 'li-first-item' : ''} ${index === parseInt(boilingPointActiveIndex) ? 'li-active-item': '' }`}
              key={index + item}
              onClick={() => { navListChange(item, index) }}
            >
              <Link className="item-link" to={item.link}>{item.title}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    boilingPointActiveIndex: state.boilingPointActiveIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // 设置左侧导航下标
    navListChange(item, index) {
      sessionStorage.setItem('boilingPointActiveIndex', index);
      const action = boilingPointNavAction(index);
      dispatch(action);
      // 获取列表数据
      getBoilingPointPinList({
        id: item.app_id,
        page: 1,
        pageSize: 10
      })
        .then(res => {
          const action1 = boilingPointListAction(res.data);
          dispatch(action1);
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PinNav);