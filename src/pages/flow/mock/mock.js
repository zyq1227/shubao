import Mock from 'mockjs';
import data from './data.json';

Mock.mock('/api/list',{
    data
})