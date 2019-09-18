import Mock from 'mockjs';

Mock.mock('/api/proctList', {
  'list|70': [
    {
      'id|+1': 0,
      'code|+1': 410,
      name: '@name',
      number: /^1[385][1-9]\d{8}/,
      address: '@province @city @county',
      'count|+4': 220,
      'total|+4': 220,
      'fen|+4': 220,
    },
  ],
});
