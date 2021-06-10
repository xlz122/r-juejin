/**
 * @description 获取滚动条距离页面底部的高度
 * @param { MouseEvent } event 滚动条事件对象
 */
export function getPageBottomHeight(event) {
  console.log(event);
  // 总的滚动的高度
  let scrollHeight = (event.target ? event.target.documentElement.scrollHeight : false)
    || (event.target ? event.target.body.scrollHeight : 0);
  // 视口高度
  let clientHeight = (event.target ? event.target.documentElement.clientHeight : false)
    || (event.target ? event.target.body.clientHeight : 0);
  // 当前滚动的高度
  let scrollTop = (event.target ? event.target.documentElement.scrollTop : false)
    || (event.target ? event.target.body.scrollTop : 0);
  // 距离底部高度(总的高度 - 视口高度 - 滚动高度)
  let bottomHeight = scrollHeight - clientHeight - scrollTop;

  return bottomHeight;
}