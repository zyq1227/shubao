import { Col, Row, Table,Pagination } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import styles from './index.less';
import getVerifydata from '../../../../mock/beforeverify';


const columns = [
  {
    title: '课程名',
    dataIndex: 'className',
  },
  {
    title: '所属分类',
    dataIndex: 'Type',
  },
  {
    title: '所属老师',
    dataIndex: 'teach',
  },
  {
    title: '提交时间',
    dataIndex: 'updataTime',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '课程价格',
    dataIndex: 'classPrice',
  },
  {
    title: '操作',
    dataIndex: 'action',
    render: () => <a>审核</a>
  }
];

const loading=false;

function handleTableChange(pagination, filters, sorter) {
  console.log(pagination,filters,sorter)
};

export default () => (
  <PageHeaderWrapper>
    <Table columns={columns} dataSource={getVerifydata} loading={loading} style={{background:'#fff'}} />
  </PageHeaderWrapper>
);
