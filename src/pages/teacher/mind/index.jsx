import GGEditor from 'gg-editor';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { Component } from 'react';
import { Table, Input, Button } from 'antd';
import styles from './index.less';

//引入数据
import data from './data/data.json';
GGEditor.setTrackable(false);

class Teacher extends Component {
  check = e => {
    console.log(e);
  };
  compile = e => {
    console.log(e);
  };
  render() {
    const columns = [
      {
        title: '老师编码',
        dataIndex: 'num',
      },
      {
        title: '姓名',
        dataIndex: 'name',
      },
      {
        title: '总收入',
        dataIndex: 'money',
      },
      {
        title: '已经提现',
        sorter: true,
        dataIndex: 'deposit',
      },
      {
        title: '未提现',
        sorter: true,
        dataIndex: 'noDeposit',
      },
      {
        title: '操作',
        dataIndex: 'email',
        render: text => (
          <div className={styles.span}>
            <span>查看</span>
            <span>编辑</span>
          </div>
        ),
      },
    ];

    return (
      <PageHeaderWrapper>
        <div className={styles.search}>
          <div className={styles.input}>
            <div className={styles.item}>
              姓名:
              <Input placeholder="请输入" />
            </div>
            <div className={styles.item}>
              手机号:
              <Input placeholder="请输入" />
            </div>
            <div className={styles.item}>
              老师编码:
              <Input placeholder="请输入" />
            </div>
          </div>
          <div className={styles.button}>
            <Button>查询</Button>
            <Button className={styles.Buttontwo}>重置</Button>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            rowKey={record => {
              return record.key;
            }}
          />
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Teacher;
