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
import data from './Mock';
import styles from './index.less';
class Supplier extends Component {
  componentDidMount() {
    console.log(this.props);
  }
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

  examine = () => {
    this.props.history.push('/finance/support/supportDetial');
  };
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '供应商',
        dataIndex: 'title',
        key: 'title',
        // filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.title || null,
        onFilter: (value, record) => record.title.includes(value),
        sorter: (a, b) => a.title.length - b.title.length,
        sortOrder: sortedInfo.columnKey === 'title' && sortedInfo.order,
      },
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        sorter: (a, b) => a.name - b.name,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
      },
      {
        title: '收入',
        dataIndex: 'income',
        key: 'income',
        // filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        filteredValue: filteredInfo.income || null,
        onFilter: (value, record) => record.income.includes(value),
        sorter: (a, b) => a.income.length - b.income.length,
        sortOrder: sortedInfo.columnKey === 'income' && sortedInfo.order,
      },
      {
        title: '已提现',
        dataIndex: 'withdraw',
        key: 'withdraw',
      },
      {
        title: '未提现',
        dataIndex: 'noWithdraw',
        key: 'noWithdraw',
      },
      {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => (
          <span>
            <a
              onClick={() => {
                this.examine();
              }}
            >
              查看
            </a>
            <br />
            <a>编辑</a>
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
export default Form.create()(Supplier);
