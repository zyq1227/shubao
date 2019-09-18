import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Form, Icon, Input, Button, Table, Divider, Select } from 'antd';
import axios from 'axios';
import mock from './mock/index';
import styles from './index.less';

const { Option } = Select;

class Support extends Component {
  state = {
    form: {
      name: '',
      number: '',
      code: '',
      address: '',
    },
    data: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  // 重置
  restForm = () => {
    this.props.form.resetFields();
  };

  // 新建
  newForm = () => {
    this.props.history.push('/product/detail');
  };

  sayHandle(text) {
    console.log('test----', text);
  }

  deleteFn(record) {
    console.log('record----', record);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 2 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 10 },
        sm: { span: 16 },
      },
    };

    const columns = [
      {
        title: '编码',
        dataIndex: 'code',
        key: 'code',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },

      {
        title: '手机号',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: '所在地',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: '商品数量',
        dataIndex: 'count',
        key: 'count',
      },
      {
        title: '总收入',
        dataIndex: 'total',
        key: 'total',
      },
      {
        title: '总分成',
        dataIndex: 'fen',
        key: 'fen',
      },

      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={this.sayHandle.bind(this, text)}>查看</a>
            <Divider type="vertical" />
            <a>编辑</a>
            <Divider type="vertical" />
            <a onClick={this.deleteFn.bind(this, record)}>删除</a>
          </span>
        ),
      },
    ];

    const { data } = this.state;

    return (
      <PageHeaderWrapper>
        <div className={styles.supportPage}>
          <div className={styles.inps}>
            <div className={styles.inpsContent}>
              <Form
                layout="inline"
                {...formItemLayout}
                onSubmit={this.handleSubmit}
                className={styles.form}
              >
                <Form.Item label="姓名" className={styles.formItem}>
                  {getFieldDecorator('name', {
                    rules: [{ message: 'Please input your name!' }],
                  })(<Input placeholder="请输入" />)}
                </Form.Item>
                <Form.Item label="手机号" className={styles.formItem}>
                  {getFieldDecorator('number', {
                    rules: [
                      {
                        message: 'The input is not valid number!',
                      },
                    ],
                  })(<Input placeholder="请输入" />)}
                </Form.Item>
                <Form.Item label="编号" className={styles.formItem}>
                  {getFieldDecorator('code', {
                    rules: [
                      {
                        message: 'The input is not valid code!',
                      },
                    ],
                  })(<Input placeholder="请输入" />)}
                </Form.Item>
                <Form.Item label="所在地" className={styles.formItem}>
                  <Select showSearch style={{ width: 245 }} placeholder="请选择">
                    <Option value="jack">关闭</Option>
                    <Option value="lucy">运行中</Option>
                  </Select>
                </Form.Item>
                <Form.Item className={styles.formBtn}>
                  <Button type="primary" htmlType="submit" className={styles.btnSearch}>
                    查询
                  </Button>
                  <Button type="block" onClick={this.restForm.bind(this)}>
                    重置
                  </Button>
                  <Button type="primary" icon="plus" onClick={this.newForm.bind(this)}>
                    新建
                  </Button>
                </Form.Item>
              </Form>
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </PageHeaderWrapper>
    );
  }

  componentDidMount() {
    axios.get('/api/proctList').then(res => {
      const data = res.data.list.map((item, index) => ({
        key: index,
        address: item.address,
        code: item.code,
        count: item.count,
        fen: item.fen,
        id: item.id,
        name: item.name,
        number: item.number,
        total: item.total,
      }));
      this.setState({
        data,
      });
    });
  }
}

export default Form.create()(Support);
