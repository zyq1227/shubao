import {
  Button,
  Card,
  Col,
  Form,
  Icon,
  Input,
  Row,
  Select,
  Table
} from 'antd';
import React, { Component, Fragment } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { NavLink } from 'react-router-dom'
import styles from './style.less';
import data from './mock'

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
        dataIndex: 'income',
        key: 'income',
        // filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        // filteredValue: filteredInfo.income || null,
        // onFilter: (value, record) => record.income.includes(value),
        sorter: (a, b) => a.income.length - b.income.length,
        sortOrder: sortedInfo.columnKey === 'income' && sortedInfo.order,
      },
      {
        title: '会员卡收入',
        dataIndex: 'vip',
        key: 'vip',
        sorter: (a, b) => a.vip - b.vip,
        sortOrder: sortedInfo.columnKey === 'vip' && sortedInfo.order,
      },
      {
        title: '已经提现',
        dataIndex: 'already',
        key: 'already',
        // filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        // filteredValue: filteredInfo.already || null,
        // onFilter: (value, record) => record.already.includes(value),
        sorter: (a, b) => a.already.length - b.already.length,
        sortOrder: sortedInfo.columnKey === 'already' && sortedInfo.order,
      },
      {
        title: '未提现',
        dataIndex: 'not',
        key: 'not',
        // filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        // filteredValue: filteredInfo.not || null,
        // onFilter: (value, record) => record.not.includes(value),
        sorter: (a, b) => a.not.length - b.not.length,
        sortOrder: sortedInfo.columnKey === 'not' && sortedInfo.order,
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => (
          <span>
            <NavLink to="/finance/partner/look">查看</NavLink>
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
