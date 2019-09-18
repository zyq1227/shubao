import Mock from 'mockjs';

var data = Mock.mock({
  'cartList|100': [
    {
      'key|+1': 1, //数组有3个值
      'id|+1': 1,
      name: '@cname',
      'number|100-10000': 100,
      order: '@cname',
      time: '@date',
      beizhu: '@cname',
      'type|1': ['未上线', '上线'],
    },
  ],
});

module.exports = data;
