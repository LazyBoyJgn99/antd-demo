import React from 'react';

import './index.css';

function Class3() {
  // 这是一个list Array()类型
  const list1 = [
    {
      img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
      name: '小明',
    },
    {
      img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
      name: '小红',
    },
    {
      img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
      name: '小张',
    },
    {
      img: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png',
      name: '小绿',
    },
  ];
  // 一般的for循环
  for (let i = 0; i < list1.length; i++) {
    console.log(list1[i]);
  }
  console.log('-----------------');
  // map 循环
  list1.map((item) => {
    console.log(item);
  });
  console.log('-----------------');

  return (
    <div>
      {/* map的for循环在react中的使用 */}
      {list1.map((item, index, data) => {
        let nextBody;
        if (index === list1.length - 1) {
          nextBody = '我是最后一个';
        } else {
          nextBody = data[index + 1].name + '是我鹅子';
        }
        return (
          <HeaderItem
            img={item.img}
            name={item.name}
            nextName={nextBody}
            rank={index + 1}
          />
        );
      })}
    </div>
  );
}

/**
 * 这是一个组件
 * @param {*} props
 * @param {*} props.img 头像
 * @param {*} props.name 名字
 * @param {*} props.nextName 下一个人的名字
 * @param {*} props.rank 排名
 * @returns
 */
function HeaderItem(props) {
  return (
    <div
      // jsx语法 style={{}} 里面是一个对象，对象里面是css的写法，但是属性名是驼峰式的 => border-radius = borderRadius
      style={{
        width: '100%',
        border: '1px solid #000',
        height: '100px',
        borderRadius: '10px',
      }}
      // react重的class写法 等于html的写法：<div class='headerItem'>
      className="headerItem"
    >
      <div className="wrap">
        <img className="headerImg" src={props.img} alt="我是头像" />
        <div className="name">{props.name}</div>
        <div className="name">{props.nextName}</div>
      </div>
      <div className="name">{props.rank}</div>
    </div>
  );
}

export default Class3;
