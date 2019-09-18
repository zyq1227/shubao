import * as React from 'react';
import { Input, Select, Button, Table, Divider } from 'antd';
import styles from './index.less';
import data from './mock';
const { Option } = Select;

class WithDraw extends React.Component {
  state = {
    columns: [
      {
        title: '申请编号',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: '类别',
        dataIndex: 'type',
        key: 'type',
      },
      {
        title: '金额',
        dataIndex: 'moneys',
        key: 'moneys',
      },
      {
        title: '详细订单',
        dataIndex: 'details',
        key: 'details',
      },
      {
        title: '申请时间',
        dataIndex: 'time',
        key: 'time',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>审核通过 </a>
            <br />
            <a>未通过</a>
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
            <span>提现申请</span>
          </div>
          <div className={styles.btm}>
            <h3>提现申请列表</h3>
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
                <Input placeholder="请输入" style={{ width: '60%', marginLeft: '5px' }}></Input>
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
