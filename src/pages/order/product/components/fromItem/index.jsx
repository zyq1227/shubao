import React, { Component } from 'react';
import { Form, Input, Table, Col, Row, Select, Button } from 'antd';
import styles from './index.less';

const { Option } = Select;

class ClassTable extends Component {
  state = {
    labelName: ['姓名', '手机号', '课程编码'],
    name: ['username', 'tel', 'code'],
  };
  getFields() {
    let { labelName, name } = this.state;
    const count = labelName;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < labelName.length; i++) {
      children.push(
        <Col span={8} key={i}>
          <Form.Item label={labelName[i]}>
            {getFieldDecorator(`${name[i]}`, {
              rules: [
                {
                  required: true,
                  message: `Please input your ${name[i]}!`,
                },
              ],
            })(<Input placeholder="请输入" />)}
          </Form.Item>
        </Col>,
      );
    }
    return children;
  }
  handleCurrencyChange = () => {};
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.ClassTableInput}>
        <Form className="ant-advanced-search-form">
          <Row gutter={24}>{this.getFields()}</Row>
          <Form.Item label="所在地">
            <Select
              placeholder="请选择"
              style={{ width: '15%' }}
              onChange={this.handleCurrencyChange}
            >
              <Option value="close">关闭</Option>
              <Option value="open">运行中</Option>
            </Select>
          </Form.Item>
          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
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
              <Button
                type="primary"
                style={{
                  marginLeft: 8,
                }}
                onClick={this.handleFormReset}
              >
                +新建
              </Button>
            </span>
          </Col>
        </Form>
      </div>
    );
  }
}
const WrappedRegistrationForm = Form.create({ name: 'register' });

export default WrappedRegistrationForm(ClassTable);
