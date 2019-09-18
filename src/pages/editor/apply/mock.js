import Mock from 'mockjs';

var data = Mock.mock({
  'cartList|100': [
    {
      'key|+1': 1, //数组有3个值
      'number|100-10000': 100,
      type: '@cname',
      'moneys|1-100': 100,
      details: '@cword(10)',
      time: '@date',
    },
  ],
});

module.exports = data;
