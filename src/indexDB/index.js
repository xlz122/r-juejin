import React from 'react';

/**
 * @desc 创建数据库
 * @params dbName - 数据库名
 * @params objectStoreName - 数据库 - 表名
 * @params version - 版本号
 */
export function createDB(dbName, objectStoreName, version) {
  // 数据库存在则打开，否则创建
  let request = indexedDB.open(dbName, version);
  // 请求数据库成功的回调函数
  request.onsuccess = function (success) { }
  // 请求数据库失败的回调函数
  request.onerror = function (err) {
    React.Message.error('打开数据库失败');
  }
  // 数据库版本更新时的回调函数
  request.onupgradeneeded = function (event) {
    let db = event.target.result;
    // 创建信息对象存储空间,指定keyPath选项为Id(即主键为Id)
    db.createObjectStore(objectStoreName, {
      keyPath: "id",
      autoIncrement: true
    });
  }
}

/**
 * @desc 新增数据
 * @params dbName - 数据库名称
 * @params objectStoreName - 数据库 - 表名
 * @params argument - 传入的参数
 */
export function insertData(dbName, objectStoreName, params) {
  // 数据库存在则打开，否则创建
  let request = indexedDB.open(dbName); 

  // 创建数据库表
  request.onupgradeneeded = function (event) {
    let db = event.target.result;
    // 创建信息对象存储空间,指定keyPath选项为Id(即主键为Id)
    db.createObjectStore(objectStoreName, {
      keyPath: "id",
      autoIncrement: true
    });
  }

  //数据库打开成功的回调函数
  request.onsuccess = function (event) {
    // 获得数据库
    let db = event.target.result;

    // 创建事务
    let transaction = db.transaction(objectStoreName, "readwrite")
    request = transaction.objectStore(objectStoreName).add(params)

    request.onsuccess = function (event) {}

    request.onerror = function (event) {
      React.Message.error("数据插入失败")
    }

    transaction.oncomplete = function () {
      // console.info("事务完成!")
    }

    transaction.onerror = function () {
      // console.error("事务未执行完成")
    }
  }
}

/**
 * @desc 查询全部数据
 * @params dbName - 数据库名称
 * @params objectStoreName - 数据库 - 表名
 * @params callback - 回调函数，返回查询的所有数据
 */
export function getAllData(dbName, objectStoreName, callback) {
  // 数据库存在则打开，否则创建
  let request = indexedDB.open(dbName);

  // 创建数据库表
  request.onupgradeneeded = function (event) {
    let db = event.target.result;
    // 创建信息对象存储空间,指定keyPath选项为Id(即主键为Id)
    db.createObjectStore(objectStoreName, {
      keyPath: "id",
      autoIncrement: true
    })
  }

  // 请求打开数据库的回调函数
  request.onsuccess = function (success) {
    let db = success.target.result;
    let transaction = db.transaction([objectStoreName], 'readwrite');
    let objectStore = transaction.objectStore(objectStoreName);

    // 通过游标获取全部数据
    let cursor = objectStore.openCursor();
    let data = [];
    cursor.onsuccess = function (e) {
      let result = e.target.result;
      if (result && result !== null) {
        data.push(result.value);
        result.continue();
      } else {
        if (callback && data) {
          callback(data);
        } else {
          callback('未查询到数据!')
        }
      }
    }
    cursor.onerror = function () {
      React.Message.error('查询数据库失败');
    };
  }
}

/**
 * @desc 更新数据
 * @params dbName - 数据库名称
 * @params objectStoreName - 数据库 - 表名
 * @params callback - 回调函数,数据更新完成
 */
export function updateData(dbName, objectStoreName, newsData, callback) {
  // 数据库存在则打开，否则创建
  let request = indexedDB.open(dbName);

  // 创建数据库表
  request.onupgradeneeded = function (event) {
    let db = event.target.result;
    // 创建信息对象存储空间,指定keyPath选项为Id(即主键为Id)
    db.createObjectStore(objectStoreName, {
      keyPath: "id",
      autoIncrement: true
    })
  }

  // 请求打开数据库的回调函数
  request.onsuccess = function (success) {
    // 获取到数据库的表
    let db = success.target.result;
    // 对表操作进行事务权限控制
    let transaction = db.transaction(objectStoreName, 'readwrite');
    // 对表进行操作
    let objectStore = transaction.objectStore(objectStoreName);
    // 通过游标获取全部数据
    let cursor = objectStore.openCursor();
    cursor.onsuccess = function (e) {
      let result = e.target.result;
      if (result && result !== null) {
        if (result.value.username === newsData.username) {
          result.value.username = newsData.value;
          objectStore.put(result.value);
        }
        result.continue();
      } else {
        if (callback) {
          callback();
        }
      }
    }
    cursor.onerror = function () {
      React.Message.error('数据更新失败');
    };
  }
}

/**
 * @desc 清空表数据
 * @params dbName - 数据库名称
 * @params objectStoreName - 数据库 - 表名
 */
export function clearAllData(dbName, objectStoreName) {
  // 数据库存在则打开，否则创建
  let request = indexedDB.open(dbName);
  // 请求成功的回调函数
  request.onsuccess = function (e) {
    // 获取实例
    let db = e.target.result;
    // 表名事务权限控制
    let transaction = db.transaction(objectStoreName, 'readwrite');
    // 进行操作
    let objectStore = transaction.objectStore(objectStoreName);
    // 清除数据
    let clearResult = objectStore.clear();
    // 清除成功的回调函数
    clearResult.onsuccess = function (e) {
      console.log('表名[' + objectStoreName + ']数据清除成功,状态为：' + e.isTrusted);
    }
  }
}


/**
 * @desc 关闭数据库
 * @params dbName - 数据库名称
 */
export function colseDB(dbName) {
  dbName.close();
}

/**
 * @desc 删除数据库
 * @params dbName - 数据库名称
 */
export function deleteDB(dbName) {
  try {
    // 删除数据库使用 indexedDB对象的deleteDatabase方法
    let request = indexedDB.deleteDatabase(dbName);
    request.onsuccess = function () {
      console.log('删除[' + dbName + ']数据库成功!!!!');
    }
    request.onerror = function () {
      console.log('删除[' + dbName + ']数据库失败!!!!');
    }
  } catch (e) {
    console.log('删除[' + dbName + ']数据库出现错误，' + e.getMessage);
  }
}
