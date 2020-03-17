import React from 'react';
import './index.less';

function ArticleUi(props) {
  return (
    <div className="submit-panel" onClick={props.panelClick}>
      <div className="title">来掘金写文章，您将有机会</div>
      <ul className="benefit-list">
        <li className="item">与超过 300 万开发者分享您的经验和观点</li>
        <li className="item">被编辑推荐，获得更多曝光和关注</li>
        <li className="item">加入专栏作者群，结识众多优秀开发者</li>
      </ul>
      <button className="start-btn" onClick={props.articleStart}>开始写文章</button>
    </div>
  );
}

export default ArticleUi;