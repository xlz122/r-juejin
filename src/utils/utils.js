/* eslint-disable */
/**
 * @description 获取滚动条距离页面底部的高度
 * @param { MouseEvent } event 滚动条事件对象
 */
export function getPageBottomHeight(event) {
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

/**
 * @desc 格式化日期字符串
 * @param { String } - [date = new Date()] 日期字符串：2020-01-14 13:43:23
 * @param { String } - [formatStr = 'yyyy-MM-dd HH:mm:ss'] 日期格式
 * @returns { String } 格式化后的日期字符串
 */
export function formatDate(params) {
  let defalutParams = {
    date: new Date(),
    formatStr: 'yyyy-MM-dd HH:mm:ss'
  }
  params = { ...defalutParams, ...params };
  let date = params.date;
  let formatStr = params.formatStr;
  // 传入日期字符串 - 转成时间戳 - 转成标准时间
  let timeStamp = new Date(date).getTime();
  date = new Date(timeStamp);
  formatStr = formatStr.replace(new RegExp('yyyy'), `${date.getFullYear()}`);
  const month = date.getMonth() + 1;
  formatStr = formatStr.replace(new RegExp('MM'), `${month > 9 ? month : '0' + month}`);
  const day = date.getDate();
  formatStr = formatStr.replace(new RegExp('dd'), `${day > 9 ? day : '0' + day}`);
  const hour = date.getHours();
  formatStr = formatStr.replace(new RegExp('HH'), `${hour > 9 ? hour : '0' + hour}`);
  const min = date.getMinutes();
  formatStr = formatStr.replace(new RegExp('mm'), `${min > 9 ? min : '0' + min}`);
  const sec = date.getSeconds();
  formatStr = formatStr.replace(new RegExp('ss'), `${sec > 9 ? sec : '0' + sec}`);
  return formatStr;
}

export function DateWeek(value) {
  const day = new Date(Date.parse(value.replace(/-/g, '/')));
  const today = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  return today[day.getDay()]
}