import * as React from 'react';
import { Input, Select, Button, Table } from 'antd';
import styles from './index.less';
import data from './mock';
const { Option } = Select;

class WithDraw extends React.Component {
  state = {
    columns: [
      {
        title: '提现编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '提现人',
        dataIndex: 'name',
        ket: 'name',
      },
      {
        title: '金额',
        dataIndex: 'number',
        ket: 'number',
      },
      {
        title: '提现订单',
        dataIndex: 'order',
        ket: 'order',
      },
      {
        title: '提现时间',
        dataIndex: 'time',
        key: 'time' + 'order',
      },
      {
        title: '备注',
        dataIndex: 'beizhu',
        key: 'beizhu',
      },
      {
        title: '状态',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '操作',
        dataIndex: 'address',
        render: () => (
          <span>
            <a href="#">查看</a> <br />
            <a href="#">编辑</a>
          </span>
        ),
      },
    ],
  };
  render() {
    let { columns } = this.state;
    return (
      <div className={styles.withdraw}>
        <div className={styles.header}>
          <div className={styles.top}>
            <span>首页&nbsp;/&nbsp;</span>
            <span>财务&nbsp;/&nbsp;</span>
            <span>提现记录</span>
          </div>
          <div className={styles.btm}>
            <h3>提现记录列表</h3>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.topForm}>
            <div className={styles.formItem}>
              <p className={styles.p}>
                <span>姓名 : </span>
                <Input placeholder="请输入" style={{ width: '70%', marginLeft: '5px' }}></Input>
              </p>
              <p className={styles.p}>
                <span>手机号 : </span>
                <Input placeholder="请输入" style={{ width: '70%', marginLeft: '5px' }}></Input>
              </p>
              <p className={styles.p}>
                <span>提现编号 : </span>
                <Input placeholder="请输入" style={{ width: '70%', marginLeft: '5px' }}></Input>
              </p>
            </div>
            <div className={styles.formItem}>
              <span>所在地 : </span>
              <Select
                showSearch
                style={{ width: '25%', marginLeft: '5px' }}
                placeholder="请选择"
                optionFilterProp="children"
              >
                <Option value="关闭">关闭</Option>
                <Option value="运行中">运行中</Option>
              </Select>
            </div>
            <div className={styles.formItem}>
              <Button style={{ marginRight: '8px' }} type="primary">
                查询
              </Button>
              <Button>重置</Button>
            </div>
          </div>
          <Table columns={columns} dataSource={data.cartList} />
        </div>
      </div>
    );
  }
}

export default WithDraw;
