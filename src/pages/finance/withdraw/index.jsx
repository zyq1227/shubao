import {
  Badge,
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Dropdown,
  Form,
  Icon,
  Input,
  InputNumber,
  Menu,
  Row,
  Select,
  Table,
  message,
} from 'antd';
import React, { Component, Fragment } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import styles from './style.less';
import data from './data.json';

class Partner extends Component {
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleFormReset = () => {
    this.props.form.resetFields();
  };

  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '合伙人编码',
        dataIndex: 'code',
        key: 'code',
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '总收入',
        dataIndex: 'income ',
        key: 'income ',
        // filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: '会员卡收入',
        dataIndex: 'vip',
        key: 'vip',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      },
      {
        title: '已经提现',
        dataIndex: 'already',
        key: 'already',
        // filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      },
      {
        title: '未提现',
        dataIndex: 'not',
        key: 'not',
        // filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => (
          <span>
            <a href="#">查看</a>
            <br />
            <a href="#">编辑</a>
          </span>
        ),
      },
    ];
    return (
      <PageHeaderWrapper>
        <Card bordered={false}>
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>
              <Form onSubmit={this.handleSearch} layout="inline">
                <Row
                  gutter={{
                    md: 8,
                    lg: 24,
                    xl: 48,
                  }}
                >
                  <Col md={8} sm={24}>
                    <Form.Item label="姓名:">
                      {getFieldDecorator('name')(<Input placeholder="请输入" />)}
                    </Form.Item>
                  </Col>
                  <Col md={8} sm={24}>
                    <Form.Item label="手机号:">
                      {getFieldDecorator('name')(<Input placeholder="请输入" />)}
                    </Form.Item>
                  </Col>
                  <Col md={8} sm={24}>
                    <Form.Item label="合伙人编号:">
                      {getFieldDecorator('name')(<Input placeholder="请输入" />)}
                    </Form.Item>
                  </Col>
                  <Col md={8} sm={24}>
                    <Form.Item label="所在地:">
                      {getFieldDecorator('status')(
                        <Select
                          placeholder="请选择"
                          style={{
                            width: '100%',
                          }}
                        >
                          <Option value="0">关闭</Option>
                          <Option value="1">运行中</Option>
                        </Select>,
                      )}
                    </Form.Item>
                  </Col>
                  <Col md={8} sm={24}>
                    <span style={{ display: 'block', marginBottom: '24px', whiteSpace: 'nowrap' }}>
                      <Button type="primary" htmlType="submit">
                        查询
                      </Button>
                      <Button
                        style={{
                          marginLeft: 8,
                        }}
                        onClick={this.handleFormReset}
                      >
                        重置
                      </Button>
                    </span>
                  </Col>
                </Row>
              </Form>
            </div>

            <Table columns={columns} dataSource={data} onChange={this.handleChange} />
          </div>
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default Form.create()(Partner);
