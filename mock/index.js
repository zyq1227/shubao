/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-17 20:00:24
 * @LastEditTime: 2019-09-18 14:19:19
 * @LastEditors: Please set LastEditors
 */
import Mock from 'mockjs';
Mock.mock('/api/list', {
  'list|30': [
    {
      'key|+1': 0,
      name: '@name',
      type: '@cname',
      teacher: '@name',
      time: '@date(yyyy-MM-dd)',
      'price|+3': 13,
      'status|1': ['上线', '未上线'],
    },
  ],
});
