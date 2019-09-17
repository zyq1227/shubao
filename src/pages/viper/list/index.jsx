import React, { Component } from 'react';
import styles from './index.less';
import { Input, Select, Table, Button } from 'antd';
const { Option } = Select;

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edr ${i}`,
    age: 32,
    address: `Lo no. ${i}`,
  });
}

export default class componentName extends Component {
  render() {
    return (
      <div>
        <div className={styles.userlist}>
          <div className={styles.userhome}>
            <span>首页</span>/<span>用户中心</span>/<span>用户列表</span>
          </div>
          <div className={styles.userh1}>
            <h1>用户列表</h1>
          </div>
        </div>
        <div className={styles.usercontainer}>
          <div className={styles.pbox}>
            <p>
              用户名:
              <Input className={styles.defaultinp} placeholder=" 请输入" />
            </p>
            <p>
              手机号:
              <Input className={styles.defaultinp} placeholder=" 请输入" />
            </p>
            <p>
              用户编码:
              <Input className={styles.defaultinp} placeholder=" 请输入" />
            </p>
            <p>
              所在地:{' '}
              <Select
                showSearch
                style={{ width: 300, height: 50 }}
                placeholder="Select a person"
                optionFilterProp="children"
                // onChange={onChange}
                // onFocus={onFocus}
                // onBlur={onBlur}
                // onSearch={onSearch}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </p>
            <p>
              用户类型:{' '}
              <Select
                showSearch
                style={{ width: 300 }}
                placeholder="Select a person"
                optionFilterProp="children"
                // onChange={this.onChange.bind(this)}
                // onFocus={this.onFocus.bind(this)}
                // onBlur={this.onBlur.bind(this)}
                // onSearch={this.onSearch.bind(this)}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </p>
            <div className={styles.userbtn}>
              <Button type="primary">查询</Button>
              <Button>重置</Button>
            </div>
          </div>
          <Table style={{ width: '96%', marginLeft: '2%' }} columns={columns} dataSource={data} />,
        </div>
      </div>
    );
  }
}

const columns = [
  {
    title: '用户编码',
    dataIndex: 'address',
    key: '1',
    width: 100,
  },
  {
    title: '用户名',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: '手机号',
    dataIndex: 'address',
    key: '3',
    width: 150,
    sortDirections: ['descend', 'ascend'],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
  },
  {
    title: '注册时间',
    dataIndex: 'address',
    key: '4',
    width: 150,
    sortDirections: ['descend', 'ascend'],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
  },
  {
    title: '来源',
    dataIndex: 'address',
    key: '5',
    width: 150,
    sortDirections: ['descend', 'ascend'],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length,
  },
  {
    title: '用户类型',
    dataIndex: 'address',
    key: '6',
    width: 150,
  },
  {
    title: '操作',
    key: 'operation',
    width: 100,
    render: () => <a>查看</a>,
    filters: [
      {
        text: '会员',
        value: '会员',
      },
      {
        text: '非会员',
        value: '非会员',
      },
    ],
  },
];
