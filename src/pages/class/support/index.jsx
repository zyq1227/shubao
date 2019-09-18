import React, { Component } from 'react';
import styles from './index.less';
import { Input, Button, Table } from 'antd';
const columns = [
  {
    title: '用户名',
    dataIndex: 'address',
    key: '1',
    width: 100,
  },
  {
    title: '手机号',
    dataIndex: 'address',
    key: '2',
    width: 100,
  },
  {
    title: '开通时间',
    dataIndex: 'address',
    key: '3',
    width: 100,
    sortDirections: ['descend', 'ascend'],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
  },
  {
    title: '结束时间',
    dataIndex: 'address',
    key: '4',
    width: 100,
    sortDirections: ['descend', 'ascend'],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
  },
  {
    title: '开源',
    dataIndex: 'address',
    key: '5',
    width: 100,
  },
  {
    title: '会员卡金额',
    dataIndex: 'address',
    key: '6',
    width: 100,
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
class componentName extends Component {
  render() {
    return (
      <div className={styles.box_card}>
        <div className={styles.box_card_top}>
          <div className={styles.box_card_top_t}>
            <span>首页</span>
            <span>/</span>
            <span>用户中心</span>
            <span>/</span>
            <span>会员卡</span>
          </div>
          <div className={styles.box_card_top_b}>
            <span className={styles.spn}>会员卡列表</span>
          </div>
        </div>
        <div className={styles.box_card_con}>
          <div className={styles.box_card_con_int}>
            <label for="name" title="姓名">
              姓名:
            </label>
            <Input placeholder="请输入" className={styles.ant_input} />
            <label for="name" title="姓名">
              手机号:
            </label>
            <Input placeholder="请输入" className={styles.ant_input} />
          </div>
          <div className={styles.box_card_con_but}>
            <Button type="primary" className={styles.box_card_con_but_b}>
              查询
            </Button>
            <Button>重置</Button>
          </div>
          <Table columns={columns} dataSource={data} />
        </div>
        <div></div>
      </div>
    );
  }
}
export default componentName;
