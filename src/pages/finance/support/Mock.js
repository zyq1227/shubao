import Mock from 'mockjs';

let { data } = new Mock.mock({
  'data|30': [
    {
      title: '@name()',
      name: '@name()',
      income: '@integer(0,999)',
      withdraw: '@integer(0,999)',
      noWithdraw: '@integer(0,999)',
    },
  ],
});
export default data;
