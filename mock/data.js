import Mock from 'mockjs';

var data = Mock.mock({
  'cartList|100': [
    {
      //数组有3个值
      'id|+1': 1,
      name: '@cname',
      'number|1-100': 100,
      order: '@cname',
      'time|1-100': 100,
      beizhu: '@cname',
      type: '@cname',
    },
  ],
});

module.exports = data;
