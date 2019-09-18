import { Col, Row, Table } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import styles from './index.less';


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
const data = [
  {
    key: '1',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    classPrice: 238,
    teach: "TradeCode 9217"
  },
  {
    key: '2',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    classPrice: 238,
    teach: "TradeCode 9217"
  },
  {
    key: '3',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    classPrice: 238,
    teach: "TradeCode 9217"
  },
  {
    key: '4',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    classPrice: 238,
    teach: "TradeCode 9217"
  },
  {
    key: '5',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    classPrice: 238,
    teach: "TradeCode 9217"
  },
  {
    key: '6',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    teach: "TradeCode 9217",
    classPrice: 238
  },
  {
    key: '7',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    classPrice: 238,
    teach: "TradeCode 9217"
  },
  {
    key: '8',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    classPrice: 238,
    teach: "TradeCode 9217"
  },
  {
    key: '9',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    classPrice: 238,
    teach: "TradeCode 9217"
  },
  {
    key: '10',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    classPrice: 238,
    teach: "TradeCode 9217"
  },
  {
    key: '11',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    classPrice: 238,
    teach: "TradeCode 9217"
  },
  {
    key: '12',
    className: 'TradeCode 9317',
    Type: 'TradeCode 9317',
    updataTime: '2019-09-17 19:30:52',
    teach: "TradeCode 9217",
    classPrice: 238
  }
];


const pagination={};
const loading=false;

function handleTableChange(pagination, filters, sorter) {
  console.log(pagination,filters,sorter)
};

export default () => (
  <PageHeaderWrapper
    content={formatMessage({
      id: 'editor-flow.description'
    })}
  >
    <Table columns={columns} dataSource={data} pagination={pagination} loading={loading}
      onChange={handleTableChange} />
  </PageHeaderWrapper>
);
