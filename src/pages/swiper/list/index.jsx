import React, { Component } from 'react';
import styles from './list.less';
import { Table } from 'antd';
import list from './list.json';
export default class List extends Component {
  state = {
    columns: [
      {
        title: '图片编号',
        dataIndex: 'num',
        key: 'num',
        sorter: (a, b) => a.num - b.num,
        render: (text, row, index) => {
          if (index > -1) {
            return <a>{text}</a>;
          }
        },
      },
      {
        title: '链接地址',
        dataIndex: 'address',
        defaultSortOrder: 'descend',
        key: 'address',
        sorter: (a, b) => a.address - b.address,
      },
      {
        title: '操作',
        dataIndex: 'domain',
        key: 'domain',
        render: () => (
          <span>
            <a href="">查看</a>
          </span>
        ),
      },
    ],
    newdata: [],
  };
  componentDidMount() {
    list.map(item => {
      this.setState({
        newdata: list,
      });
    });
  }

  render() {
    const { columns, newdata } = this.state;
    return (
      <div className={styles.listBox}>
        <div className={styles.listTop}>
          <div className={styles.brod}>
            <span>首页</span>
            <span>/</span>
            <span>轮播图列表</span>
          </div>
          <span className={styles.last}>
            <div className={styles.title}>
              <h4>轮播图列表</h4>
            </div>
          </span>
        </div>
        <div className={styles.listBottom}>
          <Table
            columns={columns}
            dataSource={newdata}
            rowKey={record => {
              return record.id;
            }}
          />
        </div>
      </div>
    );
  }
}
