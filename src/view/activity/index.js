import React from 'react';
import useCallbackState from '@utils/useCallbackState';
import './index.less';

function Activity() {
  const [query, setQuery] = useCallbackState({});
  
  function submit() {
    const queryData = JSON.parse(JSON.stringify(query));
    queryData.msg = '消息';
    // 回调函数，获取最新的state
    setQuery(queryData, data => {
      console.log(data);
    });
  }

  return (
    <div>
      <button onClick={submit}>提交</button>
    </div>
  )
}

// import React, { useState, useEffect } from 'react';
// import './index.less';

// function Activity() {
//   const [count, setCount] = useState(0);
  
//   function setCountNum() {
//     setCount(count+1);
//   }

//   // 相当于 componentDidMount 和 componentDidUpdate:
//   useEffect(() => {
//     // 使用浏览器的 API 更新页面标题
//     document.title = `You clicked ${count} times`;
//   });

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={setCountNum}>count++</button>
//     </div>
//   )
// }

// class Activity extends Component {
//   componentDidMount() {
//     // 动态计算当前页面高度
//     let pageHeight = document.querySelector(".activity");
//     if (pageHeight) {
//       pageHeight.style.minHeight = (window.innerHeight - pageHeight.offsetTop) + 'px';
//     }
//   }
  
//   render(){
//     return (
//       <div className="activity">
//         Activity
//         <button onClick={this.download}>下载</button>
//       </div>
//     )
//   }

//   download() {
//     // let link = document.createElement('a');
//     // link.setAttribute('download', '');
//     // // link.href = "http://api?id=124&token=79faf82271944fe38c4f1d99be71bc9c";
//     // link.href = `http://api?id=${id}&token=${token}`;
//     // link.click();
//     // link = null;
//   }
// }

export default Activity;