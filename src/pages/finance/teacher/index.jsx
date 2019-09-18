import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { Component } from 'react';
import { Table, Input, Button } from 'antd';
import styles from './style.less';

//引入数据
import datas from './data/data.json';

class Teacher extends Component {
  state = {
    data: datas,
    name: '',
    iphone: '',
    serial: '',
  };
  setMessage = e => {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  //搜索用户
  searchUser = () => {
    let { name, iphone, serial, data } = this.state;
    let newData = data.filter(item => {
      let flag = true;
      if (name) {
        flag = flag && name === item.name;
      }

      if (iphone) {
        flag = flag && iphone === item.iphone;
      }

      if (serial) {
        flag = flag && flag === item.serial;
      }
      return flag;
    });
    this.setState({ data: newData });
  };
  //重置
  reset = () => {
    this.setState({ data: datas });
  };
  //查看页
  check = $info => {
    //this.props.history.push({path:"/teacher/detail",query:{info:$info}})
    console.log($info);
  };
  //编辑页
  compile = $info => {
    console.log($info);
  };

  render() {
    let { data, name, serial, iphone } = this.state;
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
        render: (text, record) => {
          return (
            <div className={styles.span}>
              <span
                onClick={() => {
                  this.check(record);
                }}
              >
                查看
              </span>
              <span
                onClick={() => {
                  this.compile(record);
                }}
              >
                编辑
              </span>
            </div>
          );
        },
      },
    ];
    //配置显示的条数
    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      pageSize: 10,
    };

    return (
      <PageHeaderWrapper>
        <div className={styles.search}>
          <div className={styles.input}>
            <div className={styles.item}>
              姓名:
              <Input placeholder="请输入" value={name} name="name" onChange={this.setMessage} />
            </div>
            <div className={styles.item}>
              手机号:
              <Input placeholder="请输入" value={iphone} name="iphone" onChange={this.setMessage} />
            </div>
            <div className={styles.item}>
              老师编码:
              <Input placeholder="请输入" value={serial} name="serial" onChange={this.setMessage} />
            </div>
          </div>
          <div className={styles.button}>
            <Button onClick={this.searchUser}>查询</Button>
            <Button className={styles.Buttontwo} onClick={this.reset}>
              重置
            </Button>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            rowKey={record => {
              return record.key;
            }}
            pagination={paginationProps}
          />
        </div>
      </PageHeaderWrapper>
    );
  }
}

export default Teacher;
