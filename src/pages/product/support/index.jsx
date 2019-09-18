import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { formatMessage } from 'umi-plugin-react/locale';
import { Form, Icon, Input, Button, Table, Divider } from 'antd';
import mock from './mock/index';
import axios from 'axios';
import styles from './index.less';

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

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

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
            <a>查看</a>
            <Divider type="vertical" />
            <a>编辑</a>
            <Divider type="vertical" />
            <a>删除</a>
          </span>
        ),
      },
    ];

    let { data } = this.state;

    return (
      <PageHeaderWrapper
        content={formatMessage({
          id: 'editor-mind.description',
          defaultMessage: 'description',
        })}
      >
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
                    rules: [
                      {
                        type: 'name',
                        message: 'The input is not valid name!',
                      },
                    ],
                  })(<Input placeholder="请输入" />)}
                </Form.Item>
                <Form.Item label="手机号" className={styles.formItem}>
                  {getFieldDecorator('number', {
                    rules: [
                      {
                        type: 'number',
                        message: 'The input is not valid number!',
                      },
                    ],
                  })(<Input placeholder="请输入" />)}
                </Form.Item>
                <Form.Item label="编号" className={styles.formItem}>
                  {getFieldDecorator('code', {
                    rules: [
                      {
                        type: 'code',
                        message: 'The input is not valid code!',
                      },
                    ],
                  })(<Input placeholder="请输入" />)}
                </Form.Item>
                <Form.Item label="所在地" className={styles.formItem}>
                  {getFieldDecorator('address', {
                    rules: [
                      {
                        type: 'address',
                        message: 'The input is not valid address!',
                      },
                    ],
                  })(<Input placeholder="请输入" />)}
                </Form.Item>
                <Form.Item className={styles.formBtn}>
                  <Button type="primary" htmlType="submit" className={styles.btnSearch}>
                    查询
                  </Button>
                  <Button type="block">重置</Button>
                  <Button type="primary" icon="plus">
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
      console.log('res----', res.data.list);
      this.setState({
        data: res.data.list,
      });
    });
  }
}

export default Form.create({ name: 'horizontal_login' })(Support);
