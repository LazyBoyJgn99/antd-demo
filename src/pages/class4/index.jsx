import React, { useState } from 'react';
import { message, Input, Button } from 'antd';
import http from '../../utils/http';

function Class4() {
  const [state, setState] = useState({
    account: '113', // 账号
    psd: '123', // 密码
  });
  const zhuce = () => {
    // http
    //   .post('http://www.tewx.cn:9089/user/register', {
    //     account: '113',
    //     psd: '123',
    //   })
    //   .then((res) => {
    //     console.log('then res', res);
    //     if (res.data.code === 0) {
    //       message.error(res.data.msg);
    //     }
    //     if (res.data.code === 1) {
    //       message.success(res.data.data);
    //     }
    //   });
    // 回调地狱
    // http.post('http://www.tewx.cn:9089/user/register', (res) => {
    //   console.log('res', res);
    //   http.post('http://www.tewx.cn:9089/user/register', (res) => {
    //     console.log('res', res);
    //     http.post('http://www.tewx.cn:9089/user/register', (res) => {
    //       console.log('res', res);
    //     });
    //   });
    // });
    // Promise 的正常写法
    // const res = await http
    //   .post('http://www.tewx.cn:9089/user/register', {
    //     account: '111',
    //     psd: '123',
    //   })
    //   .then((res) => {
    //     console.log('第一层res', res);
    //     const res2 = http.post('http://www.tewx.cn:9089/user/register');
    //     return res2;
    //   })
    //   .then((res2) => {
    //     console.log('第二层res', res2);
    //     const res3 = http.post('http://www.tewx.cn:9089/user/register');
    //     return res3;
    //   })
    //   .then((res2) => {
    //     console.log('第二层res', res2);
    //     const res3 = http.post('http://www.tewx.cn:9089/user/register');
    //     return res3;
    //   })
    //   .catch((err) => {
    //     console.log('err', err);
    //   })
    //   .finally(() => {
    //     console.log('finally');
    //   });
    // ES6 的Promise写法
    // const res1 = await http.post('http://www.tewx.cn:9089/user/register', {
    //   account: '111',
    //   psd: '123',
    // });
    // const res2 = await http.post('http://www.tewx.cn:9089/user/register', {
    //   account: res1.account,
    //   psd: '123',
    // });
    // const res3 = await http.post('http://www.tewx.cn:9089/user/register', {
    //   account: res2.account,
    //   psd: res1.psd,
    // });
    // console.log(res3);
  };
  zhuce();
  return (
    <div>
      账号
      <Input
        value={state.account}
        onChange={(e) => {
          console.log('e', e);
          setState({
            ...state,
            account: e.target.value,
          });
        }}
      />
      密码
      <Input
        value={state.psd}
        onChange={(e) => {
          console.log('e', e);
          setState({
            ...state,
            psd: e.target.value,
          });
        }}
      />
      <Button
        onClick={() => {
          http
            .post('http://www.tewx.cn:9089/user/register', {
              account: state.account,
              psd: '123',
            })
            .then((res) => {
              console.log('then res', res);
              if (res.data.code === 0) {
                message.error(res.data.msg);
              }
              if (res.data.code === 1) {
                message.success(res.data.data);
              }
            });
        }}
      >
        提交
      </Button>
    </div>
  );
}

export default Class4;
